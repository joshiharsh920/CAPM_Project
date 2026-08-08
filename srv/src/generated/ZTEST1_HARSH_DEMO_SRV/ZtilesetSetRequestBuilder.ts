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
import { ZtilesetSet } from './ZtilesetSet';

/**
 * Request builder class for operations supported on the {@link ZtilesetSet} entity.
 */
export class ZtilesetSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZtilesetSet<T>, T> {
  /**
   * Returns a request builder for querying all `ZtilesetSet` entities.
   * @returns A request builder for creating requests to retrieve all `ZtilesetSet` entities.
   */
  getAll(): GetAllRequestBuilder<ZtilesetSet<T>, T> {
    return new GetAllRequestBuilder<ZtilesetSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ZtilesetSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ZtilesetSet`.
   */
  create(entity: ZtilesetSet<T>): CreateRequestBuilder<ZtilesetSet<T>, T> {
    return new CreateRequestBuilder<ZtilesetSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ZtilesetSet` entity based on its keys.
   * @param tileId Key property. See {@link ZtilesetSet.tileId}.
   * @param objectId Key property. See {@link ZtilesetSet.objectId}.
   * @returns A request builder for creating requests to retrieve one `ZtilesetSet` entity based on its keys.
   */
  getByKey(
    tileId: DeserializedType<T, 'Edm.String'>,
    objectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZtilesetSet<T>, T> {
    return new GetByKeyRequestBuilder<ZtilesetSet<T>, T>(this.entityApi, {
      TileId: tileId,
      ObjectId: objectId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ZtilesetSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZtilesetSet`.
   */
  update(entity: ZtilesetSet<T>): UpdateRequestBuilder<ZtilesetSet<T>, T> {
    return new UpdateRequestBuilder<ZtilesetSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ZtilesetSet`.
   * @param tileId Key property. See {@link ZtilesetSet.tileId}.
   * @param objectId Key property. See {@link ZtilesetSet.objectId}.
   * @returns A request builder for creating requests that delete an entity of type `ZtilesetSet`.
   */
  delete(
    tileId: string,
    objectId: string
  ): DeleteRequestBuilder<ZtilesetSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ZtilesetSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ZtilesetSet` by taking the entity as a parameter.
   */
  delete(entity: ZtilesetSet<T>): DeleteRequestBuilder<ZtilesetSet<T>, T>;
  delete(
    tileIdOrEntity: any,
    objectId?: string
  ): DeleteRequestBuilder<ZtilesetSet<T>, T> {
    return new DeleteRequestBuilder<ZtilesetSet<T>, T>(
      this.entityApi,
      tileIdOrEntity instanceof ZtilesetSet
        ? tileIdOrEntity
        : {
            TileId: tileIdOrEntity!,
            ObjectId: objectId!
          }
    );
  }
}
