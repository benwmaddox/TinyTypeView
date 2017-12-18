var ChangeWrapper = (function () {
    function ChangeWrapper(wrappedItem, callback, skippedElements) {
        var _this = this;
        this.wrapProperty = function (instance, propName, callback) {
            if (_this.skipped.indexOf(propName) !== -1) {
                return;
            }
            if (Array.isArray(instance[propName])) {
                for (var key in instance[propName]) {
                    if (typeof instance[propName][key] === "object" && instance[propName][key] !== null) {
                        var wrapper = new ChangeWrapper(instance[propName][key], callback, _this.skipped);
                    }
                }
                var arrayProperty = instance[propName];
                var originalPush = arrayProperty.push;
                var originalSkipped = _this.skipped;
                arrayProperty.push = function () {
                    callback(instance, propName, arguments[0]);
                    var result = originalPush.apply(this, arguments);
                    var wrapper = new ChangeWrapper(arguments[0], callback, originalSkipped);
                    return result;
                };
                var originalPop = arrayProperty.pop;
                arrayProperty.pop = function () {
                    callback(instance, propName, arrayProperty);
                    var result = originalPop.apply(this, arguments);
                    return result;
                };
                var originalSplice = arrayProperty.splice;
                arrayProperty.splice = function () {
                    callback(instance, propName, arrayProperty);
                    var result = originalSplice.apply(this, arguments);
                    return result;
                };
                var originalSlice = arrayProperty.slice;
                arrayProperty.slice = function () {
                    callback(instance, propName, arrayProperty);
                    var result = originalSlice.apply(this, arguments);
                    return result;
                };
                var originalShift = arrayProperty.shift;
                arrayProperty.shift = function () {
                    callback(instance, propName, arrayProperty);
                    var result = originalShift.apply(this, arguments);
                    return result;
                };
                var originalUnshift = arrayProperty.unshift;
                arrayProperty.unshift = function () {
                    callback(instance, propName, arrayProperty);
                    var result = originalUnshift.apply(this, arguments);
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
            if (typeof (this.wrapped[prop]) != "function" && (prop.length < 2 || prop.substr(0, 2) != "__")) {
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
