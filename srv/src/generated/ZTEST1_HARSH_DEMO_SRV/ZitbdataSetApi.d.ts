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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class ZitbdataSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZitbdataSet<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ZitbdataSetApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ZtilesetSetApi<DeSerializersT>]): this;
  entityConstructor: typeof ZitbdataSet;
  requestBuilder(): ZitbdataSetRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ZitbdataSet<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ZitbdataSet<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ZitbdataSet, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
