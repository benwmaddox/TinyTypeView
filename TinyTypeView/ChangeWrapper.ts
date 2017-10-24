
export class ChangeWrapper<T> 
{
    public wrapped : T;
    /**
     *
     */
    constructor(wrappedItem : T ,  callback: (item: T, propName: string, value: any) => void) {
        this.wrapped = wrappedItem;
        for (var prop in this.wrapped){
            if (typeof(this.wrapped[prop]) != "function") {
                (<any>this.wrapped)["___"+prop] = this.wrapped[prop];
                delete this.wrapped[prop];
                this.wrapProperty(this.wrapped, prop, callback);
            }
        }
    }
    public wrapProperty = (instance : any, propName : string,  callback: (item: T, propName: string, value: any) => void) => 
    {
        Object.defineProperty(instance, propName, {
            get: function () {
                return instance["___"+propName];
            },
            set: function (value) {
                callback(instance, propName, value);
                instance["___"+propName] = value;
            },
            enumerable: true,
            configurable: true
        });
    }
}