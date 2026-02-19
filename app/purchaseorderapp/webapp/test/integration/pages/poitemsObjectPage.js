sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'invenio.purchaseorderapp',
            componentId: 'poitemsObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});