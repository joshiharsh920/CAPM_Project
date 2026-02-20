using CatalogService as service from '../../srv/CatalogService';

annotate service.POs with @(
UI.HeaderInfo:{
TypeName: 'POs',
TypeNamePlural:'Purchase Orders',
Title:{Value:PO_ID},
Description:{Value:PARTNER_GUID.COMPANY_NAME},
ImageUrl: 'https://searchvectorlogo.com/wp-content/uploads/2020/03/invenio-logo-vector.png'
},

UI.SelectionFields:[
    PO_ID,
    PARTNER_GUID.FAX_NUMBER,
    PARTNER_GUID.ADDRESS_GUID.COUNTRY,
    GROSS_AMOUNT,
    OVERALL_STATUS
],
UI.LineItem:[
    {
        $Type: 'UI.DataField',
        Value:PO_ID,
    },
    {
        $Type: 'UI.DataField',
        Value:Overallstatus,
        Criticality: ColorCode
    },
    {
        $Type: 'UI.DataField',
        Value:GROSS_AMOUNT,
    },
     {
        $Type: 'UI.DataField',
        Value:lifeatcycle,
        Criticality: ColorCode
    },
    {
        $Type:'UI.DataFieldForAction',
        Action:'CatalogService.boost',
        Label:'Boost',
        Inline:true
    }
],
UI.Facets:[
    {
        $Type:'UI.CollectionFacet',
        Label:'PO Information',
        Facets:[
            {
            $Type:'UI.ReferenceFacet',
            Target: '@UI.Identification',
            Label : 'More Info',
        },
        {
            $Type:'UI.ReferenceFacet',
            Label:'Prices',
            Target: '@UI.FieldGroup#Spiderman',
        },
        {
            $Type:'UI.ReferenceFacet',
            Label:'Status',
            Target: '@UI.FieldGroup#Superman',
        }
        ],
    }
],
UI.Identification:[
    {
        $Type:'UI.DataField',
        Value:PO_ID,
    },
     {
        $Type:'UI.DataField',
        Value:PARTNER_GUID.NODE_KEY,
    },
     {
        $Type:'UI.DataField',
        Value:LIFECYCLE_STATUS,
    },
],
UI.FieldGroup#Spiderman:{
    Label:'Price',
    Data:[
        {
        $Type:'UI.DataField',
        Value:GROSS_AMOUNT
    },
    {
        $Type:'UI.DataField',
        Value: NET_AMOUNT,
    },
    {
        $Type:'UI.DataField',
        Value: TAX_AMOUNT,
    }
 ]
},
UI.FieldGroup#Superman:{
    Label:'Status',
    Data:[
        {
        $Type:'UI.DataField',
        Value: CURRENCY_code
    },
    {
        $Type:'UI.DataField',
        Value: OVERALL_STATUS,
    },
]
}
);
