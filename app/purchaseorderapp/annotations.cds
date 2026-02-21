using CatalogService as service from '../../srv/CatalogService';

annotate service.POs with @(
 UI.HeaderInfo:{
 TypeName: 'POs',
 TypeNamePlural:'Purchase Orders',
 Title:{Value:PO_ID},
 Description:{Value:PARTNER_GUID.COMPANY_NAME},
 ImageUrl: 'https://searchvectorlogo.com/wp-content/uploads/2020/03/invenio-logo-vector.png'
  } ,

 UI.SelectionFields:[
    PO_ID,
    PARTNER_GUID.FAX_NUMBER,
    PARTNER_GUID.ADDRESS_GUID.COUNTRY,
    GROSS_AMOUNT,
    OVERALL_STATUS,
    TAX_AMOUNT,
    CURRENCY_code,
    LIFECYCLE_STATUS
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
    },
    {
        $Type:'UI.ReferenceFacet',
        Target:'Items/@UI.LineItem',
        Label:'PO Items',
    },
 ],
 UI.Identification:[
    {
        $Type:'UI.DataField',
        Value:PO_ID,
    },
     {
        $Type:'UI.DataField',
        Value:PARTNER_GUID_NODE_KEY,
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

annotate service.POs with {
    PARTNER_GUID @(
        Common.ValueList.entity:'CatalogService.BusinessPartnerSet',
        Common.Text: PARTNER_GUID.COMPANY_NAME,
    )
};

annotate service.POItems with {
    PRODUCT_GUID @(
        Common.ValueList.entity:'CatalogService.PartnerSet',
        Common.Text:PRODUCT_GUID.DESCRIPTION,
    )
};


annotate service.POItems with @(
    UI.LineItem:[
        {
            $Type:'UI.DataField',
            Value:PO_ITEM_POS,
        },
        {
            $Type:'UI.DataField',
            Value:PRODUCT_GUID_NODE_KEY,
        },
        {
            $Type:'UI.DataField',
            Value:PRODUCT_GUID.Description 
        },
        {
            $Type:'UI.DataField',
            Value:PRODUCT_GUID_NODE_KEY,
        },
        {
            $Type:'UI.DataField',
            Value:GROSS_AMOUNT,
        },
        {
            $Type:'UI.DataField',
            Value:CURRENCY_code,
        },
    ],
    UI.Facets:[
        {
           $Type:'UI.ReferenceFacet',
           Target:'@UI.Identification',
           Label:'More Details', 
        },
    ],
    UI.Identification:[
        {
          $Type:'UI.DataField',
          Value:NODE_KEY,
        },
        {
          $Type:'UI.DataField',
          Value:PO_ITEM_POS
        },
        {
          $Type:'UI.DataField',
          Value:PRODUCT_GUID_NODE_KEY,
        },
        {
          $Type:'UI.DataField',
          Value:GROSS_AMOUNT,
        },
        {
          $Type:'UI.DataField',
          Value:NET_AMOUNT,
        },
        {
          $Type:'UI.DataField',
          Value:TAX_AMOUNT,
        },
        {
          $Type:'UI.DataField',
          Value:CURRENCY_code,
        },
    ]
);

@cds.odata.valuelist
annotate CatalogService.BusinessPartnerSet with @(
    UI.Identification:[
        {
            $Type:'UI.DataField',
            Value: COMPANY_NAME,
        },
    ]
);

@cds.odata.valuelist
annotate CatalogService.ProductSet with @(
    UI.Identification:[
        {
            $Type:'UI.DataField',
            Value: DESCRIPTION,
        },
    ]
);

