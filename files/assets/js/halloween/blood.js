/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */
!function(e,t){"object"==typeof exports?module.exports=t(e,e.document):"function"==typeof define&&define.amd?define(function(){return t(e,e.document)}):e.Sketch=t(e,e.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e){return"[object Array]"==Object.prototype.toString.call(e)}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"string"==typeof e}function u(e){return C[e]||String.fromCharCode(e)}function a(e,t,n){for(var o in t)!n&&o in e||(e[o]=t[o]);return e}function c(e,t){return function(){e.apply(t,arguments)}}function l(e){var t={};for(var n in e)"webkitMovementX"!==n&&"webkitMovementY"!==n&&(o(e[n])?t[n]=c(e[n],e):t[n]=e[n]);return t}function s(e){function t(t){o(t)&&t.apply(e,[].splice.call(arguments,1))}function n(e){for(_=0;_<ee.length;_++)B=ee[_],i(B)?S[(e?"add":"remove")+"EventListener"].call(S,B,N,!1):o(B)?N=B:S=B}function r(){I(A),A=R(r),K||(t(e.setup),K=o(e.setup)),U||(t(e.resize),U=o(e.resize)),e.running&&!q&&(e.dt=(z=+new Date)-e.now,e.millis+=e.dt,e.now=z,t(e.update),Z&&(e.retina&&(e.save(),e.autoclear&&e.scale(V,V)),e.autoclear&&e.clear()),t(e.draw),Z&&e.retina&&e.restore()),q=++q%e.interval}function c(){S=J?e.style:e.canvas,D=J?"px":"",Y=e.width,j=e.height,e.fullscreen&&(j=e.height=v.innerHeight,Y=e.width=v.innerWidth),e.retina&&Z&&V&&(S.style.height=j+"px",S.style.width=Y+"px",Y*=V,j*=V),S.height!==j&&(S.height=j+D),S.width!==Y&&(S.width=Y+D),Z&&!e.autoclear&&e.retina&&e.scale(V,V),K&&t(e.resize)}function s(e,t){return L=t.getBoundingClientRect(),e.x=e.pageX-L.left-(v.scrollX||v.pageXOffset),e.y=e.pageY-L.top-(v.scrollY||v.pageYOffset),e}function f(t,n){return s(t,e.element),n=n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function d(e){if(e.preventDefault(),G=l(e),G.originalEvent=e,G.touches)for(Q.length=G.touches.length,_=0;_<G.touches.length;_++)Q[_]=f(G.touches[_],Q[_]);else Q.length=0,Q[0]=f(G,$);return a($,Q[0],!0),G}function p(n){for(n=d(n),M=(X=ee.indexOf(W=n.type))-1,e.dragging=!!/down|start/.test(W)||!/up|end/.test(W)&&e.dragging;M;)i(ee[M])?t(e[ee[M--]],n):i(ee[X])?t(e[ee[X++]],n):M=0}function g(n){F=n.keyCode,H="keyup"==n.type,te[F]=te[u(F)]=!H,t(e[n.type],n)}function m(n){e.autopause&&("blur"==n.type?E:y)(),t(e[n.type],n)}function y(){e.now=+new Date,e.running=!0}function E(){e.running=!1}function k(){(e.running?E:y)()}function P(){Z&&e.clearRect(0,0,e.width*V,e.height*V)}function T(){O=e.element.parentNode,_=b.indexOf(e),O&&O.removeChild(e.element),~_&&b.splice(_,1),n(!1),E()}var A,N,S,O,L,_,D,z,B,G,W,F,H,M,X,Y,j,q=0,Q=[],U=!1,K=!1,V=v.devicePixelRatio||1,J=e.type==w,Z=e.type==h,$={x:0,y:0,ox:0,oy:0,dx:0,dy:0},ee=[e.eventTarget||e.element,p,"mousedown","touchstart",p,"mousemove","touchmove",p,"mouseup","touchend",p,"click",p,"mouseout",p,"mouseover",x,g,"keydown","keyup",v,m,"focus","blur",c,"resize"],te={};for(F in C)te[C[F]]=!1;return a(e,{touches:Q,mouse:$,keys:te,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:T,toggle:k,clear:P,start:y,stop:E}),b.push(e),e.autostart&&y(),n(!0),c(),r(),e}for(var f,d,p="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),g="__hasSketch",m=Math,h="canvas",y="webgl",w="dom",x=t,v=e,b=[],E={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:x.body,interval:1,globals:!0,retina:!1,type:h},C={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},k={CANVAS:h,WEB_GL:y,WEBGL:y,DOM:w,instances:b,install:function(e){if(!e[g]){for(var t=0;t<p.length;t++)e[p[t]]=m[p[t]];a(e,{TWO_PI:2*m.PI,HALF_PI:m.PI/2,QUARTER_PI:m.PI/4,random:function(e,t){return n(e)?e[~~(m.random()*e.length)]:(r(t)||(t=e||1,e=0),e+m.random()*(t-e))},lerp:function(e,t,n){return e+n*(t-e)},map:function(e,t,n,o,r){return(e-t)/(n-t)*(r-o)+o}}),e[g]=!0}},create:function(e){return e=a(e||{},E),e.globals&&k.install(self),f=e.element=e.element||x.createElement(e.type===w?"div":"canvas"),d=e.context=e.context||function(){switch(e.type){case h:return f.getContext("2d",e);case y:return f.getContext("webgl",e)||f.getContext("experimental-webgl",e);case w:return f.canvas=f}}(),(e.container||x.body).appendChild(f),k.augment(d,e)},augment:function(e,t){return t=a(t||{},E),t.element=e.canvas||e,t.element.className+=" sketch",a(e,t,!0),s(e)}},P=["ms","moz","webkit","o"],T=self,A=0,N="AnimationFrame",S="request"+N,O="cancel"+N,R=T[S],I=T[O],L=0;L<P.length&&!R;L++)R=T[P[L]+"Request"+N],I=T[P[L]+"Cancel"+N];return T[S]=R=R||function(e){var t=+new Date,n=m.max(0,16-(t-A)),o=setTimeout(function(){e(t+n)},n);return A=t+n,o},T[O]=I=I||function(e){clearTimeout(e)},k});

/* 
  A Bloody Mess by Rob Glazebrook
  By default, canvas does not clear between frames. I'm taking advantage of that to create the running blood effect.
  This pen was inspired by Katy Decorah's BLOOD: https://codepen.io/katydecorah/pen/Lkogi
*/

var blood = Sketch.create({autoclear: false}),
    drops = [],
    dropCount = 75,
    Drop = function() {
      this.x = random(0,blood.width);
      this.radius = random(2.5,5);
      this.y = -this.radius - random(10,50);
      this.vy = this.radius/3;
      this.r = ~~random(240,255);
      this.g = ~~random(0,20);
      this.b = ~~random(0,20);
    }; 

blood.update = function() {
  var d = drops.length;
  while(d < dropCount) {
    var drop = new Drop();
    drops.push(drop);
    d++;
  }
  while(d--) {
    var drop = drops[d];
    drop.y += drop.vy;
    if(drop.y - drop.radius > blood.height) {
      drops.splice(d,1);
    }
  }
}

blood.draw = function() {
  var d = drops.length;
  while(d--) {
    var drop = drops[d];
    blood.beginPath();
    blood.fillStyle = 'rgba('+drop.r+','+drop.g+','+drop.b+',.8)';
    blood.arc(drop.x,drop.y,drop.radius,0,TWO_PI);
    blood.fill();
  }
} 