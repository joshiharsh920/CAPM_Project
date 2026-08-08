"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZitbdataSetApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZitbdataSet_1 = require("./ZitbdataSet");
const ZitbdataSetRequestBuilder_1 = require("./ZitbdataSetRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ZitbdataSetApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ZitbdataSet_1.ZitbdataSet;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ZitbdataSetApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ZTILESET_SET: new odata_v2_1.Link('ZTILESETSet', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ZitbdataSetRequestBuilder_1.ZitbdataSetRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ZitbdataSet_1.ZitbdataSet, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link objectId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBJECT_ID: fieldBuilder.buildEdmTypeField('ObjectId', 'Edm.String', false),
                /**
                 * Static representation of the {@link tabKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAB_KEY: fieldBuilder.buildEdmTypeField('TabKey', 'Edm.String', false),
                /**
                 * Static representation of the {@link tabText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAB_TEXT: fieldBuilder.buildEdmTypeField('TabText', 'Edm.String', false),
                /**
                 * Static representation of the {@link tabOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAB_ORDER: fieldBuilder.buildEdmTypeField('TabOrder', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link tabCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAB_COUNT: fieldBuilder.buildEdmTypeField('TabCount', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link tabIcon} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAB_ICON: fieldBuilder.buildEdmTypeField('TabIcon', 'Edm.String', false),
                /**
                 * Static representation of the {@link isVisible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_VISIBLE: fieldBuilder.buildEdmTypeField('IsVisible', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ZitbdataSet_1.ZitbdataSet)
            };
        }
        return this._schema;
    }
}
exports.ZitbdataSetApi = ZitbdataSetApi;
//# sourceMappingURL=ZitbdataSetApi.js.map