$(document).ready(() => {
	function loadStyleSheet(value) {
		$('#theme').remove();

		var src = 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/'+value+'/bootstrap.min.css';
		if (document.createStyleSheet){
			document.createStyleSheet(src);
		}
		else {
			$("head").append($("<link rel='stylesheet' href='"+src+"' type='text/css' id='theme' />"));
		}
	};

	$("#theme-chooser").on('change', function() {
		loadStyleSheet($(this).val());
	});
});