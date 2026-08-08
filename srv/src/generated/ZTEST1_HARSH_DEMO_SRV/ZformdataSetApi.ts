/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZformdataSet } from './ZformdataSet';
import { ZformdataSetRequestBuilder } from './ZformdataSetRequestBuilder';
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
export class ZformdataSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZformdataSet<DeSerializersT>, DeSerializersT> {
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
  ): ZformdataSetApi<DeSerializersT> {
    return new ZformdataSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ZformdataSet;

  requestBuilder(): ZformdataSetRequestBuilder<DeSerializersT> {
    return new ZformdataSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZformdataSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZformdataSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ZformdataSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ZformdataSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ZformdataSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMID: fieldBuilder.buildEdmTypeField('Formid', 'Edm.Int32', false),
        /**
         * Static representation of the {@link formstatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMSTATUS: fieldBuilder.buildEdmTypeField(
          'Formstatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stepno} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEPNO: fieldBuilder.buildEdmTypeField('Stepno', 'Edm.Byte', false),
        /**
         * Static representation of the {@link formtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMTYPE: fieldBuilder.buildEdmTypeField(
          'Formtype',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZformdataSet)
      };
    }

    return this._schema;
  }
}
