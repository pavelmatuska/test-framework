import { test } from '@playwright/test';
import testData  from './testData';
import { StringPattern } from '../../src/dataGenerator/impl/string/stringPattern';
import { log } from 'console';

interface testDataFormat{
    name: string,
    surname: string
}

test('Read data using dataLoader', async ({ page }) => {

     log('Full data object: ') 
     log(new testData().get())

     log('New full data object: ')
     log(new testData().get())

     log('Single field from new object: ')
     log(new testData().get()['name'])

     const a: testDataFormat = <testDataFormat>new testData().get()
     log('Full typed object: ')
     log(a)

     log('Field from typed object: ' + a.name)
     log('Field from same typed object: ' + a.surname)


});
