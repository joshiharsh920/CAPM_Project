/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ZtestharshDemo2 } from './ZtestharshDemo2';

/**
 * Request builder class for operations supported on the {@link ZtestharshDemo2} entity.
 */
export class ZtestharshDemo2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZtestharshDemo2<T>, T> {
  /**
   * Returns a request builder for querying all `ZtestharshDemo2` entities.
   * @returns A request builder for creating requests to retrieve all `ZtestharshDemo2` entities.
   */
  getAll(): GetAllRequestBuilder<ZtestharshDemo2<T>, T> {
    return new GetAllRequestBuilder<ZtestharshDemo2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ZtestharshDemo2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ZtestharshDemo2`.
   */
  create(
    entity: ZtestharshDemo2<T>
  ): CreateRequestBuilder<ZtestharshDemo2<T>, T> {
    return new CreateRequestBuilder<ZtestharshDemo2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ZtestharshDemo2` entity based on its keys.
   * @param params1 Key property. See {@link ZtestharshDemo2.params1}.
   * @returns A request builder for creating requests to retrieve one `ZtestharshDemo2` entity based on its keys.
   */
  getByKey(
    params1: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZtestharshDemo2<T>, T> {
    return new GetByKeyRequestBuilder<ZtestharshDemo2<T>, T>(this.entityApi, {
      params1: params1
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ZtestharshDemo2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZtestharshDemo2`.
   */
  update(
    entity: ZtestharshDemo2<T>
  ): UpdateRequestBuilder<ZtestharshDemo2<T>, T> {
    return new UpdateRequestBuilder<ZtestharshDemo2<T>, T>(
      this.entityApi,
      entity
    );
  }
}
