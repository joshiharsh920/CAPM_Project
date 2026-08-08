"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtestharshDemo2Api = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZtestharshDemo2_1 = require("./ZtestharshDemo2");
const ZtestharshDemo2RequestBuilder_1 = require("./ZtestharshDemo2RequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ZtestharshDemo2Api {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ZtestharshDemo2_1.ZtestharshDemo2;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ZtestharshDemo2Api(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ZtestharshDemo2RequestBuilder_1.ZtestharshDemo2RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ZtestharshDemo2_1.ZtestharshDemo2, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', false),
                /**
                 * Static representation of the {@link params3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMS_3: fieldBuilder.buildEdmTypeField('params3', 'Edm.String', false),
                /**
                 * Static representation of the {@link result} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESULT: fieldBuilder.buildEdmTypeField('result', 'Edm.String', false),
                /**
                 * Static representation of the {@link params2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMS_2: fieldBuilder.buildEdmTypeField('params2', 'Edm.String', false),
                /**
                 * Static representation of the {@link params1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMS_1: fieldBuilder.buildEdmTypeField('params1', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ZtestharshDemo2_1.ZtestharshDemo2)
            };
        }
        return this._schema;
    }
}
exports.ZtestharshDemo2Api = ZtestharshDemo2Api;
//# sourceMappingURL=ZtestharshDemo2Api.js.map