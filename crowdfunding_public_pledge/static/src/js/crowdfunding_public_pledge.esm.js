/** @odoo-module **/

import ajax from "web.ajax";
import publicWidget from "web.public.widget";

export const CrowdfundingPublicPledgePortalInvoiceForm = publicWidget.Widget.extend({
    selector: ".crowdfunding_public_pledge_portal_invoice_form",
    events: {
        "change #crowdfunding_public_pledge_flag": "_onchangePublic",
    },

    _onchangePublic: async function () {
        const is_public =
            this.$el.find("#crowdfunding_public_pledge_flag:checked").length > 0;
        const access_token = new URLSearchParams(document.location.search).get(
            "access_token"
        );
        await ajax.jsonRpc(this.$el.data("flag-route"), "call", {
            access_token: access_token,
            is_public: is_public,
        });
        this.$el.find("#crowdfunding_public_pledge_link").toggle(is_public);
    },
});

publicWidget.registry.CrowdfundingPublicPledgePortalInvoiceForm =
    CrowdfundingPublicPledgePortalInvoiceForm;
