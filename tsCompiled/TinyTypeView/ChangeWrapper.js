var ChangeWrapper = (function () {
    function ChangeWrapper(wrappedItem, callback, skippedElements) {
        var _this = this;
        this.wrapProperty = function (instance, propName, callback) {
            if (_this.skipped.indexOf(propName) !== -1) {
                return;
            }
            var arrayChangeFunctions = ['push', 'pop', 'splice'];
            if (Array.isArray(instance[propName])) {
                for (var key in instance[propName]) {
                    if (typeof instance[propName][key] === "object" && instance[propName][key] !== null) {
                        var wrapper = new ChangeWrapper(instance[propName][key], callback, _this.skipped);
                    }
                }
                var arrayProperty = instance[propName];
                var originalPush = arrayProperty.push;
                arrayProperty.push = function () {
                    var result = originalPush.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
                var originalPop = arrayProperty.pop;
                arrayProperty.pop = function () {
                    var result = originalPop.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
                var originalSplice = arrayProperty.splice;
                arrayProperty.splice = function () {
                    var result = originalSplice.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
                var originalSlice = arrayProperty.slice;
                arrayProperty.slice = function () {
                    var result = originalSlice.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
                var originalShift = arrayProperty.shift;
                arrayProperty.shift = function () {
                    var result = originalShift.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
                var originalUnshift = arrayProperty.unshift;
                arrayProperty.unshift = function () {
                    var result = originalUnshift.apply(this, arguments);
                    callback(instance, propName, arrayProperty);
                    return result;
                };
            }
            instance["___" + propName] = instance[propName];
            delete instance[propName];
            Object.defineProperty(instance, propName, {
                get: function () {
                    return instance["___" + propName];
                },
                set: function (value) {
                    callback(instance, propName, value);
                    instance["___" + propName] = value;
                },
                enumerable: true,
                configurable: true
            });
        };
        this.wrapped = wrappedItem;
        this.skipped = skippedElements;
        for (var prop in this.wrapped) {
            if (skippedElements.indexOf(prop) !== -1) {
                continue;
            }
            if (typeof (this.wrapped[prop]) != "function") {
                this.wrapProperty(this.wrapped, prop, callback);
            }
        }
    }
    return ChangeWrapper;
}());
export { ChangeWrapper };
var ArrayWrapper = (function () {
    function ArrayWrapper() {
    }
    return ArrayWrapper;
}());
export { ArrayWrapper };
