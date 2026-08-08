/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ZtestharshDemo } from './ZtestharshDemo';

/**
 * Request builder class for operations supported on the {@link ZtestharshDemo} entity.
 */
export class ZtestharshDemoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZtestharshDemo<T>, T> {
  /**
   * Returns a request builder for querying all `ZtestharshDemo` entities.
   * @returns A request builder for creating requests to retrieve all `ZtestharshDemo` entities.
   */
  getAll(): GetAllRequestBuilder<ZtestharshDemo<T>, T> {
    return new GetAllRequestBuilder<ZtestharshDemo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ZtestharshDemo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ZtestharshDemo`.
   */
  create(
    entity: ZtestharshDemo<T>
  ): CreateRequestBuilder<ZtestharshDemo<T>, T> {
    return new CreateRequestBuilder<ZtestharshDemo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ZtestharshDemo` entity based on its keys.
   * @param orderid Key property. See {@link ZtestharshDemo.orderid}.
   * @returns A request builder for creating requests to retrieve one `ZtestharshDemo` entity based on its keys.
   */
  getByKey(
    orderid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZtestharshDemo<T>, T> {
    return new GetByKeyRequestBuilder<ZtestharshDemo<T>, T>(this.entityApi, {
      Orderid: orderid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ZtestharshDemo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZtestharshDemo`.
   */
  update(
    entity: ZtestharshDemo<T>
  ): UpdateRequestBuilder<ZtestharshDemo<T>, T> {
    return new UpdateRequestBuilder<ZtestharshDemo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ZtestharshDemo`.
   * @param orderid Key property. See {@link ZtestharshDemo.orderid}.
   * @returns A request builder for creating requests that delete an entity of type `ZtestharshDemo`.
   */
  delete(orderid: string): DeleteRequestBuilder<ZtestharshDemo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ZtestharshDemo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ZtestharshDemo` by taking the entity as a parameter.
   */
  delete(entity: ZtestharshDemo<T>): DeleteRequestBuilder<ZtestharshDemo<T>, T>;
  delete(orderidOrEntity: any): DeleteRequestBuilder<ZtestharshDemo<T>, T> {
    return new DeleteRequestBuilder<ZtestharshDemo<T>, T>(
      this.entityApi,
      orderidOrEntity instanceof ZtestharshDemo
        ? orderidOrEntity
        : { Orderid: orderidOrEntity! }
    );
  }
}
