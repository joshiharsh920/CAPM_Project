namespace anubhav.db;

using {
    cuid,
    managed,
    temporal,
    Currency
} from '@sap/cds/common';
using {anubhav.common} from './commons';


entity SalesOrderItem {
    key MANDT     : String(3); // Client
    key VBELN     : String(10); // Sales Document Number
    key POSNR     : String(6); // Item Number
        ARKTX     : String(40); // Item Text / Short Description
        NETWR     : Decimal(15, 2); // Net Value
        WAERK     : String(5); // Currency Key
        ERDAT     : Date; // Creation Date
        ERZET     : Time; // Creation Time
        KUNNR_ANA : String(10); // Account Assignment Customer
}

entity harshtable : cuid {
    Name      : String(20) @(title: 'User Name');
    City      : Association to City;
    Phone     : String(30);
    Status    : String(20);
    Favsinger : Association to Singers;
}

entity Singers : cuid {
    Singer_Name    : String(20) @(title: 'Singer Name');
    Singer_Genre   : String(20) @(title: 'Music Genre');
    Singer_State   : String(20) @(title: 'State Of Singer');
    Singer_Country : String(20) @(title: 'Country Of Singer');
    Singer_Phone   : String(15) @(title: 'Contact No.');
}

entity City : cuid {
    City       : String(20);
    Mayor      : String(20);
    State      : String(10);
    Population : String(10);
    Literacy   : String(10) @(title: 'Literacy Rate');
    Sector_No  : String(5)  @(title: 'Total Sectors')
}

context master {

    entity businesspartner {
        key NODE_KEY      : common.Guid @(title: 'Business Partner Id');
            BP_ROLE       : String(2);
            EMAIL_ADDRESS : String(105);
            PHONE_NUMBER  : String(32);
            FAX_NUMBER    : String(32);
            WEB_ADDRESS   : String(44);
            ADDRESS_GUID  : Association to address;
            BP_ID         : String(32);
            COMPANY_NAME  : String(250);
    }

    entity address {
        key NODE_KEY        : common.Guid;
            CITY            : String(44);
            POSTAL_CODE     : String(8);
            STREET          : String(44);
            BUILDING        : String(128);
            COUNTRY         : String(44);
            ADDRESS_TYPE    : String(44);
            VAL_START_DATE  : Date;
            VAL_END_DATE    : Date;
            LATITUDE        : Decimal;
            LONGITUDE       : Decimal;
            businesspartner : Association to one businesspartner
                                  on businesspartner.ADDRESS_GUID = $self;
    }

    entity product {
        key NODE_KEY       : common.Guid;
            PRODUCT_ID     : String(28);
            TYPE_CODE      : String(2);
            CATEGORY       : String(32);
            DESCRIPTION    : localized String(255);
            SUPPLIER_GUID  : Association to master.businesspartner;
            TAX_TARIF_CODE : Integer;
            MEASURE_UNIT   : String(2);
            WEIGHT_MEASURE : Decimal(5, 2);
            WEIGHT_UNIT    : String(2);
            CURRENCY_CODE  : String(4);
            PRICE          : Decimal(15, 2);
            WIDTH          : Decimal(5, 2);
            DEPTH          : Decimal(5, 2);
            HEIGHT         : Decimal(5, 2);
            DIM_UNIT       : String(2);
    }

    entity employees : cuid {
        nameFirst     : String(40);
        nameMiddle    : String(40);
        nameLast      : String(40);
        nameInitials  : String(40);
        sex           : common.Gender;
        language      : String(1);
        phoneNumber   : common.PhoneNumber;
        email         : common.Email;
        loginName     : String(12);
        currency      : Currency;
        salaryAmount  : common.AmountT;
        accountNumber : String(16);
        bankId        : String(40);
        bankName      : String(64);
    }
}

context transaction {
    entity purchaseorder : common.Amount, cuid {
        PO_ID            : String(40)                            @(title: '{i18n>PO_ID}');
        PARTNER_GUID     : Association to master.businesspartner @(title: 'Partner Id');
        LIFECYCLE_STATUS : String(1)                             @(title: 'Lifecycle Status');
        OVERALL_STATUS   : String(1)                             @(title: 'Overall Status');
        Items            : Association to many poitems
                               on Items.PARENT_KEY = $self;
    }

    entity poitems : common.Amount, cuid {
        // key NODE_KEY: common.Guid;
        PARENT_KEY   : Association to purchaseorder;
        PO_ITEM_POS  : Integer;
        PRODUCT_GUID : Association to master.product;
    }
}
