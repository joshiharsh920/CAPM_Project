/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ZtilesetSetApi } from './ZtilesetSetApi';

/**
 * This class represents the entity "ZTILESETSet" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export class ZtilesetSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ZtilesetSetType<T>
{
  /**
   * Technical entity name for ZtilesetSet.
   */
  static override _entityName = 'ZTILESETSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/ZTEST1_HARSH_DEMO_SRV';
  /**
   * All key fields of the ZtilesetSet entity.
   */
  static _keys = ['TileId', 'ObjectId'];
  /**
   * TILE_ID.
   * Maximum length: 10.
   */
  declare tileId: DeserializedType<T, 'Edm.String'>;
  /**
   * OBJECT_ID.
   * Maximum length: 10.
   */
  declare objectId: DeserializedType<T, 'Edm.String'>;
  /**
   * TILE_TITLE.
   * Maximum length: 50.
   */
  declare tileTitle: DeserializedType<T, 'Edm.String'>;
  /**
   * TILE_SUBTITLE.
   * Maximum length: 50.
   */
  declare tileSubtitle: DeserializedType<T, 'Edm.String'>;
  /**
   * ICON.
   * Maximum length: 50.
   */
  declare icon: DeserializedType<T, 'Edm.String'>;
  /**
   * TARGET_VIEW.
   * Maximum length: 30.
   */
  declare targetView: DeserializedType<T, 'Edm.String'>;
  /**
   * VALUE.
   */
  declare value: DeserializedType<T, 'Edm.Int32'>;
  /**
   * STATUS.
   * Maximum length: 1.
   */
  declare status: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ZtilesetSetApi<T>) {
    super(_entityApi);
  }
}

export interface ZtilesetSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tileId: DeserializedType<T, 'Edm.String'>;
  objectId: DeserializedType<T, 'Edm.String'>;
  tileTitle: DeserializedType<T, 'Edm.String'>;
  tileSubtitle: DeserializedType<T, 'Edm.String'>;
  icon: DeserializedType<T, 'Edm.String'>;
  targetView: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Int32'>;
  status: DeserializedType<T, 'Edm.String'>;
}
