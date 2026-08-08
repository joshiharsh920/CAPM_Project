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
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ZitbdataSet } from './ZitbdataSet';

/**
 * Request builder class for operations supported on the {@link ZitbdataSet} entity.
 */
export class ZitbdataSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZitbdataSet<T>, T> {
  /**
   * Returns a request builder for querying all `ZitbdataSet` entities.
   * @returns A request builder for creating requests to retrieve all `ZitbdataSet` entities.
   */
  getAll(): GetAllRequestBuilder<ZitbdataSet<T>, T> {
    return new GetAllRequestBuilder<ZitbdataSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `ZitbdataSet` entity based on its keys.
   * @param objectId Key property. See {@link ZitbdataSet.objectId}.
   * @param tabKey Key property. See {@link ZitbdataSet.tabKey}.
   * @returns A request builder for creating requests to retrieve one `ZitbdataSet` entity based on its keys.
   */
  getByKey(
    objectId: DeserializedType<T, 'Edm.String'>,
    tabKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZitbdataSet<T>, T> {
    return new GetByKeyRequestBuilder<ZitbdataSet<T>, T>(this.entityApi, {
      ObjectId: objectId,
      TabKey: tabKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ZitbdataSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZitbdataSet`.
   */
  update(entity: ZitbdataSet<T>): UpdateRequestBuilder<ZitbdataSet<T>, T> {
    return new UpdateRequestBuilder<ZitbdataSet<T>, T>(this.entityApi, entity);
  }
}
