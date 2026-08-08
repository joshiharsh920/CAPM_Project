"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZformdataSetApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZformdataSet_1 = require("./ZformdataSet");
const ZformdataSetRequestBuilder_1 = require("./ZformdataSetRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ZformdataSetApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ZformdataSet_1.ZformdataSet;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ZformdataSetApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ZformdataSetRequestBuilder_1.ZformdataSetRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ZformdataSet_1.ZformdataSet, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link formid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMID: fieldBuilder.buildEdmTypeField('Formid', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link formstatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMSTATUS: fieldBuilder.buildEdmTypeField('Formstatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link stepno} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STEPNO: fieldBuilder.buildEdmTypeField('Stepno', 'Edm.Byte', false),
                /**
                 * Static representation of the {@link formtype} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMTYPE: fieldBuilder.buildEdmTypeField('Formtype', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ZformdataSet_1.ZformdataSet)
            };
        }
        return this._schema;
    }
}
exports.ZformdataSetApi = ZformdataSetApi;
//# sourceMappingURL=ZformdataSetApi.js.map