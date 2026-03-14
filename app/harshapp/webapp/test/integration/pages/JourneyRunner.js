sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"harsh/joshi/harshapp/test/integration/pages/HarshSetList",
	"harsh/joshi/harshapp/test/integration/pages/HarshSetObjectPage"
], function (JourneyRunner, HarshSetList, HarshSetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('harsh/joshi/harshapp') + '/test/flpSandbox.html#harshjoshiharshapp-tile',
        pages: {
			onTheHarshSetList: HarshSetList,
			onTheHarshSetObjectPage: HarshSetObjectPage
        },
        async: true
    });

    return runner;
});

