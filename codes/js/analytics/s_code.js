/**
 * Pfizer Global Analytics Tracking - PCC (Patient,Consumer and Corporate) Framework
 * @version 1.20

 */
/*eslint-disable */
/*
 Adobe Visitor API for JavaScript version: 2.0.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(s,w){function y(a){function c(a,d,b){b=b?b+="|":b;return b+(a+"="+encodeURIComponent(d))}for(var b="",e=0,f=a.length;e<f;e++){var g=a[e],h=g[0],g=g[1];g!=i&&g!==u&&(b=c(h,g,b))}return function(a){var d=m.Ba(),a=a?a+="|":a;return a+("TS="+d)}(b)}if(!s)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="2.0.0";var n=window,l=n.Visitor;l.version=a.version;n.s_c_in||(n.s_c_il=[],n.s_c_in=0);a._c="Visitor";a._il=n.s_c_il;a._in=n.s_c_in;a._il[a._in]=a;n.s_c_in++;
a.la={Ja:[]};var v=n.document,i=l.Kb;i||(i=null);var E=l.Lb;E||(E=void 0);var j=l.Ta;j||(j=!0);var k=l.Qa;k||(k=!1);a.ia=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.t=function(a,c){var b="0123456789",e="",f="",g,h,i=8,k=10,l=10;c===o&&(x.isClientSideMarketingCloudVisitorID=j);if(1==a){b+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*i),e+=b.substring(h,h+1),h=Math.floor(Math.random()*i),f+=b.substring(h,h+1),i=16;return e+"-"+f}for(g=
0;19>g;g++)h=Math.floor(Math.random()*k),e+=b.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=b.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+f};a.Wa=function(){var a;!a&&n.location&&(a=n.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+v.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(v.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.z=function(a,c){try{"function"==typeof a?a.apply(n,c):a[1].apply(a[0],c)}catch(b){}};a.L=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==E&&(a.h[d]=[]),a.h[d].push(c))};a.s=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.z(b.shift(),c)}};
a.w=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=m.Bb(a);a=m.sb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=m.fb(f[1],b,e);return a+e+c};a.Va=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.bb=function(){var d=i,c=n.location.href;try{var b=a.Va(c,p.aa);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
a.ea=function(){var d=a.bb();if(d&&d.TS&&!(Math.floor((m.Ba()-d.TS)/60)>p.Oa||d[I]!==s)){var c=d[o],b=a.setMarketingCloudVisitorID;c&&c.match(p.v)&&b(c);a.j(t,-1);d=d[r];c=a.setAnalyticsVisitorID;d&&d.match(p.v)&&c(d)}};a.ab=function(d){function c(d){m.Ea(d)&&a.setCustomerIDs(d)}function b(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=
d.supplementalDataIDLastConsumed||{}}if(d)try{if(d=m.Ea(d)?d:m.Cb(d),d[a.marketingCloudOrgID]){var e=d[a.marketingCloudOrgID];c(e.customerIDs);b(e.sdid)}}catch(f){throw Error("`serverState` has an invalid format.");}};a.l=i;a.Ya=function(d,c,b,e){c=a.w(c,"d_fieldgroup",d,1);e.url=a.w(e.url,"d_fieldgroup",d,1);e.m=a.w(e.m,"d_fieldgroup",d,1);x.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.na.F.G?a.na.ob(e,b,d):a.useCORSOnly||a.Za(d,c,b)};a.Za=function(d,c,b){var e=0,f=0,g;if(c&&v){for(g=0;!e&&2>
g;){try{e=(e=v.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{v.body&&(e=v.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=v.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,q.d[d]={requestStart:q.p(),url:c,va:e,ta:q.Aa(),ua:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.la.Ja.push(c))};a.Ua=function(d){a.l!=
i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ja=k;a.ka=k;a.isAllowed=function(){if(!a.ja&&(a.ja=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.ka=j;return a.ka};a.b=i;a.c=i;var F=l.bc;F||(F="MC");var o=l.ic;o||(o="MCMID");var I=l.fc;I||(I="MCORGID");var G=l.cc;G||(G="MCCIDH");var L=l.gc;L||(L="MCSYNCS");var J=l.hc;J||(J="MCSYNCSOP");var K=l.dc;K||(K="MCIDTS");var B=l.ec;B||(B="MCOPTOUT");var D=l.$b;D||(D="A");var r=l.Xb;r||(r="MCAID");var C=l.ac;C||(C="AAM");var A=l.Zb;A||(A=
"MCAAMLH");var t=l.Yb;t||(t="MCAAMB");var u=l.jc;u||(u="NONE");a.M=0;a.ha=function(){if(!a.M){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.M=a.ia(d)}return a.M};a.ma=k;a.f=function(){if(!a.ma){a.ma=j;var d=a.ha(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();
for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==G&&(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=j}if(!a.a(r)&&m.o()&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(p.v)&&a.e(r,g))}};a._appendVersionTo=
function(d){var c="vVersion|"+a.version,b=Boolean(d)?a._getCookieVersion(d):null;b?m.gb(b,a.version)&&(d=d.replace(p.da,c)):d+=(d?"|":"")+c;return d};a.eb=function(){var d=a.ha(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+c]:"")+"|"+b);d=a._appendVersionTo(d);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.c||!a.c[d])?a.b[d]:i};a.e=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.eb()};
a.Xa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.cb=function(d,c,b){a.e(d,c?c.join("*"):"",b)};a.Rb=function(d,c){var b=a.Xa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Tb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.cb(d,e,b)};a.j=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.c||(a.c={}),a.c[d]=j):a.c&&(a.c[d]=
k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ga=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=u)),!a||a!=u&&!a.match(p.v)))a="";return a};a.k=function(d,c){a.Ua(d);a.i!=i&&(a.i[d]=k);q.d[d]&&(q.d[d].Ib=q.p(),q.J(d));x.d[d]&&x.La(d,k);if(d==F){x.isClientSideMarketingCloudVisitorID!==j&&(x.isClientSideMarketingCloudVisitorID=k);var b=a.a(o);if(!b||a.overwriteCrossDomainMCIDAndAID){b=
"object"==typeof c&&c.mid?c.mid:a.ga(c);if(!b){if(a.D){a.getAnalyticsVisitorID(i,k,j);return}b=a.t(0,o)}a.e(o,b)}if(!b||b==u)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(C,c),a.D&&c.mid&&a.k(D,{id:c.id}));a.s(o,[b])}if(d==C&&"object"==typeof c){b=604800;c.id_sync_ttl!=E&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(A);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(A,b),a.e(A,e)));e||(e="");a.s(A,[e]);e=a.a(t);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(t,
b),a.e(t,e);e||(e="");a.s(t,[e]);!c.error_msg&&a.C&&a.e(G,a.C)}if(d==D){b=a.a(r);if(!b||a.overwriteCrossDomainMCIDAndAID)(b=a.ga(c))?b!==u&&a.j(t,-1):b=u,a.e(r,b);if(!b||b==u)b="";a.s(r,[b])}a.idSyncDisableSyncs?z.Ca=j:(z.Ca=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,z.Db(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(B));f||(f=u,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(B,b,j),a.e(B,f));a.s(B,[f])}};a.i=i;a.u=function(d,c,
b,e,f){var g="",h,k=m.ub(d);if(a.isAllowed())if(a.f(),g=a.a(d,M[d]===j),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)){if(d==o||d==B?h=F:d==A||d==t?h=C:d==r&&(h=D),h){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ya(h,c,function(b){a.a(d)||(q.d[h]&&(q.d[h].timeout=q.p(),q.d[h].tb=!!b,q.J(h)),b&&x.La(h,j),b="",d==o?b=a.t(0,o):h==C&&(b={error_msg:"timeout"}),a.k(h,b))},f);a.L(d,b);if(g)return g;c||a.k(h,{id:u});return""}}else g||(d===o?(a.L(d,b),g=a.t(0,o),a.setMarketingCloudVisitorID(g)):
d===r?(a.L(d,b),g="",a.setAnalyticsVisitorID(g)):(g="",e=j));if((d==o||d==r)&&g==u)g="",e=j;b&&e&&a.z(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(F,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.D=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.D=j);var b=a.B("_setMarketingCloudFields");return a.u(o,b.url,d,c,b)}return""};a.$a=function(){a.getAudienceManagerBlob()};
l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.A={};a.fa=k;a.C="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=E&&(e.authState=b.authState);a.A[c]=e}else a.A[c]={id:b};var d=a.getCustomerIDs(),e=a.a(G),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.C=a.ia(f);a.C!=e&&(a.fa=j,a.$a())}};a.getCustomerIDs=
function(){a.f();var d={},c,b;for(c in a.A)Object.prototype[c]||(b=a.A[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=E?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.k(D,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(!m.o()&&!b)return a.z(d,[""]),"";if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:
a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?
"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.qa=i}h.url=g;return a.u(b?o:r,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(C,d)};a.B=function(d){var c=a.audienceManagerServer,b="",e=a.a(o),f=a.a(t,j),g=a.a(r),g=g&&g!=u?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?
i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.D?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+
"?"+e,qa:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(r);!b&&m.o()&&(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b||!m.o())return b=a.B(),a.u(A,b.url,d,c,b)}return""};a.getLocationHint=a.getAudienceManagerLocationHint;a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,
j)})){var b=a.a(r);!b&&m.o()&&(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,j)}));if(b||!m.o()){var b=a.B(),e=b.url;a.fa&&a.j(t,-1);return a.u(t,e,d,c,b)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed={};a.getSupplementalDataID=function(d,c){!a._supplementalDataIDCurrent&&!c&&(a._supplementalDataIDCurrent=a.t(1));var b=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?
(b=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=j):b&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=b=!c?a.t(1):"",a._supplementalDataIDCurrentConsumed={}),b&&(a._supplementalDataIDCurrentConsumed[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.B("_setMarketingCloudFields");return a.u(B,
b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.z(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){var c=p.aa,b=y([[o,a.a(o)],[r,a.a(r)],[I,a.marketingCloudOrgID]]);try{return a.w(d,c,b)}catch(e){return d}};var p={r:!!n.postMessage,Pa:1,ca:864E5,aa:"adobe_mc",v:/^[0-9a-fA-F\-]+$/,Oa:5,Ra:/^\d+$/,da:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/};a.Mb=
p;a.pa={postMessage:function(a,c,b){var e=1;c&&(p.r?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},W:function(a,c){var b;try{if(p.r)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",
b)}catch(e){}}};var m={N:function(){if(v.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(v.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},
xa:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},Bb:function(a){var c=a.indexOf("#");return 0<c?a.substr(c):""},sb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},fb:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")},ub:function(d,c,b){if(d!==r)return k;c||(c=a.trackingServer);b||(b=a.trackingServerSecure);d=a.loadSSL?b:c;return"string"===typeof d&&d.length?0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},Ea:function(a){return Boolean(a&&
a===Object(a))},vb:function(d,c){return 0>a._compareVersions(d,c)},gb:function(d,c){return 0!==a._compareVersions(d,c)},Hb:function(a){document.cookie=encodeURIComponent(a)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},o:function(){return!!a.trackingServer||!!a.trackingServerSecure},Cb:function(a,c){function b(a,d){var e,i,j=a[d];if(j&&"object"===typeof j)for(e in j)Object.prototype.hasOwnProperty.call(j,e)&&(i=b(j,e),void 0!==i?j[e]=i:delete j[e]);return c.call(a,d,j)}if("object"===typeof JSON&&
"function"===typeof JSON.parse)return JSON.parse(a,c);var e;e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;a=""+a;e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+
a+")"),"function"===typeof c?b({"":e},""):e;throw new SyntaxError("JSON.parse");},Ba:function(){return Math.round((new Date).getTime()/1E3)}};a.Sb=m;a.na={F:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.Jb).indexOf("Constructor")&&(c=k));return{G:a,Vb:c}}(),
pb:function(){return"none"===this.F.G?i:new window[this.F.G]},ob:function(d,c,b){var e=this;c&&(d.T=c);try{var f=this.pb();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.F.G&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");break a}}catch(b){e.n(d,
b,"Error parsing response as JSON");break a}try{for(var c=d.qa,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();q.d[b]={requestStart:q.p(),url:d.m,va:f.timeout,ta:q.Aa(),ua:1};a.la.Ja.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Wb:d,error:c,description:b});d.T&&("ontimeout"===b?d.T(j):d.T(k))}};var z={Sa:3E4,ba:649,
Na:k,id:i,V:[],R:i,za:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,qb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(v.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.R=this.za(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},jb:function(){var d="?d_nsid="+a.idSyncContainerID+
"#"+encodeURIComponent(v.location.href);"string"===typeof a.K&&a.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.R=this.za(a.K),this.url=a.K+d)},Ca:i,wa:k,Y:k,H:i,kc:i,Ab:i,lc:i,X:k,I:[],yb:[],zb:[],Fa:p.r?15:100,S:[],wb:[],ra:j,Ia:k,Ha:function(){return!a.idSyncDisable3rdPartySyncing&&(this.wa||a.Ob)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.Y},P:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";
e.title="Adobe ID Syncing iFrame";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ab=j;c();document.body.appendChild(e)}function c(){m.N(e,"load",function(){e.className="aamIframeLoaded";b.H=j;b.q()})}this.Y=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.H=j,this.Da=e,this.q()):a();this.Da=e},q:function(d){var c=this;d===Object(d)&&(this.S.push(d),this.Eb(d));if((this.Ia||!p.r||this.H)&&
this.S.length)this.J(this.S.shift()),this.q();!a.idSyncDisableSyncs&&this.H&&this.I.length&&!this.X&&(this.Na||(this.Na=j,setTimeout(function(){c.Fa=p.r?15:150},this.Sa)),this.X=j,this.Ka())},Eb:function(a){var c,b,e;if((c=a.ibs)&&c instanceof Array&&(b=c.length))for(a=0;a<b;a++)e=c[a],e.syncOnPage&&this.sa(e,"","syncOnPage")},J:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),m.xa(g.url||[],","),
c(g.ttl||""),"","",g.fireURLSync?"true":"false"],g.syncOnPage||(this.ra?this.O(h.join("|")):g.fireURLSync&&this.sa(g,h.join("|")));this.wb.push(a)},sa:function(d,c,b){var e=(b="syncOnPage"===b?j:k)?J:L;a.f();var f=a.a(e),g=k,h=k,i=Math.ceil((new Date).getTime()/p.ca);f?(f=f.split("*"),h=this.Fb(f,d.id,i),g=h.mb,h=h.nb,(!g||!h)&&this.ya(b,d,c,f,e,i)):(f=[],this.ya(b,d,c,f,e,i))},Fb:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=
j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{mb:e,nb:f}},xb:function(a){if(a.join("*").length>this.ba)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.ba;)a.shift()},ya:function(d,c,b,e,f,g){var h=this;if(d){if("img"===c.tag){var d=c.url,b=a.loadSSL?"https:":"http:",j,k,l;for(e=0,j=d.length;e<j;e++){k=d[e];l=/^\/\//.test(k);var n=new Image;m.N(n,"load",function(b,d,c,e){return function(){h.V[b]=i;a.f();var g=a.a(f),
j=[];if(g){var g=g.split("*"),k,l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+d.id+"-")||j.push(m)}h.Ma(j,d,c,e)}}(this.V.length,c,f,g));n.src=(l?b:"")+k;this.V.push(n)}}}else this.O(b),this.Ma(e,c,f,g)},O:function(d){var c=encodeURIComponent;this.I.push((a.Pb?c("---destpub-debug---"):c("---destpub---"))+d)},Ma:function(d,c,b,e){d.push(c.id+"-"+(e+Math.ceil(c.ttl/60/24)));this.xb(d);a.e(b,d.join("*"))},Ka:function(){var d=this,c;this.I.length?(c=this.I.shift(),a.pa.postMessage(c,this.url,this.Da.contentWindow),
this.yb.push(c),setTimeout(function(){d.Ka()},this.Fa)):this.X=k},W:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.ra="true"===c[1]?j:k,this.Ia=j,this.q()),this.zb.push(a))},Db:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.oa&&a.oa.length?a.oa:d.subdomain||"",this.url=this.qb();d.ibs instanceof Array&&d.ibs.length&&(this.wa=j);this.Ha()&&(a.idSyncAttachIframeOnWindowLoad?
(l.$||"complete"===v.readyState||"loaded"===v.readyState)&&this.P():this.hb());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.q(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},ib:function(d,c){return a.Qb||!d||c-d>p.Pa},hb:function(){function a(){c.Y||(document.body?c.P():setTimeout(a,30))}var c=this;a()}};a.Nb=z;a.timeoutMetricsLog=[];var q={lb:window.performance&&window.performance.timing?1:0,Ga:window.performance&&window.performance.timing?
window.performance.timing:i,Z:i,Q:i,d:{},U:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.lb+"&d_winload="+this.rb()+"&d_ld="+this.p();(new Image).src=d;a.timeoutMetricsLog.push(d)}},rb:function(){this.Q===i&&(this.Q=
this.Ga?this.Z-this.Ga.navigationStart:this.Z-l.kb);return this.Q},p:function(){return(new Date).getTime()},J:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.va;b.d_visid_cors=c.ua;b.d_fieldgroup=a;b.d_settimeout_overriden=c.ta;c.timeout?c.tb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,b.d_visid_response=c.Ib-c.requestStart);
b.d_visid_url=c.url;l.$?this.send(b):this.U.push(b);delete this.d[a]},Gb:function(){for(var a=0,c=this.U.length;a<c;a++)this.send(this.U[a])},Aa:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Ub=q;var x={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},La:function(a,c){switch(a){case F:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=k):this.MCIDCallTimedOut=c;break;
case D:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case C:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return x.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return x.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return x.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return x.AAMIDCallTimedOut};a.idSyncGetOnPageSyncInfo=
function(){a.f();return a.a(J)};a.idSyncByURL=function(d){var c,b=d||{};c=b.minutesToLive;var e="";a.idSyncDisableSyncs&&(e=e?e:"Error: id syncs have been disabled");if("string"!==typeof b.dpid||!b.dpid.length)e=e?e:"Error: config.dpid is empty";if("string"!==typeof b.url||!b.url.length)e=e?e:"Error: config.url is empty";if("undefined"===typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)e=e?e:"Error: config.minutesToLive needs to be a positive number";c={error:e,mc:c};if(c.error)return c.error;
var e=d.url,f=encodeURIComponent,b=z,g,e=e.replace(/^https:/,"").replace(/^http:/,"");g=m.xa(["",d.dpid,d.dpuuid||""],",");d=["ibs",f(d.dpid),"img",f(e),c.ttl,"",g];b.O(d.join("|"));b.q();return"Successfully queued"};a.idSyncByDataSource=function(d){if(d!==Object(d)||"string"!==typeof d.dpuuid||!d.dpuuid.length)return"Error: config or config.dpuuid is empty";d.url="//dpm.demdex.net/ibs:dpid="+d.dpid+"&dpuuid="+d.dpuuid;return a.idSyncByURL(d)};a._compareVersions=function(a,c){if(a===c)return 0;var b=
a.toString().split("."),e=c.toString().split("."),f;a:{f=b.concat(e);for(var g=0,h=f.length;g<h;g++)if(!p.Ra.test(f[g])){f=k;break a}f=j}if(!f)return NaN;for(;b.length<e.length;)b.push("0");for(;e.length<b.length;)e.push("0");a:{for(f=0;f<b.length;f++){g=parseInt(b[f],10);h=parseInt(e[f],10);if(g>h){b=1;break a}if(h>g){b=-1;break a}}b=0}return b};a._getCookieVersion=function(d){d=d||a.cookieRead(a.cookieName);return(d=p.da.exec(d))&&1<d.length?d[1]:null};a._resetAmcvCookie=function(d){var c=a._getCookieVersion();
(!c||m.vb(c,d))&&m.Hb(a.cookieName)};0>s.indexOf("@")&&(s+="@AdobeOrg");a.marketingCloudOrgID=s;a.cookieName="AMCV_"+s;a.sessionCookieName="AMCVS_"+s;a.cookieDomain=a.Wa();a.cookieDomain==n.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=n.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var M={};M[A]=j;M[t]=j;if(w&&"object"==typeof w){for(var H in w)!Object.prototype[H]&&(a[H]=w[H]);a.idSyncContainerID=
a.idSyncContainerID||0;a.resetBeforeVersion&&a._resetAmcvCookie(a.resetBeforeVersion);a.ea();a.f();H=a.a(K);var N=Math.ceil((new Date).getTime()/p.ca);!a.idSyncDisableSyncs&&z.ib(H,N)&&(a.j(t,-1),a.e(K,N));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.ab(a.serverState)}else a.ea();if(!a.idSyncDisableSyncs){z.jb();m.N(window,"load",function(){l.$=j;q.Z=q.p();q.Gb();var a=z;a.Ha()&&a.P()});try{a.pa.W(function(a){z.W(a.data)},z.R)}catch(O){}}}
Visitor.getInstance=function(s,w){var y,a=window.s_c_il,n;0>s.indexOf("@")&&(s+="@AdobeOrg");if(a)for(n=0;n<a.length;n++)if((y=a[n])&&"Visitor"==y._c&&y.marketingCloudOrgID==s)return y;return new Visitor(s,w)};(function(){function s(){w.$=y}var w=window.Visitor,y=w.Ta,a=w.Qa;y||(y=!0);a||(a=!1);window.addEventListener?window.addEventListener("load",s):window.attachEvent&&window.attachEvent("onload",s);w.kb=(new Date).getTime()})();
/*eslint-enable */
/*============== DO NOT DELETE BELOW CODE ! ===============
 Fix for error "Uncaught TypeError: this.Z.apply is not a function"
 This change is for Media Module.*/
var i = null;
/*========================================================*/
/**
 * This function should be used to create a new instance of the s_code
 * object whenever it's necessary. A simple instantiation of AppMeasurement()
 * will not contain the object extensions defined below, causing all kinds
 * of problems.
 *
 * @return {[type]} New s_code object 's'.
 */
function build_s() {
  // track original s.s_PPVg function for inclusion in new s object
  var original_s_PPVg = null;
  if (typeof window.s == 'object' && typeof window.s.s_PPVg == 'function') {
    original_s_PPVg = window.s.s_PPVg;
  }
  // sanity check fallback to prevent the plugin functions below from erroring out
  // if the pfConfig object is missing.
  if (typeof pfConfig === 'undefined') {
    pfConfig = {
      mode: 'dev',
      reportSuites: {
        dev: '',
        prod: ''
      },
      domains: {
        dev: '',
        prod: ''
      },
      siteSection: {
        prefix: '',
        prefixHost: false,
        delimiter: '>'
      },
      pageName: {
        base: 'title',
        prefix: '',
        delimiter: '>',
        homePage: ''
      },
      customLinks: [],
      campaignParams: ''
    };
  }
  /* Page Load time tracking */
  s_getLoadTime();
  var s_custom = {
    // use the pfConfig in its current state; if the object changes between requests,
    // each request will be using the latest version at the time of the request
    pfc: pfConfig,

    /**
     * Returns a clean (lowercase) version of the specified mode. In mode is not defined,
     * returns boolean false.
     *
     * @return {[type]} [description]
     */
    getMode: function () {
      if (typeof this.pfc.mode === 'undefined') {
        return false;
      }

      return this.pfc.mode.toLowerCase();
    },

    /**
     * Returns the 'Report Suites' value (string) for current enviornment/mode.
     *
     * @return {string} [description]
     */
    getReportSuite: function () {
      var mode;
      if (mode = this.getMode()) {
        if (typeof this.pfc.reportSuites[mode] !== 'undefined') {
          return this.pfc.reportSuites[mode];
        }
      }

      return this.pfc.reportSuites.dev;
    },

    /**
     * Returns the 'Domains' value (string) for current environment/mode.
     *
     * @return {string} [description]
     */
    getDomains: function () {
      var mode, d;
      if (mode = this.getMode()) {
        if (typeof this.pfc.domains[mode] !== 'undefined') {
          d = this.pfc.domains[mode];
        }
      }
      d = d || this.pfc.domains.dev;
      return d.indexOf(location.hostname) > -1 ? d : d + "," + location.hostname;
    },

    /**
     * Removes special characters from given value and returns result.
     *
     * @param  {string} val [description]
     * @return {string}     [description]
     */
    scStrip: function (val) {
      var chars = "',|,$,^,\\,>,;,%,*,<, ,~".split(',');

      for (i in chars) {
        if (chars.hasOwnProperty(i)) {
          val = val.split(chars[i]).join('');
        }
      }
      return val;
    },

    /**
     * Returns current date & time as YYYYMMDDTHHMM.
     *
     * @return {string} [description]
     */
    getDateTime: function () {
      var d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        hour = d.getHours(),
        minute = d.getMinutes();

      month = (month < 10) ? '0' + month : month;
      day = (day < 10) ? '0' + day : day;
      hour = (hour < 10) ? '0' + hour : hour;
      minute = (minute < 10) ? '0' + minute : minute;

      return [year, month, day, 'T', hour, minute].join('');
    },

    /**
     * Returns current date as YYYYMMDD
     * @return {[type]} [description]
     */
    getDate: function () {
      return this.getDateTime().split('T')[0];
    },

    /**
     * Returns current date as YYYYMMDD
     * @return {[type]} [description]
     */
    getTime: function () {
      var d = new Date(),
        hour = d.getHours(),
        minute = d.getMinutes();
      var h = hour > 12 ? hour - 12 : hour;
      var m = minute > 30 ? "30" : "00";
      var ampm = (hour < 12 ? 'AM' : 'PM');
      h = (h < 10) ? '0' + h : h;
      return h + ':' + m + ' ' + ampm;
    },

    /**
     * Returns a delimited string of sections based on URL parts
     * @param  {[type]} num_sections [description]
     * @return {[type]}              [description]
     */
    getSection: function (num_sections) {
      var sections = location.pathname.split('?')[0].split('/'); // url parts
      if (sections.length < 2 || !num_sections || isNaN(num_sections) || num_sections < 1 || sections.length <= num_sections) {
        return;
      }

      var delimiter = '>';
      if (this.pfc.siteSection.delimiter && this.pfc.siteSection.delimiter.length) {
        delimiter = this.pfc.siteSection.delimiter;
      }

      // remove the filename extension (if there is one)
      if (sections[sections.length - 1].indexOf('.') > -1) {
        sections.splice(sections.length - 1, 1);
      }

      // collect the sections, up to specified max in num_sections
      var result = [];
      for (var i = 1; i <= num_sections && i < sections.length; i++) {
        result.push(sections[i]);
      }

      var prefix = this.pfc.siteSection.prefixHost ? location.hostname + delimiter : "";
      if (this.pfc.siteSection.prefix) {
        prefix = this.pfc.siteSection.prefix;
      }

      return prefix + result.join(delimiter);
    },

    /**
     * Returns page name for current page.
     *
     * @return {[type]} [description]
     */
    getPageName: function () {
      // check for configured base
      var base = 'path';
      if (this.pfc.pageName.base.toLowerCase()) {
        base = this.pfc.pageName.base;
      }

      // set delimiter
      var delimiter = '>';
      if (this.pfc.pageName.delimiter) {
        delimiter = this.pfc.pageName.delimiter;
      }

      // figure out the page name
      if (base === 'title') {
        var page_name = document.title;
      } else if (base === 'page') {
        var path = location.pathname.split("/");
        var page_name = path[path.length - 1].split(".")[0];
        // handle empty URL / homepage title
        if (page_name.length < 1) {
          page_name = 'homePage';
          if (this.pfc.pageName.homePage) {
            page_name = this.pfc.pageName.homePage;
          }
        }

      } else {
        // grab everything after the domain, not including leading slash, and
        // escape the delimiter
        var page_name = location.pathname.substr(1).replace(/\//g, delimiter);

        // handle empty URL / homepage title
        if (page_name.length < 1) {
          page_name = 'homePage';
          if (this.pfc.pageName.homePage) {
            page_name = this.pfc.pageName.homePage;
          }
        }
      }

      // check for configured prefix
      var prefix = location.hostname + delimiter;
      if (this.pfc.pageName.prefix) {
        prefix = this.pfc.pageName.prefix;
      }

      page_name = prefix + page_name;

      return page_name.toLowerCase();
    },

    /**
     * Returns meta value by meta property name.
     *
     * @return {[type]} [description]
     */
    getMetaPropertyValue: function (meta, blankformissing) {
      var v, m;
      try {
        blankformissing = typeof(blankformissing) === "undefined" ? true : blankformissing;
        m = document.querySelectorAll("META[property=" + meta.replace(/\:/g, "\\:") + "]");
        v = m && m.length > 0 ? m[0].getAttribute("content") : (blankformissing ? "" : null);
      } catch (err) {
        m = document.getElementsByTagName('meta');
        for (i = 0; i < m.length; i++) {
          if (m[i].getAttribute("property") === meta) {
            v = m[i].getAttribute("content");
          }
        }
        v = (v === null && blankformissing ? "" : v);
      }
      return v;
    },

    /**
     * Returns meta value by meta property name.
     *
     * @return {[type]} [description]
     */
    isLinkDownloadType: function (linkurl) {
      var t, m;
      try {
        if (s.trackDownloadLinks && s.linkDownloadFileTypes) {
          var j = linkurl.toLowerCase();
          var f = j.indexOf("?");
          var g = j.indexOf("#");
          f >= 0 ? g >= 0 && g < f && (f = g) : f = g;
          f >= 0 && (j = j.substring(0, f));
          f = s.linkDownloadFileTypes.toLowerCase().split(",");
          for (g = 0; g < f.length; g++) {
            m = f[g];
            if (j.substring(j.length - (m.length + 1)) === "." + m) {
              t = "d";
              break;
            }
          }
        }
      } catch (err) {
      }
      return t;
    },

    /**
     * Sets custom variables to s object.
     *
     */
    setCustomVariables: function (custom) {
      try {
        custom = custom || {};
        for (var cn in custom) {
          if (custom.hasOwnProperty(cn) && typeof custom[cn] !== 'undefined') {
            if (cn.indexOf("event") > -1) {
              s.events = s.apl(s.events, cn, ',', 2);
              s.linkTrackEvents = s.apl(s.linkTrackEvents, cn, ',', 2);
            } else {
              s[cn] = custom[cn];
              s.linkTrackVars = s.apl(s.linkTrackVars, cn, ',', 2);
            }
          }
        }
      } catch (err) {
      }
    },

    /**
     * Returns the 'Site Name' value (string) for current enviornment/mode.
     *
     * @return {[type]} [description]
     */
    getSiteName: function () {
      var mode, d;
      if (mode = this.getMode()) {
        if (typeof this.pfc.siteNames !== 'undefined' && typeof this.pfc.siteNames[mode] !== 'undefined') {
          d = this.pfc.siteNames[mode];
        }
      }
      d = d || 'domain|' + location.hostname;
      return d;
    },

    /**
     * Returns the 'Tracking Server' value (string) for current enviornment/mode.
     *
     * @return {[type]} [description]
     */
    getTrackingServer: function () {
      var d;
      if (location.protocol.indexOf("https") > -1 && typeof this.pfc.trackingServerSecure !== 'undefined') {
        d = this.pfc.trackingServerSecure;
      } else if (typeof this.pfc.trackingServer !== 'undefined') {
        d = this.pfc.trackingServer;
      }
      d = d || 'pfizer.122.2o7.net';
      return d;
    },
    /**
     * Plugin Utility: aplr.Remove variable from list
     *
     * @return {[type]} [description]
     */
    aplr : new Function("l", "v", "d", "u", ""
      + "var s=this,m=0,j=-1;if(!l){l='';}else{var a=l.split(d);if(u){var i,"
      + "n;for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()"
      + "==v.toLowerCase()));if(m){j=i;break;}}}if(m && j>-1){a.splice(j,1);"
      + "l=a.join(d);}}return l;"),
    /**
     * Remove whitespace from both sides of a string and returns the result.
     *
     * @return {[type]} [description]
     */
    trim: function (t) {
      if (typeof(t.trim) === "function") {
        return t.trim();
      } else {
        return t.replace(/^\s+|\s+$/gm, '');
      }
    },

    /**
     * Returns the 'Currency code' value (string).
     *
     * @return {[type]} [description]
     */
    getCurrencyCode: function () {
      if(typeof this.pfc.siteCurrency !== 'undefined' || this.pfc.siteCurrency){
        return this.pfc.siteCurrency;
      } else {
        return "USD";
      }
    }
  };

  // var s = new AppMeasurement();
  var s = s_gi(s_custom.getReportSuite());

  s.custom = s_custom;
  s.account = s.custom.getReportSuite();
  /************************** CONFIG SECTION **************************/
  /* You may add or alter any code config here. */
  s.charSet = 'UTF-8'
  /* Conversion Config */
  s.currencyCode = s.custom.getCurrencyCode();
  /* Link Tracking Config */
  s.trackDownloadLinks = true;
  s.trackExternalLinks = true;
  s.trackInlineStats = false;
  s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,docm,xlsm,pptm,xlsb,docb,mp4';
  s.linkInternalFilters = 'javascript:,' + s.custom.getDomains();
  s.linkLeaveQueryString = false;
  s.linkTrackVars = 'prop14,prop15,prop36,eVar14,eVar15';
  s.linkTrackEvents = 'None';
  s.usePlugins = true;
  s.enableVideoTracking = true; // set to false if not tracking video
  s.ssl=true;
  /* 3rd party cookie tracking server */
  s.trackingServerSecure = s.custom.getTrackingServer();
  s.trackingServer = s.custom.getTrackingServer();
  /* Visitor ID tracking  */
  if (typeof s.custom.pfc.enableVisitorId !== "undefined" && s.custom.pfc.enableVisitorId === true) {
    s.visitor = Visitor.getInstance("2FE3252C54CC13CC0A4C98A7@AdobeOrg", {
      trackingServer: s.trackingServer,
      trackingServerSecure: s.trackingServerSecure,
      marketingCloudServer: s.trackingServer,
      marketingCloudServerSecure: s.trackingServerSecure
    });
  }

  /* BrightCove Video Variable Mapping config
   * disable video tracking by setting s.enableVideoTracking to false */
  if (s.enableVideoTracking) {
    s.loadModule("Media")
    s.Media.autoTrack = false;
    s.Media.trackWhilePlaying = true;
    /* TrackVars and TrackEvents are needed to properly track additional video data points. */
    s.Media.trackVars = "events,prop19,eVar19,eVar44,eVar83,contextData.bc_tags,contextData.bc_refid,contextData.bc_player,contextData.bc_playertype,contextData.bc_playlist";
    s.Media.trackEvents = "event12,event13,event32,event33,event19,event20,event21";
    s.Media.trackMilestones = "25,50,75";
    s.Media.segmentByMilestones = true;
    s.Media.trackUsingContextData = true;
    s.Media.contextDataMapping = {
      "a.media.name": "eVar19,prop19",
      "a.media.segment": "eVar44",
      "a.contentType": "eVar83",
      "a.media.timePlayed": "event32",
      "a.media.view": "event12",
      "a.media.segmentView": "event33",
      "a.media.complete": "event13",
      "a.media.milestones": {
        25: "event19",
        50: "event20",
        75: "event21"
      }
    }
  }

  /* TimeParting Config. US DST dates */
  s._tpDST = {
    2012: '3/11,11/4',
    2013: '3/10,11/3',
    2014: '3/9,11/2',
    2015: '3/8,11/1',
    2016: '3/13,11/6',
    2017: '3/12,11/5',
    2018: '3/11,11/4',
    2019: '3/10,11/3'
  }

  /* Add calls to plugins here */
  function s_doPlugins(s) {

    /* PageNaming */
    if (!s.pageName) {
      s.pageName = s.custom.getPageName();
    }

    if (!s.hier1) {
      s.hier1 = 'D=pageName';
    }

    /* Site Sections */
    if (!s.prop1) {
      s.prop1 = s.custom.getSection(1);
    }

    if (!s.prop2) {
      s.prop2 = s.custom.getSection(2);
    }

    if (!s.prop3) {
      s.prop3 = s.custom.getSection(3);
    }

    if (!s.prop4) {
      s.prop4 = s.custom.getSection(4);
    }

    if (!s.server) {
      s.server = location.hostname;
    }

    // Page URL without protocol; there are scenarios in which this value is
    // pre-populated
    if (!s.hasOwnProperty('prop23') || !s.prop23) {
      s.prop23 = s.custom.scStrip(location.href.split(':')[1]);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop23', ',', 2);
    }
    if (!s.hasOwnProperty('eVar2') || !s.eVar2) {
      s.eVar2 = "D=c23";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar2', ',', 2);
    }
    
    /* Page Load tracking */
    if (!s.prop74) {
      s.prop74 = s_getLoadTime() || "NA";
    }
    //pageload time tracking in event where event51 is available
	if (s_getLoadTime()){
	if(!pfConfig.hasOwnProperty("enablePageLoadTime")){ 
		s.events = s.apl(s.events, 'event51=' + s_getLoadTime(), ',', 1);
		}
	} 
    /* Page Scroll depth tracking */
    try {
      s.prop58 = s.getPreviousValue(s.pageName, 's_ppn');
      /*prev page name*/
      s.prop59 = s.getPercentPageViewed();
      /*max % viewed of prev page*/
      if (!s.prop58 || s.prop58 === 'no value') s.prop59 = '';
      /*clear max % viewed if no prev page view*/
    } catch (err) {
      console.log(err);
    }

    // Custom variable to capture if Visitor ID tracking implemeneted
    if(typeof(s.visitor) !== "undefined"){
      s.eVar91 = s.visitor.getMarketingCloudVisitorID();
    }

    /* External Campaign Tracking using "cmp" URL query parameter */
     if (!s.campaign && pfConfig.campaignParams) {
      var cs = "", cn, cp = pfConfig.campaignParams.split(",");
      for (var i = 0; i < cp.length; i++) {
        cn = s.Util.getQueryParam(cp[i]);
        cs += cn && cn.length > 0 ? (cs.length > 0 ? ":" : "") + cn : "";
      }
	     if (cs.indexOf("#") !== -1) {
	    cs = cs.substring(0, cs.indexOf("#"));
		     s.campaign = cs;
	     }
	    else{
      s.campaign = cs;
	    }
      s.campaign = s.getValOnce(s.campaign, "s_cmp", 0);
    }

    /* Internal Campaign Tracking using "intcmp" URL query parameter  */
    if (!s.eVar4) {
      s.eVar4 = s.Util.getQueryParam('intcmp');
      s.eVar4 = s.getValOnce(s.eVar4, 's_v4', 0);

      if (s.eVar4) s.events = s.apl(s.events, 'event31', ',', 2);
    }
    /*----------------------------------------------------------*/

    /* Custom link tracking (download, exit and other link tracking) */
    s.customLinkTracker();

    s.prop14 = s.custom.getDate();
    s.prop15 = s.custom.getTime();

    s.prop36 = s.custom.getDateTime();  //YYYYMMDDTHHNN

    /* New/Repeat visitor */
    s.prop18 = s.getNewRepeat();

    /* Login Pathing */
    if (s.prop21 && s.pageName) {
      s.prop22 = s.prop21 + ':' + s.pageName;
    }

    if (s.eVar83 && s.eVar83 === "video") {
      s.eVar83 = "standard video";
    }

    /* custom pageView event */
    s.events = s.apl(s.events, 'event7', ',', 2);

    /* Error Page tracking */
    s.prevPage = s.getPreviousValue(s.pageName, 'prevPage');

    /* Site Name tracking */
    if(!s.eVar61){
      s.eVar61 = s.custom.getSiteName();
    }
    if(s.eVar61){ s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar61', ',', 2); }
    
    /* Site Country tracking */
    if (!s.prop67 && pfConfig.siteCountry) {
      s.prop67 = pfConfig.siteCountry;
    }

    /* Copy props to eVars */
    if (s.prop1) {
      s.channel = 'D=c1';
    }

    if (s.prop6) {
      s.eVar6 = 'D=c6';
    }

    if (s.prop12) {
      s.eVar12 = s.prop12;
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar12', ',', 2);
    }

    if (s.prop14) {
      s.eVar14 = 'D=c14';
    }

    if (s.prop15) {
      s.eVar15 = 'D=c15';
    }

    if (s.prop18) {
      s.eVar18 = s.prop18;
    }

    if (s.prop21) {
      s.eVar21 = 'D=c21';
    }

    if (s.prop37) {
      s.eVar35 = 'D=c37';
    }
    
    if (s.prop67) {
      s.eVar65 = 'D=c67';
    }
    if (s.eVar65) {
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar65,prop67', ',', 2);
    }

    /* Custom link tracking */
    if (typeof(s.linkName) !== "undefined" && s.linkName) {
      s.prop62 = s.linkName;
      s.eVar59 = "D=c62";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar59,prop62', ',', 2);
    }

    /* Custom link URL tracking */
    if (typeof(s.linkURL) !== "undefined" && s.linkURL) {
      s.prop24 = s.linkURL;
      s.eVar71 = "D=c24";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop24,eVar71', ',', 2);

    }

	/** Lead tracking  */
  s.pfLead = function (t, e) {
    e = e ? e.toLowerCase() : null;
    var v = e === 'initiated' ? 'event1' : (e === 'completed' ? 'event2' : null);
    if (!t || !v) return;
    var s = this;
    s.eVar1 = t;
    s.linkName = 'lead ' + e;
    s.events = s.apl(s.events, v, ',', 2);
  }
  
    /* Custom link Type tracking */
    if (typeof(s.linkType) !== "undefined" && s.linkType) {
      s.prop26 = (s.linkType === 'd' ? "download" : (s.linkType === 'e' ? "exit" : "internal"));
      s.eVar72 = "D=c26";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop26,eVar72', ',', 2);
    }


    /* Page Name Tracking */
    s.eVar3 = s.prop56 = "D=pageName";
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar3,prop56', ',', 2);
    
    /* AppMeasurement Version */
	s.eVar70 = s.version;
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar70', ',', 2);
    
    s.plugins = '';
  }

  s.doPlugins = s_doPlugins

  /************************** PLUGINS SECTION *************************/
  /* You may insert any plugins you wish to use here.                 */

  /*
   * Plugin: generates a new UUID
   */
  s.genUUID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
  /*
   * Plugin: getAndPersistValue
   */
  s.getAndPersistValue = new Function("v", "c", "e", ""
    + "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
    + "v)s.Util.cookieWrite(c,v,e?a:0);return s.Util.cookieRead(c);");
  /*
   * Plugin: getNewRepeat
   */
  s.getNewRepeat = new Function("d", "cn", ""
    + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
    + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.Util.cookieRead(cn);if("
    + "cval.length==0){s.Util.cookieWrite(cn,ct+'-New',e);return'New';}sva"
    + "l=cval.split('-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.Util."
    + "cookieWrite(cn,ct+'-New',e);return'New';}else{s.Util.cookieWrite(cn"
    + ",ct+'-Repeat',e);return'Repeat';}");
  /*
   * Plugin: getTimeParting 3.4
   */
  s.getTimeParting = new Function("h", "z", ""
    + "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
    + "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
    + "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
    + "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
    + "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
    + "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
    + "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
    + "imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
    + ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
    + "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
  /*
   * Plugin: getValOnce
   */
  s.getValOnce = new Function("v", "c", "e", "t", ""
    + "if(!v)return'';var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0"
    + ",i=t=='m'?60000:86400000,k=s.Util.cookieRead(c);a.setTime(a.getTime"
    + "()+e*i);s.Util.cookieWrite(c,v,e==0?0:a);return v==k?'':v");
  /*
   * Plugin Utility: apl
   */
  s.apl = new Function("l", "v", "d", "u", ""
    + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.le"
    + "ngth;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase("
    + ")));}}if(!m)l=l?l+d+v:v;return l;");
  /*
   * Plugin: getPreviousValue
   */
  s.getPreviousValue = new Function("v", "c", "el", ""
    + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
    + "){if(s.events){i=el.split(',');j=s.events.split(',');for(x in i){fo"
    + "r(y in j){if(i[x]==j[y]){if(s.Util.cookieRead(c))r=s.Util.cookieRea"
    + "d(c);v?s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t)"
    + ";return r}}}}}else{if(s.Util.cookieRead(c))r=s.Util.cookieRead(c);v"
    + "?s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t);retur"
    + "n r;}");
  /*
   * Plugin: getPercentPageViewed v1.71
   */
  s.getPercentPageViewed = new Function("n", ""
    + "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
    + "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
    + "rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
    + ".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
    + "ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
    + "',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
    + "a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
    + "!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
    + "if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
    + "r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
    + "|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
    + "th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
    + "|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
    + "tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
    + "_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
    + "s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
    + "nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
    + "C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
    + "=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
    + ":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
    + "v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
    + "N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
    + "Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
    + ":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
    + "','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
    + "+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
    + "_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
    + "length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
    + "ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
  /*
  * Utility Plugin - Compatibility Functions for AppMeasurement JS
  */
  s.wd=window;
  s.fl=new Function("x","l",""
    +"return x?(''+x).substring(0,l):x");
  s.pt=new Function("x","d","f","a",""
    +"var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t"
    +".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri"
    +"ng(z,x.length);t=z<x.length?t:''}return'';");
  s.gtfs=new Function(""
    +"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
    +"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
    +"d.referrer:d.location;return{location:s.parseUri(u)}");
  s.epa=new Function("x",""
    +"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
    +"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
    +"(x)}return y');return tcf(x)}else return unescape(x)}return y");
  /*
   * Plugin: Custom Link Tracker
   */
  /* -- Original Adobe function. Left commented out for reference.
   s.customLinkTracker=new Function("",""
   +"var s=this,c=pfConfig.customLinks,k,i,o,getCleanURL=function(u){u=u"
   +".indexOf('://')>-1?u.split('://')[1]:u;u=u.indexOf('#')>-1?u.split("
   +"'#')[0]:u;u=u.indexOf('?')>-1?u.split('?')[0]:u;while(u.lastIndexOf"
   +"('/')==u.length-1)u=u.substr(0,u.length-1);return u.toLowerCase();}"
   +",getIndex=function(ls,t,l){for(i=0;i<ls.length;i++)if(ls[i].href)if"
   +"(ls[i].type&&ls[i].funcName)if(ls[i].type.toLowerCase()==t){if(t=='"
   +"e'){if(l.indexOf(ls[i].href.toLowerCase())>-1)return i;}else{k=document.createEle"
   +"ment('a');k.href=ls[i].href.toLowerCase();if(l.indexOf(k.href.split"
   +"('://')[1])>-1)return i;}}for(i=0;i<ls.length;i++)if(!ls[i].href)if"
   +"(ls[i].type&&ls[i].funcName)if(ls[i].type.toLowerCase()==t)return i"
   +";return-1;},getLinkObject=function(){if(s.version.toUpperCase().ind"
   +"exOf('H.')>-1){o=s.linkHandler('.',null,true);if(o)s.linkURL=o.href"
   +".toLowerCase();}else if(!isNaN(s.version.split('.')[0])){o=s.linkOb"
   +"ject;if(o&&s.linkType!='d'&&s.linkType!='e')s.linkType='o';}else o="
   +"null;return o;};s.linkObject=getLinkObject();if(!s.linkObject)retur"
   +"n;i=getIndex(c,s.linkType,getCleanURL(o.href));if(i>-1)this[c[i].fu"
   +"ncName](o,c[i]);");
   */
  s.customLinkTracker = function () {
    var s = this;
    var c = pfConfig.customLinks;
    var k;
    var i;
    var o;

    var getCleanURL = function (u) {
      if (u.length > 0) {
        if (u.indexOf('://') > -1) {
          u = u.split('://')[1];
        }

        if (u.indexOf('#') > -1) {
          u = u.split('#')[0];
        }

        if (u.indexOf('?') > -1) {
          u = u.split('?')[0];
        }

        while ((u.lastIndexOf('/') === u.length - 1) && u.length > 0) {
          u = u.substr(0, u.length - 1);
        }
      }
      return u.toLowerCase();
    };

    var getIndex = function (ls, t, l) {
      // check config items with a specified HREF
      for (i = 0; i < ls.length; i++) {
        if (ls[i].href) {
          if (ls[i].type && ls[i].funcName) {
            if (ls[i].type.toLowerCase() === t) {
              // exit links
              if (t === 'e') {
                if (l.indexOf(ls[i].href.toLowerCase()) > -1) {
                  return i;
                }
              }
              // download and 'other' links
              else {
                k = getCleanURL(ls[i].href.toLowerCase());
                if (l.indexOf(k) > -1) {
                  return i;
                }
              }
            }
          }
        }
      }

      // check config items WITHOUT an HREF
      for (i = 0; i < ls.length; i++) {
        if (!ls[i].href) {
          if (ls[i].type && ls[i].funcName) {
            if (ls[i].type.toLowerCase() === t) {
              return i;
            }
          }
        }
      }

      // no match found
      return -1;
    };

    var getLinkObject = function () {
      if (s.version.toUpperCase().indexOf('H.') > -1) {
        o = s.linkHandler('.', null, true);

        if (o) {
          s.linkURL = o.href.toLowerCase();
        }
      }
      else if (!isNaN(s.version.split('.')[0])) {
        o = s.linkObject;

        if (o && s.linkType !== 'd' && s.linkType !== 'e') {
          s.linkType = 'o';
        }
      }
      else {
        o = null;
      }

      // A fix for external links treated by pfizer_exit_popup (Pfizer Pro US).
      if (s.linkObject && s.linkType === 'o' && s.linkURL.indexOf(location.href.split('/')[2] + '/exit') > -1 && s.linkObject.getAttribute('data-href')) {
        s.linkURL = s.linkObject.getAttribute('data-href').toLowerCase();
      }
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop23', ',', 2);
      return o;
    };

    s.linkObject = getLinkObject();

    if (!s.linkObject) {
      return;
    }
    var u = o.href || "";
    if (s.linkType === 'o' && typeof(u) !== "undefined" && u.indexOf(location.href.split('/')[2] + '/exit') > -1) {
      s.linkType = s.custom.isLinkDownloadType(s.linkURL) || 'e';
      u = s.linkURL;
    }
    if (s.linkType === 'o' || s.linkType === 'e') {
      s.prop7 = s.eVar7 = s.prop8 = '';
      s.events = s.custom.aplr(s.events, 'event4', ',', 2);
      s.linkTrackEvents = s.custom.aplr(s.linkTrackEvents, 'event4', ',', 2);
    }
    i = getIndex(c, s.linkType, getCleanURL(u));
    if (i > -1 && typeof this[c[i].funcName] === "function") {
      this[c[i].funcName](o, c[i]);
    } else {
      if (s.linkType === 'd') {
        s.pfDownloadLink(o, {funcName: "pfDownloadLink", href: "", interaction_status: "", obj: "", type: "d"});
      }
    }
    /* Custom name tracking */
    if ((typeof(s.linkName) === "undefined" || !s.linkName) && s.linkObject.getAttribute("sc:linkname")) {
      s.linkName = s.linkObject.getAttribute("sc:linkname");
    }
    /* Fallback Custom name tracking - Set Link URL in case Link name not set */
    if ((typeof(s.linkName) === "undefined" || !s.linkName) && s.linkURL) {
      s.linkName = s.linkURL;
    }
  };
  /*
   * Form Workflow tracking
   * a - Action
   * n - Form Name
   * isPv - Is Page View
   * step - Step Number in case of step event
   * c - custom variables array 
   */
  s.pfFormWorkflow = function (a, n, isPv, step, c) {
    isPv = isPv || false;
    var e = '', linkname;
    step = (step || "1").toString();
    switch (a) {
      case "initiated":
        e = "event104";
        linkname = n+"|form|initiated";
        break;
      case "step":
        if (step === "1") {
          e = "event111";
          s.eVar81 = "step 1";
        } else if (step === "2") {
          e = "event112";
          s.eVar81 = "step 2";
        } else if (step === "3") {
          e = "event113";
          s.eVar81 = "step 3";
        } else if (step === "4") {
          e = "event114";
          s.eVar81 = "step 4";
        } else if (step === "5") {
          e = "event115";
          s.eVar81 = "step 5";
        } else if (step === "6") {
          e = "event116";
          s.eVar81 = "step 6";
        } else if (step === "7") {
          e = "event117";
          s.eVar81 = "step 7";
        } else if (step === "8") {
          e = "event118";
          s.eVar81 = "step 8";
        } else if (step === "9") {
          e = "event119";
          s.eVar81 = "step 9";
        } else if (step === "10") {
          e = "event120";
          s.eVar81 = "step 10";
        }
        s.prop48 = "D=v81";
        if (!isPv) s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar81,prop48', ',', 2);
        linkname = n+"|form|step "+step+" completed";
        break;
      case "submit":
        e = "event105";
        linkname = n+"|form|submitted";
        break;
      case "completed":
        e = "event106";
        linkname = n+"|form|completed";
        break;
      case "error":
        e = "event107";
        linkname = n+"|form|error";
        break;
      default:
        e = null;
        break;
    }
    if (!a || !n || !e) {
      return;
    }
    s.events = s.apl(s.events, e, ',', 2);
    s.eVar80 = n;
    s.prop47 = "D=v80";
    s.custom.setCustomVariables(c);
    if (!isPv) {
      s.eVar59 = linkname;
      s.prop62 = "D=v59";
      s.linkTrackEvents = s.apl(s.linkTrackEvents, e, ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar59,eVar80,prop23,prop62,prop47,events', ',', 2);
      s.tl(this, 'o', linkname);
      s.pfClearVars();
    }
  }
  /*
   * Form Workflow tracking
   * n - Form Name
   * step - Form Step
   * c - custom variables array 
   * q - Form Input Question
   * v - Form Input Answer
   * i - Index of Question
   */
  s.pfFormWorkflowInput = function (n, step, c, q, a, i) {
    s.events = s.apl(s.events, "event121", ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, "event121", ',', 2);
    step = (step || "1").toString();
    if (step === "1") {
      s.eVar81 = "step 1";
    } else if (step === "2") {
      s.eVar81 = "step 2";
    } else if (step === "3") {
      s.eVar81 = "step 3";
    } else if (step === "4") {
      s.eVar81 = "step 4";
    } else if (step === "5") {
      s.eVar81 = "step 5";
    } else if (step === "6") {
      s.eVar81 = "step 6";
    } else if (step === "7") {
      s.eVar81 = "step 7";
    } else if (step === "8") {
      s.eVar81 = "step 8";
    } else if (step === "9") {
      s.eVar81 = "step 9";
    } else if (step === "10") {
      s.eVar81 = "step 10";
    }
    s.prop48 = "D=v81";
    i = (i || "").toString();
    switch (i) {
      case "1":
        s.eVar49 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar49', ',', 2);
        break;
      case "2":
        s.eVar50 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar50', ',', 2);
        break;
      case "3":
        s.eVar51 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar51', ',', 2);
        break;
      case "4":
        s.eVar52 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar52', ',', 2);
        break;
      case "5":
        s.eVar53 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar53', ',', 2);
        break;
      case "6":
        s.eVar54 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar54', ',', 2);
        break;
      case "7":
        s.eVar55 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar55', ',', 2);
        break;
      case "8":
        s.eVar56 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar56', ',', 2);
        break;
      case "9":
        s.eVar57 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar57', ',', 2);
        break;
      case "10":
        s.eVar58 = q + " | " + a;
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar58', ',', 2);
        break;
    }
    var linkname = "form | input";
    s.eVar59 = linkname;
    s.prop62 = "D=v59";
    s.eVar80 = n;
    s.prop47 = "D=v80";
    s.custom.setCustomVariables(c);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar59,eVar80,eVar81,prop23,prop47,prop62,prop48,events', ',', 2);
    s.tl(this, 'o', linkname);
    s.pfClearVars();
  }
  /*
   * FAQ Link tracking
   * n - FAQ Link name
   * c - custom variables array
   * isPv - Is Page View
   */
  s.pfFAQ = function (n, c, isPv) {
    s.events = s.apl(s.events, "event103", ',', 2);
    s.eVar59 = n;
    s.prop62 = "D=v59";
    s.custom.setCustomVariables(c);
    if (!isPv) {
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event103", ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar59,prop23,prop62,events', ',', 2);
      s.tl(this, 'o', n);
      s.pfClearVars();
    }
  }
  /*
   * FAQ tracking
   * z - Zip Code
   * n - No of records found
   * c - custom variables array 
   */
  s.pfFAQLink = function (n, c) {
    s.events = s.apl(s.events, "event103", ',', 2);
    s.eVar3 = s.prop56 = "D=pageName";
    s.linkname = n;
    s.eVar59 = n;
    s.prop62 = "D=v59";
    s.linkTrackEvents = s.apl(s.linkTrackEvents, "event103", ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar3,eVar59,prop23,prop56,prop62,events', ',', 2);
    s.custom.setCustomVariables(c);
  }
  /*
   * Custom download tracking
   * f - File Name
   * isPv - Is Page View
   */
  s.pfDownload = function (f, isPv) {
    if (!f) return;
    var s = this;
    s.prop7 = f.toLowerCase();
    s.eVar7 = 'D=c7';
    s.prop8 = 'D=pageName';
    s.events = s.apl(s.events, 'event4', ',', 2);
    if (!isPv) {
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop7,prop8,eVar7,events', ',', 2);
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event4", ',', 2);
    }
  }
  /*
   * Custom download link tracking
   */
  s.pfDownloadLink = function (obj, config) {
    var s = this;
    s.prop7 = decodeURIComponent(s.linkURL.substring(s.linkURL.lastIndexOf('/') + 1).toLowerCase());
    s.linkName = s.linkObject.getAttribute("sc:linkname") || s.prop7;
    s.eVar7 = 'D=c7';
    s.prop8 = 'D=pageName';
    s.eVar3 = "D=pageName";
    s.events = s.apl(s.events, 'event4', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event4', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop7,eVar7,prop8,events', ',', 2);

    s.pfTrackInteractionStatus(obj, config);
  }
  /**
   * Custom interaction status tracking for non-download (ie. exit) links
   * @param  {[type]} obj    [description]
   * @param  {[type]} config [description]
   * @return {[type]}        [description]
   */
  var original_prop43 = null;
  s.pfTrackInteractionStatus = function (obj, config) {
    // save the original "fallback" value
    if (original_prop43 === null && typeof this.prop43 !== 'undefined') {
      original_prop43 = this.prop43;
    }

    var s = this;
    // set the pre-configured value
    if (typeof config.interaction_status !== 'undefined' && config.interaction_status !== '') {
      s.prop43 = config.interaction_status.toUpperCase();
    }
    // set the fallback value back in place
    else if (original_prop43 !== null) {
      s.prop43 = original_prop43;
    }

    if (typeof s.prop54 === 'undefined' || s.prop54 === '' || typeof s.eVar54 === 'undefined' || s.eVar54 === '') {
      s.prop54 = 'NA';
      s.eVar54 = 'NA';
    }
    s.prop55 = s.genUUID();
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop43,prop55,prop54,eVar54', ',', 2);
  }
  /*
   * Site tool tracking
   * n - Tool Name
   * isPv - Is Page View
   */
  s.pfSiteTool = function (n, isPv) {
    n = n ? n.toLowerCase() : null;
    if (!n) return;
    var s = this;
    s.eVar23 = n;
    s.events = s.apl(s.events, 'event14', ',', 2);
    if (!isPv) {
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar23', ',', 2);
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event14", ',', 2);
    }
  }
  /*
   * Site tool link tracking
   */
  s.pfSiteToolLink = function (lto, lco) {
    var n = lco.obj.n ? lco.obj.n.toLowerCase() : null;
    if (!n) return;
    var s = this;
    s.eVar23 = n;
    s.linkName = 'site tool usage';
    s.events = s.apl(s.events, 'event14', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events,eVar23', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event14', ',', 2);
  }
  /*
   * Registration tracking
   */
  s.pfRegistration = function (source, action) {
    if (!source || !action) {
      return;
    }
    var event = null;
    switch (action.toLowerCase()) {
      case 'initiated':
        event = 'event8';
        break;
      case 'completed':
        event = 'event9';
        break;
      default:
        return;
    }
    var s = this;
    s.events = s.apl(s.events, event, ',', 2);
    s.eVar9 = source.toLowerCase(); // registration source (GRV, PAC, etc.)
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events,eVar9', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, event, ',', 2);
  }
  /*
   * Registration link tracking
   */
  s.pfRegistrationLink = function (lto, lco) {
    var e = lco.obj.l ? lco.obj.l.toLowerCase() : null,
      v = e === 'initiated' ? 'event8' : (e === 'completed' ? 'event9' : null);
    if (!e || !lco.obj.t || !v) return;
    var s = this;
    s.events = s.apl(s.events, v, ',', 2);
    s.eVar9 = lco.obj.t.toLowerCase();
    s.linkName = 'registration ' + e;
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events,eVar9', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, v, ',', 2);
  }
  /*
   * Login tracking
   */
  s.pfLogin = function (source, action, login_type) {
    if (!source || !action) {
      return;
    }
    var event = null;
    switch (action.toLowerCase()) {
      case 'initiated':
        event = 'event36';
        break;
      case 'completed':
        event = 'event37';
        break;
      default:
        return;
    }
    var s = this;
    s.events = s.apl(s.events, event, ',', 2);
    // customer ID type (GRV, PAC, etc.)
    s.eVar46 = source.toLowerCase();
    // login type (Traditional or SSO)
    if (!login_type) {
      login_type = 'Traditional';
    }
    s.prop61 = login_type.toLowerCase();
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events,eVar45,eVar46,prop61', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, event, ',', 2);
  }
  /*
     * Video Open tracking
  */
  s.pfVideoOpen = function () {
    s = this;
    s.events = s.apl(s.events, 'event18', ',', 2);
  }
  /*
   * Banner Ad Impression tracking
   */
  s.pfBannerAdImpression = function (id) {
    var s = this;
    s.events = s.apl(s.events, 'event30', ',', 2);
    if (id) s.eVar4 = id;
  }
  /*
   * Survey tracking
   */
  s.pfSurvey = function (n, e, qa, isPv, l) {
    isPv = (typeof(isPv) === "undefined" ? true : isPv);
    e = e ? e.toLowerCase() : null;

    if (!e || !n) {
      return;
    }

    var s = this;
    s.eVar8 = n;
    var evnt;
    if (e === 'offered') {
      evnt = 'event10';
      s.events = s.apl(s.events, 'event10', ',', 2);
      s.prop37 = s.custom.getDate();
      s.eVar35 = 'D=c37';
    }
    else if (e === 'completed') {
      evnt = 'event11';
      s.events = s.apl(s.events, 'event11', ',', 2);
      s.prop38 = s.custom.getDate();
      s.eVar36 = 'D=c38';

      if (qa) {
        s.eVar22 = n + ' | ' + qa;
      }
    }
    if (!isPv) {
      l = l || "survey | " + n + " | " + e;
      s.eVar59 = l;
      s.prop62 = "D=v59";
      s.linkTrackEvents = s.apl(s.linkTrackEvents, evnt, ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar59,eVar8,prop62,events', ',', 2);
      if (e === 'offered') {
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar35,prop37', ',', 2);
      }
      else if (e === 'completed') {
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar36,prop38', ',', 2);
      }
      if (qa) {
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar22', ',', 2);
      }
      s.tl(this, 'o', l);
      s.pfClearVars();
    }
  }
  /*
   * 404 error page tracking
   */
  s.pfError404 = function (u) {
    if (!u) return;
    s.pageName = '404 ErrorPage';
    s.pageType = 'ErrorPage';
    s.prop16 = s.prevPage;
    s.prop17 = u;
  }

/*  

   var http = new XMLHttpRequest();
    http.open('HEAD', location.pathname, false);
    http.send();
    if (http.status === 404){
        s.pfError404(location.pathname);
	}*/

  /*
   * Internal keyword search tracking
   * k - Keyword
   * t - Type of search
   * r - No of records
   * isPv - Is Page View
   */
  s.pfSearch = function (k, t, r, isPv) {
    k = k ? k.toLowerCase() : null;
    t = t ? t.toLowerCase() : null;
    if (!k || !t || r < 0) return;
    s.prop5 = k;
    s.eVar5 = 'D=c5';
    s.eVar11 = (r || '0')+'';
    s.prop20 = t;
    s.eVar20 = 'D=c20';
	/* s.prop11 = 'D=pageName'; */
	/* changes pagename to previous pagename*/
	s.prop11 = s.getPreviousValue(s.pageName, 's_ppn');
	if ( r > 0 ){
	s.events = s.apl(s.events, 'event5', ',', 2);
	if (!isPv) {
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event5", ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop5,eVar5,prop11,eVar11,prop20,eVar20', ',', 2);
	}
	}
    else{
	s.events = s.apl(s.events, 'event3', ',', 2);
	if (!isPv) {
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event3", ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop5,eVar5,prop11,eVar11,prop20,eVar20', ',', 2);
			}
		}
	}
  /*
   * Social tracking
   */
  s.pfSocialShare = function (c, t, l) {
    if (!c) return;
    s.eVar64 = c;
    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
    s.events = s.apl(s.events, 'event45', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event45', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar64, events', ',', 2);
    l = l || "content | social share";
    s.tl(this, "o", l);
    s.linkTrackEvents = '';
    s.linkTrackVars = '';
  }
  /*
   * Scroll tracking
   */
   window.pfPageScrollSet = false;
    s.pfPageScroll = function(){
       if (!window.pfPageScrollSet) {
         // Send custom click event on scroll 25%, 50%, 75%, 100% of the page.
         var windowH = window.innerHeight;
         var docH = document.body.scrollHeight;
         // Send event only if page height is bigger then clien window height.
         if (docH > windowH) {
           s.custom.pfscrollHeight = {
             '1' : {'perc': 75, 'px': parseInt(docH * .75), 'sent': false},
             '2' : {'perc': 50, 'px': parseInt(docH * .5),  'sent': false},
             '3' : {'perc': 25, 'px': parseInt(docH * .25), 'sent': false},
             // '100': {'px': docH,   'sent': false},
           };

          //$(window).scroll(function () {
             window.onscroll=function(){
             var scrollY = window.pageYOffset;
             var pageBottom = scrollY + windowH;
             // Loop 75 (max) to 25. Ignore low number to minimize # of requests.
             for (var i = 1; i <= 3; i++) {
               var value = s.custom.pfscrollHeight[i];
               if (pageBottom >= value.px) {
                 if (!value.sent) {
                   // TODO - add prop12  to s.linkTrackVars.
                   s.tl(true, 'o', 'page scroll ' + value.perc + '%');
                   value.sent = true;
                 }
                 // Skip lower numbers.
                 break;
               };
             };
           };//);
           window.pfPageScrollSet = true;
         }
       }
      
   }
   
  /*
   * Content Rating tracking
   */
  s.pfRatingSubmit = function (r, t) {
    if (!r) return;
    s.events = s.apl(s.events, 'event40,event42=' + r, ',', 2);
    s.eVar62 = 'rating' + r;

    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events,eVar62', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event40,event42', ',', 2);
    s.tl(this, "o", "content | rating submit");
    s.pfClearVars();
  }
  /*
   * Content Like tracking
   */
  s.pfContentView = function (t) {
    if (!t) return;
    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
  }
  /*
   * Content Like tracking
   */
  s.pfContentLike = function (t, ln) {
    if (!t) return;
    s.events = s.apl(s.events, 'event74', ',', 2);

    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event74', ',', 2);
    s.tl(this, "o", ln || "content|like");
    s.pfClearVars();
  }
  /*
   * Content Export tracking
   */
  s.pfContentExport = function (t, ln) {
    if (!t) return;
    s.events = s.apl(s.events, 'event75', ',', 2);

    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event75', ',', 2);
    s.tl(this, "o", ln || "content|export");
    s.pfClearVars();
  }
  /*
   * Subscription tracking
   * n = subscription name
   * t = subscription schedule time (daily, weekly or monthly)
   * u = unsubscribe (Set true in case of unsubscribe)
   */
  s.pfSubscription = function (n, t, u) {
    if (!n) return;
    var a = "subscribe";
    if (typeof(u) === "undefined" || !u) {
      s.events = s.apl(s.events, 'event71', ',', 2);
      s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event71', ',', 2);
    } else {
      s.events = s.apl(s.events, 'event70', ',', 2);
      s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event70', ',', 2);
      a = "unsubscribe";
    }

    // TODO: Add Name of scubscrition

    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.tl(this, "o", n + " subscription | " + a);
    s.pfClearVars();
  }
  /*
   * Subscription tracking
   */
  s.pfNomination = function (n) {
    if (!n) return;
    s.events = s.apl(s.events, 'event73', ',', 2);

    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event73', ',', 2);
    s.tl(this, "o", "nomination | " + n);
    s.pfClearVars();
  }
  /*
   * Comment tracking
   */
  s.pfContentComment = function (t, ln) {
    if (!t) return;
    s.events = s.apl(s.events, 'event72', ',', 2);

    if (t) {
      s.prop33 = t;
      s.eVar34 = "D=c33";
      s.linkTrackVars = s.apl(s.linkTrackVars, 'prop33,eVar34', ',', 2);
    }
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event72', ',', 2);
    s.tl(this, "o", ln || "content|comment");
    s.pfClearVars();
  }
  /*
   * Scroll tracking
   */
  s.pfSectionScroll = function (n) {
    if (!n) return;
    s.events = s.apl(s.events, 'event83', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event83', ',', 2);
    s.tl(this, "o", n);
    s.pfClearVars();
  }
  /*
   * User ID tracking
   */
  s.pfUser = function (u, t) {
    if (!u) return;
    var s = this;
    s.eVar45 = u;
    s.eVar46 = t;
  }
  /*
   * Pharmacy finder tracking on Ajax link click
   * z - Zip Code
   * r - No of records found
   * c - custom variables array 
   * isPv - Is Page View
   */
  s.pfPharmacyFinder = function (z, r, c, isPv) {
    s.events = s.apl(s.events, "event101", ',', 2);
    s.eVar39 = z;
    s.prop42 = "D=v39";
    s.pfSearch(z, "pharmacy finder", r);
    s.pfSiteTool("pharmacy finder");
    var linkname = "pharmacy finder";
    s.eVar59 = linkname;
    s.prop62 = "D=v59";
    s.custom.setCustomVariables(c);
    if (!isPv) {
      s.linkTrackEvents = s.apl(s.linkTrackEvents, "event101", ',', 2);
      s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar39,eVar59,prop23,prop62,prop42,events', ',', 2);
      s.tl(this, 'o', linkname);
      s.pfClearVars();
    }
  }
  /*
   * Pharmacy finder tracking on page load
   * z - Zip Code
   * n - No of records found
   * c - custom variables array 
   */
  s.pfPharmacyFinderResult = function (z, n, c) {
    s.events = s.apl(s.events, "event101", ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, "event101", ',', 2);
    s.eVar39 = z;
    s.prop42 = "D=v39";
    s.eVar3 = s.prop56 = "D=pageName";
    s.pfSearch(z, "pharmacy finder", n);
    s.pfSiteTool("pharmacy finder");
    s.eVar59 = "pharmacy finder";
    s.prop62 = "D=v59";
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar3,eVar39,eVar59,prop23,prop56,prop62,prop42,events', ',', 2);
    s.custom.setCustomVariables(c);
  }
  /*
   * Pharmacy finder tracking on page load
   * z - Zip Code
   * n - No of records found
   * c - custom variables array 
   */
  s.pfPharmacyLink = function (pid, pname, l) {
    s.prop45 = pid;
    s.eVar40 = "D=c45";
    s.prop46 = pname;
    s.eVar41 = "D=c46";
    s.events = s.apl(s.events, 'event102', ',', 2);
    s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event102', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop45,prop46,eVar40,eVar41,events', ',', 2);
    s.tl(this, "o", l || "pharmacy finder | pharmacy link");
    s.pfClearVars();
  }
  /**
   * Clears common vars to allow for population of new content.
   * @return {[type]} [description]
   */
  s.pfClearVars = function () {
    var s = this;

    for (var i = 1; i <= 75; i++) {
      s['prop' + i] = '';
		}
	for (var i = 1; i <= 200; i++) {
        s['eVar' + i] = '';
		}

    var extras = [
      'pageName',
      'channel',
      'products',
      'events',
      'campaign',
      'purchaseID',
      'state',
      'zip',
      'server',
      'linkName',
      'linkTrackEvents',
      'linkTrackVars'
    ];

    for (var i = 0; i < extras.length; i++) {
      s[extras[i]] = '';
    }
  }
  /*
   * Function - read combined cookies v 0.41
   * LAST UPDATED: 06-05-2013
   * APP MEASUREMENT JS COMPATIBLE
   */
  if (!s.__ccucr) {
    s.c_rr = s.c_r;
    s.__ccucr = true;
    function c_r(k) {
      var s = this, d = new Date, v = s.c_rr(k), c = s.c_rspers(), i, m, e;
      if (v)return v;
      k = s.Util.urlDecode(k);
      i = c.indexOf(' ' + k + '=');
      c = i < 0 ? s.c_rr('s_sess') : c;
      i = c.indexOf(' ' + k + '=');
      m = i < 0 ? i : c.indexOf('|', i);
      e = i < 0 ? i : c.indexOf(';', i);
      m = m > 0 ? m : e;
      v = i < 0 ? '' : s.Util.urlDecode(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
      return v;
    }

    function c_rspers() {
      var cv = s.c_rr("s_pers");
      var date = new Date().getTime();
      var expd = null;
      var cvarr = [];
      var vcv = "";
      if (!cv)return vcv;
      cvarr = cv.split(";");
      for (var i = 0, l = cvarr.length; i < l; i++) {
        expd = cvarr[i].match(/\|([0-9]+)$/);
        if (expd && parseInt(expd[1]) >= date) {
          vcv += cvarr[i] + ";";
        }
      }
      return vcv;
    }

    s.c_rspers = c_rspers;
    s.c_r = c_r;
  }
  /*
   * Function - write combined cookies v 0.41
   */
  if (!s.__ccucw) {
    s.c_wr = s.c_w;
    s.__ccucw = true;
    function c_w(k, v, e) {
      var s = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t;
      d.setTime(d.getTime() - 60000);
      if (s.c_rr(k)) s.c_wr(k, '', d);
      k = s.Util.urlEncode(k);
      pv = s.c_rspers();
      i = pv.indexOf(' ' + k + '=');
      if (i > -1) {
        pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
        pc = 1;
      }
      sv = s.c_rr(sn);
      i = sv.indexOf(' ' + k + '=');
      if (i > -1) {
        sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
        sc = 1;
      }
      d = new Date;
      if (e) {
        if (e.getTime() > d.getTime()) {
          pv += ' ' + k + '=' + s.Util.urlEncode(v) + '|' + e.getTime() + ';';
          pc = 1;
        }
      }
      else {
        sv += ' ' + k + '=' + s.Util.urlEncode(v) + ';';
        sc = 1;
      }
      sv = sv.replace(/%00/g, '');
      pv = pv.replace(/%00/g, '');
      if (sc) s.c_wr(sn, sv, 0);
      if (pc) {
        t = pv;
        while (t && t.indexOf(';') !== -1) {
          var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
          t = t.substring(t.indexOf(';') + 1);
          ht = ht < t1 ? t1 : ht;
        }
        d.setTime(ht);
        s.c_wr(pn, pv, d);
      }
      return v === s.c_r(s.Util.urlEncode(k));
    }

    s.c_w = c_w;
  }

  /************************** ADDITIONAL DEFAULTS *************************/

  // regenerate new UUID for every interaction/request
  s.prop55 = s.genUUID();
  s.linkTrackVars = s.apl(s.linkTrackVars, 'prop55', ',', 2);

  // re-add the original s.s_PPVg function, if present
  if (typeof original_s_PPVg == 'function') {
    s.s_PPVg = original_s_PPVg;
  }
  
  return s;
}

var s = build_s();

/*
 * Custom Code: Brightcove Smart Analytics v2.1
 */

// saves a copy of all brightcove event handlers for use in Lift's code
var legacy_brightcove = {
  myTemplateLoaded: myTemplateLoaded,
  myTemplateReady: myTemplateReady,
  onPlay: onPlay,
  onStop: onStop,
  onProgress: onProgress
};

var player, modVP, modExp, modCon, mediaFriendly, mediaName, mediaID = 0;
var mediaLength, mediaOffset = 0, mediaTagsArray = [], mediaTagsArray2 = [];
var mediaRefID, mediaPlayerType, mediaPlaylist;
var mediaPlayerName = "vga omniture testing player"; //Required hard code player name here.
window.bvScAnalytics = window.bvScAnalytics || {};

function myTemplateLoaded(experienceID) {
  player = brightcove.api.getExperience(experienceID);
  modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
  modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
  modCon = player.getModule(brightcove.api.modules.APIModules.CONTENT);
  modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, function (event) {
    myTemplateReady(event);
  });
}

function myTemplateReady(evt) {
  var id = evt.target.experience.id;
  if (window.bvScAnalytics.hasOwnProperty(id) && window.bvScAnalytics[id] === true) {
    /* Do nothing */
  } else {
    window.bvScAnalytics[id] = true;
    modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, function (event) {
      onPlay(event);
    });
    modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, function (event) {
      onStop(event);
    });
    modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, function (event) {
      onProgress(event);
    });
  }
}

function onPlay(evt) {
  if (mediaID !== (evt.media.id).toString()) {
    mediaLength = evt.duration; //Required video duration
    mediaOffset = Math.floor(evt.position); //Required video position
    mediaID = (evt.media.id).toString(); //Required video id
    mediaFriendly = evt.media.displayName; //Required video title
    mediaName = mediaID + ":" + mediaFriendly; //Required Format video name
    mediaRefID = evt.media.referenceId; //Optional reference id
    mediaPlayerType = player.type; //Optional player type
    mediaTagsArray = evt.media.tags; //Optional tags
    mediaPlaylist = ""; //Optional playlist id
    for (i = 0; i < mediaTagsArray.length; i++) {
      mediaTagsArray2[i] = mediaTagsArray[i]['name'];
    }
    if (mediaPlayerType === "flash") { //Optional playlist id
      mediaPlaylist = (evt.media.lineupId).toString();
    } else {
      mediaPlaylist = (evt.media.playlistID).toString();
    }
  }

  /* Check for start of video */
  if (mediaOffset === 0) {
    /* These data points are optional. If using SC14, change context data variables to hard coded variable names and change trackVars above. */
    s.contextData['bc_tags'] = mediaTagsArray2.toString(); //Optional returns list of tags for current video.  Flash only.
    s.contextData['bc_refid'] = mediaRefID; //Optional returns reference id
    s.contextData['bc_player'] = mediaPlayerName; //Optional player name is currently hard coded.  Will be dynamic in later releases.
    s.contextData['bc_playertype'] = mediaPlayerType; //Optional returns flash or html
    s.contextData['bc_playlist'] = mediaPlaylist; //Optional returns playlist number for current video.
    s.Media.open(mediaName, mediaLength, mediaPlayerName);
    s.Media.play(mediaName, mediaOffset);
  } else {
    s.Media.play(mediaName, mediaOffset);
  }
}

function onStop(evt) {
  mediaOffset = Math.floor(evt.position);
  if (mediaOffset === Math.floor(evt.duration)) {
    s.Media.stop(mediaName, mediaOffset);
    s.Media.close(mediaName);
    // Reset mediaID after video was finished.
    mediaID = 0;
  } else {
    s.Media.stop(mediaName, mediaOffset);
  }
}

function onProgress(evt) {
  s.Media.monitor = function (s, media) {
    if (media.event === "MILESTONE") {
      /* Use to set additional data points during milestone calls */
      s.Media.track(media.name);
    }
  }
}
/* Youtube Video Analytics (Iframe Embed) */
function onYTPlayerReady(event) {
  console.log("YT Player Ready");
}
var ytPlayer;
var ytPlayerStarts = {};
function onYTPlayerStateChange(event) {
  ytPlayer = window["ytPlayer"];
  if(typeof ytPlayer !== 'undefined'){
    var playerStatus = ytPlayer.getPlayerState();
    if (playerStatus === YT.PlayerState.UNSTARTED) {
      console.log("Video Started");
      var ytVideoData = ytPlayer.getVideoData();
      mediaLength = ytPlayer.getDuration(); //Required video duration
      mediaOffset = Math.floor(ytPlayer.getCurrentTime()); //Required video position
      mediaID = (ytVideoData.video_id).toString(); //Required video id
      mediaFriendly = ytVideoData.title; //Required video title
      mediaName = mediaID + ":" + mediaFriendly; //Required Format video name
      
      if(ytPlayerStarts.hasOwnProperty(mediaID) && ytPlayerStarts[mediaID]){
        /* Do nothing */
      } else {
        if (mediaOffset === 0) {
          s.Media.open(mediaName, mediaLength, mediaPlayerName);
          s.Media.play(mediaName, mediaOffset);
        } else {
          s.Media.play(mediaName, mediaOffset);
        }
        ytPlayerStarts[mediaID] = true;
      }
      /* Trigger Video Started */
    } else if (playerStatus === YT.PlayerState.ENDED) {
      console.log("Video Ended");
      var ytVideoData = ytPlayer.getVideoData();
      /* Trigger Video Completed */
      mediaID = (ytVideoData.video_id).toString(); //Required video id
      mediaFriendly = ytVideoData.title; //Required video title
      mediaName = mediaID + ":" + mediaFriendly; //Required Format video name
      mediaOffset = Math.floor(ytPlayer.getCurrentTime()); //Required video position
      mediaLength = ytPlayer.getDuration(); //Required video duration
      if (mediaOffset === Math.floor(mediaLength)) {
        s.Media.stop(mediaName, mediaOffset);
        s.Media.close(mediaName);
        ytPlayerStarts[mediaID] = false;
        // Reset mediaID after video was finished.
        mediaID = 0;
      } else {
        s.Media.stop(mediaName, mediaOffset);
      }
    } else if (playerStatus === YT.PlayerState.BUFFERING || playerStatus === YT.PlayerState.PAUSED) {
        var ytVideoData = ytPlayer.getVideoData();
        mediaID = (ytVideoData.video_id).toString(); //Required video id
        mediaFriendly = ytVideoData.title; //Required video title
        mediaName = mediaID + ":" + mediaFriendly; //Required Format video name
        mediaOffset = Math.floor(ytPlayer.getCurrentTime()); //Required video position
        s.Media.stop(mediaName, mediaOffset);
    } else if (playerStatus === YT.PlayerState.PLAYING) {
      var ytVideoData = ytPlayer.getVideoData();
      mediaID = (ytVideoData.video_id).toString(); //Required video id
      if(ytPlayerStarts.hasOwnProperty(mediaID) && ytPlayerStarts[mediaID]){
         /* Do nothing */
      } else {
        mediaLength = ytPlayer.getDuration(); //Required video duration
        mediaOffset = Math.floor(ytPlayer.getCurrentTime()); //Required video position
        mediaID = (ytVideoData.video_id).toString(); //Required video id
        mediaFriendly = ytVideoData.title; //Required video title
        mediaName = mediaID + ":" + mediaFriendly; //Required Format video name
        s.Media.open(mediaName, mediaLength, mediaPlayerName);
        s.Media.play(mediaName, mediaOffset);
        ytPlayerStarts[mediaID] = true;
      }
      /* Trigger Video Milestones */
      console.log("Video Playing");
      s.Media.monitor = function (s, media) {
        if (media.event === "MILESTONE") {
          /* Use to set additional data points during milestone calls */
          s.Media.track(media.name);
        }
      }
    }
  }
}
/*
/* ActivityMap functions */
function makeLinkName(ele){
  var sclinkName;
  if(ele && (sclinkName=ele.getAttribute('sc:linkname'))){
    return sclinkName;
  }
  if(ele && ele.href){
    return ele.href.toLowerCase();
  }if(ele && ele.src){
    return ele.src.toLowerCase();  
  }
}
    var originalLinkFunction = s.ActivityMap.link;
    s.ActivityMap.link = function(element,linkName)
{    return linkName ||      // if this is a s.tl call, just return string passed      
    makeLinkName(element) || // this is ActivityMap reporting time      
    originalLinkFunction(element,linkName); // our custom function didn't return anything, so just return the default ActivityMap Link
};
/*ActivityMap functions ended */



/* BrightCove HTML5 Player */
function BrightCovePlayer(player){
  this._player = player;
  this._mediaPlayerName = "Brightcove HTML5 Player";
  this._mediaID = ""; //Required video id
  this._mediaFriendly = ""; //Required video title
  this._mediaName = ""; //Required Format video name
  this._mediaLength = 0; //Required video duration
  this._mediaPlayerType = ""; //Optional player type
  this._mediaStarted = false;
  this._setMediaInfo = function(mediainfo, playerType){
    this._mediaOffset = 0; //Required video position
    this._mediaID = mediainfo.id.toString();
    this._mediaFriendly = mediainfo.name;
    this._mediaName = this._mediaID + ":" + this._mediaFriendly;
    this._mediaLength = mediainfo.duration;
    this._mediaPlayerType = playerType;
  }
}
BrightCovePlayer.prototype.init = function(){
  var that = this;    
  /*this._player.on('firstplay', function(evt) {
    //Do nothing
  });*/
  
  this._player.on('play', function(evt) {
    console.log("Video played");
    that._setMediaInfo(this.mediainfo, this.type);
  });
  this._player.on('playing', function(evt) {
    console.log("Video Playing...");
    //that._setMediaInfo(this.mediainfo, this.type);
    that._mediaOffset = Math.floor(this.currentTime());
    if (that._mediaOffset === 0 || !that._mediaStarted) {
      that._mediaStarted = true;
      s.Media.open(that._mediaName, that._mediaLength, that._mediaPlayerName);
      s.Media.play(that._mediaName, that._mediaOffset);
    } else {
      s.Media.play(that._mediaName, that._mediaOffset);
    }
  });

  this._player.on('pause', function(evt) {
    console.log("Video paused");
    that._mediaOffset = Math.floor(this.currentTime());
    if (that._mediaOffset === Math.floor(evt.duration)) {
      s.Media.stop(that._mediaName, that._mediaOffset);
      s.Media.close(that._mediaName);
    } else {
      s.Media.stop(that._mediaName, that._mediaOffset);
    }
  });
  this._player.on('loadstart', function(evt) {
    console.log("Video loadstart");
    that._setMediaInfo(this.mediainfo, this.type);
  });
  this._player.on('ended', function(evt) {
    console.log("Video ended");
    that._mediaOffset = Math.floor(this.currentTime());
    s.Media.stop(that._mediaName, that._mediaOffset);
    s.Media.close(that._mediaName);
  });
  this._player.on('waiting', function(evt) {
    console.log("Video waiting...");
    that._mediaOffset = Math.floor(this.currentTime());
    s.Media.stop(that._mediaName, that._mediaOffset);
  });

  // Tracking milestones
  this._player.on('timeupdate', function(evt) {
    s.Media.monitor = function (s, media) {
      if (media.event === "MILESTONE") {
        /* Use to set additional data points during milestone calls */
        s.Media.track(media.name);
        //console.log("Video time update"+media.event);
      }
    }
  });
}


/* On Ready event for BrightCove HTML5 Player */
function OnBrightCoveHTML5Ready(bvplayer) {
  var player = new BrightCovePlayer(bvplayer);
  player.init();
}
/* Page load time Analytics*/
function s_getLoadTime() {
  if (!window.s_loadT) {
    var b = new Date().getTime(), o = window.performance ? performance.timing : 0, a = o ? o.requestStart : window.inHeadTS || 0;
    s_loadT = a ? Math.round((b - a) / 100) : ''
  }
  return s_loadT
}
var i = null;function F() {  return function () {  }}
/*eslint-disable */
/*

 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

*/
function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
(f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.track=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
!0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
!0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
"s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
"OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
(a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
"_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
1),b.s.track(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.9.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.9.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Mb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.D=function(a){try{console.log(a)}catch(b){}};a.Ga=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.tb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.ya&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.ya=0<d?c.substring(d):c}return a.ya};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.tb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.qb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.fb(a,function(){}))};a.fb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.L=[];a.ba=function(c,b,d){if(a.za)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ca)for(a.ca=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ca=0,a.delayReady())});f=1;e=0}else d||a.o("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ca||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.qa();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.za=1;a[d.m].apply(a,d.a);a.za=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ba("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.ga.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Kb,f=a[e].Jb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.q=function(c,
b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ga(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.wb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.ga.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Kb,m=a[e].Jb));q&&(q=","+q+","+a.G.join(",")+",");m&&(m=","+m+",",q&&(q+=",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",
e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],q,e));g="";break;default:a.Ga(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.fa&&(c+="&lrt="+a.fa,a.fa=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.Pb||"undefined"!=""+a.Fb&&"HTML"!=(""+a.Fb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ca=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ca(c),e)?{id:e.substring(0,100),type:g}:0};a.Nb=function(c){for(var b=a.C(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Eb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.ha=1;d||(a.ha=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.ha=1;!e&&d&&(e=a.Ca(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Fa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.xb=function(){var c=a.ha,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Ab()){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");
a.e=a.q("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+
a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.yb=function(){if(!a.Ib){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Ob(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Ib=1}};a.Q={};a.loadModule=function(c,
b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.Za=function(){return d.eb};d.gb=function(b){if(d.eb=b)a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Za,set:d.gb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d))};a.o=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&
d[c]()))return 1;return 0};a.Ab=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Bb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.ua:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&
("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.ua:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.sb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),
b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.Ta=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);
if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.X=!1;a.J=!1;a.ib=function(){a.J=!0;a.H()};a.Y=!1;a.S=!1;a.jb=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.S=!0;a.H()};a.Sa=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&
setTimeout(function(){c()},a.maxDelay),!1):!0};a.W=!1;a.I=!1;a.qa=function(){a.I=!0;a.H()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.X||a.J||(a.Ta(a.ib)?a.J=!0:a.X=!0);if(a.X&&!a.J)return!1;b&&b.isAllowed()&&(a.Y||a.marketingCloudVisitorID||!b.getVisitorValues||(a.Y=!0,a.marketingCloudVisitorID?a.S=!0:b.getVisitorValues(a.jb)),c=!a.Y||a.S||a.marketingCloudVisitorID?!0:!1);a.W||a.I||(a.Sa(a.qa)?a.I=!0:a.W=!0);a.W&&!a.I&&(c=!1);return c};a.l=p;a.r=0;a.callbackWhenReadyToTrack=function(c,b,
d){var f;f={};f.nb=c;f.mb=b;f.kb=d;a.l==p&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100))};a.H=function(){var c;if(a.isReadyToTrack()&&(a.hb(),a.l!=p))for(;0<a.l.length;)c=a.l.shift(),c.mb.apply(c.nb,c.kb)};a.hb=function(){a.r&&(clearInterval(a.r),a.r=0)};a.ab=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.ub=function(){var c=a.cookieRead("s_fid"),b=
"",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+
" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.o("_s");a.ab(c)||(b&&a.R(b),c&&(d={},a.Qa(d,0),a.R(c)),a.Bb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.ub()),a.Eb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(f=a.Util.getQueryParam("adobe_mc_ref",
null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:n.document.referrer),a.Ra=1,a.referrer=a.sb(a.referrer),a.o("_g")),a.xb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.yb(),g+=a.wb(),a.cb(e,g),a.o("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=
a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.ta=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ta.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback")};a.Wa=function(c){a.oa(a.ta,c)};a.ra=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ra.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPostTrackCallback")};
a.Va=function(c){a.oa(a.ra,c)};a.oa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.D(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<
a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.cb=function(c,b){var d=a.Xa()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.pa()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.Wa(d);a.Ua(d);a.T()};a.Xa=function(){var c=a.Ya();return"http"+
(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.pa()?"10":"1")+"/JS-"+a.version+(a.Hb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.pa=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.Ya=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.$a()+"."+c+".2o7.net");return b};a.$a=function(){var c=a.visitorNamespace;
c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Pa=/{(%?)(.*?)(%?)}/;a.Lb=RegExp(a.Pa.source,"g");a.rb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Lb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Pa),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.vb());d.c=d.c.replace(g,a.escape(k))}}};a.vb=function(){var c=
new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.la={};a.doPostbacks=function(c){if("object"==typeof c)if(a.rb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&
a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.la[d.id]=new Image,a.la[d.id].alt="",a.la[d.id].src=d.c)}};a.Ua=function(c){a.i||a.zb();a.i.push(c);a.ea=a.B();a.Na()};a.zb=function(){a.i=a.Cb();a.i||(a.i=[])};a.Cb=function(){var c,b;if(a.ka()){try{(b=
k.localStorage.getItem(a.ia()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ka=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Da=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;return c};a.T=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.na(),a.p))return;a.Ea=p;if(a.ja)a.ea>a.O&&a.La(a.i),a.ma(500);else{var c=a.lb();if(0<c)a.ma(c);else if(c=a.Aa())a.p=1,a.Db(c),a.Gb(c)}};a.ma=function(c){a.Ea||(c||(c=0),a.Ea=setTimeout(a.T,c))};a.lb=function(){var c;
if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Ja;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Aa=function(){if(0<a.i.length)return a.i.shift()};a.Db=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b)}};a.bb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.V=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.V=!0,a.U=function(a){return JSON.parse(a)}):
k.$&&k.$.parseJSON?(a.U=function(a){return k.$.parseJSON(a)},a.V=!0):a.U=function(){return null};a.Gb=function(c){var b,d,f;a.bb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.V?b.va=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&
(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=p}));b.Ka=Date.now();b.xa=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.na=function(){b.Ka&&(a.fa=Date.now()-b.Ka);a.Va(c);b.xa();a.pb();a.Z();a.p=0;a.T();if(b.va){b.va=!1;try{a.doPostbacks(a.U(b.responseText))}catch(d){}}};
b.onabort=b.onerror=b.Ba=function(){b.xa();(a.trackOffline||a.ja)&&a.p&&a.i.unshift(a.ob);a.p=0;a.ea>a.O&&a.La(a.i);a.Z();a.ma(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.na():b.Ba())};a.Ja=a.B();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ha)try{f.removeChild(a.Ha)}catch(g){}f.firstChild?f.insertBefore(b,
f.firstChild):f.appendChild(b);a.Ha=a.A}b.F=setTimeout(function(){b.F&&(b.complete?b.na():(a.trackOffline&&b.abort&&b.abort(),b.Ba()))},5E3);a.ob=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.aa=setTimeout(a.Z,a.forcedLinkTrackingTimeout)};a.pb=function(){if(a.ka()&&!(a.Ia>a.O))try{k.localStorage.removeItem(a.ia()),a.Ia=a.B()}catch(c){}};a.La=function(c){if(a.ka()){a.Na();try{k.localStorage.setItem(a.ia(),
k.JSON.stringify(c)),a.O=a.B()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Aa()}};a.forceOffline=function(){a.ja=!0};a.forceOnline=function(){a.ja=!1};a.ia=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.B=function(){return(new Date).getTime()};a.Fa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:
!1};a.setTagContainer=function(c){var b,d,f;a.Hb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=
0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);
0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.ga.slice(0);a.ua="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Ja=0;a.ea=0;a.O=0;a.Ia=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Oa=!0}}catch(x){}a.Z=function(){a.aa&&(k.clearTimeout(a.aa),a.aa=p);a.k&&a.K&&a.k.dispatchEvent(a.K);a.v&&("function"==typeof a.v?a.v():
a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.K=a.v=0};a.Ma=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.wa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.wa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.da&&(clearTimeout(a.da),a.da=0);a.da=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Da();a.track();if(f<a.Da()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Fa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.wa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Ma,30)};a.qb();a.Qb||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Ma(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();

/*eslint-enable */
