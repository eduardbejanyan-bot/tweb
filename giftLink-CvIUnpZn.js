//# allFunctionsCalledOnLoad
import{t as e}from"./themeController-CaMJZuO8.js";import{n as t}from"./rootScope-BmLE5jq2.js";import{a as n}from"./langPack-DauOLe6Y.js";import{C as r,L as i,M as a,_ as o,g as s,j as c,p as l,s as u,y as d}from"./solid-B0Du5GQu.js";import{i as f,o as p}from"./appWindow-DIkXTT2w.js";import{n as m}from"./bindManagersToAccount-JVm7nXNI.js";import{t as h}from"./middleware-xMKGRz46.js";import{_ as g,c as _,f as v,g as y,o as b,p as x,u as S}from"./web-FH1QzTRi.js";import{n as C}from"./hotReloadGuardProvider-zg2p5tIa.js";import{t as w}from"./liteMode-C0thDOdK.js";import{t as T}from"./classNames-HGN7N_ne.js";import{n as E,t as D}from"./animationIntersector-Bn93RLFP.js";import{t as O}from"./listenerSetter-CQfoiUkF.js";import{i as k}from"./clickEvent-BSZZBdkr.js";import{i as A,n as j}from"./indexTsx-BLKM0EPg.js";import{D as M,w as N}from"./sticker-DItduC-Z.js";import{I as P,L as F}from"./index-xVEnUQDR.js";import{J as ee,ft as I,t as L}from"./confirmationPopup-BGPVO2ZD.js";import{U as R}from"./canPollPeerStories-_o_DnrJh.js";import{t as te}from"./subscribeOn-Bb8YNCC7.js";import{M as z,O as B}from"./openEditors-Cqox_jE4.js";import{t as V}from"./mediaHeader-2o2JBi0X.js";import{t as H}from"./anchorCallback-B1hVp5wq.js";import{r as U}from"./toast-BfMpgNzr.js";import{t as ne}from"./useObserveResize-D3Wk2ByR.js";import{t as W}from"./fetchArrayBuffer-rw5DgAex.js";import{n as G}from"./shareUrl-CBvXGbMH.js";import{t as re}from"./inviteLink-BHXapNOz.js";import{t as K}from"./toggleDisability-BeOelQXX.js";import{i as ie,t as ae}from"./table-C6tp0owb.js";function oe(e){let t=Math.round((e||0)/30);return t>=12?`Gift12`:t>=6?`Gift6`:`Gift3`}function se(){let[e,t]=r(!1);return[e,e=>{let n=new D({onPlay:()=>t(!0),onPause:()=>t(!1)});E.addAnimation({...e,animation:n}),a(()=>E.removeAnimationByPlayer(n))}]}function q(e){let t=new DataView(e);if(e.byteLength<16||t.getUint32(0,!0)!==1213416781)throw Error(`not a mesh`);let n=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);if(i&-4)throw Error(`unknown mesh flags`);let a=!!(i&2);if(16+n*32+r*(a?4:2)!==e.byteLength)throw Error(`corrupt mesh`);let o=16,s=(t,n)=>{let r=new Uint8Array(e,o,t*n);if(o+=t*n,!(i&1))return r.slice().buffer;let a=new Uint8Array(t*n);for(let e=0;e<n;e++)for(let i=0;i<t;i++)a[i*n+e]=r[e*t+i];return a.buffer},c=new Float32Array(s(n*3,4)),l=new Float32Array(s(n*2,4)),u=new Float32Array(s(n*3,4)),d=a?new Uint32Array(s(r,4)):new Uint16Array(s(r,2)),f=0;for(let e=0;e<r;e++){let t=d[e];if(t>f)throw Error(`corrupt mesh`);d[e]=f-t,t===0&&f++}if(f!==n)throw Error(`corrupt mesh`);return{positions:c,uvs:l,normals:u,indices:d}}var ce=`uniform mat4 uMVPMatrix;

attribute vec2 a_TexCoordinate;
attribute vec3 a_Normal;
attribute vec3 vPosition;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 modelViewVertex;
varying float depth;

void main() {
   vUV = a_TexCoordinate;
   vNormal = a_Normal;
   gl_Position = uMVPMatrix * vec4(vPosition, 1.0);
   modelViewVertex = vPosition;
   depth = gl_Position.z;
}`,le=`precision highp float;

uniform sampler2D u_Texture;
uniform sampler2D u_NormalMap;
uniform sampler2D u_BackgroundTexture;
uniform float f_xOffset;
uniform float f_alpha;
uniform mat4 world;
uniform float golden;
uniform float white;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 modelViewVertex;

uniform float spec1;
uniform float spec2;
uniform float u_diffuse;
uniform float normalSpec;
uniform vec3 gradientColor1;
uniform vec3 gradientColor2;
uniform vec3 normalSpecColor;
uniform vec3 specColor;
uniform vec2 resolution;
uniform vec4 gradientPosition;
uniform int modelIndex;

vec4 premium_star() {
    vec3 cameraPosition = vec3(0, 0, 100);
    vec3 vLightPosition2 = vec3(-400,400,400);
    vec3 vLightPosition3 = vec3(0,200,400);
    vec3 vLightPosition4 = vec3(0,0,100);
    vec3 vLightPositionNormal = vec3(100,-200,400);

    vec3 vNormalW = normalize(vec3(world * vec4(vNormal, 0.0)));
    vec3 vTextureNormal = normalize(texture2D(u_NormalMap, (vUV + vec2(-f_xOffset, f_xOffset)) * 2.0).xyz * 2.0 - 1.0);

    vec3 finalNormal = normalize(vNormalW + vTextureNormal);

    vec3 color = texture2D(u_Texture, vUV).xyz;
    vec3 viewDirectionW = normalize(cameraPosition);

    vec3 angleW = normalize(viewDirectionW + vLightPosition2);
    float specComp2 = max(0., dot(vNormalW, angleW));
    specComp2 = pow(specComp2, max(1., 128.)) * spec1;

    angleW = normalize(viewDirectionW + vLightPosition4);
    float specComp3 = max(0., dot(vNormalW, angleW));
    specComp3 = pow(specComp3, max(1., 20.)) * spec2;

    float diffuse = max(dot(vNormalW, viewDirectionW), (1.0 - u_diffuse));

    float mixValue = distance(vUV,vec2(1,0));
    vec4 gradientColorFinal = vec4(mix(gradientColor1, gradientColor2, mixValue), 1.0);

    angleW = normalize(viewDirectionW + vLightPositionNormal);
    float normalSpecComp = max(0., dot(finalNormal, angleW));
    normalSpecComp = pow(normalSpecComp, max(1., 128.)) * normalSpec;

    angleW = normalize(viewDirectionW + vLightPosition2);
    float normalSpecComp2 = max(0., dot(finalNormal, angleW));
    normalSpecComp2 = pow(normalSpecComp2, max(1., 128.)) * normalSpec;

    vec4 normalSpecFinal = vec4(normalSpecColor, 0.0) * (normalSpecComp + normalSpecComp2);
    vec4 specFinal = vec4(color, 0.0) * (specComp2 + specComp3);

    vec4 fragColor = gradientColorFinal + specFinal + normalSpecFinal;
    vec4 backgroundColor = texture2D(u_BackgroundTexture, vec2(gradientPosition.x + (gl_FragCoord.x / resolution.x) * gradientPosition.y, gradientPosition.z + (1.0 - (gl_FragCoord.y / resolution.y)) * gradientPosition.w));
    return mix(backgroundColor, fragColor, diffuse) * f_alpha;
}

vec4 golden_star() {

    vec3 pos = modelViewVertex / 100.0 + .5;
    float specTexture = texture2D(u_Texture, vUV).y * clamp(vNormal.z, 0.0, 1.0);

    float gradientMix = distance(pos.xy, vec2(1, 1));
    gradientMix -= .05 * specTexture;
    gradientMix = clamp(gradientMix, 0.0, 1.0);
    vec4 color = vec4(mix(gradientColor1, gradientColor2, gradientMix), 1.0);

    vec3 norm = normalize(vec3(world * vec4(vNormal, 0.0)));

    vec3 flecksNormal = normalize(1.0 - texture2D(u_NormalMap, (vUV + .7 * vec2(-f_xOffset, f_xOffset)) * 2.0).xyz);
    float flecks = clamp(flecksNormal.x, 0.0, 1.0);

    vec3 lightPos = vec3(-3., -3., 20.);
    vec3 lightDir = normalize(lightPos - pos);
    float diffuse = max(dot(norm, lightDir), 0.0);

    float spec = 0.0;

    lightPos = vec3(-1., .7, .2);
    spec += specTexture * clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 6.0;
    lightPos = vec3(8., .7, .5);
    spec += specTexture * clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 6.0;

    float notSpecTexture = mix(1.0, 0.3, specTexture);
    lightPos = vec3(-3., -3., .5);
    spec += clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 4.0;

    lightPos = vec3(4., 3., 2.5);
    spec += clamp(1.5 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 6.0;

    lightPos = vec3(-33., .5, 30.);
    spec += clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 12.0;

    spec = clamp(spec, 0.0, 0.7);

    lightPos = vec3(10., .5, 3.3);
    spec += mix(0.8, 1.0, specTexture) * clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 8.0;

    lightPos = vec3(-10., .5, 3.7);
    spec += mix(0.8, 1.0, specTexture) * clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 8.0;

    lightPos = vec3(.5, 12., 1.5);
    spec += mix(0.8, 1.0, specTexture) * clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0) / 8.0;

    spec = clamp(spec, 0.0, 0.9);

    color = mix(vec4(vec3(0.0), 1.0), color, .8 + .3 * diffuse);
    vec4 specColor = vec4(mix(1.8, 2.0, specTexture) * gradientColor1, 1.0);
    color = mix(color, specColor, spec);

    float flecksSpec = 0.0;
    lightPos = vec3(1.2, -.2, .5);
    flecksSpec += clamp(2.0 * pow(max(dot(normalize(vec3(0.0) - pos), reflect(-normalize(lightPos - pos), norm)), 0.0), 2.0), 0.0, 1.0);

    color = mix(color, specColor,
        clamp(flecksSpec * abs(vNormal.z) * (flecksNormal.z), 0.2, 0.3) - .2
    );

    return mix(color * f_alpha, vec4(1.0), white);
}

uniform float u_shine;
uniform float u_rest;
uniform float u_turn;
uniform float u_move;
uniform vec3 u_glint;

void main() {
    gl_FragColor = mix(premium_star(), golden_star(), golden);
    float shine = (vUV.x + vUV.y - u_shine) / 0.144;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(gl_FragColor.a), 0.5 * exp(-shine * shine));
    vec3 worldNormal = normalize(vec3(world * vec4(vNormal, 0.0)));
    float rest = pow(max(dot(worldNormal, normalize(vec3(-0.265, 0.265, 0.927))), 0.0), 16.0);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(gl_FragColor.a), u_rest * rest * (1.0 - golden));
    float side = pow(max(dot(worldNormal, normalize(vec3(-0.77, 0.17, 0.62))), 0.0), 14.0) + pow(max(dot(worldNormal, normalize(vec3(0.77, 0.17, 0.62))), 0.0), 14.0);
    float turn = u_turn * (1.0 - smoothstep(0.94, 0.985, abs(world[2].z))) * side;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, mix(u_glint, vec3(1.0), 0.7 * clamp(turn - 1.0, 0.0, 1.0)) * gl_FragColor.a, clamp(turn + 0.5 * u_turn * u_move * rest, 0.0, 1.0) * (1.0 - golden));
}`,ue=`M242.441216,1023.96673 C484.760949,868.195472 619.565351,780.153383 646.854423,759.840461 C738.267847,691.795866 863.983039,585.091695 1024,439.727947 L1024,363.976818 C810.351061,332.876819 639.684394,317.32682 512,317.32682 C384.315606,317.32682 213.648939,332.876819 0,363.976818 L0,1023.96673 L242.441216,1023.96673 Z`,de=new URL(`../assets/`,import.meta.url),fe=new Map,pe=new WeakMap,J;function me(){if(!J){J=document.createElement(`canvas`),J.width=J.height=240;let e=J.getContext(`2d`);e.scale(240/1024,240/1024),e.fillStyle=`#fff`,e.fill(new Path2D(ue))}return J}async function he(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);return q(await t.arrayBuffer())}async function ge(e){let t=new Image;return t.crossOrigin=`anonymous`,t.src=e,await t.decode(),t}function _e(e=de){let t=new URL(e,typeof document>`u`?void 0:document.baseURI).href;return t.endsWith(`/`)?t:`${t}/`}function ve(e){if(e&&typeof e==`object`&&!(e instanceof URL)){let t=pe.get(e.mesh);return t||pe.set(e.mesh,t=q(e.mesh)),Promise.resolve({mesh:t,textures:{star:me(),flecks:e.flecks}})}let t=_e(e),n=fe.get(t);return n||(n=Promise.all([he(new URL(`star.mesh`,t).href),ge(new URL(`flecks.png`,t).href)]).then(([e,t])=>({mesh:e,textures:{star:me(),flecks:t}})),fe.set(t,n),n.catch(()=>fe.delete(t))),n}var Y=(e,t,n)=>e<t?t:e>n?n:e,ye=e=>e*e*(3-2*e);function be(e,t,n,r){let[i,a]=[3*e,3*t],[o,s]=[3*(n-e)-i,3*(r-t)-a],[c,l]=[1-i-o,1-a-s];return e=>{let t=e;for(let n=1;n<14;n++){let n=t*(i+t*(o+t*c))-e;if(Math.abs(n)<.001)break;t-=n/(i+t*(2*o+3*c*t))}return t*(a+t*(s+t*l))}}var xe=be(.23,1,.32,1),Se=be(.25,.1,.25,1),Ce=be(0,0,.58,1),X=e=>(e-1)*(e-1)*(3*e-1)+1,we=e=>e;function Te(e){let t=e<1?0:(e-1)%4;return 2*(-.13+1.6*Ce(Math.min(Math.max((t-1.1)/.9,0),1)))}function Ee(e,t=!0,n=Math.random){let r=null,i=null,a=t?e+2e3:null,o=0,s=[0,1,2,3,4],c=e=>Math.floor(n()*e),l=()=>{for(let e=s.length-1;e>0;e--){let t=c(e+1);[s[e],s[t]]=[s[t],s[e]]}};l();let u=e=>t?e+2e3:null,d=(e,t)=>{r={start:e,tracks:t,done:e=>{h.angleX=0,a=u(e)}}},f=e=>{r=null,i={start:e,tracks:[`angleX`,`angleX2`,`angleY`].map(e=>[e,[h[e],0],600,X])},a=u(e)},p=(e,t)=>{let n=!0;for(let[r,i,a,o,s=0]of e.tracks){let c=t-e.start-s;if(c<a&&(n=!1),c<0)continue;let l=o(Math.min(c/a,1)),u=i.length-1,d=Math.min(Math.floor(Math.min(Math.max(l,0),1)*u),u-1);h[r]=i[d]+(i[d+1]-i[d])*(l*u-d)}return n},m=e=>{let t=s[o++];o===s.length&&(l(),o=0);let n=c(4),r=485*(n===2?-1:1),{angleX:i,angleY:a}=h;d(e,t===0&&n===0?[[`angleY`,[a,48],2300,xe],[`angleY`,[48,0],500,X,2300]]:t===0?[[`angleX`,[a,r],3e3,xe],[`angleX`,[r,0],1e3,X,3e3]]:t===1?[[`angleX`,[i,360],8e3,Se]]:t===2?[[`angleX`,[i,184],600,Ce],[`angleY`,[a,50],600,Ce],[`angleX`,[180,0],800,X,1e4],[`angleY`,[60,0],800,X,1e4],[`angleX2`,[0,2,-3,2,-1,2,-3,2,-1,0],1e4,we]]:[[`angleX`,[i,180],600,Se],[`angleX`,[180,360],600,Se,2e3]])},h={angleX:0,angleY:0,angleX2:0,get moving(){return!!(r||i)},tick(e){let t=a;t!==null&&e>=t&&(a=null,h.moving?a=t+2e3:m(t)),i&&p(i,e)&&(i=null);let n=r;n&&p(n,e)&&(r=null,n.done?.(e))},down(){r=i=a=null},drag(e,t){h.angleX+=e*.5,h.angleY+=t*.05},up:f,tap(e,t,n){if(r=i=null,Math.abs(h.angleX)>10)return f(e);a=null;let[o,s]=[(40+c(30))*t,(40+c(30))*n];d(e+16,[[`angleX`,[h.angleX,o],220,xe],[`angleX`,[o,0],600,X,220],[`angleY`,[h.angleY,s],220,xe],[`angleY`,[s,0],600,X,220]])}};return h}function Z(e){let t=e.trim(),n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1],t=parseInt(e,16);return[t>>16&255,t>>8&255,t&255]}let r=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(t);return r?[Number(r[1]),Number(r[2]),Number(r[3])].map(e=>Math.min(255,Math.round(e))):null}function De(e){return`#${e.map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)).join(``)}`}function Oe(e,t,n){let r=Z(e),i=Z(t);return De([r[0]+(i[0]-r[0])*n,r[1]+(i[1]-r[1])*n,r[2]+(i[2]-r[2])*n])}function ke(e){let[t,n,r]=Z(e).map(e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4});return .2126*t+.7152*n+.0722*r}var Ae={light:`#ffffff`,dark:`#212121`};function je(e=`premium`){if(e!==`premium`&&e!==`stars`)throw TypeError(`kind must be 'premium' or 'stars', not ${String(e)}`);return e}function Me(e,t){if(e!==void 0&&e!==`dark`&&e!==`light`)throw TypeError(`theme must be 'dark' or 'light', not ${String(e)}`);let n=e;if(t===void 0)return{theme:n??`light`,background:Ae[n??`light`]};let r=typeof t==`string`?Z(t):null;if(!r)throw TypeError(`background must be a #rgb, #rrggbb or rgb() colour, not ${String(t)}`);let i=De(r);return{theme:n??(ke(i)<.5?`dark`:`light`),background:i}}function Ne(e={}){let t=t=>{let n=e[t]??!0;if(typeof n!=`boolean`)throw TypeError(`${t} must be a boolean`);return n};return{kind:je(e.kind),...Me(e.theme,e.background),assets:e.assets,interactive:t(`interactive`),autoplay:t(`autoplay`),maxPixelRatio:Pe(e.maxPixelRatio),particles:Fe(e.particles),reducedMotion:Ie(e.reducedMotion)}}function Pe(e=2){if(typeof e!=`number`||!(e>=1))throw TypeError(`maxPixelRatio must be a number of at least 1, not ${String(e)}`);return e}function Fe(e){if(e==null)return null;if(typeof e.getContext!=`function`)throw TypeError(`particles must be a canvas, not ${String(e)}`);return e}function Ie(e){if(e!==void 0&&typeof e!=`boolean`)throw TypeError(`reducedMotion must be a boolean`);return e}var Le={premium:[`#6a94ff`,`#9472fd`,`#e26bd3`],stars:[`#fdd219`,`#f9b004`,`#f09903`]},Re=[4,12,10],ze=e=>Y(Math.round(100*(e/120)**2),1,300);function Be(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296}var Ve=e=>1-(1-e)**3,He=new WeakMap;function Ue(e,t,n,r=document){let i=He.get(r);i||He.set(r,i=new Map);let a=`${e} ${t} ${n}`,o=i.get(a);if(o)return o;let s=Math.max(2,Math.round(t*n)),c=r.createElement(`canvas`);c.width=c.height=s;let l=c.getContext(`2d`),u=Z(e);if(l&&u){let t=s>>1,r=Math.floor(t*.98),i=[0,t,r,r,t,0,s-r,r,s,t,s-r,s-r,t,s,r,s-r],a=(e,t,n)=>{let[r,a,o,s]=[i[2*e],i[2*e+1],i[2*t]-i[2*e],i[2*t+1]-i[2*e+1]],c=Math.min(.5,n/(Math.hypot(o,s)||1));return[r+o*c,a+s*c]};l.beginPath();for(let e=0;e<8;e++){let[t,r]=a(e,(e+7)%8,.8*n),[o,s]=a(e,(e+1)%8,.8*n);e?l.lineTo(t,r):l.moveTo(t,r),l.quadraticCurveTo(i[2*e],i[2*e+1],o,s)}l.closePath(),l.fillStyle=e,l.fill(),We(l,s,Math.round(n),u)}return i.set(a,c),c}function We(e,t,n,[r,i,a]){let o=e.getImageData(0,0,t,t),s=o.data,c=new Float32Array(t*t),l=new Float32Array(t*t);for(let e=0;e<t*t;e++)c[e]=s[e*4+3];let u=(n+1)**2;for(let[e,r]of[[1,0],[0,1]]){for(let i=0;i<t;i++)for(let a=0;a<t;a++){let o=0;for(let s=-n;s<=n;s++)o+=c[Y(i+s*r,0,t-1)*t+Y(a+s*e,0,t-1)]*(n+1-Math.abs(s));l[i*t+a]=o/u}[c,l]=[l,c]}for(let e=0;e<t*t;e++)s.set([r,i,a,c[e]*200/255],e*4);e.putImageData(o,0,0)}var Ge=1e3/60,Q=8;function Ke(e,t,n=(t,n,r)=>Ue(t,n,r,e.ownerDocument)){let r=e.getContext(`2d`);if(!r)return null;let i=Le[t],a=[],o=new Float32Array,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=Math.random,g=1/0,_=1,v=()=>{a=[],Re.forEach((e,t)=>i.forEach((r,o)=>a[t*i.length+o]=n(r,e,f)))},y=(e,t)=>l+e>-15&&l+e<s+15&&u+t>-15&&u+t<c+15,b=e=>{let t=0,n=0;for(let e=0;e<4;e++){let e=h()*Math.PI*2,r=Math.cos(e),i=Math.sin(e),a=.55*d/Math.hypot(r,.6*i),o=a+h()*Math.max(0,s/2-a);if(t=o*r,n=.6*o*i,y(t,n))break}let r=Math.hypot(t,n)||1;o[e]=t,o[e+1]=n,o[e+2]=t/r,o[e+3]=n/r,o[e+4]=0,o[e+5]=2e3+Math.floor(h()*3e3),o[e+6]=(50+Math.floor(h()*50))/100,o[e+7]=Math.floor(h()*Re.length)*i.length+Math.floor(h()*i.length)},x=()=>{for(let e=0;e<m;e++)b(e*Q)},S=(e,t)=>{g+=e,_=Math.max(Math.min(3.5,1+Math.abs(t)*.02),1+(_-1)*Math.exp(-e/200));let n=g<1200?4-3*Ve(g/1200):1,r=4/660*e*Math.max(n,_);for(let t=0;t<m*Q;t+=Q)(o[t+4]+=e)>o[t+5]?b(t):y(o[t]+=o[t+2]*r,o[t+1]+=o[t+3]*r)||b(t)},C=()=>{r.clearRect(0,0,e.width,e.height);for(let e=0;e<m*Q;e+=Q){let t=l+o[e],n=u+o[e+1],i=o[e+4],d=o[e+5]-i,p=d<200?Y(1-d/150,0,1):0,m=o[e+6]*(1-p)*Math.min(1,n/12,(c-n)/12,t/24,(s-t)/24),h=a[o[e+7]],g=h.width*X(Math.min(1,i/200));m<=0||g<=0||(r.globalAlpha=Math.min(1,m),r.drawImage(h,t*f-g/2,n*f-g/2,g,g))}r.globalAlpha=1};return{layout(t,n,r,i,a,h){let g=t!==s||a!==d||h!==f;[s,c,l,u,d]=[t,n,r,i,a],h!==f&&(f=h,v());let[_,y]=[Math.round(s*f),Math.round(c*f)];e.width!==_&&(e.width=_),e.height!==y&&(e.height=y),p!==ze(d)&&(p=ze(d),o=new Float32Array(p*Q)),m=p,g&&s&&x()},setKind(e){i=Le[e],f&&v(),s&&C()},frame(e,t){s&&(m!==p&&(m=p),S(Y(e,0,50),t),C())},still(){if(s){h=Be(24301),m=Math.min(40,p),g=1/0,_=1,x();for(let e=0;e<2e3;e+=Ge)S(Ge,0);C(),h=Math.random}},intro(){g=0},clear(){r.clearRect(0,0,e.width,e.height)}}}var qe={premium:`#a767ff #55a5ff`,stars:`#fec846 #ec920a`},$={gradient:`#3d8bff #6b4dff`,rest:.1,turn:2.2,glint:`#bfdeff`,behind:`#5c48ff`,page:.1},Je=.15,Ye=10,Xe=e=>(e%360+540)%360-180,Ze=e=>Z(e).map(e=>e/255);function Qe(e,t,n){for(let r=0;r<16;r++){e[r]=0;for(let i=0;i<4;i++)e[r]=e[r]+t[i*4+r%4]*n[(r&-4)+i]}return e}function $e(e,t,n){if(e.isContextLost())return null;let r=t.indices instanceof Uint32Array;if(r&&!e.getExtension(`OES_element_index_uint`))return null;let i=e.createProgram(),a=[[e.VERTEX_SHADER,ce],[e.FRAGMENT_SHADER,le]].map(([t,n])=>{let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.attachShader(i,r),r});e.linkProgram(i);let o=[],s=[],c=()=>{for(let t of o)e.deleteBuffer(t);for(let t of s)e.deleteTexture(t);for(let t of a)e.deleteShader(t);e.deleteProgram(i),o.length=s.length=0};if(!e.getProgramParameter(i,e.LINK_STATUS))return e.isContextLost()||console.warn(`telegram-3d-star:`,e.getProgramInfoLog(i)),c(),null;e.useProgram(i),e.enable(e.DEPTH_TEST);let l={},u=t=>t in l?l[t]:l[t]=e.getUniformLocation(i,t),d=[`a_TexCoordinate`,`a_Normal`,`vPosition`].map(t=>e.getAttribLocation(i,t)),f=e.createBuffer();o.push(f),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,f),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t.indices,e.STATIC_DRAW),[t.uvs,t.normals,t.positions].forEach((t,n)=>{let r=e.createBuffer();o.push(r),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.enableVertexAttribArray(d[n]),e.vertexAttribPointer(d[n],n?3:2,e.FLOAT,!1,0,0)}),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);let p=(t,n)=>{let r=e.createTexture();if(s.push(r),e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),n)for(let t of[e.TEXTURE_WRAP_S,e.TEXTURE_WRAP_T])e.texParameteri(e.TEXTURE_2D,t,e.CLAMP_TO_EDGE)};p(0,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n.star),p(1,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n.flecks),p(2,!0),[`u_Texture`,`u_NormalMap`,`u_BackgroundTexture`].forEach((t,n)=>e.uniform1i(u(t),n)),e.uniform1f(u(`u_diffuse`),1),e.uniform1f(u(`normalSpec`),.2),e.uniform3f(u(`normalSpecColor`),1,1,1),e.uniform1f(u(`spec2`),.3),e.uniform3fv(u(`u_glint`),Ze($.glint));let m=1/Math.tan(53.13*Math.PI/360),h=new Float32Array([0,0,0,0,0,m,0,0,0,0,-201/199,-1,0,0,19700/199,100]),[g,_]=[new Float32Array(16),new Float32Array(16)];g[15]=1;let v=new Uint8Array([0,0,0,255]),y=0,b=0,x=0,S=0,[C,w]=[0,0],[T,E]=[0,0];return{get settling(){return T<1||E>0},setLook(t,n,r){let i=n===`dark`,a=!i&&t===`premium`;v.set(Z(a?Oe($.behind,r,$.page):Oe(`#a767ff`,r,.5))),e.activeTexture(e.TEXTURE2),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,v),e.uniform1f(u(`golden`),+(t===`stars`)),(a?$.gradient:qe[t]).split(` `).forEach((t,n)=>e.uniform3fv(u(`gradientColor${n+1}`),Ze(t))),e.uniform1f(u(`u_rest`),a?$.rest:.9),e.uniform1f(u(`u_turn`),a?$.turn:0),e.uniform1f(u(`spec1`),i?1:2)},draw(n,i,a){let o=e.drawingBufferWidth,s=e.drawingBufferHeight;e.viewport(0,0,o,s),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),h[0]=m/(o/s);let c=-(n.angleY+n.pitch)*Math.PI/180,l=-(n.angleX+n.yaw)*Math.PI/180,d=Math.cos(c),f=Math.sin(c),p=Math.cos(l),v=Math.sin(l);g[0]=p,g[1]=f*v,g[2]=-d*v,g[5]=d,g[6]=f,g[8]=v,g[9]=-f*p,g[10]=d*p,g[13]=n.angleX2,i&&(y=1),x+=n.dt;let[D,O]=[n.angleX+n.yaw,n.angleY+n.pitch];n.dt>0&&(S+=(Math.hypot(Xe(D-C),Xe(O-w))/n.dt-S)*(1-Math.exp(-n.dt/Je))),[C,w]=[D,O],e.uniformMatrix4fv(u(`uMVPMatrix`),!1,Qe(_,h,g)),e.uniformMatrix4fv(u(`world`),!1,g),e.uniform1f(u(`f_xOffset`),b),e.uniform1f(u(`f_alpha`),T=y),e.uniform2f(u(`resolution`),o,s),e.uniform1f(u(`u_shine`),Te(i||!a?0:x)),E=i?0:ye(Y((S-Ye)/50,0,1)),e.uniform1f(u(`u_move`),E),e.drawElements(e.TRIANGLES,t.indices.length,r?e.UNSIGNED_INT:e.UNSIGNED_SHORT,0),y=Math.min(1,y+16/220),b=(b+5e-4)%1},release:c}}var et={powerPreference:`low-power`,failIfMajorPerformanceCaveat:!0},tt=e=>e.getContext(`webgl`,et),nt=e=>e.getExtension(`WEBGL_lose_context`)?.loseContext(),rt;function it(){if(rt===void 0){let e=typeof document>`u`?null:tt(document.createElement(`canvas`));rt=!!e&&!e.isContextLost(),e&&nt(e)}return rt}function at(){let e=1e3/60,t=0;return n=>n<t-2?!1:(t=(n-t>e?n:t)+e,!0)}async function ot(e,t){if(typeof e?.getContext!=`function`)throw TypeError(`createStar needs a canvas`);let n=Ne(t),r=e.ownerDocument,i=r.defaultView??window;if(n.particles===e)throw TypeError(`particles needs a canvas of its own`);let a=await ve(n.assets),o=tt(e);if(!o)throw Error(`WebGL is not available`);let s=$e(o,a.mesh,a.textures);if(!s)throw nt(o),Error(`WebGL cannot draw the star`);let{kind:c,theme:l,background:u}=n;s.setLook(c,l,u);let d=n.particles,f=d&&Ke(d,c),p=!1,m=!1,h=typeof i.IntersectionObserver!=`function`,g=0,_=0,v=0,[y,b,x]=[0,0,0],[S,C]=[0,0],w=-1/0,T=0,E=at(),D=Ee(0,n.autoplay),O={angleX:0,angleY:0,angleX2:0,yaw:0,pitch:0,dt:0},k=n.reducedMotion===void 0&&typeof i.matchMedia==`function`?i.matchMedia(`(prefers-reduced-motion: reduce)`):null,A=()=>n.reducedMotion??!!k?.matches,j=()=>A()||!n.autoplay,M=null,N=!1,[P,F]=[0,0],ee=()=>!p&&!m&&h&&r.visibilityState!==`hidden`&&!A()&&!!s&&y>0&&b>0,I=()=>ee()&&(n.autoplay||s.settling||D.moving||!!M),L=()=>{x=Math.min(i.devicePixelRatio||1,n.maxPixelRatio);let[t,r]=[Math.round(y*x),Math.round(b*x)];t&&r&&(e.width!==t||e.height!==r)&&([e.width,e.height]=[t,r])},R=()=>{if(!f||!S||!C||!y||!b)return;let t=d.getBoundingClientRect(),n=e.getBoundingClientRect(),r=t.width/S||1;f.layout(S,C,(n.left+n.width/2-t.left)/r,(n.top+n.height/2-t.top)/r,Math.min(y,b)/1.5,x),j()?f.still():f.frame(0,0)},te=e=>{if(!s||!y||!b)return;Math.min(i.devicePixelRatio||1,n.maxPixelRatio)!==x&&(L(),R());let t=A(),r=g?Math.min(Math.max(e-_,0),100):0;_=e,t||D.tick(v+=r),f&&!j()&&f.frame(r,v<w&&r>0?(D.angleX-T)*1e3/r:0),T=D.angleX,O.angleX=t?0:D.angleX,O.angleY=t?0:D.angleY,O.angleX2=t?0:D.angleX2,O.dt=t?0:r/1e3,s.draw(O,t,n.autoplay)},z=()=>{i.cancelAnimationFrame(g),g=0},B=e=>{g=i.requestAnimationFrame(B),E(e)&&te(e),I()||z()},V=()=>{I()?g||(_=i.performance.now(),g=i.requestAnimationFrame(B)):z()},H=()=>{g||te(i.performance.now())},U=()=>{s?.setLook(c,l,u),H()},ne=t=>{n.interactive&&!M&&t.isPrimary&&t.button===0&&ee()&&(M={id:t.pointerId,x:t.clientX,y:t.clientY,t:t.timeStamp},[N,P,F]=[!1,t.clientX,t.clientY],D.down(),w=1/0,V(),e.setPointerCapture?.(t.pointerId))},W=e=>{if(e.pointerId!==M?.id||!(N||(N=Math.hypot(e.clientX-M.x,e.clientY-M.y)>8)))return;let t=i.devicePixelRatio||1;D.drag((P-e.clientX)*t,(F-e.clientY)*t),[P,F]=[e.clientX,e.clientY]},G=t=>{if(t.pointerId!==M?.id)return;D.up(v),w=v+1500;let n=e.getBoundingClientRect(),[r,i]=[n.width/2,n.height/2];t.type===`pointerup`&&!N&&r>0&&i>0&&t.timeStamp-M.t<400&&D.tap(v,(r-t.clientX+n.left)/r,(i-t.clientY+n.top)/i),M=null,V()},re=e=>{e.preventDefault(),s=null,z()},K=()=>{s=$e(o,a.mesh,a.textures),U(),V()},ie=()=>{V(),H(),R()},ae=[[`pointerdown`,ne],[`pointermove`,W],[`pointerup`,G],[`pointercancel`,G],[`webglcontextlost`,re],[`webglcontextrestored`,K]];for(let[t,n]of ae)e.addEventListener(t,n);r.addEventListener(`visibilitychange`,V),k?.addEventListener?.(`change`,ie);let oe=[e.style.touchAction,e.style.getPropertyValue(`-webkit-tap-highlight-color`)];n.interactive&&(e.style.touchAction=`pan-y`,e.style.setProperty(`-webkit-tap-highlight-color`,`transparent`));let se=d?.style.pointerEvents??``;d&&(d.style.pointerEvents=`none`),f&&!j()&&f.intro();let q=new i.ResizeObserver(t=>{for(let{target:n,contentRect:r}of t)n===e?[y,b]=[r.width,r.height]:[S,C]=[r.width,r.height];L(),R(),te(i.performance.now()),V()});q.observe(e),d&&q.observe(d);let ce=typeof i.IntersectionObserver==`function`?new i.IntersectionObserver(e=>{h=e[e.length-1].isIntersecting,V()}):null;return ce?.observe(e),{canvas:e,setTheme(e,t){p||({theme:l,background:u}=Me(e,t),U())},setKind(e){p||(c=je(e),f?.setKind(c),U())},pause(){m=!0,V()},resume(){m=!1,V()},destroy(){if(!p){p=!0,z(),q.disconnect(),ce?.disconnect();for(let[t,n]of ae)e.removeEventListener(t,n);r.removeEventListener(`visibilitychange`,V),k?.removeEventListener?.(`change`,ie),e.style.touchAction=oe[0],e.style.setProperty(`-webkit-tap-highlight-color`,oe[1]),f?.clear(),d&&(d.style.pointerEvents=se),s?.release(),s=null,nt(o)}}}}function st(e){if(!e)return;let t=e===2;return{autoplay:t,interactive:t,reducedMotion:!1}}function ct(e,t){return Me(void 0,e||Ae[t?`dark`:`light`])}function lt(e,t){return Math.max(0,Math.floor(e-2*Math.abs(t)))}var ut=`/tweb/star-BoAP7JKu.mesh`,dt=`/tweb/flecks-Dw9A6qq_.png`,ft={premium:{dark:[`/tweb/premium-dark-BfBCC8_6.png`,`/tweb/premium-dark@2x-BVs3CioN.png`,`/tweb/premium-dark@3x-D07DHEBU.png`],light:[`/tweb/premium-light-U2xdoEdv.png`,`/tweb/premium-light@2x-CV94HEMb.png`,`/tweb/premium-light@3x-G8u7UCFq.png`]},stars:{dark:[`/tweb/stars-dark-DrjxXZhd.png`,`/tweb/stars-dark@2x-cRKxoScm.png`,`/tweb/stars-dark@3x-COEyMVHt.png`],light:[`/tweb/stars-dark-DrjxXZhd.png`,`/tweb/stars-dark@2x-cRKxoScm.png`,`/tweb/stars-dark@3x-COEyMVHt.png`]}};function pt(e,t){let n=ft[e][t];return{src:n[0],srcset:n.map((e,t)=>`${e} ${t+1}x`).join(`, `)}}var mt;function ht(){return mt??(mt=Promise.all([W(ut),B(dt)]).then(([e,t])=>({mesh:e,flecks:t}),e=>{throw mt=void 0,e}))}var gt={star:`_star_2iqak_1`,canvas:`_canvas_2iqak_8`,field:`_field_2iqak_9`,interactive:`_interactive_2iqak_31`},_t=y(`<img alt>`),vt=y(`<div aria-hidden=true>`);function yt(e){let t=e.ownerDocument,n=t.defaultView;for(let r=e.parentElement;r&&r!==t.body;r=r.parentElement)if(n.getComputedStyle(r).overflowX!==`visible`)return r;return t.documentElement}function bt(n){let[m,h]=r(),[y,C]=r(void 0,{equals:(e,t)=>e?.theme===t?.theme&&e?.background===t?.background}),[E,D]=r(!1),[O,k]=r(),[A,j]=r(),[N,P]=r(),[F,ee]=se(),[I,L]=r(),R=o(()=>st(w.getAnimationLevel()),void 0,{equals:(e,t)=>e?.autoplay===t?.autoplay&&e?.interactive===t?.interactive}),B=o(()=>!!R()&&!E()&&it()),V=o(()=>!!y()),H=()=>{C(ct(M(m(),1/0),e.isNight()))},U,W=()=>{U||i(y)||(U=p(()=>{U=void 0;let e=i(m);e?.isConnected&&e.offsetWidth&&H()}))};a(()=>U?.()),s(()=>{m()&&W()}),s(c(()=>n.active,()=>W(),{defer:!0})),ne(m,W),s(()=>{let e=m();e&&(L(e.ownerDocument),a(f(()=>{U?.(),U=void 0,W(),queueMicrotask(()=>L(i(m)?.ownerDocument))})))}),te(t)(`theme_changed`,()=>{i(y)&&H()}),s(()=>{B()&&ht().catch(()=>{})}),s(c([B,R,V,I],([e,t,r,o])=>{if(!e||!r||!o)return;let s=z(),c=o.createElement(`canvas`);c.classList.add(gt.canvas),t.interactive&&c.classList.add(gt.interactive),c.setAttribute(`aria-hidden`,`true`);let l=o.createElement(`canvas`);l.classList.add(gt.field),l.setAttribute(`aria-hidden`,`true`),P(l),j(c);let u,{theme:d,background:f}=i(y);ht().then(e=>s()?void 0:ot(c,{kind:i(()=>n.kind),theme:d,background:f,assets:e,particles:l,...t})).then(e=>{e&&(s()?e.destroy():(u=e,k(e)))},()=>{s()||D(!0)}),a(()=>{k(void 0),j(void 0),P(void 0),u?.destroy()})})),s(()=>{let e=y(),t=O();t&&e&&t.setTheme(e.theme,e.background)}),s(()=>{O()?.setKind(n.kind)}),s(()=>{let e=O();e&&(F()&&n.active!==!1?e.resume():e.pause())}),s(()=>{let e=m();e&&ee({observeElement:e,controlled:!0,type:`star`})});let G=o(()=>N()&&m()?yt(m()):void 0),re=()=>{let e=i(N),t=i(m),n=i(G);if(!e||!t||!n)return;let r=n.getBoundingClientRect(),a=t.getBoundingClientRect(),o=r.left+n.clientLeft+n.clientWidth/2,s=a.left+a.width/2-o;Math.abs(s)>n.clientWidth/2&&(s=0),e.style.width=lt(n.clientWidth,s)+`px`};s(()=>{N()&&G()&&re()}),ne(G,re);let K=o(()=>{let e=y();return e&&!B()&&pt(n.kind,e.theme)});return(()=>{var e=vt();return g(h,e),_(e,l(u,{get when(){return K()},get fallback(){return[S(N),S(A)]},get children(){var e=_t();return v(e,`draggable`,!1),d(t=>{var n=gt.canvas,r=K().src,i=K().srcset;return n!==t.e&&b(e,t.e=n),r!==t.t&&v(e,`src`,t.t=r),i!==t.a&&v(e,`srcset`,t.a=i),t},{e:void 0,t:void 0,a:void 0}),e}})),d(t=>{var r=T(gt.star,n.class),i=n.size+`px`;return r!==t.e&&b(e,t.e=r),i!==t.t&&x(e,`--star-size`,t.t=i),t},{e:void 0,t:void 0}),e})()}var xt=y(`<div class=popup-gift-link-wrapper>`),St=y(`<div class=popup-gift-link-share>`),Ct=`STICKERS-POPUP`;function wt(e,t){G({url:e,openAfter:t,toastKey:`BoostingGiftLinkForwardedTo`,toastKeyForSelf:`BoostingGiftLinkForwardedToSavedMsg`})}async function Tt(e,n,r){let i=K(n,!0);try{await t.managers.appPaymentsManager.applyGiftCode(e),r(),U({langPackKey:`GiftLink.UseSuccess`})}catch(t){if(t.type.includes(`PREMIUM_SUB_ACTIVE_UNTIL_`)){r();let n=+t.type.split(`_`).pop(),i={langKey:`OK`,isCancel:!0};L({titleLangKey:`GiftPremiumActivateErrorTitle`,descriptionLangKey:`GiftCode.Activation.After`,descriptionLangArgs:[F(n),H(()=>{k(i.element),r(),wt(`https://t.me/giftcode/`+e)})],button:i})}console.error(`giftcode error`,t),i()}}async function Et(i,o,s){let c=m(t.managers),u=!!s,d=s??await t.managers.appPaymentsManager.checkGiftCode(i);if(ee(d)){C.showPremiumPopup({gift:d,stack:o});return}let f=h(),p;if(u&&!d.used_date){let{canvas:t,readyResult:n}=N.create({width:320,height:32,middleware:f.get(),animationGroup:Ct,config:{particlesCount:1e3,color:e.isNight()?16777215:0}});await n,p=t}let[g,v]=r(!0),y=[],b=e=>{y.push(e),v(!1)},x=!!d.used_date,S=x?`BoostingUsedGiftLink`:`BoostingGiftLink`,w=u&&!x?``:`https://t.me/giftcode/`+i,T=!u&&!x;A(()=>{let e=new O;a(()=>{e.removeAll(),f.destroy()});let r=new re({button:!1,listenerSetter:e,url:w,noRightButton:!w,onClick:!w&&(()=>{U({langPackKey:`BoostingOnlyRecipientCode`})})});p&&(p.classList.add(`invite-link-dots`),r.container.appendChild(p));let o=e=>l(ie,{peerId:e,onClick:()=>{b(()=>{C.appImManager.setInnerPeer({peerId:e})})}}),s=d.pFlags.via_giveaway,m=R(d.from_id),h=d.to_id&&R(d.to_id),E=(d.giveaway_msg_id||s)&&H(()=>{b(()=>{C.appImManager.setInnerPeer({peerId:m,lastMsgId:d.giveaway_msg_id})})});E?.append(n(`BoostingIncompleteGiveaway`));let D=h?h===t.myId?n(`BoostingYouWereSelected`):n(`BoostingUserWasSelected`,[new I({peerId:h}).element]):E,k=[[`BoostingFrom`,o(m)],[`BoostingTo`,h?o(h):n(`BoostingNoRecipient`)],[`BoostingGift`,n(`BoostingTelegramPremiumFor`,[P(d.days)])],!u&&[`BoostingReason`,D],[`BoostingDate`,F(d.date,void 0,!0)]].filter(Boolean),A=H(()=>{b(()=>{wt(w,!0)})}),M,N=(()=>{var e=xt();return _(e,l(V,{marginTop:!0,marginBottom:!0,get children(){return[l(V.Sticker,{size:126,get element(){return l(bt,{kind:`premium`,size:120})}}),l(V.Title,{size:20,get children(){return n(S)}}),l(V.Subtitle,{get children(){return x?n(`BoostingLinkUsed`):n(h===t.myId?`BoostingLinkAllows`:h?`BoostingLinkAllowsToUser`:`BoostingLinkAllowsAnyone`,h?[new I({peerId:h}).element]:void 0)}})]}}),null),_(e,()=>r.container,null),_(e,l(ae,{class:`popup-gift-link-table`,boldKey:!0,content:k}),null),_(e,(!u||!x)&&(()=>{var e=St();return _(e,()=>x?n(`BoostingUsedLinkDate`,[F(d.used_date,void 0,!0)]):u&&!d.slug?n(`BoostingLinkNotActivated`):n(h?`Giveaway.SendLinkToFriend`:`Giveaway.SendLinkToAnyone`,[A])),e})(),null),e})();return l(j,{managers:c,class:`popup-boosts popup-gift-link`,closable:!0,old:!0,animationGroup:Ct,get show(){return g()},onCloseAfterTimeout:()=>y.splice(0).forEach(e=>e()),get children(){return[l(j.Header,{floating:!0,get children(){return[l(j.CloseButton,{}),l(j.Title,{get children(){return n(S)}})]}}),l(j.Scrollable,{get children(){return l(j.Body,{children:N})}}),l(j.Footer,{get children(){return l(j.FooterButton,{ref:e=>M=e,callback:()=>{if(T)return Tt(i,M,()=>v(!1)),!1},get children(){return n(T?`BoostingUseLink`:`OK`)}})}})]}})})}export{se as a,bt as i,wt as n,oe as o,Et as r,Tt as t};
//# sourceMappingURL=giftLink-CvIUnpZn.js.map