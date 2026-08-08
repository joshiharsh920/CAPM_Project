/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtestharshDemo } from './ZtestharshDemo';
import { ZtestharshDemoRequestBuilder } from './ZtestharshDemoRequestBuilder';
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
export declare class ZtestharshDemoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtestharshDemo<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ZtestharshDemoApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof ZtestharshDemo;
  requestBuilder(): ZtestharshDemoRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ZtestharshDemo<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ZtestharshDemo<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ZtestharshDemo, DeSerializersT>;
  private _schema?;
  get schema(): {
    MANDT: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDERID: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMERID: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMERNAME: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDERDATE: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDERSTATUS: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      ZtestharshDemo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ZtestharshDemo<DeSerializers>>;
  };
}
