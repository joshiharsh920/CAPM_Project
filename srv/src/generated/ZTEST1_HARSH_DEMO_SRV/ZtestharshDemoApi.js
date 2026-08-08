"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtestharshDemoApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZtestharshDemo_1 = require("./ZtestharshDemo");
const ZtestharshDemoRequestBuilder_1 = require("./ZtestharshDemoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ZtestharshDemoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ZtestharshDemo_1.ZtestharshDemo;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ZtestharshDemoApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ZtestharshDemoRequestBuilder_1.ZtestharshDemoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ZtestharshDemo_1.ZtestharshDemo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link mandt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MANDT: fieldBuilder.buildEdmTypeField('Mandt', 'Edm.String', false),
                /**
                 * Static representation of the {@link orderid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDERID: fieldBuilder.buildEdmTypeField('Orderid', 'Edm.String', false),
                /**
                 * Static representation of the {@link customerid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMERID: fieldBuilder.buildEdmTypeField('Customerid', 'Edm.String', false),
                /**
                 * Static representation of the {@link customername} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMERNAME: fieldBuilder.buildEdmTypeField('Customername', 'Edm.String', false),
                /**
                 * Static representation of the {@link orderdate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDERDATE: fieldBuilder.buildEdmTypeField('Orderdate', 'Edm.String', false),
                /**
                 * Static representation of the {@link orderstatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDERSTATUS: fieldBuilder.buildEdmTypeField('Orderstatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link address} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ZtestharshDemo_1.ZtestharshDemo)
            };
        }
        return this._schema;
    }
}
exports.ZtestharshDemoApi = ZtestharshDemoApi;
//# sourceMappingURL=ZtestharshDemoApi.js.map