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
export declare class CustomeTileSet<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements CustomeTileSetType<T>
{
  /**
   * Technical entity name for CustomeTileSet.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the CustomeTileSet entity.
   */
  static _keys: string[];
  /**
   * CustomerId.
   */
  customerid: DeserializedType<T, 'Edm.Int16'>;
  /**
   * First Name.
   * Maximum length: 20.
   */
  zfirstname: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   * Maximum length: 20.
   */
  zlastname: DeserializedType<T, 'Edm.String'>;
  /**
   * Age.
   */
  age: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Religion.
   * Maximum length: 15.
   */
  religion: DeserializedType<T, 'Edm.String'>;
  /**
   * Email Address.
   * Maximum length: 20.
   */
  email: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone Number.
   */
  phonenumber: DeserializedType<T, 'Edm.Int16'>;
  /**
   * ID.
   * Maximum length: 10.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * ID NUMBER.
   */
  idnumber: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Home Address.
   * Maximum length: 100.
   */
  homeadd: DeserializedType<T, 'Edm.String'>;
  /**
   * Form ID.
   */
  formid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Additional Notes.
   * Maximum length: 200.
   */
  remarks: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: CustomeTileSetApi<T>);
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
