sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"invenio/purchaseorderapp/test/integration/pages/POsList",
	"invenio/purchaseorderapp/test/integration/pages/POsObjectPage",
	"invenio/purchaseorderapp/test/integration/pages/poitemsObjectPage"
], function (JourneyRunner, POsList, POsObjectPage, poitemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('invenio/purchaseorderapp') + '/test/flp.html#app-preview',
        pages: {
			onThePOsList: POsList,
			onThePOsObjectPage: POsObjectPage,
			onThepoitemsObjectPage: poitemsObjectPage
        },
        async: true
    });

    return runner;
});

