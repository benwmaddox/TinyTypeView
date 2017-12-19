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
import { TinyComponent } from "./TinyTypeView/TinyComponent";
import { TinyRoot } from "./TinyTypeView/TinyRoot";
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
export { NameItemComponent };
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
export { SampleComponent };
var node = document.createElement('div');
document.body.appendChild(node);
var sampleModel = new SampleComponent();
var root = new TinyRoot(sampleModel, node);
