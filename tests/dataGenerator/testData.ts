import { DataFactory } from "../../src/dataGenerator/factory/dataFactory"

let a: string = "original string"

export default {
    data: [
        {
            name: DataFactory.string().generate()
        },
        {
            name: "static text"
        }
    ],
    reset: function reset(){ 
        this.data[0].name = DataFactory.string().generate()
    }
}







