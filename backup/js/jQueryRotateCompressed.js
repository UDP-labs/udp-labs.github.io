// VERSION: 1.3 LAST UPDATE: 26.05.2010
/*
 * THIS IS FREE SCRIPT BUT LEAVE THIS COMMENT IF
 * YOU WANT USE THIS CODE ON YOUR SITE
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * http://wilq32.blogspot.com
 * 
 */
 (function(f){jQuery.fn.extend({ImageRotate:function(a){if(!(this.Wilq32&&this.Wilq32.PhotoEffect)){a=f.extend(true,{},a);return(new Wilq32.PhotoEffect(this.get(0),a))._temp}},rotate:function(a){if(this.length!==0)if(typeof a!="undefined"){if(typeof a=="number")a={angle:a};for(var b=[],c=0,e=this.length;c<e;c++){var d=this.get(c);typeof d.Wilq32=="undefined"?b.push(f(f(d).ImageRotate(a))):d.Wilq32.PhotoEffect._rotate(a.angle)}return b}},rotateAnimation:function(a){if(this.length!==0)if(typeof a!="undefined"){if(typeof a==
"number")a={angle:a};for(var b=[],c=0,e=this.length;c<e;c++){var d=this.get(c);if(typeof d.Wilq32=="undefined")b.push(f(f(d).ImageRotate(a)));else{d.Wilq32.PhotoEffect._parameters.animateAngle=a.angle;d.Wilq32.PhotoEffect._parameters.callback=a.callback||d.Wilq32.PhotoEffect._parameters.callback||function(){};d.Wilq32.PhotoEffect._animateStart()}}return b}}});Wilq32={};Wilq32.PhotoEffect=function(a,b){this._img=a;this._parameters=b;this._parameters.className=a.className;this._parameters.id=a.getAttribute("id");
this._parameters.animateAngle=0;if(!b)this._parameters={};this._angle=0;if(!b.angle)this._parameters.angle=0;this._temp=document.createElement("span");this._temp.style.display="inline-block";this._temp.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._temp,a);this._img._ref=this;this._img.complete?this._Loader():jQuery(this._img).bind("load",function(){this._ref._Loader.call(this._ref)})};if(jQuery.browser.msie)Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml",
"behavior:url(#default#VML)");try{!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");return function(b){return document.createElement("<rvml:"+b+' class="rvml">')}}catch(a){return function(b){return document.createElement("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}();Wilq32.PhotoEffect.prototype._Loader=function(){return jQuery.browser.msie?function(){var a=this._img.src;this._temp.setAttribute("id",this._parameters.id);this._temp.className=
this._parameters.className;var b=this._img.width,c=this._img.height;this._img.parentNode.removeChild(this._img);this._img._widthMax=this._img._heightMax=Math.sqrt(c*c+b*b);this._img._heightMax=Math.sqrt(c*c+b*b);this._vimage=this.createVMLNode("image");this._vimage._ref=this;this._vimage.style.height=c+"px";this._vimage.style.width=b+"px";this._temp.style.position="relative";this._vimage.style.position="absolute";this._temp.style.width=this._temp.style.height=this._img._heightMax+"px";this._vimage.src=
a;this._temp.appendChild(this._vimage);if(this._parameters.preservePosition){this._temp.style.width=b+"px";this._temp.style.height=c+"px";this._vimage.style.top="0px";this._vimage.style.left="0px"}else{this._vimage.style.top=(this._img._heightMax-c)/2;this._vimage.style.left=(this._img._widthMax-b)/2}if(this._parameters.bind)for(var e in this._parameters.bind)if(this._parameters.bind.hasOwnProperty(e))for(var d in this._parameters.bind[e])this._parameters.bind[e].hasOwnProperty(d)&&jQuery(this._temp).bind(d,
this._parameters.bind[e][d]);this._rotate(this._parameters.angle)}:function(){this._temp.setAttribute("id",this._parameters.id);this._temp.className=this._parameters.className;var a=this._img.width,b=this._img.height;this._img.parentNode.removeChild(this._img);this._img._widthMax=this._img._heightMax=Math.sqrt(b*b+a*a);this._canvas=document.createElement("canvas");this._canvas._ref=this;this._canvas.height=b;this._canvas.width=a;this._canvas.setAttribute("width",a);this._canvas.Wilq32=this._temp.Wilq32;
this._temp.appendChild(this._canvas);if(this._parameters.preservePosition){this._temp.style.width=a+"px";this._temp.style.height=b+"px";this._canvas.style.position="relative";this._canvas.style.left=-(this._img._widthMax-a)/2+"px";this._canvas.style.top=-(this._img._widthMax-b)/2+"px"}if(this._parameters.bind)for(var c in this._parameters.bind)if(this._parameters.bind.hasOwnProperty(c))for(var e in this._parameters.bind[c])this._parameters.bind[c].hasOwnProperty(e)&&jQuery(this._canvas).bind(e,this._parameters.bind[c][e]);
this._cnv=this._canvas.getContext("2d");this._rotate(this._parameters.angle)}}();Wilq32.PhotoEffect.prototype._animateStart=function(){this._timer&&clearTimeout(this._timer);this._animate()};Wilq32.PhotoEffect.prototype._animate=function(){if(this._canvas||this._vimage)this._angle-=(this._angle-this._parameters.animateAngle)*0.1;if(typeof this._parameters.minAngle!="undefined")if(this._angle<this._parameters.minAngle)this._angle=this._parameters.minAngle;if(typeof this._parameters.maxAngle!="undefined")if(this._angle>
this._parameters.maxAngle)this._angle=this._parameters.maxAngle;var a=!!Math.round(this._angle*100-this._parameters.animateAngle*100)==0&&!!this._timer;this._parameters.callback&&a&&this._parameters.callback();if(a&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage)this._rotate(this._angle);var b=this;this._timer=setTimeout(function(){b._animate.call(b)},10)}};Wilq32.PhotoEffect.prototype._rotate=function(){return jQuery.browser.msie?function(a){this._vimage.style.rotation=
a}:function(a){if(this._img.width)if(typeof a=="number"){a=a%360*Math.PI/180;var b=this._img.width,c=this._img.height,e=this._img._widthMax-b,d=this._img._heightMax-c;this._canvas.width=b+e;this._canvas.height=c+d;this._cnv.save();this._cnv.translate(e/2,d/2);this._cnv.translate(b/2,c/2);this._cnv.rotate(a);this._cnv.translate(-b/2,-c/2);this._cnv.drawImage(this._img,0,0);this._cnv.restore()}}}()})(jQuery);