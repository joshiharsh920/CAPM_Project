"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtilesetSetRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ZtilesetSet_1 = require("./ZtilesetSet");
/**
 * Request builder class for operations supported on the {@link ZtilesetSet} entity.
 */
class ZtilesetSetRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ZtilesetSet` entities.
     * @returns A request builder for creating requests to retrieve all `ZtilesetSet` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ZtilesetSet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ZtilesetSet`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ZtilesetSet` entity based on its keys.
     * @param tileId Key property. See {@link ZtilesetSet.tileId}.
     * @param objectId Key property. See {@link ZtilesetSet.objectId}.
     * @returns A request builder for creating requests to retrieve one `ZtilesetSet` entity based on its keys.
     */
    getByKey(tileId, objectId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TileId: tileId,
            ObjectId: objectId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ZtilesetSet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ZtilesetSet`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tileIdOrEntity, objectId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tileIdOrEntity instanceof ZtilesetSet_1.ZtilesetSet
            ? tileIdOrEntity
            : {
                TileId: tileIdOrEntity,
                ObjectId: objectId
            });
    }
}
exports.ZtilesetSetRequestBuilder = ZtilesetSetRequestBuilder;
//# sourceMappingURL=ZtilesetSetRequestBuilder.js.map