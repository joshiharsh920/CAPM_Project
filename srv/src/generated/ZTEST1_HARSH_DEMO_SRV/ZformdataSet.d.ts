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
import type { ZformdataSetApi } from './ZformdataSetApi';
/**
 * This class represents the entity "ZFORMDATASet" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export declare class ZformdataSet<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements ZformdataSetType<T>
{
  /**
   * Technical entity name for ZformdataSet.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ZformdataSet entity.
   */
  static _keys: string[];
  /**
   * Form Bundle ID.
   */
  formid: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Form Bundle Status.
   * Maximum length: 10.
   */
  formstatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Step Number.
   */
  stepno: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Form Type.
   * Maximum length: 10.
   */
  formtype: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ZformdataSetApi<T>);
}
export interface ZformdataSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formid: DeserializedType<T, 'Edm.Int32'>;
  formstatus: DeserializedType<T, 'Edm.String'>;
  stepno: DeserializedType<T, 'Edm.Byte'>;
  formtype: DeserializedType<T, 'Edm.String'>;
}
