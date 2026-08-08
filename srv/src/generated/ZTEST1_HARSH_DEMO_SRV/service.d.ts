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
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function ztest1HarshDemoSrv<
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
  deSerializers?: Partial<
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
  >
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
>;
declare class Ztest1HarshDemoSrv<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get zitbdataSetApi(): ZitbdataSetApi<DeSerializersT>;
  get ztilesetSetApi(): ZtilesetSetApi<DeSerializersT>;
  get customeTileSetApi(): CustomeTileSetApi<DeSerializersT>;
  get zformdataSetApi(): ZformdataSetApi<DeSerializersT>;
  get ztestharshDemoApi(): ZtestharshDemoApi<DeSerializersT>;
  get ztestharshDemo2Api(): ZtestharshDemo2Api<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
