using CatalogService as service from '../../srv/CatalogService';

annotate service.HarshSet with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: Name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Phone',
                Value: Phone,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Status',
                Value: Status,
            },
            {
                $Type: 'UI.DataField',
                Label: 'City',
                Value: City_ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Favorite Singer',
                Value: Favsinger_ID,
            },
        ],

    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Value: Name,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Phone',
            Value: Phone,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Status',
            Value: Status,
        },
        {
            $Type: 'UI.DataField',
            Label: 'City',
            Value: City_ID,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Favorite Singer',
            Value: Favsinger_ID,
        },
    ],
);

annotate service.HarshSet with {
    // Use the Association name 'City', not 'City_ID'
    City      @(
        Common.Text                    : City.City, // Map to the 'City' property in your City entity
        Common.TextArrangement         : #TextOnly,
        // Hide the ID, show only the Name
        Common.ValueListWithFixedValues: true // Optional: makes it a dropdown if the list is small
    );

    // Use the Association name 'Favsinger'
    Favsinger @(
        Common.Text           : Favsinger.Singer_Name, // Map to 'Singer_Name' in your Singers entity
        Common.TextArrangement: #TextOnly
    );
};
