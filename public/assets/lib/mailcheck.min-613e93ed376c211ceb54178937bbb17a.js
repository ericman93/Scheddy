var Mailcheck={domainThreshold:4,topLevelThreshold:3,defaultDomains:"yahoo.com google.com hotmail.com gmail.com gmail.co.il me.com aol.com mac.com live.com comcast.net googlemail.com msn.com hotmail.co.uk yahoo.co.uk facebook.com verizon.net sbcglobal.net att.net gmx.com mail.com outlook.com icloud.com".split(" "),defaultTopLevelDomains:"co.jp co.uk com net org info edu gov mil ca co.il".split(" "),run:function(e){e.domains=e.domains||Mailcheck.defaultDomains,e.topLevelDomains=e.topLevelDomains||Mailcheck.defaultTopLevelDomains,e.distanceFunction=e.distanceFunction||Mailcheck.sift3Distance;var n=function(e){return e},o=e.suggested||n,n=e.empty||n;return(e=Mailcheck.suggest(Mailcheck.encodeEmail(e.email),e.domains,e.topLevelDomains,e.distanceFunction))?o(e):n()},suggest:function(e,n,o,t){if(e=e.toLowerCase(),e=this.splitEmail(e),n=this.findClosestDomain(e.domain,n,t,this.domainThreshold)){if(n!=e.domain)return{address:e.address,domain:n,full:e.address+"@"+n}}else if(o=this.findClosestDomain(e.topLevelDomain,o,t,this.topLevelThreshold),e.domain&&o&&o!=e.topLevelDomain)return t=e.domain,n=t.substring(0,t.lastIndexOf(e.topLevelDomain))+o,{address:e.address,domain:n,full:e.address+"@"+n};return!1},findClosestDomain:function(e,n,o,t){t=t||this.topLevelThreshold;var i,l=99,a=null;if(!e||!n)return!1;o||(o=this.sift3Distance);for(var r=0;r<n.length;r++){if(e===n[r])return e;i=o(e,n[r]),l>i&&(l=i,a=n[r])}return t>=l&&null!==a?a:!1},sift3Distance:function(e,n){if(null==e||0===e.length)return null==n||0===n.length?0:n.length;if(null==n||0===n.length)return e.length;for(var o=0,t=0,i=0,l=0;o+t<e.length&&o+i<n.length;){if(e.charAt(o+t)==n.charAt(o+i))l++;else for(var a=i=t=0;5>a;a++){if(o+a<e.length&&e.charAt(o+a)==n.charAt(o)){t=a;break}if(o+a<n.length&&e.charAt(o)==n.charAt(o+a)){i=a;break}}o++}return(e.length+n.length)/2-l},splitEmail:function(e){if(e=e.trim().split("@"),2>e.length)return!1;for(var n=0;n<e.length;n++)if(""===e[n])return!1;var o=e.pop(),t=o.split("."),i="";if(0==t.length)return!1;if(1==t.length)i=t[0];else{for(n=1;n<t.length;n++)i+=t[n]+".";2<=t.length&&(i=i.substring(0,i.length-1))}return{topLevelDomain:i,domain:o,address:e.join("@")}},encodeEmail:function(e){return e=encodeURI(e),e=e.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"undefined"!=typeof window&&window.jQuery&&function(e){e.fn.mailcheck=function(e){var n=this;if(e.suggested){var o=e.suggested;e.suggested=function(e){o(n,e)}}if(e.empty){var t=e.empty;e.empty=function(){t.call(null,n)}}e.email=this.val(),Mailcheck.run(e)}}(jQuery);