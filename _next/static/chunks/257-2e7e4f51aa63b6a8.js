"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{968:(e,t,r)=>{r.d(t,{b:()=>l});var o=r(2115),n=r(3655),i=r(5155),a=o.forwardRef((e,t)=>(0,i.jsx)(n.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=a},2085:(e,t,r)=>{r.d(t,{F:()=>a});var o=r(2596);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=o.$,a=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:l}=t,s=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],o=null==l?void 0:l[e];if(null===t)return null;let i=n(t)||n(o);return a[e][i]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return i(e,s,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...c}[t]):({...l,...c})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},2596:(e,t,r)=>{r.d(t,{$:()=>o});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},3536:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:t,...a,width:n,height:n,stroke:r,strokeWidth:s?24*Number(l)/Number(n):l,className:i("lucide",c),...p},[...u.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=((e,t)=>{let r=(0,o.forwardRef)((r,a)=>{let{className:s,...c}=r;return(0,o.createElement)(l,{ref:a,iconNode:t,className:i("lucide-".concat(n(e)),s),...c})});return r.displayName="".concat(e),r})("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},3655:(e,t,r)=>{r.d(t,{sG:()=>a});var o=r(2115);r(7650);var n=r(9708),i=r(5155),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=o.forwardRef((e,r)=>{let{asChild:o,...a}=e,l=o?n.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})},6101:(e,t,r)=>{r.d(t,{s:()=>a,t:()=>i});var o=r(2115);function n(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let r=!1,o=e.map(e=>{let o=n(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():n(e[t],null)}}}}function a(...e){return o.useCallback(i(...e),e)}},6693:(e,t,r)=>{r.d(t,{C1:()=>C,bL:()=>S});var o=r(2115),n=r(6101),i=r(5155);function a(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e?.(o),!1===r||!o.defaultPrevented)return t?.(o)}}function l(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var s=globalThis?.document?o.useLayoutEffect:()=>{},c=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[n,i]=o.useState(),a=o.useRef({}),l=o.useRef(e),c=o.useRef("none"),[u,p]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let o=r[e][t];return null!=o?o:e},t));return o.useEffect(()=>{let e=d(a.current);c.current="mounted"===u?e:"none"},[u]),s(()=>{let t=a.current,r=l.current;if(r!==e){let o=c.current,n=d(t);e?p("MOUNT"):"none"===n||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):r&&o!==n?p("ANIMATION_OUT"):p("UNMOUNT"),l.current=e}},[e,p]),s(()=>{if(n){var e;let t;let r=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=d(a.current).includes(e.animationName);if(e.target===n&&o&&(p("ANIMATION_END"),!l.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},i=e=>{e.target===n&&(c.current=d(a.current))};return n.addEventListener("animationstart",i),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{r.clearTimeout(t),n.removeEventListener("animationstart",i),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof r?r({present:i.isPresent}):o.Children.only(r),l=(0,n.s)(i.ref,function(e){var t,r;let o=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(n=(o=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in o&&o.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||i.isPresent?o.cloneElement(a,{ref:l}):null};function d(e){return(null==e?void 0:e.animationName)||"none"}c.displayName="Presence";var u=r(3655),p="Checkbox",[f,m]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let a=o.createContext(n),l=r.length;r=[...r,n];let s=t=>{let{scope:r,children:n,...s}=t,c=r?.[e]?.[l]||a,d=o.useMemo(()=>s,Object.values(s));return(0,i.jsx)(c.Provider,{value:d,children:n})};return s.displayName=t+"Provider",[s,function(r,i){let s=i?.[e]?.[l]||a,c=o.useContext(s);if(c)return c;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:o})=>{let n=r(e)[`__scope${o}`];return{...t,...n}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(p),[v,g]=f(p),b=o.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:s,checked:c,defaultChecked:d,required:p,disabled:f,value:m="on",onCheckedChange:g,form:b,...h}=e,[y,S]=o.useState(null),C=(0,n.s)(t,e=>S(e)),E=o.useRef(!1),M=!y||b||!!y.closest("form"),[P=!1,z]=function({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,i]=function({defaultProp:e,onChange:t}){let r=o.useState(e),[n]=r,i=o.useRef(n),a=l(t);return o.useEffect(()=>{i.current!==n&&(a(n),i.current=n)},[n,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,s=a?e:n,c=l(r);return[s,o.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else i(t)},[a,e,i,c])]}({prop:c,defaultProp:d,onChange:g}),N=o.useRef(P);return o.useEffect(()=>{let e=null==y?void 0:y.form;if(e){let t=()=>z(N.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[y,z]),(0,i.jsxs)(v,{scope:r,state:P,disabled:f,children:[(0,i.jsx)(u.sG.button,{type:"button",role:"checkbox","aria-checked":w(P)?"mixed":P,"aria-required":p,"data-state":k(P),"data-disabled":f?"":void 0,disabled:f,value:m,...h,ref:C,onKeyDown:a(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:a(e.onClick,e=>{z(e=>!!w(e)||!e),M&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})}),M&&(0,i.jsx)(x,{control:y,bubbles:!E.current,name:s,value:m,checked:P,required:p,disabled:f,form:b,style:{transform:"translateX(-100%)"},defaultChecked:!w(d)&&d})]})});b.displayName=p;var h="CheckboxIndicator",y=o.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:o,...n}=e,a=g(h,r);return(0,i.jsx)(c,{present:o||w(a.state)||!0===a.state,children:(0,i.jsx)(u.sG.span,{"data-state":k(a.state),"data-disabled":a.disabled?"":void 0,...n,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=h;var x=e=>{let{control:t,checked:r,bubbles:n=!0,defaultChecked:a,...l}=e,c=o.useRef(null),d=function(e){let t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r),u=function(e){let[t,r]=o.useState(void 0);return s(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let o,n;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,n=t.blockSize}else o=e.offsetWidth,n=e.offsetHeight;r({width:o,height:n})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(t);o.useEffect(()=>{let e=c.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==r&&t){let o=new Event("click",{bubbles:n});e.indeterminate=w(r),t.call(e,!w(r)&&r),e.dispatchEvent(o)}},[d,r,n]);let p=o.useRef(!w(r)&&r);return(0,i.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=a?a:p.current,...l,tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return"indeterminate"===e}function k(e){return w(e)?"indeterminate":e?"checked":"unchecked"}var S=b,C=y},7775:(e,t,r)=>{r.d(t,{m:()=>n});var o=r(3264);class n extends o.eaF{constructor(){let e=n.SkyShader;super(new o.iNn(1,1,1),new o.BKk({name:e.name,uniforms:o.LlO.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:o.hsX,depthWrite:!1})),this.isSky=!0}}n.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new o.Pq0},up:{value:new o.Pq0(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}},8813:(e,t,r)=>{r.d(t,{E:()=>i});var o=r(3264),n=r(7431);class i extends o.eaF{constructor(e,t={}){super(e),this.isWater=!0;let r=this,i=void 0!==t.textureWidth?t.textureWidth:512,a=void 0!==t.textureHeight?t.textureHeight:512,l=void 0!==t.clipBias?t.clipBias:0,s=void 0!==t.alpha?t.alpha:1,c=void 0!==t.time?t.time:0,d=void 0!==t.waterNormals?t.waterNormals:null,u=void 0!==t.sunDirection?t.sunDirection:new o.Pq0(.70707,.70707,0),p=new o.Q1f(void 0!==t.sunColor?t.sunColor:0xffffff),f=new o.Q1f(void 0!==t.waterColor?t.waterColor:8355711),m=void 0!==t.eye?t.eye:new o.Pq0(0,0,0),v=void 0!==t.distortionScale?t.distortionScale:20,g=void 0!==t.side?t.side:o.hB5,b=void 0!==t.fog&&t.fog,h=new o.Zcv,y=new o.Pq0,x=new o.Pq0,w=new o.Pq0,k=new o.kn4,S=new o.Pq0(0,0,-1),C=new o.IUQ,E=new o.Pq0,M=new o.Pq0,P=new o.IUQ,z=new o.kn4,N=new o.ubm,R=new o.nWS(i,a),_={name:"MirrorShader",uniforms:o.LlO.merge([n.fCn.fog,n.fCn.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new o.kn4},sunColor:{value:new o.Q1f(8355711)},sunDirection:{value:new o.Pq0(.70707,.70707,0)},eye:{value:new o.Pq0},waterColor:{value:new o.Q1f(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},j=new o.BKk({name:_.name,uniforms:o.LlO.clone(_.uniforms),vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,lights:!0,side:g,fog:b});j.uniforms.mirrorSampler.value=R.texture,j.uniforms.textureMatrix.value=z,j.uniforms.alpha.value=s,j.uniforms.time.value=c,j.uniforms.normalSampler.value=d,j.uniforms.sunColor.value=p,j.uniforms.waterColor.value=f,j.uniforms.sunDirection.value=u,j.uniforms.distortionScale.value=v,j.uniforms.eye.value=m,r.material=j,r.onBeforeRender=function(e,t,o){if(x.setFromMatrixPosition(r.matrixWorld),w.setFromMatrixPosition(o.matrixWorld),k.extractRotation(r.matrixWorld),y.set(0,0,1),y.applyMatrix4(k),E.subVectors(x,w),E.dot(y)>0)return;E.reflect(y).negate(),E.add(x),k.extractRotation(o.matrixWorld),S.set(0,0,-1),S.applyMatrix4(k),S.add(w),M.subVectors(x,S),M.reflect(y).negate(),M.add(x),N.position.copy(E),N.up.set(0,1,0),N.up.applyMatrix4(k),N.up.reflect(y),N.lookAt(M),N.far=o.far,N.updateMatrixWorld(),N.projectionMatrix.copy(o.projectionMatrix),z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),z.multiply(N.projectionMatrix),z.multiply(N.matrixWorldInverse),h.setFromNormalAndCoplanarPoint(y,x),h.applyMatrix4(N.matrixWorldInverse),C.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let n=N.projectionMatrix;P.x=(Math.sign(C.x)+n.elements[8])/n.elements[0],P.y=(Math.sign(C.y)+n.elements[9])/n.elements[5],P.z=-1,P.w=(1+n.elements[10])/n.elements[14],C.multiplyScalar(2/C.dot(P)),n.elements[2]=C.x,n.elements[6]=C.y,n.elements[10]=C.z+1-l,n.elements[14]=C.w,m.setFromMatrixPosition(o.matrixWorld);let i=e.getRenderTarget(),a=e.xr.enabled,s=e.shadowMap.autoUpdate;r.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(R),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),e.render(t,N),r.visible=!0,e.xr.enabled=a,e.shadowMap.autoUpdate=s,e.setRenderTarget(i);let c=o.viewport;void 0!==c&&e.state.viewport(c)}}}},9688:(e,t,r)=>{r.d(t,{QP:()=>Q});let o=e=>{let t=l(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||a(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),i=o?n(e.slice(1),o):void 0;if(i)return i;if(0===t.validators.length)return;let a=e.join("-");return t.validators.find(({validator:e})=>e(a))?.classGroupId},i=/^\[(.+)\]$/,a=e=>{if(i.test(e)){let t=i.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},l=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),r).forEach(([e,r])=>{s(r,o,e,t)}),o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:c(t,e)).classGroupId=r;return}if("function"==typeof e){if(d(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,c(t,e),r,o)})})},c=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},d=e=>e.isThemeGetter,u=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,i)=>{r.set(n,i),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},f=e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],i=t.length,a=e=>{let r;let a=[],l=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===l){if(d===n&&(o||e.slice(c,c+i)===t)){a.push(e.slice(s,c)),s=c+i;continue}if("/"===d){r=c;continue}}"["===d?l++:"]"===d&&l--}let c=0===a.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:a,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:r&&r>s?r-s:void 0}};return r?e=>r({className:e,parseClassName:a}):a},m=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},v=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,b=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,i=[],a=e.trim().split(g),l="";for(let e=a.length-1;e>=0;e-=1){let t=a[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=r(t),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){l=t+(l.length>0?" "+l:l);continue}p=!1}let v=m(s).join(":"),g=c?v+"!":v,b=g+f;if(i.includes(b))continue;i.push(b);let h=n(f,p);for(let e=0;e<h.length;++e){let t=h[e];i.push(g+t)}l=t+(l.length>0?" "+l:l)}return l};function h(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=y(e))&&(o&&(o+=" "),o+=t);return o}let y=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=y(e[o]))&&(r&&(r+=" "),r+=t);return r},x=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,S=new Set(["px","full","screen"]),C=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,E=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,M=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,z=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>_(e)||S.has(e)||k.test(e),R=e=>$(e,"length",q),_=e=>!!e&&!Number.isNaN(Number(e)),j=e=>$(e,"number",_),D=e=>!!e&&Number.isInteger(Number(e)),T=e=>e.endsWith("%")&&_(e.slice(0,-1)),O=e=>w.test(e),A=e=>C.test(e),L=new Set(["length","size","percentage"]),W=e=>$(e,L,V),I=e=>$(e,"position",V),B=new Set(["image","url"]),F=e=>$(e,B,H),G=e=>$(e,"",K),U=()=>!0,$=(e,t,r)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},q=e=>E.test(e)&&!M.test(e),V=()=>!1,K=e=>P.test(e),H=e=>z.test(e);Symbol.toStringTag;let Q=function(e,...t){let r,o,n;let i=function(l){return o=(r=v(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,i=a,a(l)};function a(e){let t=o(e);if(t)return t;let i=b(e,r);return n(e,i),i}return function(){return i(h.apply(null,arguments))}}(()=>{let e=x("colors"),t=x("spacing"),r=x("blur"),o=x("brightness"),n=x("borderColor"),i=x("borderRadius"),a=x("borderSpacing"),l=x("borderWidth"),s=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),m=x("gradientColorStopPositions"),v=x("inset"),g=x("margin"),b=x("opacity"),h=x("padding"),y=x("saturate"),w=x("scale"),k=x("sepia"),S=x("skew"),C=x("space"),E=x("translate"),M=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",O,t],L=()=>[O,t],B=()=>["",N,R],$=()=>["auto",_,O],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",O],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[_,O];return{cacheSize:500,separator:":",theme:{colors:[U],spacing:[N,R],blur:["none","",A,O],brightness:X(),borderColor:[e],borderRadius:["none","","full",A,O],borderSpacing:L(),borderWidth:B(),contrast:X(),grayscale:Q(),hueRotate:X(),invert:Q(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[T,R],inset:z(),margin:z(),opacity:X(),padding:L(),saturate:X(),scale:X(),sepia:Q(),skew:X(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),O]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",D,O]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",D,O]}],"grid-cols":[{"grid-cols":[U]}],"col-start-end":[{col:["auto",{span:["full",D,O]},O]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[U]}],"row-start-end":[{row:["auto",{span:[D,O]},O]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",A,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[U]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",_,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",N,R]}],"underline-offset":[{"underline-offset":["auto",N,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),I]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",W]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},F]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[N,O]}],"outline-w":[{outline:[N,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[N,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,G]}],"shadow-color":[{shadow:[U]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",A,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[D,O]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[N,R,j]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})},9708:(e,t,r)=>{r.d(t,{DX:()=>a});var o=r(2115),n=r(6101),i=r(5155),a=o.forwardRef((e,t)=>{let{children:r,...n}=e,a=o.Children.toArray(r),s=a.find(c);if(s){let e=s.props.children,r=a.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...n,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,i.jsx)(l,{...n,ref:t,children:r})});a.displayName="Slot";var l=o.forwardRef((e,t)=>{let{children:r,...i}=e;if(o.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return o.cloneElement(r,{...function(e,t){let r={...t};for(let o in t){let n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...e)=>{i(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...i}:"className"===o&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,n.t)(t,e):e})}return o.Children.count(r)>1?o.Children.only(null):null});l.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===s}}}]);