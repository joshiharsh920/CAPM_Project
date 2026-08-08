/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtestharshDemo2 } from './ZtestharshDemo2';
import { ZtestharshDemo2RequestBuilder } from './ZtestharshDemo2RequestBuilder';
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
export class ZtestharshDemo2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtestharshDemo2<DeSerializersT>, DeSerializersT> {
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
  ): ZtestharshDemo2Api<DeSerializersT> {
    return new ZtestharshDemo2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ZtestharshDemo2;

  requestBuilder(): ZtestharshDemo2RequestBuilder<DeSerializersT> {
    return new ZtestharshDemo2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZtestharshDemo2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZtestharshDemo2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ZtestharshDemo2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ZtestharshDemo2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ZtestharshDemo2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', false),
        /**
         * Static representation of the {@link params3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMS_3: fieldBuilder.buildEdmTypeField(
          'params3',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link result} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT: fieldBuilder.buildEdmTypeField('result', 'Edm.String', false),
        /**
         * Static representation of the {@link params2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMS_2: fieldBuilder.buildEdmTypeField(
          'params2',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link params1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMS_1: fieldBuilder.buildEdmTypeField(
          'params1',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZtestharshDemo2)
      };
    }

    return this._schema;
  }
}
