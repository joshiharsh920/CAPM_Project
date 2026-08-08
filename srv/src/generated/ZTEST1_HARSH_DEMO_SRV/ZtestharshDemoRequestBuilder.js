"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZtestharshDemoRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ZtestharshDemo_1 = require("./ZtestharshDemo");
/**
 * Request builder class for operations supported on the {@link ZtestharshDemo} entity.
 */
class ZtestharshDemoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ZtestharshDemo` entities.
     * @returns A request builder for creating requests to retrieve all `ZtestharshDemo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ZtestharshDemo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ZtestharshDemo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ZtestharshDemo` entity based on its keys.
     * @param orderid Key property. See {@link ZtestharshDemo.orderid}.
     * @returns A request builder for creating requests to retrieve one `ZtestharshDemo` entity based on its keys.
     */
    getByKey(orderid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Orderid: orderid
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ZtestharshDemo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ZtestharshDemo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderidOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, orderidOrEntity instanceof ZtestharshDemo_1.ZtestharshDemo
            ? orderidOrEntity
            : { Orderid: orderidOrEntity });
    }
}
exports.ZtestharshDemoRequestBuilder = ZtestharshDemoRequestBuilder;
//# sourceMappingURL=ZtestharshDemoRequestBuilder.js.map