(function(){var f=!0,h=null,i=!1,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},j=function(a,b,c){j=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return j.apply(h,arguments)};var k=(new Date).getTime();var ca=/&/g,da=/</g,ea=/>/g,fa=/\"/g,l={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},q={"'":"\\'"};var r=window,t,ga=h,u=document.getElementsByTagName("script");u&&u.length&&(ga=u[u.length-1].parentNode);t=ga;var v=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ha=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ia=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(ha))?a[0]:"pagead2.googlesyndication.com"};var w=function(){return ia("")};w();var x=function(a){return!!a&&"function"==typeof a&&!!a.call},ja=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])};function z(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var A=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return h},B=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return i}};var C=h,ka=function(){if(!C){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,B(a))b=a;else break;C=b}return C};var D,E=function(a){this.c=[];this.a=a||window;this.b=0;this.d=h},la=function(a,b){this.l=a;this.i=b};E.prototype.n=function(a,b){0==this.b&&0==this.c.length&&(!b||b==window)?(this.b=2,this.g(new la(a,window))):this.h(a,b)};E.prototype.h=function(a,b){this.c.push(new la(a,b||this.a));F(this)};E.prototype.o=function(a){this.b=1;a&&(this.d=this.a.setTimeout(j(this.f,this),a))};E.prototype.f=function(){1==this.b&&(this.d!=h&&(this.a.clearTimeout(this.d),this.d=h),this.b=0);F(this)};E.prototype.p=function(){return f};
E.prototype.nq=E.prototype.n;E.prototype.nqa=E.prototype.h;E.prototype.al=E.prototype.o;E.prototype.rl=E.prototype.f;E.prototype.sz=E.prototype.p;var F=function(a){a.a.setTimeout(j(a.m,a),0)};E.prototype.m=function(){if(0==this.b&&this.c.length){var a=this.c.shift();this.b=2;a.i.setTimeout(j(this.g,this,a),0);F(this)}};E.prototype.g=function(a){this.b=0;a.l()};
var ma=function(a){try{return a.sz()}catch(b){return i}},na=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ma(a)&&x(a.nq)&&x(a.nqa)&&x(a.al)&&x(a.rl)},G=function(){if(D&&ma(D))return D;var a=ka(),b=a.google_jobrunner;return na(b)?D=b:a.google_jobrunner=D=new E(a)},oa=function(a,b){G().nq(a,b)},pa=function(a,b){G().nqa(a,b)};var qa=/MSIE [2-7]|PlayStation|Gecko\/20090226/i,ra=/Android|Opera/,sa=function(){var a=H,b=L.google_ad_width,c=L.google_ad_height,d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&ja(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var ta=/^true$/.test("false")?f:i;var M=function(a,b,c){c||(c=ta?"https":"http");return[c,"://",a,b].join("")};var ua=function(){},N=function(a,b,c){switch(typeof b){case "string":xa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),N(a,b[g],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(g=b[e],"function"!=typeof g&&(c.push(d),xa(e,c),c.push(":"),N(a,g,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},O={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ya=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,xa=function(a,b){b.push('"');b.push(a.replace(ya,function(a){if(a in O)return O[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return O[a]=e+b.toString(16)}));b.push('"')};var P="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_skip google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_with_pyv_ads google_yt_pt google_yt_up".split(" ");var Q=function(a){this.a=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],shouldLog:0.01>Math.random()?f:i});this.e=a.google_iframe_oncopy;a.setTimeout(j(this.k,this),3E4)},za;var R="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
/[&<>\"]/.test(R)&&(-1!=R.indexOf("&")&&(R=R.replace(ca,"&amp;")),-1!=R.indexOf("<")&&(R=R.replace(da,"&lt;")),-1!=R.indexOf(">")&&(R=R.replace(ea,"&gt;")),-1!=R.indexOf('"')&&(R=R.replace(fa,"&quot;")));za=R;Q.prototype.set=function(a,b){this.e.handlers[a]=b;this.a.addEventListener&&this.a.addEventListener("load",j(this.j,this,a),i)};Q.prototype.j=function(a){var a=this.a.document.getElementById(a),b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};
Q.prototype.k=function(){if(this.e.shouldLog){var a=this.e.log,b=this.a.document;if(a.length){b=["/pagead/gen_204?id=iframecopy&log=",z(a.join("-")),"&url=",z(b.URL.substring(0,512)),"&ref=",z(b.referrer.substring(0,512))].join("");a.length=0;a=this.a;b=M(ia(""),b);a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)}}};var Aa=function(){var a="script";return["<",a,' src="',M(w(),"/pagead/js/r20120905/r20120730/show_ads_impl.js",""),'"></',a,">"].join("")},Ba=function(){var a="script";return["<",a,' src="',M(w(),"/pagead/expansion_embed.js"),'"></',a,">"].join("")},Ca=function(a){var b;if(!(b="expt"!=a.google_expand_experiment))a:{var c=a.document;try{if(a.google_allow_expandable_ads===
i||!c.body||a.google_ad_output&&"html"!=a.google_ad_output||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||c.domain!=a.location.hostname){b=f;break a}}catch(d){b=f;break a}b=i}return b?i:f},Da=function(a,b,c,d){return function(){var e=i;d&&G().al(3E4);try{if(B(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,p=g.document;if(!p.body||!p.body.firstChild)p.open(),g.google_async_iframe_close=f,p.write(c)}else{var I=a.document.getElementById(b).contentWindow,
Z;g=c;g=String(g);if(g.quote)Z=g.quote();else{for(var p=['"'],J=0;J<g.length;J++){var K=g.charAt(J),va=K.charCodeAt(0),ab=p,bb=J+1,$;if(!($=l[K])){var y;if(31<va&&127>va)y=K;else{var n=K;if(n in q)y=q[n];else if(n in l)y=q[n]=l[n];else{var m=n,s=n.charCodeAt(0);if(31<s&&127>s)m=n;else{if(256>s){if(m="\\x",16>s||256<s)m+="0"}else m="\\u",4096>s&&(m+="0");m+=s.toString(16).toUpperCase()}y=q[n]=m}}$=y}ab[bb]=$}p.push('"');Z=p.join("")}I.location.replace("javascript:"+Z)}var wa=a.google_enclosing_element||
{};wa[b]=t;a.google_enclosing_element=wa;e=f}catch(mb){I=ka().google_jobrunner,na(I)&&I.rl()}e&&(new Q(a)).set(b,Da(a,b,c,i))}},Ea=function(){var a=S.google_adk_experiment;if("control"==a)return"control";if("expt"==a){var a=window.google_ad_output,b=window.google_ad_format;if(!b&&("html"==a||a==h))b=window.google_ad_width+"x"+window.google_ad_height;b=b&&(!window.google_ad_slot||window.google_override_format)?b.toLowerCase():"";window.google_ad_format=b;a=[r.google_ad_slot,r.google_ad_format,r.google_ad_type,
r.google_ad_width,r.google_ad_height];if(t){if(t){for(var b=[],c=0,d=t;d&&25>c;d=d.parentNode,++c)b.push(9!=d.nodeType&&d.id||"");b=b.join()}else b="";b&&a.push(b)}b=0;if(a)if(a=a.join(":"),b=a.length,0==b)b=0;else{c=305419896;for(d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;b=0<c?c:4294967296+c}return b.toString()}return h},Fa=Math.floor(1E6*Math.random()),Ga=function(a){for(var a=a.data.split("\n"),b={},c=0;c<a.length;c++){var d=a[c].indexOf("=");-1!=d&&(b[a[c].substr(0,d)]=a[c].substr(d+
1))}b[1]==Fa&&(window.google_top_url=b[3])};var Ha=v("0.001"),Ia=v("0.001"),Ja=v("0.001");window.google_loader_used=f;var T=window;if(!("google_onload_fired"in T)){T.google_onload_fired=i;var Ka=function(){T.google_onload_fired=f};T.addEventListener?T.addEventListener("load",Ka,i):T.attachEvent&&T.attachEvent("onload",Ka)}var La=window,Ma=2;try{La.top.document==La.document?Ma=0:B(La.top)&&(Ma=1)}catch(Na){}
if(2===Ma&&top.postMessage&&!window.google_top_experiment&&(window.google_top_experiment=A(["jp_e","jp_c"],Ja),"jp_e"===window.google_top_experiment)){var U=window;U.addEventListener?U.addEventListener("message",Ga,i):U.attachEvent&&U.attachEvent("onmessage",Ga);var Oa={"0":"google_loc_request",1:Fa},Pa=[],Qa;for(Qa in Oa)Pa.push(Qa+"="+Oa[Qa]);top.postMessage(Pa.join("\n"),"*")}window.google_adk_experiment||(window.google_adk_experiment=A(["expt","control"],Ha)||"none");
window.google_expand_experiment||(window.google_expand_experiment=A(["expt","control"],Ia)||"none");var Ra;if(window.google_enable_async===i)Ra=0;else{var Sa=navigator.userAgent;Ra=(qa.test(Sa)||ra.test(Sa)?i:f)&&!window.google_container_id&&(!window.google_ad_output||"html"==window.google_ad_output)}
if(Ra){var Ta=window;Ta.google_unique_id?++Ta.google_unique_id:Ta.google_unique_id=1;var V=window;if(!V.google_slot_list||!V.google_slot_list.push)V.google_slot_list=[];V.google_slot_list.push([V.google_ad_slot||"",V.google_ad_format||"",V.google_ad_width||"",V.google_ad_height||""].join("."));for(var S=window,_script$$inline_97="script",W,L=S,H={allowtransparency:'"true"',frameborder:'"0"',height:'"'+S.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+za+'"',scrolling:'"no"',
vspace:'"0"',width:'"'+S.google_ad_width+'"'},Ua=L.document,X=H.id,Va=0;!X||L.document.getElementById(X);)X="aswift_"+Va++;H.id=X;H.name=X;Ua.write(sa());W=X;var Wa,Y=S;Y.google_page_url&&(Y.google_page_url=String(Y.google_page_url));for(var Xa=[],Ya=0,Za=P.length;Ya<Za;Ya++){var $a=P[Ya];if(Y[$a]!=h){var cb;try{var db=[];N(new ua,Y[$a],db);cb=db.join("")}catch(eb){}cb&&ja(Xa,$a,"=",cb,";")}}Wa=Xa.join("");for(var fb=Ea(),gb=S,hb=0,ib=P.length;hb<ib;hb++)gb[P[hb]]=h;var jb=(new Date).getTime(),kb=
S.google_top_experiment,lb=S.google_expand_experiment,nb="";Ca(S)&&(nb=Ba());var ob=["<!doctype html><html><body><",_script$$inline_97,">",Wa,"google_show_ads_impl=true;google_unique_id=",S.google_unique_id,';google_async_iframe_id="',W,'";google_start_time=',k,";",kb?'google_top_experiment="'+kb+'";':"",fb?'google_adk_sa="'+fb+'";':"",lb?'google_expand_experiment="'+lb+'";':"","google_bpp=",jb>k?jb-k:1,";</",_script$$inline_97,">",nb,Aa(),"</body></html>"].join("");(S.document.getElementById(W)?
oa:pa)(Da(S,W,ob,f))}else window.q=k,!("object"==typeof ExpandableAdSlotFactory&&"function"==typeof ExpandableAdSlotFactory.createIframe)&&Ca(window)&&document.write(Ba()),document.write(Aa());})();
