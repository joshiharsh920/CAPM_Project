/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtestharshDemo } from './ZtestharshDemo';
import { ZtestharshDemoRequestBuilder } from './ZtestharshDemoRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class ZtestharshDemoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtestharshDemo<DeSerializersT>, DeSerializersT> {
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ZtestharshDemoApi<DeSerializersT> {
    return new ZtestharshDemoApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ZtestharshDemo;

  requestBuilder(): ZtestharshDemoRequestBuilder<DeSerializersT> {
    return new ZtestharshDemoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZtestharshDemo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZtestharshDemo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ZtestharshDemo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ZtestharshDemo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ZtestharshDemo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mandt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDT: fieldBuilder.buildEdmTypeField('Mandt', 'Edm.String', false),
        /**
         * Static representation of the {@link orderid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERID: fieldBuilder.buildEdmTypeField('Orderid', 'Edm.String', false),
        /**
         * Static representation of the {@link customerid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERID: fieldBuilder.buildEdmTypeField(
          'Customerid',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customername} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERNAME: fieldBuilder.buildEdmTypeField(
          'Customername',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERDATE: fieldBuilder.buildEdmTypeField(
          'Orderdate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderstatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERSTATUS: fieldBuilder.buildEdmTypeField(
          'Orderstatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZtestharshDemo)
      };
    }

    return this._schema;
  }
}
