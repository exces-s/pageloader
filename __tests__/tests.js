import axios from 'axios';
import nock from 'nock';
import httpAdapter from 'axios/lib/adapters/http';
import fs from 'mz/fs';
import pageLoad from '../src';
import half from '../src/half';


const testHost = 'http://test.com';
const testUrl = 'http://test.com/test';
const testData = 'test data';
const destPath = '__tests__/__fixtures__';
const pathToResultFile = '__tests__/__fixtures__/test-com-test.html';


axios.defaults.adapter = httpAdapter;

nock(testHost)
  .persist()
  .get('/test')
  .reply(200, testData);


test('check for correct jest work', () => {
  expect(half(6)).toBe(3);
});

test('pageLoader test with --output', async () => {
  expect.assertions(1);
  await fs.writeFile(pathToResultFile, '', 'utf8');
  await pageLoad(testUrl, '--output', destPath);
  const expected = await fs.readFile(pathToResultFile, 'utf8');
  expect(expected).toBe(testData);
});

