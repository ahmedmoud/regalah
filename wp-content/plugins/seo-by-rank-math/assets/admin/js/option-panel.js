!function(){"use strict";var t,a={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,{a:n}),n},d:function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}},n=jQuery,e=a.n(n),i=lodash;function r(t,a,n){return e().ajax({url:rankMath.ajaxurl,type:n||"POST",dataType:"json",data:e().extend(!0,{action:"rank_math_"+t,security:rankMath.security},a)})}function o(t,a,n,i){a=a||"error",i=i||!1;var r=e()('<div class="notice notice-'+a+' is-dismissible"><p>'+t+"</p></div>").hide();n.next(".notice").remove(),n.after(r),r.slideDown(),e()(document).trigger("wp-updates-notice-added"),i&&setTimeout((function(){r.fadeOut((function(){r.remove()}))}),i)}(t=e())((function(){window.rankMathOptions={init:function(){this.preview(),this.misc(),this.scCache(),rankMathAdmin.variableInserter(),this.searchEngine.init(),this.addressFormat(),this.siteMap(),this.robotsEvents(),this.proRedirect(),this.contentAI(),this.localSEO()},searchEngine:{init:function(){t("#setting-panel-analytics").addClass("exclude"),this.form=t(".rank-math-search-options"),this.wrap=this.form.closest(".rank-math-wrap-settings"),this.input=this.form.find("input"),this.tabs=this.wrap.find(".rank-math-tabs"),this.panels=this.wrap.find(".rank-math-tab:not(.exclude)"),this.ids=["general","titles","sitemap"],this.indexes={},this.buildIndex(),this.events()},events:function(){var a=this,n=a.tabs.find(">.rank-math-tabs-navigation"),e=t('<div class="rank-math-search-dropdown"></div>');a.tabs.find(">.rank-math-tabs-content").prepend('<div class="rank-math-setting-search-empty hidden">No results found.</div>'),a.form.append(e),e.hide().empty();var r=(0,i.debounce)((function(t){a.wrap.addClass("searching"),a.searchIndexes(t,e)}),300);a.form.on("click",".clear-search",(function(t){t.preventDefault(),a.input.val(""),a.clearSearch(n)})),this.ids.forEach((function(t){e.append(a.indexes[t])})),a.input.on("input",(function(){if(""===a.input.val())return a.clearSearch(n,e),!1;r(a.input.val().toLowerCase())})),e.on("click",".cmb-row",(function(){var a=t(this),n=window.location.origin+window.location.pathname+"?page=rank-math-options-"+a.data("settings-id")+"#"+a.closest(".dropdown-tab").data("id");n===window.location.href?window.location.reload():window.location=n}));var o=t(".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *");t("body").on("click",(function(a){t(a.target).is(o)||e.hide()}))},searchIndexes:function(a,n){if(!(1>a.trim().length)){n.find(".dropdown-tab").each((function(){var a=t(this);"setting-panel-analytics"===a.attr("data-id")&&a.css("display","none")}));var e=n.find(".cmb-row"),i=0;e.hide().each((function(){var n=t(this);n.text().trim().toLowerCase().includes(a)&&(n.show(),++i)})),n.show(),n.toggleClass("empty",0===i)}},clearSearch:function(a,n){n=n||!1,this.wrap.removeClass("searching search-no-results"),t(">a.active",a).trigger("click"),n?n.hide():(t(".cmb-row").show(),t(".rank-math-cmb-dependency",".cmb-form, .rank-math-metabox-wrap").each((function(){rankMathAdmin.loopDependencies(t(this))})))},buildIndex:function(){var a=window.localStorage.getItem("rank-math-option-search-index"),n=void 0===a||a!==rankMath.version;this.ids.forEach((function(a){this.getIndex(a,n),this.indexes[a]=t(window.localStorage.getItem("rank-math-option-"+a+"-index"))}),this),n&&window.localStorage.setItem("rank-math-option-search-index",rankMath.version)},getIndex:function(a,n){n&&t("<div/>").load(rankMath.adminurl+"?page=rank-math-options-"+a,(function(n,e){if("error"!==e){var i=t(n).find(".rank-math-tabs-content");i.find(".rank-math-tab").each((function(){var a=t(this);a.removeClass().addClass("dropdown-tab"),a.attr("data-id",a.attr("id")),a.removeAttr("id"),a.find(".rank-math-notice").remove(),a.find(".rank-math-desc").remove(),a.find("input, select, textarea").remove()})),i.find(".rank-math-tab").removeClass().addClass("dropdown-tab").removeAttr("id"),i.find(".cmb-row").each((function(){var n=t(this);n.attr("data-settings-id",a),(n.hasClass("cmb-type-title")||n.hasClass("cmb-type-notice")||n.hasClass("rank-math-notice")||n.hasClass("rank-math-desc")||n.hasClass("rank-math-exclude-from-search"))&&n.remove(),n.find(".cmb-td").children(":not(.cmb2-metabox-description)").remove(),n.find("label,.cmb2-metabox-description").unwrap(),n.removeAttr("data-fieldtype")})),i=i.html().replace(/(\r\n\t|\n|\r\t)/gm,""),window.localStorage.setItem("rank-math-option-"+a+"-index",i)}}))}},scCache:function(){t(".console-cache-delete").on("click",(function(a){a.preventDefault();var n=t(this),e=n.data("days"),i=-1===e?rankMath.confirmClearImportedData:rankMath.confirmClear90DaysCache;window.confirm(i+" "+rankMath.confirmAction)&&(n.prop("disabled",!0),r("analytics_delete_cache",{days:e},"GET").always((function(){n.prop("disabled",!1)})).done((function(a){a&&a.success&&(o(rankMath.feedbackCacheDeleted,"success",t("h1",".rank-math-wrap-settings")),t(".rank-math-console-db-info").remove(),n.closest(".cmb-td").append(a.message))})))}));var a=t("#console_caching_control");t(".console-cache-update-manually").on("click",(function(n){n.preventDefault();var e=t(this),i=a.val();e.prop("disabled",!0),r("analytic_start_fetching",{days:i},"GET").done((function(a){a&&a.success?(o(a.message,"success",t("h1.page-title")),e.text("Fetching in Progress"),t(".cancel-fetch").prop("disabled",!1)):o("Unable to update cache due to: "+a.error,"error",t("h1.page-title"))}))})),t(".cancel-fetch").on("click",(function(a){a.preventDefault(),t(this).prop("disabled",!0),r("analytic_cancel_fetching",{},"GET").done((function(t){t&&t.success&&window.location.reload()}))}))},addressFormat:function(){var a=t("input[type=text], textarea",".rank-math-address-format");if(a.length){a.attr("autocomplete","off"),a.wrap('<div class="rank-math-variables-wrap"/>');var n=t("body"),e=a.parent(".rank-math-variables-wrap");e.append('<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>');var i=t("<ul/>"),r=t('<div class="rank-math-variables-dropdown"></div>');t.each({"{address} {locality}, {region} {postalcode}":"(New York, NY 12345)","{address} {postalcode}, {locality} {region}":"(New York 12345, NY)","{address} {locality} {postalcode}":"(New York NY 12345)","{postalcode} {region} {locality} {address}":"(12345 NY New York)","{address} {locality}":"(New York NY)"},(function(t,a){i.append('<li data-var="'+a+'"><strong>'+t+"</strong></li>")})),r.append(i),t("rank-math-variables-wrap:eq(0)").append(r);var o=t(".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *");n.on("click",(function(a){t(a.target).is(o)||r.hide()}));var s=r.find("input"),c=r.find("li");t(e).on("click",".rank-math-variables-button",(function(a){a.preventDefault(),t(this).after(r),c.show(),r.show(),s.val("").focus()})),r.on("click","li",(function(a){a.preventDefault();var n=t(this);n.closest(".rank-math-variables-wrap").find("textarea").val(n.find("strong").text())}))}},misc:function(){void 0!==e().fn.select2&&t("[data-s2-pages]").select2({ajax:{url:rankMath.ajaxurl+"?action=rank_math_search_pages",data:function(t){return{term:t.term,security:rankMath.security}},dataType:"json",delay:250},width:"100%",minimumInputLength:2}),t("#htaccess_accept_changes").on("change",(function(){t("#htaccess_content").prop("readonly",!this.checked)})),t(".reset-options").on("click",(function(){return!!window.confirm("Are you sure? You want to reset settings.")&&(t(window).off("beforeunload"),!0)}));var a=t(".rank-math-tabs");setTimeout((function(){window.localStorage.removeItem(a.attr("id"))}),1e3),t(".save-options").on("click",(function(){var n=t("> .rank-math-tabs-navigation > a.active",a);return window.localStorage.setItem(a.attr("id"),n.attr("href")),t(window).off("beforeunload"),!0}));var n=!1;t(".cmb-form").on("change","input:not(.notrack), textarea:not(.notrack), select:not(.notrack)",(function(){n=!0})),t(window).on("beforeunload",(function(){if(n)return"Are you sure? You didn't finish the form!"})),t(".custom-sep").on("keyup",(function(){var a=t(this);a.closest("li").find("input.cmb2-option").val(a.text()).trigger("change")})),t(".cmb-form").on("keydown","input",(function(t){"Enter"===t.key&&t.preventDefault()}))},preview:function(){t("[data-preview]").on("change",(function(){var a=t(this),n=null,e="";if(a.is(":radio")&&(n=a.closest(".cmb-td")),null!==n)if(n.hasClass("done"))a.is(":checked")&&(e=n.find("h5")).text(e.data("title").format(a.val()));else if(n.addClass("done"),"title"===a.data("preview")){var i="";i+='<div class="rank-math-preview-title" data-title="Preview"><div>',i+='<h5 data-title="'+rankMath.postTitle+" {0} "+rankMath.blogName+'"></h5>',i+="<span>"+rankMath.postUri+"</span>",i+="</div></div>",n.append(i),(e=n.find("h5")).text(e.data("title").format(a.val()))}})).trigger("change")},siteMap:function(){var a=t(".sitemap-nginx-notice");a.length&&(a.on("click","a span",(function(t){return t.preventDefault(),a.toggleClass("active"),!1})),a.on("click","a.sitemap-close-notice",(function(t){return t.preventDefault(),r("remove_nginx_notice",{},"GET").done((function(){a.remove()})),!1})))},robotsEvents:function(){t(".rank-math-robots-data").each((function(){var a=t(this).find("ul li:first-child input"),n=t(this).find("ul li:nth-child(2) input");a.on("change",(function(){a.is(":checked")&&n.prop("checked",!1).trigger("change")})),n.on("change",(function(){n.is(":checked")&&a.prop("checked",!1)}))}))},proRedirect:function(){t(".cmb-redirector-element").on("click",(function(a){var n=t(a.target);if(n.is("a")||n.closest("a").length)return!0;var e=t(this),i=e.data("url");if(!i)return!0;a.preventDefault(),e.css("cursor","pointer"),window.open(i)}))},contentAI:function(){var a=t(".buy-more-credits .update-credit");a.length&&a.on("click",(function(t){return t.preventDefault(),a.addClass("loading"),r("get_content_ai_credits").done((function(t){t.error?alert(t.error):a.removeClass("loading").next("strong").text(t.credits)})),!1}))},localSEO:function(){var t=e()("#website_name"),a=e()("#knowledgegraph_name");t.val()===a.val()&&t.on("keyup",(function(){a.val(t.val())}))}},window.rankMathOptions.init()}))}();