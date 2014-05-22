# jQuery Responsivetext
### a responsive text plugin

jQuery Responsivetext is a plugin that replaces text (and markup)
inside nodes depending on the browser window size.


Usage
------

```html
<h3>
     Some very long text that will be replaced on smaller browser sizes
     <span class="responsive-text">
         <span data-for="ipad">Text for iPad</span>
         <span data-for="iphone">Text for iPhone</span>
         <span data-for="bigscreen">Text can also <strong>contain markup</strong></span>
     </span>
</h3>
```

```javascript
$.responsiveText('start', {
    selector: '.responsive-text',
    sizes: {
        'ipad': [1024, 481],
        'iphone': [480, 320],
        'bigscreen': [Number.POSITIVE_INFINITY, 1280]
    },
    delay: 300
});
```

```css
.responsive-text {
	display: none;
	speak: none;
}
```
