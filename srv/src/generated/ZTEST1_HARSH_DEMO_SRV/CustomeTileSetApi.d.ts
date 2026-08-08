/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomeTileSet } from './CustomeTileSet';
import { CustomeTileSetRequestBuilder } from './CustomeTileSetRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class CustomeTileSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomeTileSet<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CustomeTileSetApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof CustomeTileSet;
  requestBuilder(): CustomeTileSetRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CustomeTileSet<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<CustomeTileSet<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof CustomeTileSet, DeSerializersT>;
  private _schema?;
  get schema(): {
    CUSTOMERID: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    ZFIRSTNAME: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZLASTNAME: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGE: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    RELIGION: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHONENUMBER: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDNUMBER: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    HOMEADD: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORMID: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      CustomeTileSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustomeTileSet<DeSerializers>>;
  };
}
