var component = (function (exports) {
'use strict';

var VirtualElement = (function () {
    function VirtualElement(elementTag, attributes, children) {
        this.elementTag = elementTag;
        this.attributes = attributes;
        this.children = children;
        this.element = null;
    }
    return VirtualElement;
}());

function button(attributes, children) { return new VirtualElement("button", attributes, children); }








function div(attributes, children) { return new VirtualElement("div", attributes, children); }























function li(attributes, children) { return new VirtualElement("li", attributes, children); }






















function span(attributes, children) { return new VirtualElement("span", attributes, children); }













function ul(attributes, children) { return new VirtualElement("ul", attributes, children); }

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

var TinyComponent = (function () {
    function TinyComponent() {
        this.propertyChanged = false;
        this.childChanged = false;
        this.virtualElement = null;
    }
    TinyComponent.prototype.markPropertyChanged = function () {
        this.propertyChanged = true;
        var parent = this.parent;
        while (parent != null && parent.childChanged == false) {
            parent.childChanged = true;
            parent = parent.parent;
        }
    };
    TinyComponent.prototype.renderComponents = function (components) {
        var results = [];
        for (var i = 0; i < components.length; i++) {
            var render = components[i].render();
            if (render instanceof VirtualElement) {
                results.push(render);
            }
            else {
                for (var j = 0; j < render.length; j++) {
                    results.push(render[j]);
                }
            }
        }
        return results;
    };
    TinyComponent.prototype.render = function () {
        if (this.virtualElement === null || this.childChanged || this.propertyChanged) {
            this.virtualElement = this.template();
            this.propertyChanged = false;
            this.childChanged = false;
        }
        return this.virtualElement;
    };
    TinyComponent.prototype.applyReactiveProperties = function () {
        var a$$1 = new ChangeWrapper(this, function (item, propName, value) {
            if (item[propName] !== value) {
                item.markPropertyChanged();
                if (value instanceof TinyComponent) {
                    value.applyReactiveProperties();
                    value.parent = item;
                }
                if (Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        if (value[i] instanceof TinyComponent) {
                            value[i].applyReactiveProperties();
                            value[i].parent = item;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }, ["propertyChanged", "childChanged", "virtualElement", "parent", "beforePropertyChange", "afterPropertyChange"]);
    };
    return TinyComponent;
}());
var TinyRoot = (function () {
    function TinyRoot(component) {
        this.component = component;
        this.component.applyReactiveProperties();
    }
    TinyRoot.prototype.render = function () {
        var rendered = this.component.render();
        if (rendered instanceof VirtualElement) {
            return rendered;
        }
        else {
            return div({}, rendered);
        }
    };
    return TinyRoot;
}());

var DiffRenderer = (function () {
    function DiffRenderer(eventListener) {
        this.lastVirtualElement = null;
        this.eventListener = eventListener;
    }
    DiffRenderer.prototype.Render = function (htmlElement, oldVe, ve, root) {
        if (root === void 0) { root = true; }
        var oldVe = (root && this.lastVirtualElement) ? this.lastVirtualElement : oldVe;
        if (oldVe === ve) {
            return htmlElement;
        }
        if (ve.children) {
            if (typeof (ve.children) == "string") {
                if (htmlElement.childNodes.length == 0) {
                    htmlElement.appendChild(document.createTextNode(ve.children));
                }
                else if (htmlElement.childNodes.length > 0 && htmlElement.lastChild.nodeValue !== ve.children) {
                    htmlElement.removeChild(htmlElement.lastChild);
                    htmlElement.appendChild(document.createTextNode(ve.children));
                }
            }
            else {
                var max = oldVe != null && oldVe.children != null && ve.children.length < oldVe.children.length ? oldVe.children.length : ve.children.length;
                for (var i = 0; i < max; i++) {
                    var element = ve.children.length > i ? ve.children[i] : null;
                    var oldElement = oldVe != null && oldVe.children != null && oldVe.children.length > i ? oldVe.children[i] : null;
                    if (element instanceof VirtualElement) {
                        if (oldElement === null && element) {
                            var $elChild = document.createElement(element.elementTag);
                            element.element = $elChild;
                            htmlElement.appendChild($elChild);
                            this.Render($elChild, null, element, false);
                        }
                        else if (element === null || element === undefined) {
                            var oldVeChild = oldElement;
                            if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if (element.elementTag !== oldElement.elementTag) {
                            var oldVeChild = oldElement;
                            var el = document.createElement(element.elementTag);
                            var $elChild = this.Render(el, oldVeChild, element, false);
                            element.element = $elChild;
                            htmlElement.insertBefore($elChild, oldVeChild.element);
                            if (oldElement !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                                oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                            }
                        }
                        else if (oldElement.element) {
                            var oldVeChild = oldElement;
                            var $elChild = this.Render(oldVeChild.element, oldVeChild, element, false);
                            element.element = $elChild;
                        }
                    }
                    else if (element === null && oldElement !== null) {
                        var oldVeChild = oldElement;
                        if (oldVeChild !== null && oldVeChild.element !== null && oldVeChild.element.parentNode !== null) {
                            oldVeChild.element.parentNode.removeChild(oldVeChild.element);
                        }
                    }
                }
            }
        }
        if (ve.attributes) {
            for (var key in ve.attributes) {
                if (ve.attributes.hasOwnProperty(key)) {
                    var value = ve.attributes[key];
                    var oldValue = oldVe != null ? oldVe.attributes[key] : null;
                    if (oldVe != null && oldValue === value) {
                        continue;
                    }
                    if (key == "className") {
                        key = "class";
                    }
                    if (typeof (value) == "function") {
                        if (oldValue !== null) {
                            htmlElement.removeEventListener(key.substr(2), oldValue, true);
                        }
                        htmlElement.addEventListener(key.substr(2), value, true);
                        if (oldValue == null && this.eventListener) {
                            htmlElement.addEventListener(key.substr(2), this.eventListener, true);
                        }
                    }
                    else {
                        htmlElement.setAttribute(key, value);
                    }
                }
            }
        }
        if (root) {
            this.lastVirtualElement = ve;
        }
        return htmlElement;
    };
    return DiffRenderer;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p$$1 in b) if (b.hasOwnProperty(p$$1)) d[p$$1] = b[p$$1]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NameItemComponent = (function (_super) {
    __extends(NameItemComponent, _super);
    function NameItemComponent(name) {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.appendToName = function () {
            _this.name += " :) ";
        };
        _this.name = name;
        return _this;
    }
    NameItemComponent.prototype.template = function () {
        return li({}, [
            span(null, this.name + " "),
            button({ onclick: this.appendToName }, "More smiles")
        ]);
    };
    return NameItemComponent;
}(TinyComponent));
var SampleComponent = (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.incremental = 0;
        _this.nameItems = [];
        _this.increase = function () {
            _this.incremental++;
        };
        _this.addNumberedChild = function () {
            _this.nameItems.push(new NameItemComponent("Child # " + _this.incremental));
        };
        return _this;
    }
    SampleComponent.prototype.template = function () {
        return div({}, [
            div({}, this.incremental.toString()),
            button({ onclick: this.increase }, "Increase!"),
            ul({}, this.renderComponents(this.nameItems)),
            button({ onclick: this.addNumberedChild }, "Add Child")
        ]);
    };
    return SampleComponent;
}(TinyComponent));
var sampleModel = new SampleComponent();
var root = new TinyRoot(sampleModel);
var diffRenderer = new DiffRenderer(render);
var node = document.createElement('div');
document.body.appendChild(node);
function render() {
    diffRenderer.Render(node, null, root.render(), true);
}
render();

exports.NameItemComponent = NameItemComponent;
exports.SampleComponent = SampleComponent;

return exports;

}({}));
