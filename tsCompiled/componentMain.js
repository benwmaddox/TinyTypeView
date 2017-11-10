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
import { div, button } from "./TinyTypeView/HtmlTypes";
import { TinyComponent } from "./TinyTypeView/TinyComponent";
import { OneTimeRenderer } from "./TinyTypeView/OneTimeRenderer";
var SampleComponent = (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent() {
        var _this = _super.call(this) || this;
        _this.incremental = 0;
        _this.applyReactiveProperties();
        return _this;
    }
    SampleComponent.prototype.increase = function () {
        this.incremental++;
    };
    SampleComponent.prototype.virtualRender = function () {
        if (this.virtualElement === null || this.childChanged || this.propertyChanged) {
            this.virtualElement = div({}, [
                div({}, this.incremental.toString()),
                button({ onclick: this.increase }, "Increase!")
            ]);
            this.propertyChanged = false;
        }
        return this.virtualElement;
    };
    SampleComponent.prototype.beforePropertyChange = function (propName, value) {
    };
    SampleComponent.prototype.afterPropertyChange = function (propName, value) {
    };
    return SampleComponent;
}(TinyComponent));
export { SampleComponent };
var mainModel = new SampleComponent();
var renderer = new OneTimeRenderer();
var node = document.createElement('div');
document.body.appendChild(node);
function render() {
    var result = OneTimeRenderer.Render(mainModel.virtualRender(), function (a) { render(); });
    if (node.childNodes.length > 0) {
        node.removeChild(node.children[0]);
    }
    node.appendChild(result);
}
render();
