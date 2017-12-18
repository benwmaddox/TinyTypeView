import { VirtualElement } from "./VirtualElement";
var ComponentRenderer = (function () {
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
        if (currentRender instanceof VirtualElement) {
            elements = [currentRender];
        }
        else {
            elements = currentRender;
        }
        return elements;
    };
    return ComponentRenderer;
}());
export { ComponentRenderer };
