"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZitbdataSetRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ZitbdataSet} entity.
 */
class ZitbdataSetRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ZitbdataSet` entities.
     * @returns A request builder for creating requests to retrieve all `ZitbdataSet` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `ZitbdataSet` entity based on its keys.
     * @param objectId Key property. See {@link ZitbdataSet.objectId}.
     * @param tabKey Key property. See {@link ZitbdataSet.tabKey}.
     * @returns A request builder for creating requests to retrieve one `ZitbdataSet` entity based on its keys.
     */
    getByKey(objectId, tabKey) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ObjectId: objectId,
            TabKey: tabKey
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ZitbdataSet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ZitbdataSet`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.ZitbdataSetRequestBuilder = ZitbdataSetRequestBuilder;
//# sourceMappingURL=ZitbdataSetRequestBuilder.js.map