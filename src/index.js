import axios from 'axios';
import fs from 'mz/fs';
import url from 'url';
import path from 'path';


const pathActions = {
  undefined: path.resolve,
  '--output': path.join,
};

const getAction = option => pathActions[option];

const urlToFilename = (uri) => {
  const regex = /\W/g;
  const { protocol } = url.parse(uri);
  const start = `${protocol}//`.length;
  const fileName = uri.substr(start).replace(regex, '-');
  return `${fileName}.html`;
};

const pageLoad = (uri, option, destPath = '') =>
  axios.get(uri)
    .then(({ data }) => {
      const fileName = urlToFilename(uri);
      const pathAction = getAction(option);
      const fullPath = pathAction(destPath, fileName);
      fs.writeFile(fullPath, data, 'utf8');
    })
    .catch(e => console.log(e));

export default pageLoad;
