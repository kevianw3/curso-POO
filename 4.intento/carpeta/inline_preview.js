(function(g){var window=this;'use strict';var upb=function(a){g.U.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.jg=!1;this.player=a;this.T(a,"onStateChange",this.UR);this.T(a,"videodatachange",this.xx);this.T(a,"onInlinePreviewModeChange",this.f7);this.xf=new g.zu(this.Dw,null,this);g.L(this,this.xf)},G6=function(a){g.xV.call(this,a);
this.j=new upb(this.player);g.L(this,this.j);this.j.hide();g.sU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.Ku(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(upb,g.U);g.k=upb.prototype;
g.k.FO=function(){this.tooltip=new g.SX(this.player,this);g.L(this,this.tooltip);g.sU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Uc=new g.dW(this.player);g.L(this,this.Uc);this.vk=new g.U({I:"div",Ma:["ytp-inline-preview-scrim"]});g.L(this,this.vk);this.vk.Ea(this.element);this.T(this.vk.element,"click",this.xJ);this.Hj=new g.LX(this.player,this,300);g.L(this,this.Hj);this.Hj.Ea(this.vk.element);this.controls=new g.U({I:"div",S:"ytp-inline-preview-controls"});g.L(this,this.controls);
this.controls.Ea(this.element);var a=new g.cX(this.player,this,!1);g.L(this,a);a.Ea(this.controls.element);a=new g.JX(this.player,this);g.L(this,a);a.Ea(this.controls.element);this.Qc=new g.jX(this.player,this);g.L(this,this.Qc);g.sU(this.player,this.Qc.element,4);this.T(this.player,"appresize",this.Ib);this.T(this.player,"fullscreentoggled",this.Ib);this.Ib()};
g.k.show=function(){g.Au(this.xf);this.jg||(this.FO(),this.jg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Qc.show();this.player.Qa("onInlinePreviewUiReady")};
g.k.hide=function(){this.xf.stop();g.U.prototype.hide.call(this);this.player.isInline()||this.jg&&this.Qc.hide()};
g.k.ya=function(){g.U.prototype.ya.call(this)};
g.k.xJ=function(a){a.target===this.vk.element&&this.player.Qa("onExpandInlinePreview",a)};
g.k.f7=function(){g.Nu(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Xe=function(){this.Qc.Gc();this.Hj.Gc()};
g.k.Dw=function(){this.Xe();g.Au(this.xf)};
g.k.Ib=function(){g.vX(this.Qc,0,this.player.kb().getPlayerSize().width,!1);g.kX(this.Qc)};
g.k.UR=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.xx=function(a,b){if(this.player.isInline()){g.Nu(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.pC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.Nu(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.qc=function(){return this.tooltip};
g.k.Yf=function(){return!1};
g.k.Kf=function(){return!1};
g.k.Zj=function(){return!1};
g.k.pB=function(){};
g.k.kp=function(){};
g.k.Ns=function(){};
g.k.un=function(){return null};
g.k.KH=function(){return null};
g.k.WN=function(){return new g.ue(0,0)};
g.k.Pk=function(){return new g.Sr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cr=function(a,b,c,d,e){var f=d=0,h=0,l=g.fs(a);if(b){c=g.Iu(b,"ytp-mute-button");var m=g.Iu(b,"ytp-subtitles-button"),n=g.ds(b,this.element);b=g.fs(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.kb().getPlayerSize().width;h=g.me(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.gq=function(){};
g.k.Sj=function(){return!1};
g.k.fu=function(){};
g.k.Kr=function(){};
g.k.zm=function(){};
g.k.ym=function(){};
g.k.wq=function(){};
g.k.qp=function(){};
g.k.Zw=function(){};
g.k.LH=function(){return null};g.w(G6,g.xV);G6.prototype.Al=function(){return!1};
G6.prototype.load=function(){this.player.hideControls();this.j.show()};
G6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.wV("inline_preview",G6);})(_yt_player);
