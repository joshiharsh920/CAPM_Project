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
import type { ZtestharshDemo2Api } from './ZtestharshDemo2Api';
/**
 * This class represents the entity "ZTESTHARSHDemo2" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export declare class ZtestharshDemo2<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements ZtestharshDemo2Type<T>
{
  /**
   * Technical entity name for ZtestharshDemo2.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ZtestharshDemo2 entity.
   */
  static _keys: string[];
  /**
   * Status.
   * Maximum length: 20.
   */
  status: DeserializedType<T, 'Edm.String'>;
  /**
   * Params 3.
   * Maximum length: 20.
   */
  params3: DeserializedType<T, 'Edm.String'>;
  /**
   * Result.
   * Maximum length: 20.
   */
  result: DeserializedType<T, 'Edm.String'>;
  /**
   * Params 2.
   * Maximum length: 20.
   */
  params2: DeserializedType<T, 'Edm.String'>;
  /**
   * Params 1.
   * Maximum length: 20.
   */
  params1: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ZtestharshDemo2Api<T>);
}
export interface ZtestharshDemo2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  status: DeserializedType<T, 'Edm.String'>;
  params3: DeserializedType<T, 'Edm.String'>;
  result: DeserializedType<T, 'Edm.String'>;
  params2: DeserializedType<T, 'Edm.String'>;
  params1: DeserializedType<T, 'Edm.String'>;
}
