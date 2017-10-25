
export class ChangeWrapper<T> 
{
    public wrapped : T;
    /**
     *
     */
    constructor(wrappedItem : T ,  callback: (item: T, propName: string, value: any) => void) {
        this.wrapped = wrappedItem;
        for (var prop in this.wrapped){
            // if (Array.isArray(this.wrapped) && typeof(this.wrapped[prop]) != "function")
            // {                
            //     (<any>this.wrapped)["___"+prop] = this.wrapped[prop];
            //     delete this.wrapped[prop];
            //     this.wrapFunction(this.wrapped, prop, callback);                
            // }
            // else 
            if (typeof(this.wrapped[prop]) != "function") {
                this.wrapProperty(this.wrapped, prop, callback);
            }
        }
    }
    
    public wrapProperty = (instance : any, propName : string,  callback: (item: T, propName: string, value: any) => void) => 
    {
        var arrayChangeFunctions = ['push', 'pop', 'splice'];
        if (Array.isArray(instance[propName])){
            for (var key in instance[propName]){
                // this.wrapProperty(instance[propName], key, callback);
                if (typeof instance[propName][key] === "object" && instance[propName][key] !== null){
                    //TODO: fix this, should be passing in properties for the new object
                    var wrapper = new ChangeWrapper<any>(instance[propName][key], callback);
                    // this.wrapProperty(instance[propName], key, callback);
                }
                // else if (typeof instance[propName][key] === "function"){
                //     var existingFunction = instance[propName][key];
                //     delete instance[propName][key];
                //     instance[propName][key] = function(a:any, b:any, c:any, d:any, e:any, f:any, g:any, h:any){
                //         existingFunction(a,b,c,d,e,f,g,h);
                //         callback(instance[propName], key, {a: a, b: b, c:c, d:d, e: e, f: f, g: g, h: h});
                //     }
                // }
            }
            var arrayProperty = <Array<any>> instance[propName];
            var originalPush = arrayProperty.push;
            arrayProperty.push = function(){
                var result = originalPush.apply(this, arguments);                    
                callback(instance, propName, arrayProperty);
                return result;
            }
            var originalPop = arrayProperty.pop;
            arrayProperty.pop = function(){
                var result = originalPop.apply(this, arguments);                    
                callback(instance, propName, arrayProperty);
                return result;
            }
            var originalSplice = arrayProperty.splice;
            arrayProperty.splice = function(){
                var result = originalSplice.apply(this, arguments);                    
                callback(instance, propName, arrayProperty);
                return result;
            }
            // var arrayProperty = instance[propName];
            // for (var i = 0; i < arrayChangeFunctions.length; i++){
            //     var functionKey = arrayChangeFunctions[i];
            //     var existingFunction = <Function>arrayProperty[functionKey];
            //     arrayProperty[functionKey] = function(){
            //         var result = existingFunction.apply(this, arguments);                    
            //         callback(arrayProperty, functionKey, arrayProperty);
            //         return result;
            //     }
            // }
        }        
        else {
            (<any>instance)["___"+propName] = instance[propName];
            delete instance[propName];
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
    // public wrapFunction = (instance : any, propName : string,  callback: (item: T, propName: string, value: any) => void) => 
    // {
    //     Object.defineProperty(instance, propName, {
    //         get: function () {
    //             return instance["___"+propName];
    //         },
    //         set: function (value) {
    //             callback(instance, propName, value);
    //             instance["___"+propName] = value;
    //         },
    //         enumerable: true,
    //         configurable: true
    //     });
    // }
}
export class ArrayWrapper<T>{

}