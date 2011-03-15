(function( $ ) {

$(function() {
	var $bar = $('#dt'),
		$point = $('#point'),
		$selector = $('#selector').val(''),
		$selected = $('#selected'),
		$togglePosition = $('#toggle-position'),
		$toggleIcon = $('.ui-icon-arrow-u, .ui-icon-arrow-d'),
		$close = $('#close'),
		$elements,
		body = window.parent.document.body,
		iframeId = "designer-tools-iframe",
		iframe = $('#' + iframeId, body)[0],
		pinkOutline = "2px solid #ff422d";

	$('#dt button:not(.ui-button-icon)').button({text: false, icons: { primary: ' ' } });
	$('#dt .ui-button-icon').button();

	$point
		.click(function() {
			var outline,
				overTimeout;
			$(body)
				.bind('mouseover.dt', function(e) {
					overTimeout = null;
					overTimeout = setTimeout(function() {
						if ( e.target.id != iframeId ) {
							outline = curOutline(e.target);
							e.target.style.outline = pinkOutline;
						}
					}, 150);
				})
				.bind('mouseout.dt', function(e) {
					clearTimeout( overTimeout );
					if ( outline && e.target.id != iframeId && outline.length ) {
						e.target.style.outline = outline.join(' ');
						outline = null;
					}
				});

			$(body).bind('click.dt', function(e) {
				if ( e.target.id != iframeId ) {
					e.target.style.outline = outline.join(' ');
					outline = null;
					$elements = $(e.target);
					// empty $selector
					$selector.val('');
					$selected.text(0);
				}
				$(this).unbind('.dt');
			});
		});

	var keypressTimeout;
	$selector
		.keypress(function() {
			var self = this;
			clearTimeout(keypressTimeout);
			keypressTimeout = setTimeout(function() {
				var $temp = $( $(self).val(), body );
				if ( $temp.length ) {
					$elements = $temp.each(function() {
						var self = this, 
							outline = curOutline(self);
						self.style.outline = pinkOutline;
						setTimeout(function() {
							self.style.outline = outline.join(' ');
						}, 700);
					});
				}
				$selected.text( $temp.length );
			}, 250);
		});

	$togglePosition
		.click(function() {
			$toggleIcon.toggleClass('ui-icon-arrow-u ui-icon-arrow-d');
			var css = $toggleIcon.is('.ui-icon-arrow-d') ?
				{ top: 0, bottom: "auto" }:
				{ top: "auto", bottom: 0 };
			$(iframe).css(css);
		});

	$close
		.click(function() {
			$(iframe).remove();
		});
});

function curOutline( elem ) {
	return [
		$.css( elem, 'outlineWidth' ),
		$.css( elem, 'outlineStyle' ),
		$.css( elem, 'outlineColor' )
	];
}

})(jQuery);
