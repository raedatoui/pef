jQuery.noConflict();
(function($) {

	$(window).load(function(){
		$("[title]").removeAttr('title');
		$('#sort').masonry(
			{
				columnWidth: 206,
				animate: true,
				gutterWidth: 0,
				itemSelector: '.box'
			},
			function() {
				//$(this).css({'margin-right': '3px','margin-bottom':'3px'});
			}
		);
		$(window).resize(resize);
		resize();
		console.log($("meta[property='og:description']").attr('content'));
	});

	// MouseOver Events
	$('.box').hover(
		function(){
			$('.box-hover', this).fadeTo("fast", 0.3).show();
		},
		function(){
			$('.box-hover', this).fadeTo("fast", 0).hide();
		}
	);

	// $('.wide-col .box-hover').height($('.wide-col img').height());
	// $('.wide-col .box-hover').width($('.wide-col img').width());
	// $('.wide-col .box-hover').css('margin-top', -$('.wide-col img').height());
	// $('.wide-col .instr').css('top', ($('.wide-col img').height()-25)/2);
	// $('.wide-col .instr').css('left', ($('.wide-col img').width()-25)/2);

	if(iip_enabled == 1) {
		$('.wide-col').hover(
			function(){
				// $('.instr',this).show();
				// $('.box-hover',this).fadeTo("fast", 1).show();
				$('.img', this).fadeTo("fast", 0.2).show();
			},
			function(){
				// $('.instr',this).hide();
				// $('.box-hover',this).fadeTo("fast", 0).hide();
				$('.img',this).fadeTo("fast", 1);
			}
		);
	}

	$('.wide-col').click(function(event){
		event.preventDefault();
		if(iip_enabled == 1) {
			var server = 'https://storage.googleapis.com/pierreemmanuelfillet.com/';
			showViewer();
			var iipmooviewer = new IIPMooViewer( "iipContainer", {
				image: images,
				server: server,
				credit: credit,
				navImage: navImage,
				imgW: imgW,
				imgH: imgH,
				showNavButtons: true
			});
		}
	});

	$('#sidebar .fbLink').click(function(){
		var width = 986;
		var height = 588;
		var left = parseInt((screen.availWidth/2) - (width/2));
		var top = parseInt((screen.availHeight/2) - (height/2));
		var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
		var fbLink = "http://www.facebook.com/sharer.php?u="+ window.location.href;
		window.open(fbLink, "myWindow", windowFeatures);
	});

	$('#sidebar .twLink').click( function(e) {
		var win = null;
		var w = 500;
		var h = 300;
		var hashtags = "pierreemmanuelfillet," + string_to_slug($('a[rel="category tag"]').first().text());
		var url = "https://twitter.com/share?url=" + window.location.href +
					"&hashtags=" + hashtags +
					"&text=" + $("meta[property='og:title']").attr('content')
		LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
		TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
		settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+'';
		win = window.open (url,name,settings);
	});

	$('#footer .fbLink').click(function(){
		var width = 986;
		var height = 588;
		var left = parseInt((screen.availWidth/2) - (width/2));
		var top = parseInt((screen.availHeight/2) - (height/2));
		var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
		var fbLink = "http://www.facebook.com/sharer.php?u=https://storage.googleapis.com/pierreemmanuelfillet.com";
		window.open(fbLink, "myWindow", windowFeatures);
	});

	$('#footer .twLink').click( function(e) {
		var win = null;
		var w = 500;
		var h = 300;
		var hashtags = "pierreemmanuelfillet"
		var url = "https://twitter.com/share?url=https://storage.googleapis.com/pierreemmanuelfillet.com" +
					"&hashtags=" + hashtags +
					"&text=" + $("meta[property='og:title']").attr('content')
		LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
		TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
		settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+'';
		win = window.open (url,name,settings);
	});

	$('.closeBtn').click(function(event){
		hideViewer();
	});

	var resize = function() {
		var windowWidth = $(window).width();
		var windowHeight = $('body').height();
		var wHeight = $(window).height();

		$('.overlay, .overlay .bg').width(windowWidth);
		$('.overlay, .overlay .bg').height(windowHeight);

		$('.content').css({top:'20px', left: (windowWidth - 650)/2});
		$('.content').css('height', $('.overlay .center').height()+60);
		window.scrollTo(0, 0);
	}

	$('#about-link').click(function(event){
		$('.overlay').fadeTo("slow", 1).show();
		resize();
	});

	$('.overlay .closeBtn2').click(function(event){
		$('.overlay').fadeTo("slow", 0).hide();
	});

})(jQuery);

function string_to_slug(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();
	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to   = "aaaaeeeeiiiioooouuuunc------";
	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}
	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	.replace(/\s+/g, '-') // collapse whitespace and replace by -
	.replace(/-+/g, '-'); // collapse dashes
	return str;
}

function showViewer() {
	jQuery('.box-hover',this).hide();
	jQuery('#header').fadeTo("slow",0).hide();
	jQuery('.wrap').fadeTo("slow",0).hide();
	jQuery('#footer').fadeTo("slow",0).hide();

	jQuery('#iipContainer').fadeTo("slow",1).show();
	jQuery('.closeBtn').fadeTo("slow",1).show();
}
function hideViewer() {
	jQuery("#iipContainer").fadeTo("slow",0).hide().empty();
	jQuery(".closeBtn").fadeTo("slow",0).hide();

	jQuery('#header').fadeTo("slow",1).show();
	jQuery('.wrap').fadeTo("slow",1).show();
	jQuery('#footer').fadeTo("slow",1).show();
}
