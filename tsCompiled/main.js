import { a, div, button, input, select, option, h1, } from "./TinyTypeView/HtmlTypes";
import { boundSelect } from "./TinyTypeView/BoundTypes";
import { DiffRenderer } from "./TinyTypeView/DiffRenderer";
import { ChangeWrapper } from "./TinyTypeView/ChangeWrapper";
var TestModel = (function () {
    function TestModel() {
        this.actions = new TestActions(this);
    }
    return TestModel;
}());
var TestOption = (function () {
    function TestOption() {
    }
    return TestOption;
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
