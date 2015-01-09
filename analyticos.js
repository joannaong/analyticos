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
		trackEvent:function(category, action, optLabel, optValue, __nonInt){
			optLabel = optLabel || 0;
			optValue = optValue || 0;
			nonInt = __nonInt ? 1 : 0;

			ga('send', 'event', category, action, optLabel, optValue, {'nonInteraction': nonInt});
			console.log("%c[TRACKING EVENT] CATEGORY: "+category+" | ACTION: "+action+" | LABEL: "+optLabel +" | VALUE: "+optValue, "background: orange; color: #fff;");
		},

		/*
		MORE INFO @ https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions
		*/
		trackSocial: function(socialNetwork, socialAction, socialTarget) {
			ga('send', 'social', socialNetwork, socialAction, socialTarget);
			console.log("%c[TRACKING SOCIAL] socialNetwork: "+socialNetwork+" | socialAction: "+socialAction+" | socialTarget: "+socialTarget, "background: green; color: #fff;");
		}
  };

  return analyticos;
})();

var analyticos = new analyticos();