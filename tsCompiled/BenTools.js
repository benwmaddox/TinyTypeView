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
import { Component } from "./TinyTypeView/Component";
import { h1, div, button } from "./TinyTypeView/HtmlTypes";
import { Root } from "./TinyTypeView/Root";
import { boundInput } from "./TinyTypeView/BoundTypes";
var WebsiteInvesting = (function (_super) {
    __extends(WebsiteInvesting, _super);
    function WebsiteInvesting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoursPerMonth = 5;
        _this.valuePerHour = 50;
        _this.siteCost = 1;
        _this.netIncomePerMonth = 1;
        _this.netIncomePerYear = function () {
            return _this.netIncomePerMonth * 12;
        };
        _this.breakEvenYears = function () {
            return _this.siteCost / (_this.netIncomePerMonth - (_this.hoursPerMonth * _this.valuePerHour));
        };
        _this.ROIOnCashAnually = function () {
            return (_this.netIncomePerMonth - (_this.hoursPerMonth * _this.valuePerHour)) / _this.siteCost;
        };
        return _this;
    }
    WebsiteInvesting.prototype.template = function () {
        return div({}, [
            h1({}, "Website Investing"),
            div({}, "I wanted to use a few values to see if I should purchase another person's website and run it."),
            div({}, "Hours Per Month"),
            boundInput(this, 'hoursPerMonth', { type: "number" }),
            div({}, "Value Per Hour"),
            boundInput(this, 'valuePerHour', { type: "number" }),
            div({}, "Site Cost"),
            boundInput(this, 'siteCost', { type: "number" }),
            div({}, "Net Income Per Month"),
            boundInput(this, 'netIncomePerMonth', { type: "number" }),
            h1({}, "Results"),
            div({}, "Net Income Per Year: " + this.netIncomePerYear()),
            div({}, "Break Even Years: " + this.breakEvenYears()),
            div({}, "ROI On Cash Annually: " + this.ROIOnCashAnually())
        ]);
    };
    return WebsiteInvesting;
}(Component));
var BenToolsComponent = (function (_super) {
    __extends(BenToolsComponent, _super);
    function BenToolsComponent() {
        var _this = _super.call(this) || this;
        _this.ToolOptions = [];
        _this.SelectedTool = null;
        _this.renderToolOptions = function () {
            return div({}, _this.ToolOptions.map(function (item, index) { return button({ onclick: function () { return _this.selectTool(item); } }, "Item " + index); }));
        };
        _this.selectTool = function (item) {
            _this.SelectedTool = item;
        };
        return _this;
    }
    BenToolsComponent.prototype.template = function () {
        return div({}, [
            h1({}, "Pick your tool"),
            this.renderToolOptions()
        ].concat(this.renderComponents([this.SelectedTool])));
    };
    return BenToolsComponent;
}(Component));
var node = document.createElement('div');
document.body.appendChild(node);
var toolsModel = new BenToolsComponent();
var root = new Root(toolsModel, node);
toolsModel.SelectedTool = new WebsiteInvesting();
toolsModel.ToolOptions.push(toolsModel.SelectedTool);
