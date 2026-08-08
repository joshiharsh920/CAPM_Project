/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZitbdataSetApi } from './ZitbdataSetApi';
import { ZtilesetSetApi } from './ZtilesetSetApi';
import { CustomeTileSetApi } from './CustomeTileSetApi';
import { ZformdataSetApi } from './ZformdataSetApi';
import { ZtestharshDemoApi } from './ZtestharshDemoApi';
import { ZtestharshDemo2Api } from './ZtestharshDemo2Api';
import BigNumber from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function ztest1HarshDemoSrv<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): Ztest1HarshDemoSrv<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new Ztest1HarshDemoSrv(mergeDefaultDeSerializersWith(deSerializers));
}
class Ztest1HarshDemoSrv<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get zitbdataSetApi(): ZitbdataSetApi<DeSerializersT> {
    const api = this.initApi('zitbdataSetApi', ZitbdataSetApi);
    const linkedApis = [this.initApi('ztilesetSetApi', ZtilesetSetApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get ztilesetSetApi(): ZtilesetSetApi<DeSerializersT> {
    return this.initApi('ztilesetSetApi', ZtilesetSetApi);
  }

  get customeTileSetApi(): CustomeTileSetApi<DeSerializersT> {
    return this.initApi('customeTileSetApi', CustomeTileSetApi);
  }

  get zformdataSetApi(): ZformdataSetApi<DeSerializersT> {
    return this.initApi('zformdataSetApi', ZformdataSetApi);
  }

  get ztestharshDemoApi(): ZtestharshDemoApi<DeSerializersT> {
    return this.initApi('ztestharshDemoApi', ZtestharshDemoApi);
  }

  get ztestharshDemo2Api(): ZtestharshDemo2Api<DeSerializersT> {
    return this.initApi('ztestharshDemo2Api', ZtestharshDemo2Api);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
