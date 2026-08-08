"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomeTileSetRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link CustomeTileSet} entity.
 */
class CustomeTileSetRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `CustomeTileSet` entities.
     * @returns A request builder for creating requests to retrieve all `CustomeTileSet` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomeTileSet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomeTileSet`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `CustomeTileSet` entity based on its keys.
     * @param customerid Key property. See {@link CustomeTileSet.customerid}.
     * @returns A request builder for creating requests to retrieve one `CustomeTileSet` entity based on its keys.
     */
    getByKey(customerid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customerid: customerid
        });
    }
    /**
     * Returns a request builder for updating an entity of type `CustomeTileSet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomeTileSet`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.CustomeTileSetRequestBuilder = CustomeTileSetRequestBuilder;
//# sourceMappingURL=CustomeTileSetRequestBuilder.js.map