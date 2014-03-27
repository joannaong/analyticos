# Analytics tracking module

This module keeps tracking anaytics page views and events organized.

## Demo
http://joannaong.github.io/analytics-tracking-class/

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

Include tracker.js
```javascript
<script src="js/tracker.js"></script>
```

## Calls
Attach to a any handlers like this. 

```javascript
$("#btn-trackpage").on("click", function(e) {
	tracker.trackPage("trackpage button", "page view");
});
```

Page View tracking
```javascript
tracker.trackPage(_page);
```

Event tracking
```javascript
tracker.trackEvent(_category, _action, _optLabel, _optValue);
```

Event tracking: outbound links

We need to set a time out for outbound links to give google analytics enough time to track.
You can call it inside the html using 
```
Tracker.trackOutboundLink(this, _link, _category, _action);

<a target="_blank" href="https://twitter.com/" onClick="Tracker.trackOutboundLink(this, _link, _category, _action); return false;"></a>
```

## Testing
- Check your console logs
- Check google analytics interface. Go to 'Real-Time' on the right hand side of the dashboard, you should be able to see your trackEvent firing under the 'Events' section. And trackPage firing under 'Overview'.