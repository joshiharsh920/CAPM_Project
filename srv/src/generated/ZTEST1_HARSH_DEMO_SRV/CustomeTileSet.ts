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
import type { CustomeTileSetApi } from './CustomeTileSetApi';

/**
 * This class represents the entity "CustomeTileSet" of service "ZTEST1_HARSH_DEMO_SRV".
 */
export class CustomeTileSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomeTileSetType<T>
{
  /**
   * Technical entity name for CustomeTileSet.
   */
  static override _entityName = 'CustomeTileSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/ZTEST1_HARSH_DEMO_SRV';
  /**
   * All key fields of the CustomeTileSet entity.
   */
  static _keys = ['Customerid'];
  /**
   * CustomerId.
   */
  declare customerid: DeserializedType<T, 'Edm.Int16'>;
  /**
   * First Name.
   * Maximum length: 20.
   */
  declare zfirstname: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   * Maximum length: 20.
   */
  declare zlastname: DeserializedType<T, 'Edm.String'>;
  /**
   * Age.
   */
  declare age: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Religion.
   * Maximum length: 15.
   */
  declare religion: DeserializedType<T, 'Edm.String'>;
  /**
   * Email Address.
   * Maximum length: 20.
   */
  declare email: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone Number.
   */
  declare phonenumber: DeserializedType<T, 'Edm.Int16'>;
  /**
   * ID.
   * Maximum length: 10.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * ID NUMBER.
   */
  declare idnumber: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Home Address.
   * Maximum length: 100.
   */
  declare homeadd: DeserializedType<T, 'Edm.String'>;
  /**
   * Form ID.
   */
  declare formid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Additional Notes.
   * Maximum length: 200.
   */
  declare remarks: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CustomeTileSetApi<T>) {
    super(_entityApi);
  }
}

export interface CustomeTileSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customerid: DeserializedType<T, 'Edm.Int16'>;
  zfirstname: DeserializedType<T, 'Edm.String'>;
  zlastname: DeserializedType<T, 'Edm.String'>;
  age: DeserializedType<T, 'Edm.Byte'>;
  religion: DeserializedType<T, 'Edm.String'>;
  email: DeserializedType<T, 'Edm.String'>;
  phonenumber: DeserializedType<T, 'Edm.Int16'>;
  id: DeserializedType<T, 'Edm.String'>;
  idnumber: DeserializedType<T, 'Edm.Int16'>;
  homeadd: DeserializedType<T, 'Edm.String'>;
  formid: DeserializedType<T, 'Edm.Int64'>;
  remarks: DeserializedType<T, 'Edm.String'>;
}
