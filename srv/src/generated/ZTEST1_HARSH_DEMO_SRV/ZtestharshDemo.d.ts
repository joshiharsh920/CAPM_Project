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
import type { ZtestharshDemoApi } from './ZtestharshDemoApi';
/**
 * This class represents the entity "ZTESTHARSHDemo" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export declare class ZtestharshDemo<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements ZtestharshDemoType<T>
{
  /**
   * Technical entity name for ZtestharshDemo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ZtestharshDemo entity.
   */
  static _keys: string[];
  /**
   * Client.
   * Maximum length: 3.
   */
  mandt: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER ID.
   * Maximum length: 20.
   */
  orderid: DeserializedType<T, 'Edm.String'>;
  /**
   * CUSTOMER ID.
   * Maximum length: 10.
   */
  customerid: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Name.
   * Maximum length: 20.
   */
  customername: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER DATE.
   * Maximum length: 10.
   */
  orderdate: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER STATUS.
   * Maximum length: 10.
   */
  orderstatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Individual Addr.
   * Maximum length: 132.
   */
  address: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ZtestharshDemoApi<T>);
}
export interface ZtestharshDemoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mandt: DeserializedType<T, 'Edm.String'>;
  orderid: DeserializedType<T, 'Edm.String'>;
  customerid: DeserializedType<T, 'Edm.String'>;
  customername: DeserializedType<T, 'Edm.String'>;
  orderdate: DeserializedType<T, 'Edm.String'>;
  orderstatus: DeserializedType<T, 'Edm.String'>;
  address: DeserializedType<T, 'Edm.String'>;
}
