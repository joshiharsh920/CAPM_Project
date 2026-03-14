sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'harsh.joshi.harshapp',
            componentId: 'HarshSetList',
            contextPath: '/HarshSet'
        },
        CustomPageDefinitions
    );
});