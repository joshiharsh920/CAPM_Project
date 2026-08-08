/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZitbdataSet } from './ZitbdataSet';
import { ZitbdataSetRequestBuilder } from './ZitbdataSetRequestBuilder';
import { ZtilesetSetApi } from './ZtilesetSetApi';
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
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ZitbdataSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZitbdataSet<DeSerializersT>, DeSerializersT> {
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
  ): ZitbdataSetApi<DeSerializersT> {
    return new ZitbdataSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ztilesetSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ZTILESET_SET: Link<
      ZitbdataSet<DeSerializersT>,
      DeSerializersT,
      ZtilesetSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ZtilesetSetApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ZTILESET_SET: new Link('ZTILESETSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ZitbdataSet;

  requestBuilder(): ZitbdataSetRequestBuilder<DeSerializersT> {
    return new ZitbdataSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZitbdataSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZitbdataSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ZitbdataSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ZitbdataSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ZitbdataSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OBJECT_ID: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAB_KEY: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAB_TEXT: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAB_ORDER: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAB_COUNT: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAB_ICON: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_VISIBLE: OrderableEdmTypeField<
      ZitbdataSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ztilesetSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ZTILESET_SET: Link<
      ZitbdataSet<DeSerializersT>,
      DeSerializersT,
      ZtilesetSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ZitbdataSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link tabKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAB_KEY: fieldBuilder.buildEdmTypeField('TabKey', 'Edm.String', false),
        /**
         * Static representation of the {@link tabText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAB_TEXT: fieldBuilder.buildEdmTypeField(
          'TabText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tabOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAB_ORDER: fieldBuilder.buildEdmTypeField(
          'TabOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tabCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAB_COUNT: fieldBuilder.buildEdmTypeField(
          'TabCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tabIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAB_ICON: fieldBuilder.buildEdmTypeField(
          'TabIcon',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isVisible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VISIBLE: fieldBuilder.buildEdmTypeField(
          'IsVisible',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZitbdataSet)
      };
    }

    return this._schema;
  }
}
