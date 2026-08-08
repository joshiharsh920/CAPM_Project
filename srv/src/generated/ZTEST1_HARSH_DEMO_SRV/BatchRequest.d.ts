/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  ZitbdataSet,
  ZtilesetSet,
  CustomeTileSet,
  ZformdataSet,
  ZtestharshDemo,
  ZtestharshDemo2
} from './index';
/**
 * Batch builder for operations supported on the Ztest1 Harsh Demo Srv.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Ztest1 Harsh Demo Srv.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultZtest1HarshDemoSrvPath =
  '/sap/opu/odata/sap/ZTEST1_HARSH_DEMO_SRV';
export type ReadZtest1HarshDemoSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>;
export type WriteZtest1HarshDemoSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>;
