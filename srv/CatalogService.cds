using { anubhav.db.master, anubhav.db.transaction } from '../db/datamodel';
using { cappo.cds } from '../db/CDSViews';


service CatalogService @(path:'CatalogService'){
    entity EmployeeSet as projection on master.employees;
    entity AddressSet as projection on master.address;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity POs as projection on transaction.purchaseorder{
        *,
        Items
    }
    actions{
        action boost();
    };
    entity poitems as projection on transaction.poitems;
    entity ProductCDS as projection on cds.CDSViews.ProductView;

}
