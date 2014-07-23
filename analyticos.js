var analyticos = (function () {

  var analyticos = function () { };

  analyticos.prototype = {
    constructor: analyticos,

    /*
    MORE INFO @ https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
		*/
		trackPage:function(page){
			ga('send', 'pageview', page);
			console.log("%c[TRACKING PAGEVIEW] PAGE: "+page, "background: purple; color: #fff;");
		},
		
		/*	
		MORE INFO @ https://developers.google.com/analytics/devguides/collection/analyticsjs/events
		*/
		trackEvent:function(category, action, optLabel, optValue){
			optLabel = optLabel || 0;
			optValue = optValue || 0;

			ga('send', 'event', category, action, optLabel, optValue);
			console.log("%c[TRACKING EVENT] CATEGORY: "+category+" | ACTION: "+action+" | LABEL: "+optLabel +" | VALUE: "+optValue, "background: orange; color: #fff;");
		},

		/*
		call it like this in yer HTML
		<a target="_blank" href="https://twitter.com/spoilsofbabylon" onClick="analyticos.trackOutboundLink(this, _link, category, action); return false;"></a>
		*/
		// trackOutboundLink:function(_link, category, action) {
		// 	category = category || 0;
		// 	action = action || 0;

		// 	try {
		// 		ga('send', 'event', category, action);
		// 	} catch(err){}
			
		// 	setTimeout(function() {window.open(_link.href,'_blank');}, 100);

		// 	console.log("%c[TRACKING EVENT] CATEGORY:"+category+":"+action, "background: orange; color: #fff;");
		// }

		trackOutboundLink:function(element, category, action, optLabel, optValue){
			optLabel = optLabel || 0;
			optValue = optValue || 0;
	
			element.on("click", function(e){
				e.preventDefault();

				var href = $(this).attr("href");
				var target = $(this).attr("target");

				ga('send', 'event', category, action, optLabel, optValue);

				// setTimeout(function() {
				// 	var win = window.open(href,target);
				// 	win.focus();
				// }, 70);

				console.log("%c[TRACKING EVENT] CATEGORY: "+category+" | ACTION: "+action+" | LABEL: "+optLabel +" | VALUE: "+optValue, "background: orange; color: #fff;");

			});
			
		}
  };

  return analyticos;
})();

var analyticos = new analyticos();