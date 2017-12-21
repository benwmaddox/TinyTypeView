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
import { div, button, li, span, ul } from "./TinyTypeView/HtmlTypes";
import { Component, OneTimeComponent } from "./TinyTypeView/Component";
import { Root } from "./TinyTypeView/Root";
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
}(Component));
export { NameItemComponent };
var SampleComponent = (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.incremental = 0;
        _this.nameItems = [];
        _this.uneditableItems = [];
        _this.increase = function () {
            _this.incremental++;
        };
        _this.addNumberedChild = function () {
            _this.nameItems.push(new NameItemComponent("Child # " + _this.incremental));
        };
        _this.addUneditable = function () {
            _this.incremental++;
            _this.uneditableItems.push(new Uneditable("Sample when we had " + _this.nameItems.length + " child elements"));
        };
        return _this;
    }
    SampleComponent.prototype.template = function () {
        return div({}, [
            div({}, this.incremental.toString()),
            button({ onclick: this.increase }, "Increase!"),
            ul({}, this.renderComponents(this.nameItems)),
            ul({}, this.renderComponents(this.uneditableItems)),
            button({ onclick: this.addNumberedChild }, "Add Child"),
            button({ onclick: this.addUneditable }, "Add child count")
        ]);
    };
    return SampleComponent;
}(Component));
export { SampleComponent };
var Uneditable = (function (_super) {
    __extends(Uneditable, _super);
    function Uneditable(text) {
        var _this = _super.call(this) || this;
        _this.text = "";
        _this.text = text;
        return _this;
    }
    Uneditable.prototype.template = function () {
        return li({}, this.text);
    };
    return Uneditable;
}(OneTimeComponent));
export { Uneditable };
var node = document.createElement('div');
document.body.appendChild(node);
var sampleModel = new SampleComponent();
var root = new Root(sampleModel, node);
