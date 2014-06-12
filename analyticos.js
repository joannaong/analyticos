var tracker = (function () {

  var tracker = function () { };

  tracker.prototype = {
    constructor: tracker,

    /*
    MORE INFO @ https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
		*/
		trackPage:function(_page){
			ga('send', 'pageview', _page);
			console.log("%c[TRACKING PAGEVIEW] PAGE: "+_page, "background: purple; color: #fff;");
		},
		
		/*	
		MORE INFO @ https://developers.google.com/analytics/devguides/collection/analyticsjs/events
		*/

		trackEvent:function(_category, _action, _optLabel, _optValue){
			_optLabel = _optLabel || 0;
			_optValue = _optValue || 0;

			ga('send', 'event', _category, _action, _optLabel, _optValue);
			console.log("%c[TRACKING EVENT] CATEGORY: "+_category+" | ACTION: "+_action+" | LABEL: "+_optLabel +" | VALUE: "+_optValue, "background: orange; color: #fff;");
		},

		/*
		call it like this in yer HTML
		<a target="_blank" href="https://twitter.com/spoilsofbabylon" onClick="Tracker.trackOutboundLink(this, _link, _category, _action); return false;"></a>
		*/
		trackOutboundLink:function(_link, _category, _action, _optLabel, _optValue){
			_optLabel = _optLabel || 0;
			_optValue = _optValue || 0;

			try {
				ga('send', 'event', _category, _action, _optLabel, _optValue);
			} catch(err){}
			
			setTimeout(function() {window.open(_link.href,'_blank');}, 100);

			console.log("%c[TRACKING EVENT] CATEGORY: "+_category+" | ACTION: "+_action+" | LABEL: "+_optLabel +" | VALUE: "+_optValue, "background: orange; color: #fff;");
		}
  };

  return tracker;
})();

var tracker = new tracker();