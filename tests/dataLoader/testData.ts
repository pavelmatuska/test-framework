import { DataFactory } from "../../src/dataGenerator/factory/dataFactory"
import { CommonTestData } from "../../src/testData/commonTestData"

export default class ExampleDataForTests extends CommonTestData {

    protected getData(): object{
        return {
            name: DataFactory.string().generate(),
            surname: DataFactory.string().setLength(10).generate(),
        }

    }

}








