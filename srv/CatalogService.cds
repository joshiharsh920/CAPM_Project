using {anubhav.db} from '../db/datamodel';
using {ZTEST1_HARSH_DEMO_SRV as external} from './external/ZTEST1_HARSH_DEMO_SRV';


service CatalogService @(path: 'CatalogService') {
     //@Capabilities.Updatable: false
     entity BusinessPartnerSet as projection on db.master.businesspartner;
     entity AddressSet         as projection on db.master.address;

     //@readonly
     entity EmployeeSet @(restrict: [{
          grant: ['READ'],
          where: 'bankName = $user.BankName'
     }])                       as projection on db.master.employees;

     entity POs @(
          title              : 'Purchase Orders',
          odata.draft.enabled: true,
          restrict           : [{
               grant: ['READ'],
               where: 'OVERALL_STATUS = $user.BankName'
          }]
     )                         as
          projection on db.transaction.purchaseorder {
               *,
               case
                    when OVERALL_STATUS = 'N'
                         then 'New'
                    when OVERALL_STATUS = 'P'
                         then 'Paid'
                    when OVERALL_STATUS = 'B'
                         then 'Blocked'
                    else 'Delivered'
               end as OverallStatus : String(10),

               case
                    when OVERALL_STATUS = 'N'
                         then cast(
                                   0 as Integer
                              )
                    when OVERALL_STATUS = 'P'
                         then cast(
                                   3 as Integer
                              )
                    when OVERALL_STATUS = 'B'
                         then cast(
                                   2 as Integer
                              )
                    else cast(
                              1 as Integer
                         )
               end as Criticality   : Integer,

               case
                    when GROSS_AMOUNT >= 100000
                         then cast(
                                   5 as Integer
                              )
                    when GROSS_AMOUNT >= 75000
                         then cast(
                                   4 as Integer
                              )
                    when GROSS_AMOUNT >= 50000
                         then cast(
                                   3 as Integer
                              )
                    when GROSS_AMOUNT >= 20000
                         then cast(
                                   2 as Integer
                              )
                    when GROSS_AMOUNT >= 10000
                         then cast(
                                   1 as Integer
                              )
                    else cast(
                              0 as Integer
                         )
               end as AmountRating  : Integer,
               Items

          }
          actions {
               @cds.odata.bindingparameter.name: '_anubhav'
               @Common.SideEffects             : {TargetProperties: ['_anubhav/GROSS_AMOUNT']}
               action   boost()              returns POs;
               @cds.odata.bindingparameter.name: '_ananya'
               @Common.SideEffects             : {TargetProperties: ['_ananya/OVERALL_STATUS']}
               action   setOrderProcessing() returns POs;
               function largestOrder()       returns POs;

               @cds.odata.bindingparameter.name: '_ananya'
               @Common.SideEffects             : {TargetProperties: ['_ananya/LIFECYCLE_STATUS']}
               action   setOrderCancelled()  returns POs;
          };


     function getOrderDefaults() returns POs;
     entity POItems            as projection on db.transaction.poitems;
     entity ProductSet         as projection on db.master.product;

     entity ZTESTHARSHDemo     as projection on external.ZFORMDATASet;
//entity PurchaseOrderSet as projection on cds.CDSViews.POWorklist;
//entity ItemView as projection on cds.CDSViews.ItemView;
//entity ProductSet as projection on cds.CDSViews.ProductView;
///entity ProductSales as projection on cds.CDSViews.CProductValuesView;
}
