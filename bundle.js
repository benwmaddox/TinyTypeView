(function () {
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

function a(attributes, children) { return new VirtualElement("a", attributes, children); }








function button(attributes, children) { return new VirtualElement("button", attributes, children); }








function div(attributes, children) { return new VirtualElement("div", attributes, children); }







function h1(attributes, children) { return new VirtualElement("h1", attributes, children); }










function input(attributes, children) { return new VirtualElement("input", attributes, children); }
















function option(attributes, children) { return new VirtualElement("option", attributes, children); }








function select(attributes, children) { return new VirtualElement("select", attributes, children); }

function boundSelect(SelectedIndexField, attributes, childRenderFunction, children) {
    return select(attributes, children.map(function (m, i) { return childRenderFunction(m, false); }));
}

var DiffRenderer = (function () {
    function DiffRenderer(eventListener) {
        this.lastVirtualElement = null;
        this.eventListener = eventListener;
    }
    DiffRenderer.prototype.Render = function (htmlElement, oldVe, ve, initial) {
        if (initial === void 0) { initial = true; }
        var oldVe = (initial && this.lastVirtualElement) ? this.lastVirtualElement : oldVe;
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
        if (initial) {
            this.lastVirtualElement = ve;
        }
        return htmlElement;
    };
    return DiffRenderer;
}());

var ChangeWrapper = (function () {
    function ChangeWrapper(wrappedItem, callback) {
        this.wrapProperty = function (instance, propName, callback) {
            if (Array.isArray(instance[propName])) {
                for (var key in instance[propName]) {
                    if (typeof instance[propName][key] === "object" && instance[propName][key] !== null) {
                        var wrapper = new ChangeWrapper(instance[propName][key], callback);
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
        for (var prop in this.wrapped) {
            if (typeof (this.wrapped[prop]) != "function") {
                this.wrapProperty(this.wrapped, prop, callback);
            }
        }
    }
    return ChangeWrapper;
}());

var TestModel = (function () {
    function TestModel() {
        this.actions = new TestActions(this);
    }
    return TestModel;
}());
var TestActions = (function () {
    function TestActions(model) {
        var _this = this;
        this.increment = function () {
            _this.Model.incremental++;
        };
        this.decrement = function () {
            _this.Model.incremental--;
        };
        this.moreStrings = function () {
            _this.Model.strings.push("Another " + _this.Model.incremental);
        };
        this.fewerStrings = function () {
            _this.Model.strings.splice(-1, 1);
        };
        this.indexChange = function (ev) {
            _this.Model.selectionIndex = ev.currentTarget.selectedIndex;
        };
        this.Model = model;
    }
    return TestActions;
}());
var stringList = function (model) {
    return div(null, model.strings.map(function (m, i) { return div(null, i + ": " + m); }));
};
var interactiveButtons = function (model) {
    return div(null, [
        button({ onclick: model.actions.decrement }, "-1"),
        div(null, model.incremental.toString()),
        button({ onclick: model.actions.increment }, "+1")
    ]);
};
var inputMisc = function (model) {
    return input({ autofocus: true, placeholder: "TODO" });
};
var selector = function (model) {
    return select({ onchange: model.actions.indexChange, className: "sampleClass" }, [
        option({ value: "a" }, "aa"),
        option({ value: "b" }, "bb")
    ]);
};
var sampleOption = function (model) {
    return option({ value: model.value }, model.name);
};
var sampleBoundSelect = function (model) {
    return boundSelect("value", {}, sampleOption, model.options);
};
var selectorResults = function (model) {
    return div({}, "Selected Index: " + model.selectionIndex);
};
var moreStringsView = function (model) {
    return button({ onclick: model.actions.moreStrings }, "More text!");
};
var fewerStringsView = function (model) {
    return button({ onclick: model.actions.fewerStrings }, "Fewer text items");
};
var root = function (model) {
    return div(null, [
        h1({}, "Giant H1!!"),
        a({ href: "#here" }, "Link Here"),
        div({ className: "sample", onclick: function (f) { alert("hah"); } }, "Text here"),
        a({ href: "#there" }, "There"),
        stringList(model),
        interactiveButtons(model),
        inputMisc(model),
        selector(model),
        selectorResults(model),
        moreStringsView(model),
        fewerStringsView(model),
        sampleBoundSelect(model)
    ]);
};
var mainModel = new TestModel();
mainModel.incremental = 0;
mainModel.strings = ["a", "b", "c", "asdfasdf"];
mainModel.options = [{ name: "b", value: "2" }, { name: "c", value: "3" }];
mainModel.selectionIndex = -1;
var diffRender = new DiffRenderer(render);
var node = document.createElement('div');
document.body.appendChild(node);
function render() {
    var newVM = root(mainModel);
    diffRender.Render(node, null, newVM, true);
}
render();
var wrapper = new ChangeWrapper(mainModel, function (item, prop, value) { console.log(prop + ": " + value); });

}());
