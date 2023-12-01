export abstract class CommonTestData{

    get(): object{
        return this.getData()
    }

    protected abstract getData(): object

}