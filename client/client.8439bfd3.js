function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:m(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:N(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,s,r=!1){L(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,s){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return k(e,t,n,w)}function C(e,t,n){return k(e,t,n,y)}function H(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function j(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function D(e){const t=j(e,"HTML_TAG_START",0),n=j(e,"HTML_TAG_END",t);if(t===n)return new K;L(e);const s=e.splice(t,n+1);$(s[0]),$(s[s.length-1]);const r=s.slice(1,s.length-1);for(const t of r)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(r)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function B(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),$(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function J(e){h=e}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function W(e){V().$$.on_mount.push(e)}function F(e){V().$$.after_update.push(e)}function Y(e){V().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function se(e){Z.push(e)}let re=!1;const oe=new Set;function ie(){if(!re){re=!0;do{for(let e=0;e<X.length;e+=1){const t=X[e];J(t),ae(t.$$)}for(J(null),X.length=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,re=!1,oe.clear()}}function ae(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function de(){le.r||r(le.c),le=le.p}function fe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,s){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function pe(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||se((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(se)}function $e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,i,a,c,l,u=[-1]){const d=h;J(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&_e(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ie()}J(d)}class ye{$destroy(){$e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function xe(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!Ee.length;for(const e of r)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Se={};var Te={owner:"Dealsafee",repo:"ds-uptime",sites:[{name:"Dealsafe",url:"https://www.dealsafe.in/"}],"status-website":{baseUrl:"/ds-uptime",name:"Upptime"},path:"https://Dealsafee.github.io/ds-uptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ae(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ne(t){let n,s,r,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Te["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}(),i=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,s,r=Te["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(e){n=O(e,"DIV",{});var t=P(n);s=H(t,r),t.forEach($)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=P(n);s=O(t,"A",{href:!0,class:!0});var a=P(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach($),t.forEach($),this.h()},h(){N(s,"href",Te["status-website"].logoHref||Te.path),N(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&$(n),o&&o.d(),i&&i.d()}}}function Ie(e){let t,n,s,r,o,i,a=e[1].title+"";return{c(){t=w("li"),n=w("a"),s=E(a),i=x(),this.h()},l(e){t=O(e,"LI",{});var r=P(t);n=O(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=H(o,a),o.forEach($),i=U(r),r.forEach($),this.h()},h(){N(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),N(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,i)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(e){e&&$(t)}}}function Pe(t){let n,s,r,o,i,a=Te["status-website"]&&Te["status-website"].logoUrl&&Ne(),c=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ie(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ae(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ie(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),l=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,s,r,o=Te.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(e){n=O(e,"LI",{});var t=P(n);s=O(t,"A",{href:!0,class:!0});var i=P(s);r=H(i,o),i.forEach($),t.forEach($),this.h()},h(){N(s,"href",`https://github.com/${Te.owner}/${Te.repo}`),N(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("nav"),s=w("div"),a&&a.c(),r=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=P(n);s=O(t,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach($),u.forEach($),t.forEach($),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&a.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&c.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Le(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Re extends ye{constructor(e){super(),we(this,e,Le,Pe,i,{segment:0})}}var ke={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function He(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=ke[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Oe(Ce(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=He(Oe(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ce(r[8])+'" alt="'+Ce(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ce(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+He(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ce(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const s=e.slice();return s[3]=t[n],s}function je(e,t,n){const s=e.slice();return s[3]=t[n],s}function De(e,t,n){const s=e.slice();return s[8]=t[n],s}function Me(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function qe(t){let n,s;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),P(n).forEach($),this.h()},h(){c(n.src,s=t[8].src)||N(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Be(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function ze(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ke(t){let n,s,r,o,i,a,c,u,d,f,h,p,m,b,y,E,T,A,I=He(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",L=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,s=S(),this.h()},l(e){n=D(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}();let R=((Te["status-website"]||{}).themeUrl?Ge:Me)(t),k=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(De(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=De(e,n,o);s[o]?s[o].p(i,r):(s[o]=qe(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),C=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Be(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=je(e,n,o);s[o]?s[o].p(i,r):(s[o]=Be(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),H=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ue(e,n,o);s[o]?s[o].p(i,r):(s[o]=ze(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),j=Te["status-website"].css&&function(t){let n,s,r=`<style>${Te["status-website"].css}</style>`;return{c(){n=new K,s=S(),this.h()},l(e){n=D(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}(),M=Te["status-website"].js&&function(t){let n,s,r=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new K,s=S(),this.h()},l(e){n=D(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}(),G=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,s=S(),this.h()},l(e){n=D(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}();p=new Re({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(q,t,t[1],null);return{c(){L&&L.c(),n=S(),R.c(),s=w("link"),r=w("link"),o=w("link"),k&&k.c(),i=S(),C&&C.c(),a=S(),H&&H.c(),c=S(),j&&j.c(),u=S(),M&&M.c(),d=S(),f=x(),G&&G.c(),h=x(),ge(p.$$.fragment),m=x(),b=w("main"),B&&B.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(t),n=S(),R.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),C&&C.l(t),a=S(),H&&H.l(t),c=S(),j&&j.l(t),u=S(),M&&M.l(t),d=S(),t.forEach($),f=U(e),G&&G.l(e),h=U(e),be(p.$$.fragment,e),m=U(e),b=O(e,"MAIN",{class:!0});var l=P(b);B&&B.l(l),l.forEach($),y=U(e),E=O(e,"FOOTER",{class:!0});var g=P(E);T=O(g,"P",{}),P(T).forEach($),g.forEach($),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Te.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),v(e,f,t),G&&G.m(e,t),v(e,h,t),ve(p,e,t),v(e,m,t),v(e,b,t),B&&B.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=I,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&L.p(e,t),R.p(e,t),(Te["status-website"]||{}).scripts&&k.p(e,t),(Te["status-website"]||{}).links&&C.p(e,t),(Te["status-website"]||{}).metaTags&&H.p(e,t),Te["status-website"].css&&j.p(e,t),Te["status-website"].js&&M.p(e,t),(Te["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(B,q,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(fe(p.$$.fragment,e),fe(B,e),A=!0)},o(e){he(p.$$.fragment,e),he(B,e),A=!1},d(e){L&&L.d(e),$(n),R.d(e),$(s),$(r),$(o),k&&k.d(e),$(i),C&&C.d(e),$(a),H&&H.d(e),$(c),j&&j.d(e),$(u),M&&M.d(e),$(d),e&&$(f),G&&G.d(e),e&&$(h),$e(p,e),e&&$(m),e&&$(b),B&&B.d(e),e&&$(y),e&&$(E)}}}function Je(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ve extends ye{constructor(e){super(),we(this,e,Je,Ke,i,{segment:0})}}function We(e){let t,n,s=e[1].stack+"";return{c(){t=w("pre"),n=E(s)},l(e){t=O(e,"PRE",{});var r=P(t);n=H(r,s),r.forEach($)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&M(n,s)},d(e){e&&$(t)}}}function Fe(t){let n,s,r,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&We(t);return{c(){s=x(),r=w("h1"),o=E(t[0]),i=x(),a=w("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach($),s=U(e),r=O(e,"H1",{class:!0});var n=P(r);o=H(n,t[0]),n.forEach($),i=U(e),a=O(e,"P",{class:!0});var h=P(a);c=H(h,d),h.forEach($),l=U(e),f&&f.l(e),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),f&&f.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&d!==(d=e[1].message+"")&&M(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=We(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&$(s),e&&$(r),e&&$(i),e&&$(a),e&&$(l),f&&f.d(e),e&&$(u)}}}function Ye(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Xe extends ye{constructor(e){super(),we(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),s=S()},l(e){n&&be(n.$$.fragment,e),s=S()},m(e,t){n&&ve(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?pe(o,[me(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{$e(e,1)})),de()}i?(n=new i(a()),ge(n.$$.fragment),fe(n.$$.fragment,1),ve(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&fe(n.$$.fragment,e),r=!0)},o(e){n&&he(n.$$.fragment,e),r=!1},d(e){e&&$(s),n&&$e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){ve(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){$e(t,e)}}}function et(e){let t,n,s,r;const o=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=S()},l(e){n.l(e),s=S()},m(e,n){i[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(ue(),he(i[c],1,1,(()=>{i[c]=null})),de(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),fe(n,1),n.m(s.parentNode,s))},i(e){r||(fe(n),r=!0)},o(e){he(n),r=!1},d(e){i[t].d(e),e&&$(s)}}}function tt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ve({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),s=!0},p(e,[t]){const s=12&t?pe(r,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(fe(n.$$.fragment,e),s=!0)},o(e){he(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function nt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return F(l),u=Se,d=s,V().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class st extends ye{constructor(e){super(),we(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.7981b9e5.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.0c40b3ad.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].cf3d6258.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].6201a9b6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.39900fff.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const s=it[n],r=s.pattern.exec(t);if(r){const n=gt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ft.pushState({id:ut},"",r.href)}}function $t(){return{x:pageXOffset,y:pageYOffset}}function _t(e){if(ht[ut]=$t(),e.state){const t=bt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function wt(e,t,n,s){return ct(this,void 0,void 0,(function*(){const r=!!t;if(r)ut=t;else{const e=$t();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Et,xt=null;function St(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)xt&&e===xt.href||(xt={href:e,promise:qt(t)}),xt.promise}(t.href)}function Tt(e){clearTimeout(Et),Et=setTimeout((()=>{St(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const s=wt(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),s}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Pt,Lt,Rt=!1,kt=[],Ot="{}";const Ct={page:function(e){const t=xe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:xe(null),session:xe(Nt&&Nt.session)};let Ht,Ut,jt;function Dt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return ct(this,void 0,void 0,(function*(){It&&Ct.preloading.set(!0);const t=function(e){return xt&&xt.href===e.href?xt.promise:qt(e)}(e),n=Pt={},s=yield t,{redirect:r}=s;if(n===Pt)if(r)yield At(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Gt(n,t,Dt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),It?It.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield Lt},t.notify=Ct.page.notify,It=new st({target:jt,props:t,hydrate:!0})),kt=e,Ot=JSON.stringify(n.query),Rt=!0,Ut=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Lt){const e=()=>({});Lt=Nt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ht)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const d=s[a];if(function(e,t,n,s){if(s!==Ot)return!0;const r=kt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:d};const f=c++;let h;if(Ut||u||!kt[a]||kt[a].part!==t.i){u=!1;const{default:s,preload:r}=yield ot[t.i].js();let o;o=Rt||!Nt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ht):{}:Nt.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:t.i}}else h=kt[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Bt,zt,Kt;Ct.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ht=e,!Rt)return;Ut=!0;const t=bt(new URL(location.href)),n=Pt={},{redirect:s,props:r,branch:o}=yield qt(t);n===Pt&&(s?yield At(s.location,{replaceState:!0}):yield Gt(o,r,Dt(r,t.page)))})))),Bt={target:document.querySelector("#sapper")},zt=Bt.target,jt=zt,Kt=Nt.baseUrl,pt=Kt,mt=Mt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",_t),addEventListener("touchstart",St),addEventListener("mousemove",Tt),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Nt;Lt||(Lt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Lt},level1:{props:{status:o,error:i},component:Xe},segments:r},c=gt(n);Gt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=bt(new URL(location.href));if(n)return wt(n,dt,!0,e)}));export{$e as A,T as B,r as C,Q as D,D as E,c as F,d as G,K as H,z as I,He as J,y as K,C as L,At as M,G as N,A as O,t as P,I as Q,pe as R,ye as S,F as T,Y as U,u as V,me as W,se as X,B as Y,P as a,H as b,O as c,$ as d,w as e,N as f,v as g,g as h,we as i,x as j,U as k,ue as l,he as m,e as n,de as o,fe as p,W as q,Te as r,i as s,E as t,M as u,S as v,_ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';