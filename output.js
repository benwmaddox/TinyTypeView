System.register("VirtualElement", [], function (exports_1, context_1) {
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
System.register("FullRenderer", ["VirtualElement"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var VirtualElement_1, FullRenderer;
    return {
        setters: [
            function (VirtualElement_1_1) {
                VirtualElement_1 = VirtualElement_1_1;
            }
        ],
        execute: function () {
            FullRenderer = (function () {
                function FullRenderer() {
                }
                FullRenderer.Render = function (ve, eventListener) {
                    var el = document.createElement(ve.elementTag);
                    if (ve.children) {
                        for (var i = 0; i < ve.children.length; i++) {
                            var element = ve.children[i];
                            if (element === null || element === undefined) {
                                continue;
                            }
                            if (typeof (element) == "string") {
                                el.appendChild(document.createTextNode(element));
                            }
                            else if (element instanceof VirtualElement_1.VirtualElement) {
                                el.appendChild(FullRenderer.Render(element, eventListener));
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
                                    el.addEventListener(key.substr(2), value, true);
                                    if (eventListener) {
                                        el.addEventListener(key.substr(2), eventListener, true);
                                    }
                                }
                                else {
                                    el.setAttribute(key, value);
                                }
                            }
                        }
                    }
                    return el;
                };
                return FullRenderer;
            }());
            exports_2("FullRenderer", FullRenderer);
        }
    };
});
System.register("main", ["VirtualElement", "FullRenderer"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var VirtualElement_2, FullRenderer_1, TestModel, TestActions, stringList, interactiveButtons, inputMisc, selector, selectorResults, root, mainModel, render;
    return {
        setters: [
            function (VirtualElement_2_1) {
                VirtualElement_2 = VirtualElement_2_1;
            },
            function (FullRenderer_1_1) {
                FullRenderer_1 = FullRenderer_1_1;
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
            render = function () {
                var body = document.body;
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
                var node = FullRenderer_1.FullRenderer.Render(root(mainModel), render);
                body.appendChild(node);
            };
            render();
        }
    };
});
