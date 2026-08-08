"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomeTileSetApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomeTileSet_1 = require("./CustomeTileSet");
const CustomeTileSetRequestBuilder_1 = require("./CustomeTileSetRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomeTileSetApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomeTileSet_1.CustomeTileSet;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomeTileSetApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomeTileSetRequestBuilder_1.CustomeTileSetRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomeTileSet_1.CustomeTileSet, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link customerid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMERID: fieldBuilder.buildEdmTypeField('Customerid', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link zfirstname} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ZFIRSTNAME: fieldBuilder.buildEdmTypeField('Zfirstname', 'Edm.String', false),
                /**
                 * Static representation of the {@link zlastname} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ZLASTNAME: fieldBuilder.buildEdmTypeField('Zlastname', 'Edm.String', false),
                /**
                 * Static representation of the {@link age} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Byte', false),
                /**
                 * Static representation of the {@link religion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELIGION: fieldBuilder.buildEdmTypeField('Religion', 'Edm.String', false),
                /**
                 * Static representation of the {@link email} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', false),
                /**
                 * Static representation of the {@link phonenumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONENUMBER: fieldBuilder.buildEdmTypeField('Phonenumber', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
                /**
                 * Static representation of the {@link idnumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IDNUMBER: fieldBuilder.buildEdmTypeField('Idnumber', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link homeadd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOMEADD: fieldBuilder.buildEdmTypeField('Homeadd', 'Edm.String', false),
                /**
                 * Static representation of the {@link formid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMID: fieldBuilder.buildEdmTypeField('Formid', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link remarks} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomeTileSet_1.CustomeTileSet)
            };
        }
        return this._schema;
    }
}
exports.CustomeTileSetApi = CustomeTileSetApi;
//# sourceMappingURL=CustomeTileSetApi.js.map