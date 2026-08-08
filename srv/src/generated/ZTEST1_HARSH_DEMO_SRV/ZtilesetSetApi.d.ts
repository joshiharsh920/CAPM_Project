/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtilesetSet } from './ZtilesetSet';
import { ZtilesetSetRequestBuilder } from './ZtilesetSetRequestBuilder';
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
export declare class ZtilesetSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtilesetSet<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ZtilesetSetApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof ZtilesetSet;
  requestBuilder(): ZtilesetSetRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ZtilesetSet<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ZtilesetSet<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ZtilesetSet, DeSerializersT>;
  private _schema?;
  get schema(): {
    TILE_ID: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OBJECT_ID: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TILE_TITLE: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TILE_SUBTITLE: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ICON: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TARGET_VIEW: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ZtilesetSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ZtilesetSet<DeSerializers>>;
  };
}
