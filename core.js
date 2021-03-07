// Lista de enlaces con sus respectivas enumeraciones. (Minetras mas alto el número mas probabilidad de salir)
var links = [
	{ url: "trance-avx-dj-set-2212021", weight: 24 },
	{ url: "trance-avx-dj-set-02102021", weight: 100 },
	{ url: "trance-arcvalx-dj-set-1312021", weight: 23 },
	{ url: "trance-arcvalx-dj-set-1232021", weight: 22 },
	{ url: "trance-arcvalx-dj-set-12212020", weight: 21 },
	{ url: "edm-arcvalx-dj-set-12132020", weight: 20 },
	{ url: "trance-arcvalx-dj-set-11232020", weight: 19 },
	{ url: "edm-arcvalx-dj-set-1112020", weight: 18 },
	{ url: "trance-arcvalx-dj-set-08282020", weight: 17 },
	{ url: "trance-arcvalx-dj-set-08142020", weight: 16 },
	{ url: "trance-arcvalx-dj-set-07262020", weight: 15 },
	{ url: "trance-arcvalx-dj-set-07192020", weight: 14 },
	{ url: "old-dance-arcvalx-dj-set-07192020", weight: 13 },
	{ url: "edm-arcvalx-mini-dj-set-07052020", weight: 12 },
	{ url: "trance-arcvalx-dj-set-070520", weight: 11 },
	{ url: "trance-arcvalx-dj-set-06262020", weight: 10 },
	{ url: "trance-arcvalx-dj-set-06202020", weight: 9 },
	{ url: "vocal-trance-arcvalx-dj-set-060820", weight: 8 },
	{ url: "trance-arcvalx-dj-set-070620", weight: 7 },
	{ url: "new-trance-dj-set-arcvalx-b2b-leafar-052720", weight: 6 },
	{ url: "new-trance-dj-set-052020", weight: 5 },
	{ url: "arcvalx-dj-set-progressive-to-psytrance", weight: 4},
	{ url: "new-set-trance-february-27-28-2020", weight: 3 },
	{ url: "mini-set-january-30-2020-4-tracks", weight: 2 },
	{ url: "set-enero-2019-trance-psytrance", weight: 1 }
];

// Probabilidad por tamaño de Weight
function weightedRandom(arr) {
	var weightSum = arr.map(l => l.weight).reduce((a, b) => a + b, 0);
	var rand = Math.random() * weightSum;
	var accumulated = 0;
	for (var i = 0; i < arr.length; i++) {
		if (rand < accumulated + arr[i].weight) {
			return arr[i];
		}
		accumulated += arr[i].weight;
	}
}

// Compilar URL en funcion openSite()
function openSite() { document.getElementsByClassName("frameMixcloud")[0].src = "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2FArcvalx%2F" + weightedRandom(links).url + "%2F"; }

//------------------------------------------------------------------------------------------------------------

var isCtrl = false;

document.onkeyup = function(e) {				
	if (e.which == 17)
		isCtrl = false;
}

document.onkeydown = function(e) {
	if (e.which == 17)
		isCtrl = true;
	if ((e.which == 85) || (e.which == 67) && (isCtrl == true)) {
		return false;
	}
}

var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

function mischandler(){	
	return false;
}

function mousehandler(e){
	var myevent = (isNS) ? e : event;
	var eventbutton = (isNS) ? myevent.which : myevent.button;
	if ((eventbutton==2) || (eventbutton==3)) return false;
}

document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}
	
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}
	
document.onkeydown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123) {
		return false;
	}
}

function disableselect(e) {
	return false;
}

function reEnable() {
	return true;
}

document.onselectstart = new Function ("return false");
document.oncontextmenu = new Function ("return false");

if (window.sidebar) {
	document.onmousedown = disableselect;
	document.onclick = reEnable;
}

function rtclickcheck(keyp) {
	if (navigator.appName == "Netscape" && keyp.which == 3) {
		return false;
	}
	if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
		return false;
	}
}

document.onmousedown = rtclickcheck;

var player;

if (!window['YT']) { var YT = { loading: 0, loaded: 0 }; }
if (!window['YTConfig']) { var YTConfig = { 'host': 'http://www.youtube.com' }; }
if (!YT.loading) { YT.loading = 1; (function() {
	var l = [];
	YT.ready = function(f) { if (YT.loaded) { f(); } else { l.push(f); } };
	window.onYTReady = function() { YT.loaded = 1; for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) {} } };
	YT.setConfig = function(c) { for (var k in c) { if (c.hasOwnProperty(k)) { YTConfig[k] = c[k]; } } };
	var a = document.createElement('script');
	a.type = 'text/javascript';
	a.id = 'www-widgetapi-script';
	a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfllf5xrd/www-widgetapi.js';
	a.async = true;
	var b = document.getElementsByTagName('script')[0];
	b.parentNode.insertBefore(a, b);
})(); }

function onYouTubeIframeAPIReady() {
	player = new YT.Player('loader', {
		//Z8YEKHcMYns
		//lCOF9LN_Zxs
		//scIlhzC7toY
		//tyFSS0YBf9Q «
		videoId: 'tyFSS0YBf9Q',
		width: '0',
		height: '0',
		playerVars: {
			autoplay: 1,
			controls: 1,
			showinfo: 0,
			modestbranding: 1,
			loop: 1,
			fs: 0,
			cc_load_policty: 0,
			iv_load_policy: 3,
			autohide: 0
		},
		events: {
			onReady: initialize,
			onStateChange: state
		}
	});
}

function state() {
	$('#name').text(player.getVideoData().title);
}

function initialize() {
	player.setVolume(10);
	$('#name').text(player.getVideoData().title);
	$('#vol-control').on('input', function() {
		player.setVolume($(this).val());
	});
	$('#timers').text(formatTime(player.getCurrentTime()) + " / " + formatTime(player.getDuration()));
	if (player.getVolume() > 0) {
		$('#vol-range').text("Volume: 10");
	}
	setInterval(function() {
		$('#timers').text(formatTime(player.getCurrentTime()) + " / " + formatTime(player.getDuration()));
	}, 1000);
	actualizar();
}

function formatTime(time) {
	time = Math.round(time);
	var minutes = Math.floor(time / 60), seconds = time - minutes * 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	return minutes + ":" + seconds;
}

function actualizar() {
	setInterval(function() {
		$('#vol-range').text("Volume: "+player.getVolume());
	}, 1);
}
function prev() { player.previousVideo() }
function next() { player.nextVideo() }
