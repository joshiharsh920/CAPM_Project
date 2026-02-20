using { anubhav.db.master, anubhav.db.transaction } from '../db/datamodel';
using { cappo.cds } from '../db/CDSViews';


service CatalogService @(path:'CatalogService'){
    entity EmployeeSet as projection on master.employees;
    entity AddressSet as projection on master.address;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity POs as projection on transaction.purchaseorder{
        *,
        Items,
        case OVERALL_STATUS
           when 'P' then 'Pending'
           when 'A' then 'Approved'
           when 'X' then 'Rejected'
           when 'N' then 'New'
        end as Overallstatus:String(30),
        case OVERALL_STATUS
           when 'P' then 2
           when 'A' then 2
           when 'X' then 1
           when 'N' then 3
        end as ColorCode:String(10),
        case LIFECYCLE_STATUS
        when 'N' then 'new'
        end as lifeatcycle:String(10),
    }
    actions{
        @Common : { SideEffects:{
        $Type:'Common.SideEffectsType',
        TargetProperties : [
           'in/GROSS_AMOUNT',
        ],
        },
        }
        action boost() returns POs;
    };
    function getLargestOrder() returns POs;
    entity poitems as projection on transaction.poitems;
    entity ProductCDS as projection on cds.CDSViews.ProductView;

}
