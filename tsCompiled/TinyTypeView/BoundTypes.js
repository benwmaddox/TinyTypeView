import { select, input } from "./HtmlTypes";
export function boundSelect(SelectedIndexField, attributes, childRenderFunction, children) {
    return select(attributes, children.map(function (m, i) { return childRenderFunction(m, false); }));
}
export function boundInput(source, SelectedIndexField, attributes, convertToField, convertToDOM) {
    function setFieldFromEvent(ev) {
        if (convertToField) {
            source[SelectedIndexField] = convertToField(ev.target.value);
        }
        else {
            source[SelectedIndexField] = ev.target.value;
        }
    }
    attributes.oninput = setFieldFromEvent;
    if (convertToDOM) {
        attributes.value = convertToDOM(source[SelectedIndexField]);
    }
    else {
        attributes.value = source[SelectedIndexField];
    }
    return input(attributes);
}
export function textInput(source, SelectedIndexField, attributes) {
    function setFieldFromEvent(ev) {
        source[SelectedIndexField] = ev.target.value;
    }
    if (attributes == null) {
        attributes = {};
    }
    attributes.oninput = setFieldFromEvent;
    attributes.value = source[SelectedIndexField];
    return input(attributes);
}
export function numberInput(source, SelectedIndexField, attributes) {
    function setFieldFromEvent(ev) {
        source[SelectedIndexField] = Number(ev.target.value);
    }
    if (attributes == null) {
        attributes = {};
    }
    attributes.type = "number";
    attributes.oninput = setFieldFromEvent;
    attributes.value = source[SelectedIndexField];
    return input(attributes);
}
