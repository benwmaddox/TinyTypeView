var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("TinyTypeView/VirtualElement", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function v(elementTag, attributes, children) {
        return new VirtualElement(elementTag, attributes, children);
    }
    exports_1("v", v);
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
        }
    };
});
System.register("TinyTypeView/HtmlTypes", ["TinyTypeView/VirtualElement"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function a(attributes, children) { return new VirtualElement_1.VirtualElement("a", attributes, children); }
    exports_2("a", a);
    function applet(attributes, children) { return new VirtualElement_1.VirtualElement("applet", attributes, children); }
    exports_2("applet", applet);
    function area(attributes, children) { return new VirtualElement_1.VirtualElement("area", attributes, children); }
    exports_2("area", area);
    function audio(attributes, children) { return new VirtualElement_1.VirtualElement("audio", attributes, children); }
    exports_2("audio", audio);
    function base(attributes, children) { return new VirtualElement_1.VirtualElement("base", attributes, children); }
    exports_2("base", base);
    function basefont(attributes, children) { return new VirtualElement_1.VirtualElement("basefont", attributes, children); }
    exports_2("basefont", basefont);
    function blockquote(attributes, children) { return new VirtualElement_1.VirtualElement("blockquote", attributes, children); }
    exports_2("blockquote", blockquote);
    function body(attributes, children) { return new VirtualElement_1.VirtualElement("body", attributes, children); }
    exports_2("body", body);
    function br(attributes, children) { return new VirtualElement_1.VirtualElement("br", attributes, children); }
    exports_2("br", br);
    function button(attributes, children) { return new VirtualElement_1.VirtualElement("button", attributes, children); }
    exports_2("button", button);
    function canvas(attributes, children) { return new VirtualElement_1.VirtualElement("canvas", attributes, children); }
    exports_2("canvas", canvas);
    function caption(attributes, children) { return new VirtualElement_1.VirtualElement("caption", attributes, children); }
    exports_2("caption", caption);
    function col(attributes, children) { return new VirtualElement_1.VirtualElement("col", attributes, children); }
    exports_2("col", col);
    function colgroup(attributes, children) { return new VirtualElement_1.VirtualElement("colgroup", attributes, children); }
    exports_2("colgroup", colgroup);
    function data(attributes, children) { return new VirtualElement_1.VirtualElement("data", attributes, children); }
    exports_2("data", data);
    function datalist(attributes, children) { return new VirtualElement_1.VirtualElement("datalist", attributes, children); }
    exports_2("datalist", datalist);
    function del(attributes, children) { return new VirtualElement_1.VirtualElement("del", attributes, children); }
    exports_2("del", del);
    function dir(attributes, children) { return new VirtualElement_1.VirtualElement("dir", attributes, children); }
    exports_2("dir", dir);
    function div(attributes, children) { return new VirtualElement_1.VirtualElement("div", attributes, children); }
    exports_2("div", div);
    function dl(attributes, children) { return new VirtualElement_1.VirtualElement("dl", attributes, children); }
    exports_2("dl", dl);
    function embed(attributes, children) { return new VirtualElement_1.VirtualElement("embed", attributes, children); }
    exports_2("embed", embed);
    function fieldset(attributes, children) { return new VirtualElement_1.VirtualElement("fieldset", attributes, children); }
    exports_2("fieldset", fieldset);
    function font(attributes, children) { return new VirtualElement_1.VirtualElement("font", attributes, children); }
    exports_2("font", font);
    function form(attributes, children) { return new VirtualElement_1.VirtualElement("form", attributes, children); }
    exports_2("form", form);
    function frame(attributes, children) { return new VirtualElement_1.VirtualElement("frame", attributes, children); }
    exports_2("frame", frame);
    function frameset(attributes, children) { return new VirtualElement_1.VirtualElement("frameset", attributes, children); }
    exports_2("frameset", frameset);
    function h1(attributes, children) { return new VirtualElement_1.VirtualElement("h1", attributes, children); }
    exports_2("h1", h1);
    function h2(attributes, children) { return new VirtualElement_1.VirtualElement("h2", attributes, children); }
    exports_2("h2", h2);
    function h3(attributes, children) { return new VirtualElement_1.VirtualElement("h3", attributes, children); }
    exports_2("h3", h3);
    function h4(attributes, children) { return new VirtualElement_1.VirtualElement("h4", attributes, children); }
    exports_2("h4", h4);
    function h5(attributes, children) { return new VirtualElement_1.VirtualElement("h5", attributes, children); }
    exports_2("h5", h5);
    function h6(attributes, children) { return new VirtualElement_1.VirtualElement("h6", attributes, children); }
    exports_2("h6", h6);
    function head(attributes, children) { return new VirtualElement_1.VirtualElement("head", attributes, children); }
    exports_2("head", head);
    function hr(attributes, children) { return new VirtualElement_1.VirtualElement("hr", attributes, children); }
    exports_2("hr", hr);
    function html(attributes, children) { return new VirtualElement_1.VirtualElement("html", attributes, children); }
    exports_2("html", html);
    function iframe(attributes, children) { return new VirtualElement_1.VirtualElement("iframe", attributes, children); }
    exports_2("iframe", iframe);
    function img(attributes, children) { return new VirtualElement_1.VirtualElement("img", attributes, children); }
    exports_2("img", img);
    function input(attributes, children) { return new VirtualElement_1.VirtualElement("input", attributes, children); }
    exports_2("input", input);
    function ins(attributes, children) { return new VirtualElement_1.VirtualElement("ins", attributes, children); }
    exports_2("ins", ins);
    function isindex(attributes, children) { return new VirtualElement_1.VirtualElement("isindex", attributes, children); }
    exports_2("isindex", isindex);
    function label(attributes, children) { return new VirtualElement_1.VirtualElement("label", attributes, children); }
    exports_2("label", label);
    function legend(attributes, children) { return new VirtualElement_1.VirtualElement("legend", attributes, children); }
    exports_2("legend", legend);
    function li(attributes, children) { return new VirtualElement_1.VirtualElement("li", attributes, children); }
    exports_2("li", li);
    function link(attributes, children) { return new VirtualElement_1.VirtualElement("link", attributes, children); }
    exports_2("link", link);
    function listing(attributes, children) { return new VirtualElement_1.VirtualElement("listing", attributes, children); }
    exports_2("listing", listing);
    function map(attributes, children) { return new VirtualElement_1.VirtualElement("map", attributes, children); }
    exports_2("map", map);
    function marquee(attributes, children) { return new VirtualElement_1.VirtualElement("marquee", attributes, children); }
    exports_2("marquee", marquee);
    function menu(attributes, children) { return new VirtualElement_1.VirtualElement("menu", attributes, children); }
    exports_2("menu", menu);
    function meta(attributes, children) { return new VirtualElement_1.VirtualElement("meta", attributes, children); }
    exports_2("meta", meta);
    function meter(attributes, children) { return new VirtualElement_1.VirtualElement("meter", attributes, children); }
    exports_2("meter", meter);
    function nextid(attributes, children) { return new VirtualElement_1.VirtualElement("nextid", attributes, children); }
    exports_2("nextid", nextid);
    function object(attributes, children) { return new VirtualElement_1.VirtualElement("object", attributes, children); }
    exports_2("object", object);
    function ol(attributes, children) { return new VirtualElement_1.VirtualElement("ol", attributes, children); }
    exports_2("ol", ol);
    function optgroup(attributes, children) { return new VirtualElement_1.VirtualElement("optgroup", attributes, children); }
    exports_2("optgroup", optgroup);
    function option(attributes, children) { return new VirtualElement_1.VirtualElement("option", attributes, children); }
    exports_2("option", option);
    function output(attributes, children) { return new VirtualElement_1.VirtualElement("output", attributes, children); }
    exports_2("output", output);
    function p(attributes, children) { return new VirtualElement_1.VirtualElement("p", attributes, children); }
    exports_2("p", p);
    function param(attributes, children) { return new VirtualElement_1.VirtualElement("param", attributes, children); }
    exports_2("param", param);
    function picture(attributes, children) { return new VirtualElement_1.VirtualElement("picture", attributes, children); }
    exports_2("picture", picture);
    function pre(attributes, children) { return new VirtualElement_1.VirtualElement("pre", attributes, children); }
    exports_2("pre", pre);
    function progress(attributes, children) { return new VirtualElement_1.VirtualElement("progress", attributes, children); }
    exports_2("progress", progress);
    function q(attributes, children) { return new VirtualElement_1.VirtualElement("q", attributes, children); }
    exports_2("q", q);
    function script(attributes, children) { return new VirtualElement_1.VirtualElement("script", attributes, children); }
    exports_2("script", script);
    function select(attributes, children) { return new VirtualElement_1.VirtualElement("select", attributes, children); }
    exports_2("select", select);
    function source(attributes, children) { return new VirtualElement_1.VirtualElement("source", attributes, children); }
    exports_2("source", source);
    function span(attributes, children) { return new VirtualElement_1.VirtualElement("span", attributes, children); }
    exports_2("span", span);
    function style(attributes, children) { return new VirtualElement_1.VirtualElement("style", attributes, children); }
    exports_2("style", style);
    function table(attributes, children) { return new VirtualElement_1.VirtualElement("table", attributes, children); }
    exports_2("table", table);
    function tbody(attributes, children) { return new VirtualElement_1.VirtualElement("tbody", attributes, children); }
    exports_2("tbody", tbody);
    function td(attributes, children) { return new VirtualElement_1.VirtualElement("td", attributes, children); }
    exports_2("td", td);
    function template(attributes, children) { return new VirtualElement_1.VirtualElement("template", attributes, children); }
    exports_2("template", template);
    function textarea(attributes, children) { return new VirtualElement_1.VirtualElement("textarea", attributes, children); }
    exports_2("textarea", textarea);
    function tfoot(attributes, children) { return new VirtualElement_1.VirtualElement("tfoot", attributes, children); }
    exports_2("tfoot", tfoot);
    function th(attributes, children) { return new VirtualElement_1.VirtualElement("th", attributes, children); }
    exports_2("th", th);
    function thead(attributes, children) { return new VirtualElement_1.VirtualElement("thead", attributes, children); }
    exports_2("thead", thead);
    function time(attributes, children) { return new VirtualElement_1.VirtualElement("time", attributes, children); }
    exports_2("time", time);
    function title(attributes, children) { return new VirtualElement_1.VirtualElement("title", attributes, children); }
    exports_2("title", title);
    function tr(attributes, children) { return new VirtualElement_1.VirtualElement("tr", attributes, children); }
    exports_2("tr", tr);
    function track(attributes, children) { return new VirtualElement_1.VirtualElement("track", attributes, children); }
    exports_2("track", track);
    function ul(attributes, children) { return new VirtualElement_1.VirtualElement("ul", attributes, children); }
    exports_2("ul", ul);
    function video(attributes, children) { return new VirtualElement_1.VirtualElement("video", attributes, children); }
    exports_2("video", video);
    function xmp(attributes, children) { return new VirtualElement_1.VirtualElement("xmp", attributes, children); }
    exports_2("xmp", xmp);
    var VirtualElement_1;
    return {
        setters: [
            function (VirtualElement_1_1) {
                VirtualElement_1 = VirtualElement_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("TinyTypeView/ChangeWrapper", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var ChangeWrapper, ArrayWrapper;
    return {
        setters: [],
        execute: function () {
            ChangeWrapper = (function () {
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
            exports_3("ChangeWrapper", ChangeWrapper);
            ArrayWrapper = (function () {
                function ArrayWrapper() {
                }
                return ArrayWrapper;
            }());
            exports_3("ArrayWrapper", ArrayWrapper);
        }
    };
});
System.register("TinyTypeView/TinyComponent", ["TinyTypeView/VirtualElement", "TinyTypeView/ChangeWrapper", "TinyTypeView/HtmlTypes"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var VirtualElement_2, ChangeWrapper_1, HtmlTypes_1, TinyComponent, TinyRoot;
    return {
        setters: [
            function (VirtualElement_2_1) {
                VirtualElement_2 = VirtualElement_2_1;
            },
            function (ChangeWrapper_1_1) {
                ChangeWrapper_1 = ChangeWrapper_1_1;
            },
            function (HtmlTypes_1_1) {
                HtmlTypes_1 = HtmlTypes_1_1;
            }
        ],
        execute: function () {
            TinyComponent = (function () {
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
                        if (render instanceof VirtualElement_2.VirtualElement) {
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
                    var a = new ChangeWrapper_1.ChangeWrapper(this, function (item, propName, value) {
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
            exports_4("TinyComponent", TinyComponent);
            TinyRoot = (function () {
                function TinyRoot(component) {
                    this.component = component;
                    this.component.applyReactiveProperties();
                }
                TinyRoot.prototype.render = function () {
                    var rendered = this.component.render();
                    if (rendered instanceof VirtualElement_2.VirtualElement) {
                        return rendered;
                    }
                    else {
                        return HtmlTypes_1.div({}, rendered);
                    }
                };
                return TinyRoot;
            }());
            exports_4("TinyRoot", TinyRoot);
        }
    };
});
System.register("TinyTypeView/DiffRenderer", ["TinyTypeView/VirtualElement"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var VirtualElement_3, DiffRenderer;
    return {
        setters: [
            function (VirtualElement_3_1) {
                VirtualElement_3 = VirtualElement_3_1;
            }
        ],
        execute: function () {
            DiffRenderer = (function () {
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
                                if (element instanceof VirtualElement_3.VirtualElement) {
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
            exports_5("DiffRenderer", DiffRenderer);
        }
    };
});
System.register("TinyTypeView/ComponentRenderer", ["TinyTypeView/VirtualElement"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var VirtualElement_4, ComponentRenderer;
    return {
        setters: [
            function (VirtualElement_4_1) {
                VirtualElement_4 = VirtualElement_4_1;
            }
        ],
        execute: function () {
            ComponentRenderer = (function () {
                function ComponentRenderer() {
                    this.changeOnNextTick = false;
                    this.nextTick = function () {
                    };
                }
                ComponentRenderer.prototype.Render = function (component) {
                    var elements = this.getElementsFromComponent(component);
                };
                ComponentRenderer.prototype.getElementsFromComponent = function (component) {
                    var currentRender = component.template();
                    var elements;
                    if (currentRender instanceof VirtualElement_4.VirtualElement) {
                        elements = [currentRender];
                    }
                    else {
                        elements = currentRender;
                    }
                    return elements;
                };
                return ComponentRenderer;
            }());
            exports_6("ComponentRenderer", ComponentRenderer);
        }
    };
});
System.register("componentMain", ["TinyTypeView/HtmlTypes", "TinyTypeView/TinyComponent", "TinyTypeView/DiffRenderer", "TinyTypeView/ComponentRenderer"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function render() {
        diffRenderer.Render(node, null, root.render(), true);
    }
    var HtmlTypes_2, TinyComponent_1, DiffRenderer_1, ComponentRenderer_1, NameItemComponent, SampleComponent, sampleModel, root, diffRenderer, componentRenderer, node;
    return {
        setters: [
            function (HtmlTypes_2_1) {
                HtmlTypes_2 = HtmlTypes_2_1;
            },
            function (TinyComponent_1_1) {
                TinyComponent_1 = TinyComponent_1_1;
            },
            function (DiffRenderer_1_1) {
                DiffRenderer_1 = DiffRenderer_1_1;
            },
            function (ComponentRenderer_1_1) {
                ComponentRenderer_1 = ComponentRenderer_1_1;
            }
        ],
        execute: function () {
            NameItemComponent = (function (_super) {
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
                    return HtmlTypes_2.li({}, [
                        HtmlTypes_2.span(null, this.name + " "),
                        HtmlTypes_2.button({ onclick: this.appendToName }, "More smiles")
                    ]);
                };
                return NameItemComponent;
            }(TinyComponent_1.TinyComponent));
            exports_7("NameItemComponent", NameItemComponent);
            SampleComponent = (function (_super) {
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
                    return HtmlTypes_2.div({}, [
                        HtmlTypes_2.div({}, this.incremental.toString()),
                        HtmlTypes_2.button({ onclick: this.increase }, "Increase!"),
                        HtmlTypes_2.ul({}, this.renderComponents(this.nameItems)),
                        HtmlTypes_2.button({ onclick: this.addNumberedChild }, "Add Child")
                    ]);
                };
                return SampleComponent;
            }(TinyComponent_1.TinyComponent));
            exports_7("SampleComponent", SampleComponent);
            sampleModel = new SampleComponent();
            root = new TinyComponent_1.TinyRoot(sampleModel);
            diffRenderer = new DiffRenderer_1.DiffRenderer(render);
            componentRenderer = new ComponentRenderer_1.ComponentRenderer();
            node = document.createElement('div');
            document.body.appendChild(node);
            render();
        }
    };
});
