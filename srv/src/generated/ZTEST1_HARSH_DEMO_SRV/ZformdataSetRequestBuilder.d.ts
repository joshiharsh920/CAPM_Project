/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ZformdataSet } from './ZformdataSet';
/**
 * Request builder class for operations supported on the {@link ZformdataSet} entity.
 */
export declare class ZformdataSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZformdataSet<T>, T> {
  /**
   * Returns a request builder for querying all `ZformdataSet` entities.
   * @returns A request builder for creating requests to retrieve all `ZformdataSet` entities.
   */
  getAll(): GetAllRequestBuilder<ZformdataSet<T>, T>;
  /**
   * Returns a request builder for retrieving one `ZformdataSet` entity based on its keys.
   * @param formid Key property. See {@link ZformdataSet.formid}.
   * @returns A request builder for creating requests to retrieve one `ZformdataSet` entity based on its keys.
   */
  getByKey(
    formid: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ZformdataSet<T>, T>;
}
