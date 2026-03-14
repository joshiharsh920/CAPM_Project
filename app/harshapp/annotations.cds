using CatalogService as service from '../../srv/CatalogService';
annotate service.HarshSet with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Phone',
                Value : Phone,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : Status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : Name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Phone',
            Value : Phone,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : Status,
        },
    ],
);

annotate service.HarshSet with {
    City @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'City',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : City_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'City',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Mayor',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'State',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Population',
            },
        ],
    }
};

annotate service.HarshSet with {
    Favsinger @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Singers',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : Favsinger_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Singer_Name',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Singer_Genre',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Singer_State',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Singer_Country',
            },
        ],
    }
};

