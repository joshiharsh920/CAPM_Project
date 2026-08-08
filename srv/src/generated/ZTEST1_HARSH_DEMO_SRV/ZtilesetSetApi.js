"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtilesetSetApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZtilesetSet_1 = require("./ZtilesetSet");
const ZtilesetSetRequestBuilder_1 = require("./ZtilesetSetRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ZtilesetSetApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ZtilesetSet_1.ZtilesetSet;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ZtilesetSetApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ZtilesetSetRequestBuilder_1.ZtilesetSetRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ZtilesetSet_1.ZtilesetSet, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link tileId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TILE_ID: fieldBuilder.buildEdmTypeField('TileId', 'Edm.String', false),
                /**
                 * Static representation of the {@link objectId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBJECT_ID: fieldBuilder.buildEdmTypeField('ObjectId', 'Edm.String', false),
                /**
                 * Static representation of the {@link tileTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TILE_TITLE: fieldBuilder.buildEdmTypeField('TileTitle', 'Edm.String', false),
                /**
                 * Static representation of the {@link tileSubtitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TILE_SUBTITLE: fieldBuilder.buildEdmTypeField('TileSubtitle', 'Edm.String', false),
                /**
                 * Static representation of the {@link icon} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ICON: fieldBuilder.buildEdmTypeField('Icon', 'Edm.String', false),
                /**
                 * Static representation of the {@link targetView} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_VIEW: fieldBuilder.buildEdmTypeField('TargetView', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ZtilesetSet_1.ZtilesetSet)
            };
        }
        return this._schema;
    }
}
exports.ZtilesetSetApi = ZtilesetSetApi;
//# sourceMappingURL=ZtilesetSetApi.js.map