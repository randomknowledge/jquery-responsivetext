/*!
 * jQuery Responsivetext - a responsive text plugin
 * ------------------------------------------------------------------
 *
 * jQuery Responsivetext is a plugin that replaces text (and markup)
 * inside nodes depending on the browser window size.
 *
 * Licensed under the MIT License
 * http://opensource.org/licenses/MIT
 *
 * @version         0.0.2
 * @since           2013.07.04
 * @author          Florian Finke
 * @homepage        https://github.com/randomknowledge/jquery-responsivetext
 *
 * ------------------------------------------------------------------
 *
 *  <h3>
 *      Some very long text that will be replaced on smaller browser sizes
 *      <span class="responsive-text">
 *          <span data-for="ipad">Text for iPad</span>
 *          <span data-for="iphone">Text for iPhone</span>
 *          <span data-for="bigscreen">Text can also <strong>contain markup</strong></span>
 *      </span>
 *  </h3>
 *
 * $.responsiveText('start', {
 *    selector: '.responsive-text',
 *    sizes: {
 *        'ipad': [1024, 481],
 *        'iphone': [480, 320],
 *        'bigscreen': [Number.POSITIVE_INFINITY, 1280]
 *    },
 *    delay: 300
 * });
 *
 */

(function($) {
    'use strict';
    $.responsiveText = function(method, options) {

		if(method == 'stop') {
			$(window).unbind('.responsiveText');
			return;
		}

        // Default settings
        var settings = $.extend({
			selector: '.responsive-text',
            sizes: {},
            delay: 200
        }, options);

		var resizeTimeout = null;
		var selector = settings.selector;

		function getParentHTML(ele) {
			return ele.parent().clone().find(selector).remove().end().html();
		}

		function setParentHTML(ele) {
			var tmp = ele.clone();
			var size = getSizeIdentifier();
			var parent = ele.parent();
			var newMarkup = ele.find('[data-for=' + size + ']').html();
			parent.html(newMarkup);
			parent.append(tmp);

		}

		function getSizeIdentifier() {
			var w = $(window).width();
			for(var k in settings.sizes) {
				if(w <= settings.sizes[k][0] && w >= settings.sizes[k][1]) {
					return k;
				}
			}
			return 'default';
		}

		function processAll() {
			$(selector).each(function(idx, ele){
				process($(ele));
			});
		}

		function process(ele) {
			if(!ele.find('[data-for=default]').length) {
				ele.append('<span data-for="default">' + getParentHTML(ele) + '</span>');
			}

			setParentHTML(ele);
		}

		$(window).bind('resize.responsiveText', function(){
			window.clearTimeout(resizeTimeout);
			resizeTimeout = window.setTimeout(function(){
				processAll();
			}, settings.delay);
		});

		processAll();
    };

}(jQuery));
