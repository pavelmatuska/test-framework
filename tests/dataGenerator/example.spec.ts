import { test } from '@playwright/test';
import testData from './testData';

test('Read data from file', async ({ page }) => {
  
  //Access test data twice, returning the same entry
  console.log(testData.data[0].name)
  console.log(testData.data[0].name)

  //Run reset method defined in test data
  testData.reset()
  console.log(testData.data[0].name)
});
