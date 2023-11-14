(function(g){var window=this;'use strict';var uob=function(a,b){a.Qa("onAutonavCoundownStarted",b)},i6=function(a,b,c){g.Nu(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Qg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.PS&&(b.lengthText?(e=b.lengthText||null,f=b.nw||null):b.lengthSeconds&&(e=g.YG(b.lengthSeconds),f=g.YG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.$Pa(d).type;var l=b instanceof g.PS?b.isLivePlayback:null,m=b instanceof g.PS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.jK("Ver $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Qk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Bs};b instanceof g.OS&&(c.playlist_length=b.playlistLength);a.update(c)},j6=function(a){var b=a.U(),c=b.D;
g.U.call(this,{I:"a",S:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"En vivo"},
{I:"div",Ma:["ytp-autonav-upcoming-stamp"],xa:"Pr\u00f3ximamente"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ma:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=
a;this.suggestion=null;this.j=c;this.Ta("click",this.onClick);this.Ta("keypress",this.onKeyPress)},k6=function(a,b){b=void 0===b?!1:b;
g.U.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.N=b;this.G=this.K=void 0;this.C=0;this.container=new g.U({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.L(this,this.container);this.container.Ea(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.U({I:"div",S:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"En vivo"},{I:"div",Ma:["ytp-autonav-upcoming-stamp"],xa:"Pr\u00f3ximamente"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.L(this,this.j);this.j.Ea(this.container.element);d||this.T(this.j.Ga("ytp-autonav-endscreen-link-container"),"click",this.PS);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Ga("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.U({I:"div",S:"ytp-autonav-overlay"});g.L(this,this.overlay);this.overlay.Ea(this.container.element);this.B=new g.U({I:"div",S:"ytp-autonav-endscreen-button-container"});g.L(this,this.B);this.B.Ea(this.container.element);
this.cancelButton=new g.U({I:"button",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{"aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},xa:"Cancelar"});g.L(this,this.cancelButton);this.cancelButton.Ea(this.B.element);this.cancelButton.Ta("click",this.N1,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.U({I:"a",Ma:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{href:"{{url}}",role:"button","aria-label":"Reproducir siguiente video"},xa:"Reproducir ahora"});g.L(this,this.playButton);this.playButton.Ea(this.B.element);this.playButton.Ta("click",this.PS,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&vob(this,b)):this.J.createClientVe(this.playButton.element,
this,115130);this.D=new g.Bu(function(){wob(c)},500);
g.L(this,this.D);this.OS();this.T(a,"autonavvisibility",this.OS);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.M1),this.T(a,"onAutonavCoundownStarted",this.x8))},l6=function(a){var b=a.J.Pk(!0,a.J.isFullscreen());
g.Nu(a.container.element,"ytp-autonav-endscreen-small-mode",a.Kf(b));g.Nu(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.FK);g.Nu(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.yf());g.Nu(a.J.getRootNode(),"countdown-running",a.Uk());g.Nu(a.container.element,"ytp-player-content",a.J.yf());g.Vr(a.overlay.element,{width:b.width+"px"});if(!a.Uk()){a.J.yf()?xob(a,Math.round(yob(a)/1E3)):xob(a);b=!!a.suggestion&&!!a.suggestion.Bs;var c=a.J.yf()||!b;
g.Nu(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Nu(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.fG(a.B,a.J.yf());g.Nu(a.element,"ytp-enable-w2w-color-transitions",zob(a))}},wob=function(a){var b=yob(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);xob(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Uk()?a.select(!0):a.Uk()&&a.D.start()},yob=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.SB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Ss()?a.J.Ss():g.xJ(a.J.U().experiments,"autoplay_time")||1E4},vob=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.k5;a.K=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},zob=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},xob=function(a,b){b=void 0===b?-1:b;
a=a.j.Ga("ytp-autonav-endscreen-upnext-header");g.pf(a);if(0<=b){b=String(b);var c="A continuaci\u00f3n, en $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="A continuaci\u00f3n, en $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.nf("A continuaci\u00f3n, en $SECONDS".slice(0,d)));var e=g.mf("span");g.Hu(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Af(e,b);a.appendChild(e);a.appendChild(g.nf("A continuaci\u00f3n, en $SECONDS".slice(d+c.length)));return}}g.Af(a,"Siguiente")},m6=function(a,
b){g.U.call(this,{I:"div",
Ma:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},n6=function(a){g.U.call(this,{I:"div",
Ma:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"A continuaci\u00f3n"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente video"},V:[{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},V:[{I:"circle",S:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.G=this.Ga("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.Bu(this.dH,5E3,this);this.B=0;var b=this.Ga("ytp-upnext-cancel");this.cancelButton=new g.U({I:"button",Ma:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},xa:"Cancelar"});g.L(this,this.cancelButton);this.cancelButton.Ta("click",
this.O1,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,this,115129);g.L(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Ga("ytp-upnext-autoplay-icon");this.T(b,"click",this.P1);this.api.createClientVe(b,this,115130);this.QS();this.T(a,"autonavvisibility",this.QS);this.T(a,"mdxnowautoplaying",this.j9);this.T(a,"mdxautoplaycanceled",this.k9);g.Nu(this.element,"ytp-upnext-mobile",this.api.U().B)},Aob=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.SB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Ss()?a.api.Ss():g.xJ(a.api.U().experiments,"autoplay_time")||1E4},Bob=function(a,b){b=Aob(a,b);
var c=Math,d=c.min;var e=(0,g.BD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Uk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Uk()&&a.j.start()},o6=function(a){m6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.U({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"M\u00e1s videos"}]});this.N=new g.U({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new k6(this.player);g.L(this,this.B);this.B.Ea(this.element);a.getVideoData().Qf?this.j=this.B:(this.j=new n6(a),g.sU(this.player,this.j.element,4),g.L(this,this.j));this.overlay=new g.U({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.L(this,this.overlay);this.overlay.Ea(this.element);this.D=new g.OK(this);g.L(this,this.D);g.L(this,this.table);this.table.Ea(this.element);this.table.show();g.L(this,this.N);this.N.Ea(this.table.element);this.hide()},p6=function(a){var b=a.yf();
b!==a.G&&(a.G=b,a.player.qa("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},q6=function(a,b){g.U.call(this,{I:"button",
Ma:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.l_();2===this.buttonType&&g.Ju(this.element,"ytp-continue-watching-button");this.Ta("click",this.onClick);this.Ta("videodatachange",this.l_);g.fG(this,!0)},r6=function(a,b){m6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.sb=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new q6(a,2);g.L(this,this.watchButton);this.watchButton.Ea(this.element);this.hide()},Cob=function(a){m6.call(this,a,"subscribecard-endscreen");
this.j=new g.U({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",W:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.L(this,this.j);this.j.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.iW("Suscribirse",null,"Anular suscripci\u00f3n",null,!0,!1,b.Gl,b.subscribed,"trailer-endscreen",null,a);g.L(this,this.subscribeButton);this.subscribeButton.Ea(this.j.Ga("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ra);this.Ra();this.hide()},s6=function(a){var b=a.U(),c=g.hL||g.$R?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.U.call(this,{I:"a",Ma:e,W:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",W:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"En vivo"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.OK(this);g.L(this,this.j);this.Ta("click",this.onClick);this.Ta("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},t6=function(a){m6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.OK(this);g.L(this,this.B);this.K=new g.Bu(function(){g.Ju(b.element,"ytp-show-tiles")},0);
g.L(this,this.K);var c=new g.U({I:"button",Ma:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Anterior"},V:[g.lG()]});g.L(this,c);c.Ea(this.element);c.Ta("click",this.T1,this);this.table=new g.cG({I:"div",S:"ytp-endscreen-content"});g.L(this,this.table);this.table.Ea(this.element);c=new g.U({I:"button",Ma:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Siguiente"},V:[g.mG()]});g.L(this,c);c.Ea(this.element);c.Ta("click",this.S1,this);a.getVideoData().Qf?this.j=new k6(a,!0):this.j=new n6(a);
g.L(this,this.j);g.sU(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},u6=function(a){return g.tU(a.player)&&a.GC()&&!a.D},v6=function(a){var b=a.yf();
b!==a.N&&(a.N=b,a.player.qa("autonavvisibility"))},w6=function(a){m6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new q6(a,1);g.L(this,this.watchButton);this.watchButton.Ea(this.element);g.Qcb(a)&&(this.j=new g.t2(a,g.eU(a)),g.L(this,this.j),this.B=new g.U({I:"div",Ma:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],W:{tabIndex:"-1"},V:[this.j]}),g.L(this,this.B),this.j.Ea(this.B.element),this.B.Ea(this.element));a.createClientVe(this.element,this,156914);this.hide()},Gob=function(a){g.xV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.OK(this);g.L(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.BC(g.jS(c))&&d&&!g.oU(a)?(this.B=!0,this.endScreen=new r6(a,g.eU(a))):g.pU(a)?this.endScreen=new w6(a):Dob(a)?(this.D=!0,Eob(this),this.j?this.endScreen=new o6(a):this.endScreen=new t6(a)):c.Ug?this.endScreen=new Cob(a):this.endScreen=new m6(a);g.L(this,this.endScreen);g.sU(a,this.endScreen.element,4);Fob(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.dK("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.eK("endscreen"),function(e){b.onCueRangeExit(e)})},Eob=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Hl&&a.C===b.Qf)return!1;a.j=b.Hl;a.C=b.Qf;return!0},Dob=function(a){a=a.U();
return a.Fd&&!a.Ug},Fob=function(a){a.player.hf("endscreen");
var b=a.player.getVideoData();b=new g.cK(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.cK(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.uf([b,c])};
g.kU.prototype.Ss=g.ca(16,function(){return this.app.Ss()});
g.S0.prototype.Ss=g.ca(15,function(){return this.getVideoData().DU});
g.XT.prototype.ym=g.ca(14,function(a){this.Hh().ym(a)});
g.HW.prototype.ym=g.ca(13,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.TX.prototype.ym=g.ca(12,function(a){this.overflowButton&&this.overflowButton.ym(a)});
g.XT.prototype.zm=g.ca(11,function(a){this.Hh().zm(a)});
g.MW.prototype.zm=g.ca(10,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.TX.prototype.zm=g.ca(9,function(a){this.shareButton&&this.shareButton.zm(a)});
g.XT.prototype.fu=g.ca(8,function(a){this.Hh().fu(a)});
g.aW.prototype.fu=g.ca(7,function(a){this.BQ!==a&&(this.BQ=a,this.iq())});
g.XT.prototype.Kr=g.ca(6,function(a){this.Hh().Kr(a)});
g.TX.prototype.Kr=g.ca(5,function(a){this.AQ!==a&&(this.AQ=a,this.Ak())});g.w(j6,g.U);j6.prototype.select=function(){this.J.Do(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.dD||void 0)&&this.J.logClick(this.element)};
j6.prototype.onClick=function(a){g.IU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
j6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.w(k6,g.U);g.k=k6.prototype;g.k.mG=function(a){this.suggestion!==a&&(this.suggestion=a,i6(this.j,a),this.playButton.updateValue("url",this.suggestion.Qk()),l6(this))};
g.k.Uk=function(){return 0<this.C};
g.k.xB=function(){this.Uk()||(this.C=Date.now(),wob(this),uob(this.J,yob(this)),g.Nu(this.J.getRootNode(),"countdown-running",this.Uk()))};
g.k.Mw=function(){this.cq();wob(this);var a=this.j.Ga("ytp-autonav-endscreen-upnext-header");a&&g.Af(a,"Siguiente")};
g.k.cq=function(){this.Uk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.cq()};
g.k.PS=function(a){g.IU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Ga("ytp-autonav-endscreen-link-container")&&(a=this.j.Ga("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.K?(this.J.Qa("innertubeCommand",this.K),this.cq()):this.select())};
g.k.N1=function(){this.J.logClick(this.cancelButton.element);g.mU(this.J,!0);this.G&&this.J.Qa("innertubeCommand",this.G)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&vob(this,b);var c;this.G=null==(c=b.K4)?void 0:c.command};
g.k.x8=function(a){if(zob(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.fH(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.fH(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.fH(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.fH(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.fH(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.fH(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Nu(this.element,"ytp-w2w-animate",!0)}};
g.k.M1=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.Nu(this.element,"ytp-w2w-animate",!1)};
g.k.OS=function(){var a=this.J.yf();this.N&&this.Cb!==a&&g.fG(this,a);l6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Ga("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Kf=function(a){return 400>a.width||459>a.height};g.w(m6,g.U);g.k=m6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.GC=function(){return!1};
g.k.yf=function(){return!1};
g.k.AX=function(){return!1};g.w(n6,g.U);g.k=n6.prototype;g.k.dH=function(){this.notification&&(this.D.stop(),this.Mc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.mG=function(a){this.suggestion=a;i6(this,a,"hqdefault.jpg")};
g.k.QS=function(){g.fG(this,this.api.yf());this.api.logVisibility(this.element,this.api.yf());this.api.logVisibility(this.Ga("ytp-upnext-autoplay-icon"),this.api.yf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.yf())};
g.k.s9=function(){window.focus();this.dH()};
g.k.xB=function(a){var b=this;this.Uk()||(g.KE("a11y-announce","A continuaci\u00f3n "+this.suggestion.title),this.B=(0,g.BD)(),this.j=new g.Bu(function(){Bob(b,a)},25),Bob(this,a),uob(this.api,Aob(this,a)));
g.Lu(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.U.prototype.hide.call(this)};
g.k.Uk=function(){return!!this.j};
g.k.Mw=function(){this.cq();this.B=(0,g.BD)();Bob(this);g.Ju(this.element,"ytp-upnext-autoplay-paused")};
g.k.cq=function(){this.Uk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.dH(),this.notification=new Notification("A continuaci\u00f3n",{body:this.suggestion.title,icon:this.suggestion.Qg()}),this.C=this.T(this.notification,"click",this.s9),this.D.start())}this.cq();this.api.nextVideo(!1,a)};
g.k.P1=function(a){!g.zf(this.cancelButton.element,a.target)&&g.IU(a,this.api)&&(this.api.yf()&&this.api.logClick(this.Ga("ytp-upnext-autoplay-icon")),this.select())};
g.k.O1=function(){this.api.yf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.mU(this.api,!0)};
g.k.j9=function(a){this.api.getPresentingPlayerType();this.show();this.xB(a)};
g.k.k9=function(){this.api.getPresentingPlayerType();this.cq();this.hide()};
g.k.ya=function(){this.cq();this.dH();g.U.prototype.ya.call(this)};g.w(o6,m6);g.k=o6.prototype;g.k.create=function(){m6.prototype.create.call(this);this.D.T(this.player,"appresize",this.aC);this.D.T(this.player,"onVideoAreaChange",this.aC);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.RS);this.D.T(this.player,"onAutonavCancelled",this.Q1);this.onVideoDataChange()};
g.k.show=function(){m6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.mU(this.player,!1);g.tU(this.player)&&this.GC()&&!this.C?(p6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.xB():3===this.videoData.autonavState&&this.j.Mw()):(g.mU(this.player,!0),p6(this));this.aC()};
g.k.hide=function(){m6.prototype.hide.call(this);this.j.Mw();p6(this)};
g.k.aC=function(){var a=this.player.Pk(!0,this.player.isFullscreen());p6(this);l6(this.B);g.Nu(this.element,"ytp-autonav-cancelled-small-mode",this.Kf(a));g.Nu(this.element,"ytp-autonav-cancelled-tiny-mode",this.FI(a));g.Nu(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Vr(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.Nu(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.pT(this.videoData);b&&(this.j.mG(b),this.j!==this.B&&this.B.mG(b))}if(a&&a.length)for(b=0;b<Hob.length;++b){var c=Hob[b];if(a&&a[c]){this.videos[b]=new j6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,i6(d,c));g.L(this,this.videos[b]);this.videos[b].Ea(this.N.element)}}this.aC()}};
g.k.RS=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.cq(),this.Cb&&this.aC()):(this.K=!0,this.yf()&&(2===a?this.j.xB():3===a&&this.j.Mw()))};
g.k.Q1=function(a){a?this.RS(1):(this.C=null,this.K=!1)};
g.k.GC=function(){return 1!==this.videoData.autonavState};
g.k.Kf=function(a){return(910>a.width||459>a.height)&&!this.FI(a)&&!(400>=a.width||360>=a.height)};
g.k.FI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.yf=function(){return this.Cb&&g.tU(this.player)&&this.GC()&&!this.C};
var Hob=[1,3,2,4];g.w(q6,g.U);g.k=q6.prototype;g.k.l_=function(){switch(this.buttonType){case 1:var a="Mirar de nuevo en YouTube";var b=156915;break;case 2:a="Seguir mirando en YouTube";b=156942;break;default:a="Seguir mirando en YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.JU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.aS(b)||g.iS(b)){var c={};g.aS(b)&&g.bU(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.AP(c,b);a=g.tm(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Cb&&this.Z)};
g.k.show=function(){g.U.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.U.prototype.hide.call(this);this.logVisibility()};
g.k.ac=function(a){g.U.prototype.ac.call(this,a);this.logVisibility()};g.w(r6,m6);r6.prototype.show=function(){3!==this.player.getPlayerState()&&(m6.prototype.show.call(this),this.sb.Kr(!0),this.sb.zm(!0),this.J.U().Qd||this.sb.ym(!0),this.J.logVisibility(this.element,!0),this.watchButton.ac(!0))};
r6.prototype.hide=function(){m6.prototype.hide.call(this);this.sb.Kr(!1);this.sb.zm(!1);this.sb.ym(!1);this.J.logVisibility(this.element,!1);this.watchButton.ac(!1)};g.w(Cob,m6);Cob.prototype.Ra=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Gl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.w(s6,g.U);s6.prototype.select=function(){this.api.Do(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.dD||void 0)&&this.api.logClick(this.element)};
s6.prototype.onClick=function(a){if(g.aS(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Qk(),c={};g.tSa(this.api,c,"emb_rel_end");b=g.tm(b,c);g.JU(b,this.api,a)}else g.IU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
s6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
s6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Nd?!1:b.D};g.w(t6,m6);g.k=t6.prototype;g.k.create=function(){m6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.lq();this.B.T(this.player,"appresize",this.lq);this.B.T(this.player,"onVideoAreaChange",this.lq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.vL);this.B.T(this.player,"onAutonavCancelled",this.R1);a=this.videoData.autonavState;a!==this.Y&&this.vL(a);this.B.T(this.element,"transitionend",this.H$)};
g.k.destroy=function(){g.QC(this.B);g.vb(this.stills);this.stills=[];m6.prototype.destroy.call(this);g.Lu(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.GC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Cb;m6.prototype.show.call(this);g.Lu(this.element,"ytp-show-tiles");this.player.U().B?g.Du(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.mU(this.player,!1);u6(this)?(v6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.xB():3===this.videoData.autonavState&&this.j.Mw()):(g.mU(this.player,!0),v6(this));a!==this.Cb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Cb;m6.prototype.hide.call(this);this.j.Mw();v6(this);a!==this.Cb&&this.player.logVisibility(this.element,!1)};
g.k.H$=function(a){a.target===this.element&&this.lq()};
g.k.lq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.pT(d)];if(e.length){g.Ju(this.element,"ytp-endscreen-paginate");var f=this.J.Pk(!0,this.J.isFullscreen());if(a=g.eU(this.J))a=a.Yf()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,u=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&u)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(u)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.es(f,n,p);g.Vr(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.mG(g.pT(this.videoData));this.j instanceof
k6&&l6(this.j);g.Nu(this.element,"ytp-endscreen-takeover",u6(this));v6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.ne(q+this.C,c),0!==t){r=this.stills[h];r||(r=new s6(this.player),this.stills[h]=r,f.appendChild(r.element));u=Math.floor(p*m/b);var x=Math.floor(n*l/a),B=Math.floor(p*(m+t)/b)-u-4,F=Math.floor(n*(l+t)/a)-x-4;g.as(r.element,x,u);g.es(r.element,F,B);g.Vr(r.element,"transitionDelay",
(m+l)/20+"s");g.Nu(r.element,"ytp-videowall-still-mini",1===t);g.Nu(r.element,"ytp-videowall-still-large",2<t);t=Math.max(F,B);g.Nu(r.element,"ytp-videowall-still-round-large",256<=t);g.Nu(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.Nu(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),u=g.Iu(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",i6(r,q,u),g.aS(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Qk(),u={},g.bU(r.api,"addEmbedsConversionTrackingParams",[u]),t=g.tm(t,g.AP(u,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.Nu(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.rf(a.element),g.ub(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.videoData=a,this.lq())};
g.k.S1=function(){this.C+=this.stills.length;this.lq()};
g.k.T1=function(){this.C-=this.stills.length;this.lq()};
g.k.AX=function(){return this.j.Uk()};
g.k.vL=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.cq(),this.Cb&&this.lq()):(this.G=!0,this.Cb&&u6(this)&&(2===a?this.j.xB():3===a&&this.j.Mw()))};
g.k.R1=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.vL(1)}else this.D=null,this.G=!1;this.lq()};
g.k.yf=function(){return this.Cb&&u6(this)};g.w(w6,m6);w6.prototype.RD=function(){var a;return null==(a=this.j)?void 0:a.RD()};
w6.prototype.show=function(){if(3!==this.player.getPlayerState()){m6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.RD();g.Nu(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.eU(this.player))||c.fu(!0);this.player.logVisibility(this.element,!0);this.watchButton.ac(!0)}};
w6.prototype.hide=function(){m6.prototype.hide.call(this);var a;null==(a=g.eU(this.player))||a.fu(!1);this.player.logVisibility(this.element,!1);this.watchButton.ac(!1)};g.w(Gob,g.xV);g.k=Gob.prototype;g.k.nu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((g.pU(this.player)||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.pT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!Dob(this.player)||d;a=a.sj||g.iS(a.Ia);c=this.player.rD();return d&&!a&&!c&&!b};
g.k.yf=function(){return this.endScreen.yf()};
g.k.k7=function(){return this.yf()?this.endScreen.AX():!1};
g.k.ya=function(){this.player.hf("endscreen");g.xV.prototype.ya.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.zb().Ne.get("heartbeat"),d=g.pT(a);!d||b.videoId!==d.videoId||a.DS?(this.player.Do(b.videoId,void 0,void 0,!0,!0,b),c&&c.OI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.xV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.xV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.nu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Fob(this);this.D&&Eob(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new o6(this.player):this.endScreen=new t6(this.player),g.L(this,this.endScreen),g.sU(this.player,this.endScreen.element,4))};g.wV("endscreen",Gob);})(_yt_player);
