/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZformdataSet } from './ZformdataSet';
import { ZformdataSetRequestBuilder } from './ZformdataSetRequestBuilder';
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
export declare class ZformdataSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZformdataSet<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ZformdataSetApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof ZformdataSet;
  requestBuilder(): ZformdataSetRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ZformdataSet<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ZformdataSet<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ZformdataSet, DeSerializersT>;
  private _schema?;
  get schema(): {
    FORMID: OrderableEdmTypeField<
      ZformdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORMSTATUS: OrderableEdmTypeField<
      ZformdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STEPNO: OrderableEdmTypeField<
      ZformdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    FORMTYPE: OrderableEdmTypeField<
      ZformdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ZformdataSet<DeSerializers>>;
  };
}
