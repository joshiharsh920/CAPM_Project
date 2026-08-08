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
import type { ZitbdataSetApi } from './ZitbdataSetApi';
import { ZtilesetSet, ZtilesetSetType } from './ZtilesetSet';
/**
 * This class represents the entity "ZITBDATASet" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export declare class ZitbdataSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ZitbdataSetType<T>
{
  /**
   * Technical entity name for ZitbdataSet.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ZitbdataSet entity.
   */
  static _keys: string[];
  /**
   * OBJECT_ID.
   * Maximum length: 32.
   */
  objectId: DeserializedType<T, 'Edm.String'>;
  /**
   * TAB_KEY.
   * Maximum length: 20.
   */
  tabKey: DeserializedType<T, 'Edm.String'>;
  /**
   * TAB_TEXT.
   * Maximum length: 40.
   */
  tabText: DeserializedType<T, 'Edm.String'>;
  /**
   * INT4.
   */
  tabOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * INT4.
   */
  tabCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * TAB_ICON.
   * Maximum length: 30.
   */
  tabIcon: DeserializedType<T, 'Edm.String'>;
  /**
   * IS_VISIBLE.
   * Maximum length: 1.
   */
  isVisible: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link ZtilesetSet} entity.
   */
  ztilesetSet: ZtilesetSet<T>[];
  constructor(_entityApi: ZitbdataSetApi<T>);
}
export interface ZitbdataSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  objectId: DeserializedType<T, 'Edm.String'>;
  tabKey: DeserializedType<T, 'Edm.String'>;
  tabText: DeserializedType<T, 'Edm.String'>;
  tabOrder: DeserializedType<T, 'Edm.Int32'>;
  tabCount: DeserializedType<T, 'Edm.Int32'>;
  tabIcon: DeserializedType<T, 'Edm.String'>;
  isVisible: DeserializedType<T, 'Edm.String'>;
  ztilesetSet: ZtilesetSetType<T>[];
}
