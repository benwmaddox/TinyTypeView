System.register("TinyTypeView/VirtualElement", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function v(elementTag, attributes, children) {
        return new VirtualElement(elementTag, attributes, children);
    }
    exports_1("v", v);
    function a(attributes, children) { return new VirtualElement("a", attributes, children); }
    exports_1("a", a);
    function applet(attributes, children) { return new VirtualElement("applet", attributes, children); }
    exports_1("applet", applet);
    function area(attributes, children) { return new VirtualElement("area", attributes, children); }
    exports_1("area", area);
    function audio(attributes, children) { return new VirtualElement("audio", attributes, children); }
    exports_1("audio", audio);
    function base(attributes, children) { return new VirtualElement("base", attributes, children); }
    exports_1("base", base);
    function basefont(attributes, children) { return new VirtualElement("basefont", attributes, children); }
    exports_1("basefont", basefont);
    function blockquote(attributes, children) { return new VirtualElement("blockquote", attributes, children); }
    exports_1("blockquote", blockquote);
    function body(attributes, children) { return new VirtualElement("body", attributes, children); }
    exports_1("body", body);
    function br(attributes, children) { return new VirtualElement("br", attributes, children); }
    exports_1("br", br);
    function button(attributes, children) { return new VirtualElement("button", attributes, children); }
    exports_1("button", button);
    function canvas(attributes, children) { return new VirtualElement("canvas", attributes, children); }
    exports_1("canvas", canvas);
    function caption(attributes, children) { return new VirtualElement("caption", attributes, children); }
    exports_1("caption", caption);
    function col(attributes, children) { return new VirtualElement("col", attributes, children); }
    exports_1("col", col);
    function colgroup(attributes, children) { return new VirtualElement("colgroup", attributes, children); }
    exports_1("colgroup", colgroup);
    function data(attributes, children) { return new VirtualElement("data", attributes, children); }
    exports_1("data", data);
    function datalist(attributes, children) { return new VirtualElement("datalist", attributes, children); }
    exports_1("datalist", datalist);
    function del(attributes, children) { return new VirtualElement("del", attributes, children); }
    exports_1("del", del);
    function dir(attributes, children) { return new VirtualElement("dir", attributes, children); }
    exports_1("dir", dir);
    function div(attributes, children) { return new VirtualElement("div", attributes, children); }
    exports_1("div", div);
    function dl(attributes, children) { return new VirtualElement("dl", attributes, children); }
    exports_1("dl", dl);
    function embed(attributes, children) { return new VirtualElement("embed", attributes, children); }
    exports_1("embed", embed);
    function fieldset(attributes, children) { return new VirtualElement("fieldset", attributes, children); }
    exports_1("fieldset", fieldset);
    function font(attributes, children) { return new VirtualElement("font", attributes, children); }
    exports_1("font", font);
    function form(attributes, children) { return new VirtualElement("form", attributes, children); }
    exports_1("form", form);
    function frame(attributes, children) { return new VirtualElement("frame", attributes, children); }
    exports_1("frame", frame);
    function frameset(attributes, children) { return new VirtualElement("frameset", attributes, children); }
    exports_1("frameset", frameset);
    function h1(attributes, children) { return new VirtualElement("h1", attributes, children); }
    exports_1("h1", h1);
    function h2(attributes, children) { return new VirtualElement("h2", attributes, children); }
    exports_1("h2", h2);
    function h3(attributes, children) { return new VirtualElement("h3", attributes, children); }
    exports_1("h3", h3);
    function h4(attributes, children) { return new VirtualElement("h4", attributes, children); }
    exports_1("h4", h4);
    function h5(attributes, children) { return new VirtualElement("h5", attributes, children); }
    exports_1("h5", h5);
    function h6(attributes, children) { return new VirtualElement("h6", attributes, children); }
    exports_1("h6", h6);
    function head(attributes, children) { return new VirtualElement("head", attributes, children); }
    exports_1("head", head);
    function hr(attributes, children) { return new VirtualElement("hr", attributes, children); }
    exports_1("hr", hr);
    function html(attributes, children) { return new VirtualElement("html", attributes, children); }
    exports_1("html", html);
    function iframe(attributes, children) { return new VirtualElement("iframe", attributes, children); }
    exports_1("iframe", iframe);
    function img(attributes, children) { return new VirtualElement("img", attributes, children); }
    exports_1("img", img);
    function input(attributes, children) { return new VirtualElement("input", attributes, children); }
    exports_1("input", input);
    function ins(attributes, children) { return new VirtualElement("ins", attributes, children); }
    exports_1("ins", ins);
    function isindex(attributes, children) { return new VirtualElement("isindex", attributes, children); }
    exports_1("isindex", isindex);
    function label(attributes, children) { return new VirtualElement("label", attributes, children); }
    exports_1("label", label);
    function legend(attributes, children) { return new VirtualElement("legend", attributes, children); }
    exports_1("legend", legend);
    function li(attributes, children) { return new VirtualElement("li", attributes, children); }
    exports_1("li", li);
    function link(attributes, children) { return new VirtualElement("link", attributes, children); }
    exports_1("link", link);
    function listing(attributes, children) { return new VirtualElement("listing", attributes, children); }
    exports_1("listing", listing);
    function map(attributes, children) { return new VirtualElement("map", attributes, children); }
    exports_1("map", map);
    function marquee(attributes, children) { return new VirtualElement("marquee", attributes, children); }
    exports_1("marquee", marquee);
    function menu(attributes, children) { return new VirtualElement("menu", attributes, children); }
    exports_1("menu", menu);
    function meta(attributes, children) { return new VirtualElement("meta", attributes, children); }
    exports_1("meta", meta);
    function meter(attributes, children) { return new VirtualElement("meter", attributes, children); }
    exports_1("meter", meter);
    function nextid(attributes, children) { return new VirtualElement("nextid", attributes, children); }
    exports_1("nextid", nextid);
    function object(attributes, children) { return new VirtualElement("object", attributes, children); }
    exports_1("object", object);
    function ol(attributes, children) { return new VirtualElement("ol", attributes, children); }
    exports_1("ol", ol);
    function optgroup(attributes, children) { return new VirtualElement("optgroup", attributes, children); }
    exports_1("optgroup", optgroup);
    function option(attributes, children) { return new VirtualElement("option", attributes, children); }
    exports_1("option", option);
    function output(attributes, children) { return new VirtualElement("output", attributes, children); }
    exports_1("output", output);
    function p(attributes, children) { return new VirtualElement("p", attributes, children); }
    exports_1("p", p);
    function param(attributes, children) { return new VirtualElement("param", attributes, children); }
    exports_1("param", param);
    function picture(attributes, children) { return new VirtualElement("picture", attributes, children); }
    exports_1("picture", picture);
    function pre(attributes, children) { return new VirtualElement("pre", attributes, children); }
    exports_1("pre", pre);
    function progress(attributes, children) { return new VirtualElement("progress", attributes, children); }
    exports_1("progress", progress);
    function q(attributes, children) { return new VirtualElement("q", attributes, children); }
    exports_1("q", q);
    function script(attributes, children) { return new VirtualElement("script", attributes, children); }
    exports_1("script", script);
    function select(attributes, children) { return new VirtualElement("select", attributes, children); }
    exports_1("select", select);
    function source(attributes, children) { return new VirtualElement("source", attributes, children); }
    exports_1("source", source);
    function span(attributes, children) { return new VirtualElement("span", attributes, children); }
    exports_1("span", span);
    function style(attributes, children) { return new VirtualElement("style", attributes, children); }
    exports_1("style", style);
    function table(attributes, children) { return new VirtualElement("table", attributes, children); }
    exports_1("table", table);
    function tbody(attributes, children) { return new VirtualElement("tbody", attributes, children); }
    exports_1("tbody", tbody);
    function td(attributes, children) { return new VirtualElement("td", attributes, children); }
    exports_1("td", td);
    function template(attributes, children) { return new VirtualElement("template", attributes, children); }
    exports_1("template", template);
    function textarea(attributes, children) { return new VirtualElement("textarea", attributes, children); }
    exports_1("textarea", textarea);
    function tfoot(attributes, children) { return new VirtualElement("tfoot", attributes, children); }
    exports_1("tfoot", tfoot);
    function th(attributes, children) { return new VirtualElement("th", attributes, children); }
    exports_1("th", th);
    function thead(attributes, children) { return new VirtualElement("thead", attributes, children); }
    exports_1("thead", thead);
    function time(attributes, children) { return new VirtualElement("time", attributes, children); }
    exports_1("time", time);
    function title(attributes, children) { return new VirtualElement("title", attributes, children); }
    exports_1("title", title);
    function tr(attributes, children) { return new VirtualElement("tr", attributes, children); }
    exports_1("tr", tr);
    function track(attributes, children) { return new VirtualElement("track", attributes, children); }
    exports_1("track", track);
    function ul(attributes, children) { return new VirtualElement("ul", attributes, children); }
    exports_1("ul", ul);
    function video(attributes, children) { return new VirtualElement("video", attributes, children); }
    exports_1("video", video);
    function xmp(attributes, children) { return new VirtualElement("xmp", attributes, children); }
    exports_1("xmp", xmp);
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
                                else if (element === null && oldElement !== null) {
                                    var oldVE = oldElement;
                                    if (oldVE !== null && oldVE.element !== null && oldVE.element.parentNode !== null) {
                                        oldVE.element.parentNode.removeChild(oldVE.element);
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
                                    if (!htmlElement["listener" + key]) {
                                        htmlElement.addEventListener(key.substr(2), value, true);
                                        if (this.eventListener) {
                                            htmlElement.addEventListener(key.substr(2), this.eventListener, true);
                                        }
                                        htmlElement["listener" + key] = true;
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
        var newVM = root(mainModel);
        diffRender.Render(node, null, newVM, true);
    }
    var VirtualElement_2, DiffRenderer_1, TestModel, TestActions, stringList, interactiveButtons, inputMisc, selector, selectorResults, moreStringsView, fewerStringsView, root, mainModel, diffRender, node;
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
            moreStringsView = function (model) {
                return VirtualElement_2.button({ onclick: function () { return model.strings.push("Another " + model.incremental); } }, "More text!");
            };
            fewerStringsView = function (model) {
                return VirtualElement_2.button({ onclick: function () { return model.strings.splice(-1, 1); } }, "Fewer text items");
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
                    selectorResults(model),
                    moreStringsView(model),
                    fewerStringsView(model)
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
