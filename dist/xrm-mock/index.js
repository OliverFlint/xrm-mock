"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var attribute_mock_1 = require("./page/attribute/attribute.mock");
exports.AttributeMock = attribute_mock_1.AttributeMock;
var autolookupcontrol_mock_1 = require("./page/autolookupcontrol/autolookupcontrol.mock");
exports.AutoLookupControlMock = autolookupcontrol_mock_1.AutoLookupControlMock;
var booleanattribute_mock_1 = require("./page/booleanattribute/booleanattribute.mock");
exports.BooleanAttributeMock = booleanattribute_mock_1.BooleanAttributeMock;
var clientcontext_mock_1 = require("./clientcontext/clientcontext.mock");
exports.ClientContextMock = clientcontext_mock_1.ClientContextMock;
var context_mock_1 = require("./context/context.mock");
exports.ContextMock = context_mock_1.ContextMock;
var control_mock_1 = require("./page/control/control.mock");
exports.ControlMock = control_mock_1.ControlMock;
var data_mock_1 = require("./data/data.mock");
exports.DataMock = data_mock_1.DataMock;
var dateattribute_mock_1 = require("./page/dateattribute/dateattribute.mock");
exports.DateAttributeMock = dateattribute_mock_1.DateAttributeMock;
var datecontrol_mock_1 = require("./page/datecontrol/datecontrol.mock");
exports.DateControlMock = datecontrol_mock_1.DateControlMock;
var entity_mock_1 = require("./page/entity/entity.mock");
exports.EntityMock = entity_mock_1.EntityMock;
var enumattribute_mock_1 = require("./page/enumattribute/enumattribute.mock");
exports.EnumAttributeMock = enumattribute_mock_1.EnumAttributeMock;
var formitem_mock_1 = require("./page/formitem/formitem.mock");
exports.FormItemMock = formitem_mock_1.FormItemMock;
var formopenparameters_mock_1 = require("./utility/formopenparameters/formopenparameters.mock");
exports.FormOpenParametersMock = formopenparameters_mock_1.FormOpenParametersMock;
var formselector_mock_1 = require("./page/formselector/formselector.mock");
exports.FormSelectorMock = formselector_mock_1.FormSelectorMock;
var itemcollection_mock_1 = require("./collection/itemcollection/itemcollection.mock");
exports.ItemCollectionMock = itemcollection_mock_1.ItemCollectionMock;
var lookupattribute_mock_1 = require("./page/lookupattribute/lookupattribute.mock");
exports.LookupAttributeMock = lookupattribute_mock_1.LookupAttributeMock;
var lookupcontrol_mock_1 = require("./page/lookupcontrol/lookupcontrol.mock");
exports.LookupControlMock = lookupcontrol_mock_1.LookupControlMock;
var lookupvalue_mock_1 = require("./page/lookupvalue/lookupvalue.mock");
exports.LookupValueMock = lookupvalue_mock_1.LookupValueMock;
var numberattribute_mock_1 = require("./page/numberattribute/numberattribute.mock");
exports.NumberAttributeMock = numberattribute_mock_1.NumberAttributeMock;
var numbercontrol_mock_1 = require("./page/numbercontrol/numbercontrol.mock");
exports.NumberControlMock = numbercontrol_mock_1.NumberControlMock;
var openparameters_mock_1 = require("./utility/openparameters/openparameters.mock");
exports.OpenParametersMock = openparameters_mock_1.OpenParametersMock;
var optionsetattribute_mock_1 = require("./page/optionsetattribute/optionsetattribute.mock");
exports.OptionSetAttributeMock = optionsetattribute_mock_1.OptionSetAttributeMock;
var optionsetcontrol_mock_1 = require("./page/optionsetcontrol/optionsetcontrol.mock");
exports.OptionSetControlMock = optionsetcontrol_mock_1.OptionSetControlMock;
var optionsetvalue_mock_1 = require("./page/optionsetvalue/optionsetvalue.mock");
exports.OptionSetValueMock = optionsetvalue_mock_1.OptionSetValueMock;
var page_mock_1 = require("./page/page.mock");
exports.PageMock = page_mock_1.PageMock;
var processdictionary_mock_1 = require("./data/processdictionary/processdictionary.mock");
exports.ProcessDictionaryMock = processdictionary_mock_1.ProcessDictionaryMock;
var processmanager_mock_1 = require("./data/processmanager/processmanager.mock");
exports.ProcessManagerMock = processmanager_mock_1.ProcessManagerMock;
var process_mock_1 = require("./page/process/process.mock");
exports.ProcessMock = process_mock_1.ProcessMock;
var section_mock_1 = require("./page/section/section.mock");
exports.SectionMock = section_mock_1.SectionMock;
var stage_mock_1 = require("./page/stage/stage.mock");
exports.StageMock = stage_mock_1.StageMock;
var standardcontrol_mock_1 = require("./page/standardcontrol/standardcontrol.mock");
exports.StandardControlMock = standardcontrol_mock_1.StandardControlMock;
var step_mock_1 = require("./page/step/step.mock");
exports.StepMock = step_mock_1.StepMock;
var stringattribute_mock_1 = require("./page/stringattribute/stringattribute.mock");
exports.StringAttributeMock = stringattribute_mock_1.StringAttributeMock;
var stringcontrol_mock_1 = require("./page/stringcontrol/stringcontrol.mock");
exports.StringControlMock = stringcontrol_mock_1.StringControlMock;
var uicangetvisibleelement_mock_1 = require("./page/uicangetvisibleelement/uicangetvisibleelement.mock");
exports.UiCanGetVisibleElementMock = uicangetvisibleelement_mock_1.UiCanGetVisibleElementMock;
var uifocusable_mock_1 = require("./page/uifocusable/uifocusable.mock");
exports.UiFocusableMock = uifocusable_mock_1.UiFocusableMock;
var uikeypressable_mock_1 = require("./page/uikeypressable/uikeypressable.mock");
exports.UiKeyPressableMock = uikeypressable_mock_1.UiKeyPressableMock;
var uilabelelement_mock_1 = require("./page/uilabelelement/uilabelelement.mock");
exports.UiLabelElementMock = uilabelelement_mock_1.UiLabelElementMock;
var ui_mock_1 = require("./ui/ui.mock");
exports.UiMock = ui_mock_1.UiMock;
var uistandardelement_mock_1 = require("./page/uistandardelement/uistandardelement.mock");
exports.UiStandardElementMock = uistandardelement_mock_1.UiStandardElementMock;
var utility_mock_1 = require("./utility/utility.mock");
exports.UtilityMock = utility_mock_1.UtilityMock;
var window_mock_1 = require("./window.mock");
exports.WindowMock = window_mock_1.WindowMock;
var xrmstatic_mock_1 = require("./xrmstatic.mock");
exports.XrmStaticMock = xrmstatic_mock_1.XrmStaticMock;
