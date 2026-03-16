using {anubhav.db} from '../db/datamodel';


service CatalogService @(path: 'CatalogService') {
    //@Capabilities.Updatable: false
    entity BusinessPartnerSet                    as projection on db.master.businesspartner;
    entity AddressSet                            as projection on db.master.address;

    //@readonly
    entity EmployeeSet @(restrict: [{
        grant: ['READ'],
        to   : 'Viewer'
    }])                                          as projection on db.master.employees;

    entity POs @(
        title              : 'Purchase Orders',
        odata.draft.enabled: true
    )                                            as
        projection on db.transaction.purchaseorder {
            *,
            case
                OVERALL_STATUS
                when 'N'
                     then 'New'
                when 'P'
                     then 'Paid'
                when 'B'
                     then 'Blocked'
                else 'Delivered'
            end as OVERALL_STATUS : String(20),
            case
                OVERALL_STATUS
                when 'New'
                     then 0
                when 'Paid'
                     then 3
                when 'Blocked'
                     then 2
                else 1
            end as Criticality    : Integer,
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
    entity POItems                               as projection on db.transaction.poitems;
    entity ProductSet                            as projection on db.master.product;
    entity HarshSet @(odata.draft.enabled: true) as projection on db.harshtable;
    entity City                                  as projection on db.City;
    entity Singers                               as projection on db.Singers;
//entity PurchaseOrderSet as projection on cds.CDSViews.POWorklist;
//entity ItemView as projection on cds.CDSViews.ItemView;
//entity ProductSet as projection on cds.CDSViews.ProductView;
///entity ProductSales as projection on cds.CDSViews.CProductValuesView;
}
