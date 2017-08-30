System.register("TinyTypeView/VirtualElement", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function v(elementTag, attributes, children) {
        return new VirtualElement(elementTag, attributes, children);
    }
    exports_1("v", v);
    function div(attributes, children) {
        return new VirtualElement("div", attributes, children);
    }
    exports_1("div", div);
    function a(attributes, children) {
        return new VirtualElement("a", attributes, children);
    }
    exports_1("a", a);
    function button(attributes, children) {
        return new VirtualElement("button", attributes, children);
    }
    exports_1("button", button);
    function input(attributes, children) {
        return new VirtualElement("input", attributes, children);
    }
    exports_1("input", input);
    function select(attributes, children) {
        return new VirtualElement("select", attributes, children);
    }
    exports_1("select", select);
    function option(attributes, children) {
        return new VirtualElement("option", attributes, children);
    }
    exports_1("option", option);
    function boundSelect() {
        return select({}, []);
    }
    exports_1("boundSelect", boundSelect);
    var VirtualElement;
    return {
        setters: [],
        execute: function () {
            VirtualElement = (function () {
                function VirtualElement(elementTag, attributes, children) {
                    this.elementTag = elementTag;
                    this.attributes = attributes;
                    this.children = children;
                    this.element = null;
                }
                return VirtualElement;
            }());
            exports_1("VirtualElement", VirtualElement);
            ;
            ;
            ;
            ;
            ;
            ;
            ;
        }
    };
});
System.register("TinyTypeView/DiffRenderer", ["TinyTypeView/VirtualElement"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var VirtualElement_1, DiffRenderer;
    return {
        setters: [
            function (VirtualElement_1_1) {
                VirtualElement_1 = VirtualElement_1_1;
            }
        ],
        execute: function () {
            DiffRenderer = (function () {
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
                            else if (htmlElement.childNodes.length > 0 && htmlElement.lastChild.nodeValue != ve.children) {
                                htmlElement.removeChild(htmlElement.lastChild);
                            }
                        }
                        else {
                            var max = oldVe != null && oldVe.children != null && ve.children.length < oldVe.children.length ? oldVe.children.length : ve.children.length;
                            for (var i = 0; i < max; i++) {
                                var element = ve.children.length > i ? ve.children[i] : null;
                                var oldElement = oldVe != null && oldVe.children != null && oldVe.children.length > i ? oldVe.children[i] : null;
                                if (element instanceof VirtualElement_1.VirtualElement) {
                                    if (oldElement === null && element) {
                                        var $elChild = document.createElement(element.elementTag);
                                        element.element = $elChild;
                                        htmlElement.appendChild($elChild);
                                        var $elChild = this.Render($elChild, null, element, false);
                                    }
                                    else if (element === null || element === undefined) {
                                        var oldVE = oldElement;
                                        if (oldVE !== null && oldVE.element !== null && oldVE.element.parentNode !== null) {
                                            oldVE.element.parentNode.removeChild(oldVE.element);
                                        }
                                    }
                                    else if (element.elementTag !== oldElement.elementTag) {
                                        var oldVE = oldElement;
                                        if (oldElement !== null && oldVE.element !== null && oldVE.element.parentNode !== null) {
                                            oldVE.element.parentNode.removeChild(oldVE.element);
                                        }
                                        var el = document.createElement(element.elementTag);
                                        var $elChild = this.Render(el, oldVE, element, false);
                                        element.element = $elChild;
                                        htmlElement.appendChild($elChild);
                                    }
                                    else if (oldElement.element) {
                                        var oldVE = oldElement;
                                        var $elChild = this.Render(oldVE.element, oldVE, element, false);
                                        element.element = $elChild;
                                    }
                                }
                            }
                        }
                    }
                    if (ve.attributes) {
                        for (var key in ve.attributes) {
                            if (ve.attributes.hasOwnProperty(key)) {
                                var value = ve.attributes[key];
                                if (key == "className") {
                                    key = "class";
                                }
                                if (typeof (value) == "function") {
                                    htmlElement.addEventListener(key.substr(2), value, true);
                                    if (this.eventListener) {
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
            exports_2("DiffRenderer", DiffRenderer);
        }
    };
});
System.register("main", ["TinyTypeView/VirtualElement", "TinyTypeView/DiffRenderer"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function render() {
        diffRender.Render(node, null, root(mainModel), true);
    }
    var VirtualElement_2, DiffRenderer_1, TestModel, TestActions, stringList, interactiveButtons, inputMisc, selector, selectorResults, root, mainModel, diffRender, node;
    return {
        setters: [
            function (VirtualElement_2_1) {
                VirtualElement_2 = VirtualElement_2_1;
            },
            function (DiffRenderer_1_1) {
                DiffRenderer_1 = DiffRenderer_1_1;
            }
        ],
        execute: function () {
            TestModel = (function () {
                function TestModel() {
                    this.actions = new TestActions(this);
                }
                return TestModel;
            }());
            TestActions = (function () {
                function TestActions(model) {
                    var _this = this;
                    this.increment = function () {
                        _this.Model.incremental++;
                    };
                    this.decrement = function () {
                        _this.Model.incremental--;
                    };
                    this.Model = model;
                }
                return TestActions;
            }());
            stringList = function (model) {
                return VirtualElement_2.div(null, model.strings.map(function (m, i) { return VirtualElement_2.div(null, i + ": " + m); }));
            };
            interactiveButtons = function (model) {
                return VirtualElement_2.div(null, [
                    VirtualElement_2.button({ onclick: model.actions.decrement }, "-1"),
                    VirtualElement_2.div(null, model.incremental.toString()),
                    VirtualElement_2.button({ onclick: model.actions.increment }, "+1")
                ]);
            };
            inputMisc = function (model) {
                return VirtualElement_2.input({ autofocus: true, placeholder: "TODO" });
            };
            selector = function (model) {
                return VirtualElement_2.select({ onchange: function (f) { model.selectionIndex = this.selectedIndex; }, className: "sampleClass" }, [
                    VirtualElement_2.option({ value: "a" }, "aa"),
                    VirtualElement_2.option({ value: "b" }, "bb")
                ]);
            };
            selectorResults = function (model) {
                return VirtualElement_2.div({}, "Selected Index: " + model.selectionIndex);
            };
            root = function (model) {
                return VirtualElement_2.div(null, [
                    VirtualElement_2.a({ href: "#here" }, "Link Here"),
                    VirtualElement_2.div({ className: "sample", onclick: function (f) { alert("hah"); } }, "Text here"),
                    VirtualElement_2.a({ href: "#there" }, "There"),
                    VirtualElement_2.button({ onclick: function (ev) { alert("yay "); }, className: "asdf" }, "Sample Button"),
                    stringList(model),
                    interactiveButtons(model),
                    inputMisc(model),
                    selector(model),
                    selectorResults(model)
                ]);
            };
            mainModel = new TestModel();
            mainModel.incremental = 0;
            mainModel.strings = ["a", "b", "c", "asdfasdf"];
            diffRender = new DiffRenderer_1.DiffRenderer(render);
            node = document.createElement('div');
            document.body.appendChild(node);
            render();
        }
    };
});
