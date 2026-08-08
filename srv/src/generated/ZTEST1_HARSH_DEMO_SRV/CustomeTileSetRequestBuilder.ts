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
import { CustomeTileSet } from './CustomeTileSet';

/**
 * Request builder class for operations supported on the {@link CustomeTileSet} entity.
 */
export class CustomeTileSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomeTileSet<T>, T> {
  /**
   * Returns a request builder for querying all `CustomeTileSet` entities.
   * @returns A request builder for creating requests to retrieve all `CustomeTileSet` entities.
   */
  getAll(): GetAllRequestBuilder<CustomeTileSet<T>, T> {
    return new GetAllRequestBuilder<CustomeTileSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomeTileSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomeTileSet`.
   */
  create(
    entity: CustomeTileSet<T>
  ): CreateRequestBuilder<CustomeTileSet<T>, T> {
    return new CreateRequestBuilder<CustomeTileSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomeTileSet` entity based on its keys.
   * @param customerid Key property. See {@link CustomeTileSet.customerid}.
   * @returns A request builder for creating requests to retrieve one `CustomeTileSet` entity based on its keys.
   */
  getByKey(
    customerid: DeserializedType<T, 'Edm.Int16'>
  ): GetByKeyRequestBuilder<CustomeTileSet<T>, T> {
    return new GetByKeyRequestBuilder<CustomeTileSet<T>, T>(this.entityApi, {
      Customerid: customerid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomeTileSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomeTileSet`.
   */
  update(
    entity: CustomeTileSet<T>
  ): UpdateRequestBuilder<CustomeTileSet<T>, T> {
    return new UpdateRequestBuilder<CustomeTileSet<T>, T>(
      this.entityApi,
      entity
    );
  }
}
