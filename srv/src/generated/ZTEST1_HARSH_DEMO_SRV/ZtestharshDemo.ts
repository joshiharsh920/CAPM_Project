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
export class ZtestharshDemo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ZtestharshDemoType<T>
{
  /**
   * Technical entity name for ZtestharshDemo.
   */
  static override _entityName = 'ZTESTHARSHDemo';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/ZTEST1_HARSH_DEMO_SRV';
  /**
   * All key fields of the ZtestharshDemo entity.
   */
  static _keys = ['Orderid'];
  /**
   * Client.
   * Maximum length: 3.
   */
  declare mandt: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER ID.
   * Maximum length: 20.
   */
  declare orderid: DeserializedType<T, 'Edm.String'>;
  /**
   * CUSTOMER ID.
   * Maximum length: 10.
   */
  declare customerid: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Name.
   * Maximum length: 20.
   */
  declare customername: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER DATE.
   * Maximum length: 10.
   */
  declare orderdate: DeserializedType<T, 'Edm.String'>;
  /**
   * ORDER STATUS.
   * Maximum length: 10.
   */
  declare orderstatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Individual Addr.
   * Maximum length: 132.
   */
  declare address: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ZtestharshDemoApi<T>) {
    super(_entityApi);
  }
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
