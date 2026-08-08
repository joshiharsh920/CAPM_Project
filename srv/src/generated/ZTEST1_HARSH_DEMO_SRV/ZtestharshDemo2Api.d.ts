/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtestharshDemo2 } from './ZtestharshDemo2';
import { ZtestharshDemo2RequestBuilder } from './ZtestharshDemo2RequestBuilder';
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
export declare class ZtestharshDemo2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtestharshDemo2<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ZtestharshDemo2Api<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof ZtestharshDemo2;
  requestBuilder(): ZtestharshDemo2RequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ZtestharshDemo2<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ZtestharshDemo2<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ZtestharshDemo2, DeSerializersT>;
  private _schema?;
  get schema(): {
    STATUS: OrderableEdmTypeField<
      ZtestharshDemo2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMS_3: OrderableEdmTypeField<
      ZtestharshDemo2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESULT: OrderableEdmTypeField<
      ZtestharshDemo2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMS_2: OrderableEdmTypeField<
      ZtestharshDemo2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMS_1: OrderableEdmTypeField<
      ZtestharshDemo2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ZtestharshDemo2<DeSerializers>>;
  };
}
