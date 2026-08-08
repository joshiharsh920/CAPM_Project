"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZformdataSetRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ZformdataSet} entity.
 */
class ZformdataSetRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ZformdataSet` entities.
     * @returns A request builder for creating requests to retrieve all `ZformdataSet` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `ZformdataSet` entity based on its keys.
     * @param formid Key property. See {@link ZformdataSet.formid}.
     * @returns A request builder for creating requests to retrieve one `ZformdataSet` entity based on its keys.
     */
    getByKey(formid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Formid: formid
        });
    }
}
exports.ZformdataSetRequestBuilder = ZformdataSetRequestBuilder;
//# sourceMappingURL=ZformdataSetRequestBuilder.js.map