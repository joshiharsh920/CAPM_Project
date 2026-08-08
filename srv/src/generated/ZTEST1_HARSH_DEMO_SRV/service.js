"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ztest1HarshDemoSrv = ztest1HarshDemoSrv;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ZitbdataSetApi_1 = require("./ZitbdataSetApi");
const ZtilesetSetApi_1 = require("./ZtilesetSetApi");
const CustomeTileSetApi_1 = require("./CustomeTileSetApi");
const ZformdataSetApi_1 = require("./ZformdataSetApi");
const ZtestharshDemoApi_1 = require("./ZtestharshDemoApi");
const ZtestharshDemo2Api_1 = require("./ZtestharshDemo2Api");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function ztest1HarshDemoSrv(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Ztest1HarshDemoSrv((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class Ztest1HarshDemoSrv {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get zitbdataSetApi() {
        const api = this.initApi('zitbdataSetApi', ZitbdataSetApi_1.ZitbdataSetApi);
        const linkedApis = [this.initApi('ztilesetSetApi', ZtilesetSetApi_1.ZtilesetSetApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get ztilesetSetApi() {
        return this.initApi('ztilesetSetApi', ZtilesetSetApi_1.ZtilesetSetApi);
    }
    get customeTileSetApi() {
        return this.initApi('customeTileSetApi', CustomeTileSetApi_1.CustomeTileSetApi);
    }
    get zformdataSetApi() {
        return this.initApi('zformdataSetApi', ZformdataSetApi_1.ZformdataSetApi);
    }
    get ztestharshDemoApi() {
        return this.initApi('ztestharshDemoApi', ZtestharshDemoApi_1.ZtestharshDemoApi);
    }
    get ztestharshDemo2Api() {
        return this.initApi('ztestharshDemo2Api', ZtestharshDemo2Api_1.ZtestharshDemo2Api);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map