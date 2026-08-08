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
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
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
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultZtest1HarshDemoSrvPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Ztest1 Harsh Demo Srv.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>
    | Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteZtest1HarshDemoSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultZtest1HarshDemoSrvPath =
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
