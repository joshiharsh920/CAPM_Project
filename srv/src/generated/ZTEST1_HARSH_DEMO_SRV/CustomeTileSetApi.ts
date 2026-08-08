/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomeTileSet } from './CustomeTileSet';
import { CustomeTileSetRequestBuilder } from './CustomeTileSetRequestBuilder';
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
export class CustomeTileSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomeTileSet<DeSerializersT>, DeSerializersT> {
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
  ): CustomeTileSetApi<DeSerializersT> {
    return new CustomeTileSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomeTileSet;

  requestBuilder(): CustomeTileSetRequestBuilder<DeSerializersT> {
    return new CustomeTileSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomeTileSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomeTileSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomeTileSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomeTileSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CustomeTileSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link customerid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERID: fieldBuilder.buildEdmTypeField(
          'Customerid',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link zfirstname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZFIRSTNAME: fieldBuilder.buildEdmTypeField(
          'Zfirstname',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link zlastname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZLASTNAME: fieldBuilder.buildEdmTypeField(
          'Zlastname',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link age} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Byte', false),
        /**
         * Static representation of the {@link religion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIGION: fieldBuilder.buildEdmTypeField(
          'Religion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', false),
        /**
         * Static representation of the {@link phonenumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONENUMBER: fieldBuilder.buildEdmTypeField(
          'Phonenumber',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link idnumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDNUMBER: fieldBuilder.buildEdmTypeField(
          'Idnumber',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link homeadd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOMEADD: fieldBuilder.buildEdmTypeField('Homeadd', 'Edm.String', false),
        /**
         * Static representation of the {@link formid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMID: fieldBuilder.buildEdmTypeField('Formid', 'Edm.Int64', false),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomeTileSet)
      };
    }

    return this._schema;
  }
}
