import { VirtualElement } from "./VirtualElement";
import { div } from "./HtmlTypes";
import { DiffRenderer } from "./DiffRenderer";
var Root = (function () {
    function Root(component, boundElement) {
        var _this = this;
        this.renderPending = false;
        this.prepareRender = function () {
            if (_this.renderPending === false) {
                _this.renderPending = true;
                setTimeout(_this.runRender, 0);
            }
        };
        this.runRender = function () {
            _this.renderPending = false;
            _this.diffRenderer.Render(_this.boundElement, null, _this.templateRender(), true);
        };
        this.templateRender = function () {
            var rendered = _this.component.render();
            if (rendered instanceof VirtualElement) {
                return rendered;
            }
            else {
                return div({}, rendered);
            }
        };
        this.component = component;
        this.boundElement = boundElement;
        this.diffRenderer = new DiffRenderer();
        this.component.applyReactiveProperties(this.prepareRender);
        this.prepareRender();
    }
    return Root;
}());
export { Root };
