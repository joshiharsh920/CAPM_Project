/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZtilesetSet } from './ZtilesetSet';
import { ZtilesetSetRequestBuilder } from './ZtilesetSetRequestBuilder';
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
export class ZtilesetSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZtilesetSet<DeSerializersT>, DeSerializersT> {
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
  ): ZtilesetSetApi<DeSerializersT> {
    return new ZtilesetSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ZtilesetSet;

  requestBuilder(): ZtilesetSetRequestBuilder<DeSerializersT> {
    return new ZtilesetSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZtilesetSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZtilesetSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ZtilesetSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ZtilesetSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ZtilesetSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link tileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_ID: fieldBuilder.buildEdmTypeField('TileId', 'Edm.String', false),
        /**
         * Static representation of the {@link objectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ObjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tileTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_TITLE: fieldBuilder.buildEdmTypeField(
          'TileTitle',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tileSubtitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_SUBTITLE: fieldBuilder.buildEdmTypeField(
          'TileSubtitle',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link icon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICON: fieldBuilder.buildEdmTypeField('Icon', 'Edm.String', false),
        /**
         * Static representation of the {@link targetView} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_VIEW: fieldBuilder.buildEdmTypeField(
          'TargetView',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Int32', false),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZtilesetSet)
      };
    }

    return this._schema;
  }
}
