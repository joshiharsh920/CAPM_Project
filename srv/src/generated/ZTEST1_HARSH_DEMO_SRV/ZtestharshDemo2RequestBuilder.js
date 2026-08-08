"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtestharshDemo2RequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ZtestharshDemo2} entity.
 */
class ZtestharshDemo2RequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ZtestharshDemo2` entities.
     * @returns A request builder for creating requests to retrieve all `ZtestharshDemo2` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ZtestharshDemo2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ZtestharshDemo2`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ZtestharshDemo2` entity based on its keys.
     * @param params1 Key property. See {@link ZtestharshDemo2.params1}.
     * @returns A request builder for creating requests to retrieve one `ZtestharshDemo2` entity based on its keys.
     */
    getByKey(params1) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            params1: params1
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ZtestharshDemo2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ZtestharshDemo2`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.ZtestharshDemo2RequestBuilder = ZtestharshDemo2RequestBuilder;
//# sourceMappingURL=ZtestharshDemo2RequestBuilder.js.map