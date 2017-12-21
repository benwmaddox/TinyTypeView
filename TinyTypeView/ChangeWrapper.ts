
export class ChangeWrapper<T> 
{
    skipped: string[];
    public wrapped : T;
    /**
     *
     */
    constructor(wrappedItem : T ,  callback: (item: T, propName: string, value: any) => void, skippedElements: string[]) {
        this.wrapped = wrappedItem;
        this.skipped = skippedElements;
        for (var prop in this.wrapped){
            if (skippedElements.indexOf(prop) !== -1){
                continue;
            }
            // if (Array.isArray(this.wrapped) && typeof(this.wrapped[prop]) != "function")
            // {                
            //     (<any>this.wrapped)["___"+prop] = this.wrapped[prop];
            //     delete this.wrapped[prop];
            //     this.wrapFunction(this.wrapped, prop, callback);                
            // }
            // else 
            if (typeof(this.wrapped[prop]) != "function" && (prop.length < 2 || prop.substr(0,2) != "__")) {
                this.wrapProperty(this.wrapped, prop, callback);
            }
        }
    }
    
    public wrapProperty = (instance : any, propName : string,  callback: (item: T, propName: string, value: any) => void) => 
    {
        if (this.skipped.indexOf(propName) !== -1){
            return;
        }
        // var arrayChangeFunctions = ['push', 'pop', 'splice'];
        if (Array.isArray(instance[propName])){
            for (var key in instance[propName]){
                // this.wrapProperty(instance[propName], key, callback);
                if (typeof instance[propName][key] === "object" && instance[propName][key] !== null){
                    //TODO: fix this, should be passing in properties for the new object
                    var wrapper = new ChangeWrapper<any>(instance[propName][key], callback, this.skipped);
                    // this.wrapProperty(instance[propName], key, callback);
                }
            }
            var arrayProperty = <Array<any>> instance[propName];
            //TODO: check to see if this array has its own properties, instead of prototype. Don't apply wrapper twice

            var originalPush = arrayProperty.push;
            var originalSkipped = this.skipped;
            arrayProperty.push = function(){                               
                callback(instance, propName, arguments[0]);
                var result = originalPush.apply(this, arguments);    
                var wrapper = new ChangeWrapper<any>(arguments[0], callback, originalSkipped);       
                return result;
            }
            var originalPop = arrayProperty.pop;
            arrayProperty.pop = function(){                                
                callback(instance, propName, arrayProperty);
                var result = originalPop.apply(this, arguments);    
                return result;
            }
            var originalSplice = arrayProperty.splice;
            arrayProperty.splice = function(){                    
                callback(instance, propName, arrayProperty);
                var result = originalSplice.apply(this, arguments);
                return result;
            }
            var originalSlice = arrayProperty.slice;
            arrayProperty.slice = function(){                 
                callback(instance, propName, arrayProperty); 
                var result = originalSlice.apply(this, arguments);  
                return result;
            }
            var originalShift = arrayProperty.shift;
            arrayProperty.shift = function(){                  
                callback(instance, propName, arrayProperty);
                var result = originalShift.apply(this, arguments);  
                return result;
            }
            var originalUnshift = arrayProperty.unshift;
            arrayProperty.unshift = function(){                 
                callback(instance, propName, arrayProperty);
                var result = originalUnshift.apply(this, arguments);   
                return result;
            }
        }        
        // else {
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
        // }
    }
}
export class ArrayWrapper<T>{

}