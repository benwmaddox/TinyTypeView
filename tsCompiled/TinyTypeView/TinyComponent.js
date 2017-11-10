import { VirtualElement } from "./VirtualElement";
import { ChangeWrapper } from "./ChangeWrapper";
var TinyComponent = (function () {
    function TinyComponent() {
        this.applyReactiveProperties();
        this.propertyChanged = false;
        this.childChanged = false;
        this.virtualElement = null;
    }
    TinyComponent.prototype.virtualRender = function () {
        this.virtualElement = new VirtualElement("div", {}, []);
    };
    TinyComponent.prototype.applyReactiveProperties = function () {
        var _this = this;
        var a = new ChangeWrapper(this, function (item, propName, value) {
            if (_this[propName] !== value) {
                if (_this.beforePropertyChange) {
                    _this.beforePropertyChange(propName, value);
                }
                if (_this.afterPropertyChange) {
                    _this.afterPropertyChange(propName, value);
                }
            }
        });
    };
    return TinyComponent;
}());
export { TinyComponent };
