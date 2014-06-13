# Analytics tracking module

This module facilitates Google Anaytics tracking (page views and events) organized.

## Demo
http://joannaong.github.io/analytics-tracking-module/

## Set up
Include your analytics tracking code before the ending ```</head>``` of your html.

```javascript
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
  ga('create', 'UA-XXXXXXXX-X', 'domain.com');
  ga('send', 'pageview');
</script>
```

Include analyticos.js
```javascript
<script src="js/analyticos.js"></script>
```

## Calls
Attach to a any handlers like this. 

```javascript
$("#btn-trackpage").on("click", function(e) {
	analyticos.trackPage("trackpage button", "page view");
});
```

Page View tracking
```javascript
analyticos.trackPage(page);
```

Event tracking
```javascript
analyticos.trackEvent(category, action, optLabel, optValue);
```

Event tracking: outbound links

We need to set a time out for outbound links to give google analytics enough time to track.
You can call it inside the html using 
```
analyticos.trackOutboundLink(element, category, action, optLabel, optValue);
analyticos.trackOutboundLink($(this),'Main Menu', 'Click', $(this).text());
```

## Testing
- Check your console logs
- Check google analytics interface. Go to 'Real-Time' on the right hand side of the dashboard, you should be able to see your trackEvent firing under the 'Events' section. And trackPage firing under 'Overview'.

## References
https://developers.google.com/analytics/devguides/collection/analyticsjs/