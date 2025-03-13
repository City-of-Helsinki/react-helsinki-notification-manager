import { jsx as fe, Fragment as rt, jsxs as at } from "react/jsx-runtime";
import * as Pe from "react";
import z, { useRef as H, useCallback as q, useEffect as ae, useState as ne, useMemo as we, forwardRef as Qi, useContext as li } from "react";
import { unstable_batchedUpdates as Gi } from "react-dom";
import './main.css';function ge(t, e) {
  var i = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
  }
  return i;
}
function bt(t, e) {
  e === void 0 && (e = {});
  var i = e.insertAt;
  if (t && typeof document < "u") {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
}
var oe;
(function(t) {
  t.ExtraSmall = "extraSmall", t.Small = "small", t.Medium = "medium", t.Large = "large", t.ExtraLarge = "extraLarge";
})(oe || (oe = {}));
var M = { icon: "Icon-module_icon__1Jtzj icon_hds-icon__1YqNC", extraSmall: "Icon-module_extraSmall__3Q7tD icon_hds-icon--size-xs__3dAMZ", small: "Icon-module_small__gTGkU icon_hds-icon--size-s__2Lkik", medium: "Icon-module_medium__1D6Pb icon_hds-icon--size-m__1mcHv", large: "Icon-module_large__28YAW icon_hds-icon--size-l__3Zczy", extraLarge: "Icon-module_extraLarge__27rtn icon_hds-icon--size-xl__1Jes8" };
bt('.icon_hds-icon__1YqNC{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.icon_hds-icon--size-xs__3dAMZ{--icon-size:var(--spacing-layout-2-xs)}.icon_hds-icon--size-s__2Lkik{--icon-size:var(--spacing-layout-xs)}.icon_hds-icon--size-m__1mcHv{--icon-size:var(--spacing-layout-s)}.icon_hds-icon--size-l__3Zczy{--icon-size:var(--spacing-layout-m)}.icon_hds-icon--size-xl__1Jes8{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Icon-module_icon__1Jtzj{background-color:transparent}');
const Wi = (t) => {
  var { "aria-label": e = "alert-circle-fill", "aria-hidden": i = !0, className: n = "", color: o, size: s = oe.Small, style: r = {} } = t, l = ge(t, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return z.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": i, className: [M.icon, M[s], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: r }, l), z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM13 16V18H11V16H13ZM13 6V14H11V6H13Z", fill: "currentColor" }));
}, Zi = (t) => {
  var { "aria-label": e = "info-circle-fill", "aria-hidden": i = !0, className: n = "", color: o, size: s = oe.Small, style: r = {} } = t, l = ge(t, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return z.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": i, className: [M.icon, M[s], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: r }, l), z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM13 10V16.5H15V18H9V16.5H11V11.5H9V10H13ZM11.8125 6C12.5374 6 13.125 6.5876 13.125 7.3125C13.125 8.03735 12.5374 8.625 11.8125 8.625C11.0876 8.625 10.5 8.03735 10.5 7.3125C10.5 6.5876 11.0876 6 11.8125 6Z", fill: "currentColor" }));
}, Xi = (t) => {
  var { "aria-label": e = "check-circle-fill", "aria-hidden": i = !0, className: n = "", color: o, size: s = oe.Small, style: r = {} } = t, l = ge(t, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return z.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": i, className: [M.icon, M[s], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: r }, l), z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.5 8L18 9.5L10.5 17L6 12.5L7.5 11L10.5 14L16.5 8Z", fill: "currentColor" }));
}, Ki = (t) => {
  var { "aria-label": e = "cross", "aria-hidden": i = !0, className: n = "", color: o, size: s = oe.Small, style: r = {} } = t, l = ge(t, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return z.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": i, className: [M.icon, M[s], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: r }, l), z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 7.5L13.5 12L18 16.5L16.5 18L12 13.5L7.5 18L6 16.5L10.5 12L6 7.5L7.5 6L12 10.5L16.5 6L18 7.5Z", fill: "currentColor" }));
}, Ji = (t) => {
  var { "aria-label": e = "error-fill", "aria-hidden": i = !0, className: n = "", color: o, size: s = oe.Small, style: r = {} } = t, l = ge(t, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return z.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": i, className: [M.icon, M[s], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: r }, l), z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.175 3.45608C11.5239 2.86969 12.3977 2.84875 12.7842 3.39325L12.825 3.45608L21.8771 18.6666C22.2202 19.2432 21.8055 19.951 21.1235 19.9976L21.052 20H2.94799C2.24813 20 1.7987 19.3114 2.09013 18.7267L2.12295 18.6666L11.175 3.45608ZM13 16V18H11V16H13ZM13 8.5V14.5H11V8.5H13Z", fill: "currentColor" }));
};
bt(':root{--breakpoint-xs:320px;--breakpoint-s:576px;--breakpoint-m:768px;--breakpoint-l:992px;--breakpoint-xl:1248px;--container-width-xs:288px;--container-width-s:544px;--container-width-m:720px;--container-width-l:944px;--container-width-xl:1200px;--color-brick:#bd2719;--color-brick-light:#ffeeed;--color-brick-medium-light:#facbc8;--color-brick-dark:#800e04;--color-bus:#0000bf;--color-bus-light:#f0f0ff;--color-bus-medium-light:#ccf;--color-bus-dark:#00005e;--color-coat-of-arms:#0072c6;--color-coat-of-arms-light:#e6f4ff;--color-coat-of-arms-medium-light:#b5daf7;--color-coat-of-arms-dark:#005799;--color-copper:#00d7a7;--color-copper-light:#cffaf1;--color-copper-medium-light:#9ef0de;--color-copper-dark:#00a17d;--color-engel:#ffe977;--color-engel-light:#fff9db;--color-engel-medium-light:#fff3b8;--color-engel-dark:#dbc030;--color-fog:#9fc9eb;--color-fog-light:#e8f3fc;--color-fog-medium-light:#d0e6f7;--color-fog-dark:#72a5cf;--color-gold:#c2a251;--color-gold-light:#f7f2e4;--color-gold-medium-light:#e8d7a7;--color-gold-dark:#9e823c;--color-metro:#fd4f00;--color-metro-light:#ffeee6;--color-metro-medium-light:#ffcab3;--color-metro-dark:#bd2f00;--color-silver:#dedfe1;--color-silver-light:#f7f7f8;--color-silver-medium-light:#efeff0;--color-silver-dark:#b0b8bf;--color-summer:#ffc61e;--color-summer-light:#fff4d4;--color-summer-medium-light:#ffe49c;--color-summer-dark:#cc9200;--color-suomenlinna:#f5a3c7;--color-suomenlinna-light:#fff0f7;--color-suomenlinna-medium-light:#ffdbeb;--color-suomenlinna-dark:#e673a5;--color-tram:#008741;--color-tram-light:#dff7eb;--color-tram-medium-light:#a3e3c2;--color-tram-dark:#006631;--color-focus-outline:#0072c6;--color-black:#000;--color-white:#fff;--color-black-5:#f2f2f2;--color-black-10:#e6e6e6;--color-black-20:#ccc;--color-black-30:#b3b3b3;--color-black-40:#999;--color-black-50:grey;--color-black-60:#595959;--color-black-70:#4d4d4d;--color-black-80:#333;--color-black-90:#1a1a1a;--color-error:#b01038;--color-error-light:#f6e2e6;--color-error-dark:#8d0d2d;--color-success:#007a64;--color-success-light:#e2f5f3;--color-success-dark:#006250;--color-alert:#ffda07;--color-alert-light:#fff4b4;--color-alert-dark:#d18200;--color-info:#0062b9;--color-info-light:#e5eff8;--color-info-dark:#004f94;--box-shadow-s:0px 2px 10px 0px rgba(0,0,0,0.07);--box-shadow-m:0px 2px 10px 0px rgba(0,0,0,0.1);--box-shadow-l:0px 2px 20px 0px rgba(0,0,0,0.2);--spacing-layout-2-xs:1rem;--spacing-layout-xs:1.5rem;--spacing-layout-s:2rem;--spacing-layout-m:3rem;--spacing-layout-l:4rem;--spacing-layout-xl:6rem;--spacing-layout-2-xl:8rem;--spacing-4-xs:0.125rem;--spacing-3-xs:0.25rem;--spacing-2-xs:0.5rem;--spacing-xs:0.75rem;--spacing-s:1rem;--spacing-m:1.5rem;--spacing-l:2rem;--spacing-xl:2.5rem;--spacing-2-xl:3.0rem;--spacing-3-xl:3.5rem;--spacing-4-xl:4rem;--spacing-5-xl:4.5rem;--fontsize-heading-xxl:4rem;--fontsize-heading-xl:3rem;--fontsize-heading-xl-mobile:2.5rem;--fontsize-heading-l:2rem;--fontsize-heading-m:1.5rem;--fontsize-heading-s:1.25rem;--fontsize-heading-xs:1.125rem;--fontsize-heading-xxs:1rem;--fontsize-body-s:0.875rem;--fontsize-body-m:1rem;--fontsize-body-l:1.125rem;--fontsize-body-xl:1.25rem;--font-default:HelsinkiGrotesk,Arial,sans-serif;--lineheight-s:1;--lineheight-m:1.2;--lineheight-l:1.5;--lineheight-xl:1.75}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.visually-hidden{border:0;clip:"rect(0 0 0 0)";height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.button-reset{background:none;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}.text-body{color:var(--color-black-90);font-size:var(--fontsize-body-m);line-height:var(--lineheight-l)}.text-body,.text-medium{font-family:var(--font-default)}.text-medium{font-weight:500}.text-bold{font-family:var(--font-default);font-weight:700}.text-xl{font-size:var(--fontsize-heading-m)}.text-lg{font-size:var(--fontsize-heading-s)}.text-md{font-size:var(--fontsize-heading-xs)}.subtitle{font-size:var(--fontsize-body-m)}.text-sm{font-size:var(--fontsize-body-s);line-height:var(--lineheight-xl)}.heading-xxl{font-size:var(--fontsize-heading-xxl);letter-spacing:-1.2px}.heading-xl,.heading-xxl{font-weight:400;line-height:var(--lineheight-s)}.heading-xl{font-size:var(--fontsize-heading-xl);letter-spacing:-1px}.heading-xl-mobile{font-size:var(--fontsize-heading-xl-mobile);font-weight:400;letter-spacing:-.8px;line-height:var(--lineheight-s)}.heading-l{font-size:var(--fontsize-heading-l);font-weight:400;letter-spacing:-.4px}.heading-l,.heading-m{line-height:var(--lineheight-m)}.heading-m{font-size:var(--fontsize-heading-m);font-weight:500;letter-spacing:-.2px}.heading-s{font-size:var(--fontsize-heading-s);font-weight:500}.heading-s,.heading-xs{letter-spacing:0;line-height:var(--lineheight-l)}.heading-xs{font-size:var(--fontsize-heading-xs);font-weight:700}.heading-xxs{font-size:var(--fontsize-heading-xxs);font-weight:700;letter-spacing:.2px;line-height:var(--lineheight-l)}.helper-text{color:var(--color-black-60);display:block;flex-basis:100%;font-size:var(--fontsize-body-m);margin-top:var(--spacing-2-xs)}html{-webkit-text-size-adjust:100%}');
const Yi = {}.hasOwnProperty;
function ci(t) {
  const e = typeof t;
  return t ? e === "string" || e === "number" ? t : Array.isArray(t) ? t.length ? t.map((i) => ci(i)).filter(Boolean).join(" ") : null : e === "object" ? ((i, n = null) => {
    if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) return i.toString();
    const o = Object.assign({}, i);
    return n && Object.keys(n).filter((s) => !!i[s]).forEach((s) => {
      o[n[s]] = !0;
    }), Object.keys(o).filter((s) => Yi.call(o, s) && !!o[s]).join(" ");
  })(t, this) : null : null;
}
var Rt = (...t) => t.map(ci).filter(Boolean).join(" "), $ = { "hds-icon": "Notification-module_hds-icon__2ocjD", "hds-icon--size-xs": "Notification-module_hds-icon--size-xs__2Mj5D", "hds-icon--size-s": "Notification-module_hds-icon--size-s__igOqE", "hds-icon--size-m": "Notification-module_hds-icon--size-m__sxXOh", "hds-icon--size-l": "Notification-module_hds-icon--size-l__3Ho_A", "hds-icon--size-xl": "Notification-module_hds-icon--size-xl__1cTta", "hds-icon--alert-circle-fill": "Notification-module_hds-icon--alert-circle-fill__12XKS", "hds-icon-start--alert-circle-fill": "Notification-module_hds-icon-start--alert-circle-fill__TwQNY", "hds-icon-end--alert-circle-fill": "Notification-module_hds-icon-end--alert-circle-fill__3gb8C", "hds-icon--check-circle-fill": "Notification-module_hds-icon--check-circle-fill__2wjh3", "hds-icon-start--check-circle-fill": "Notification-module_hds-icon-start--check-circle-fill__2QULC", "hds-icon-end--check-circle-fill": "Notification-module_hds-icon-end--check-circle-fill__2gbRD", "hds-icon--error-fill": "Notification-module_hds-icon--error-fill__159Nf", "hds-icon-start--error-fill": "Notification-module_hds-icon-start--error-fill__2FrGR", "hds-icon-end--error-fill": "Notification-module_hds-icon-end--error-fill__1qx8A", "hds-icon--info-circle-fill": "Notification-module_hds-icon--info-circle-fill__1F7dp", "hds-icon-start--info-circle-fill": "Notification-module_hds-icon-start--info-circle-fill__1-3q2", "hds-icon-end--info-circle-fill": "Notification-module_hds-icon-end--info-circle-fill__w7XD0", notification: "Notification-module_notification__3eUBu notification_hds-notification__2DQPN", noBorder: "Notification-module_noBorder__3HZZH", close: "Notification-module_close__nX5bK notification_hds-notification__close-button__1yGIj", autoClose: "Notification-module_autoClose__3mkBX", content: "Notification-module_content__2E8Z_ notification_hds-notification__content__5ylSS", icon: "Notification-module_icon__3xieh notification_hds-icon__29HQM", label: "Notification-module_label__2OUcx notification_hds-notification__label__2t1lR", body: "Notification-module_body__2lrYE notification_hds-notification__body__3cobH", small: "Notification-module_small__3Vi8R notification_hds-notification--small__1wVl6", large: "Notification-module_large__3sVHL notification_hds-notification--large__260Qm", "top-left": "Notification-module_top-left__nZQMd notification_hds-notification--top-left__sIHO2", "top-center": "Notification-module_top-center__1GWPg notification_hds-notification--top-center__GDWo5", "top-right": "Notification-module_top-right__1HAHi notification_hds-notification--top-right__3Wa5K", "bottom-left": "Notification-module_bottom-left__17y2g notification_hds-notification--bottom-left__eB4ZK", "bottom-center": "Notification-module_bottom-center__2i8Ht notification_hds-notification--bottom-center__5EgOP", "bottom-right": "Notification-module_bottom-right__1Giev notification_hds-notification--bottom-right__1SmfT", success: "Notification-module_success__TdJna notification_hds-notification--success__1_3XZ", alert: "Notification-module_alert__1bsQa notification_hds-notification--alert__1MV7H", error: "Notification-module_error___-koD notification_hds-notification--error__3T1Of", boxShadow: "Notification-module_boxShadow__2yJQB notification_hds-notification--box-shadow__2kbD_" };
bt(`.notification_hds-icon__29HQM{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.notification_hds-icon--size-xs__19VKz{--icon-size:var(--spacing-layout-2-xs)}.notification_hds-icon--size-s__2Ffyw{--icon-size:var(--spacing-layout-xs)}.notification_hds-icon--size-m__28mpE{--icon-size:var(--spacing-layout-s)}.notification_hds-icon--size-l__T6YEf{--icon-size:var(--spacing-layout-m)}.notification_hds-icon--size-xl__18_OX{--icon-size:var(--spacing-layout-l)}.notification_hds-icon--alert-circle-fill__3er4k{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.notification_hds-icon-start--alert-circle-fill__1r-B3{--mask-image-before:var(--mask-image-alert-circle-fill)}.notification_hds-icon-end--alert-circle-fill__2dkn2{--mask-image-after:var(--mask-image-alert-circle-fill)}.notification_hds-icon--check-circle-fill__2u1G4{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.notification_hds-icon-start--check-circle-fill__2JuU0{--mask-image-before:var(--mask-image-check-circle-fill)}.notification_hds-icon-end--check-circle-fill__3YsAQ{--mask-image-after:var(--mask-image-check-circle-fill)}.notification_hds-icon--error-fill__jPWn1{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.notification_hds-icon-start--error-fill__1sR7v{--mask-image-before:var(--mask-image-error-fill)}.notification_hds-icon-end--error-fill__1jyx_{--mask-image-after:var(--mask-image-error-fill)}.notification_hds-icon--info-circle-fill__1gXDU{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.notification_hds-icon-start--info-circle-fill__rortu{--mask-image-before:var(--mask-image-info-circle-fill)}.notification_hds-icon-end--info-circle-fill__3ycxA{--mask-image-after:var(--mask-image-info-circle-fill)}.notification_hds-notification__2DQPN{--notification-background-color:var(--color-info-light);--notification-border-color:var(--color-info);--notification-border-width:var(--spacing-2-xs);--notification-icon-color:var(--color-info);--notification-color:var(--color-black-90);--notification-max-width-inline:none;--notification-max-width-toast:21rem;--notification-z-index-inline:auto;--notification-z-index-toast:99;--notification-offset:var(--spacing-layout-s);--notification-padding:var(--spacing-s);background-color:var(--notification-background-color);border:solid var(--notification-border-color);border-left-width:var(--notification-border-width);border-bottom-width:0;border-right-width:0;border-top-width:0;box-sizing:border-box;color:var(--notification-color);max-width:var(--notification-max-width-inline);padding:var(--notification-padding);position:relative;width:100%;z-index:var(--notification-z-index-inline)}.notification_hds-notification__content__5ylSS{display:grid;grid-gap:var(--spacing-s);gap:var(--spacing-s)}.notification_hds-notification__label__2t1lR{align-items:center;display:flex;font-size:var(--fontsize-heading-xs);font-weight:700;letter-spacing:0;line-height:24px;margin-right:var(--spacing-l)}.notification_hds-notification__2DQPN .notification_hds-icon__29HQM{--icon-size:var(--spacing-layout-xs)}.notification_hds-notification__label__2t1lR>.notification_hds-icon__29HQM{color:var(--notification-icon-color);flex:none;margin-right:var(--spacing-2-xs)}.notification_hds-notification__body__3cobH{font-size:var(--fontsize-body-s);line-height:24px}.notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-s);background:none;border:none;cursor:pointer;display:flex;outline:none;padding:0;position:absolute;right:var(--notification-close-button-offset);top:var(--notification-close-button-offset)}.notification_hds-notification__close-button__1yGIj:focus{box-shadow:0 0 0 3px var(--color-focus-outline)}.notification_hds-notification--small__1wVl6{--notification-padding:var(--spacing-2-xs)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__content__5ylSS{display:flex;grid-gap:0;gap:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__body__3cobH{margin-right:var(--spacing-l)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--large__260Qm{--notification-padding:var(--spacing-l)}.notification_hds-notification--large__260Qm .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--large__260Qm .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--bottom-center__5EgOP,.notification_hds-notification--bottom-left__eB4ZK,.notification_hds-notification--bottom-right__1SmfT,.notification_hds-notification--top-center__GDWo5,.notification_hds-notification--top-left__sIHO2,.notification_hds-notification--top-right__3Wa5K{border-left-width:0;border-bottom-width:0;border-right-width:0;border-top-width:var(--notification-border-width);max-width:var(--notification-max-width-toast);position:fixed;width:calc(100% - var(--spacing-l));z-index:var(--notification-z-index-toast)}.notification_hds-notification--top-left__sIHO2{left:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--top-center__GDWo5{left:50%;top:var(--notification-offset);transform:translateX(-50%)}.notification_hds-notification--top-right__3Wa5K{right:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--bottom-left__eB4ZK{bottom:var(--notification-offset);left:var(--notification-offset)}.notification_hds-notification--bottom-center__5EgOP{bottom:var(--notification-offset);left:50%;transform:translateX(-50%)}.notification_hds-notification--bottom-right__1SmfT{bottom:var(--notification-offset);right:var(--notification-offset)}@media only screen and (max-width:765.98px){.notification_hds-notification__2DQPN{--notification-offset:var(--spacing-s)}}.notification_hds-notification--success__1_3XZ{--notification-background-color:var(--color-success-light);--notification-border-color:var(--color-success);--notification-icon-color:var(--color-success)}.notification_hds-notification--alert__1MV7H{--notification-background-color:var(--color-alert-light);--notification-border-color:var(--color-alert-dark);--notification-icon-color:var(--color-alert-dark)}.notification_hds-notification--error__3T1Of{--notification-background-color:var(--color-error-light);--notification-border-color:var(--color-error);--notification-icon-color:var(--color-error)}.notification_hds-notification--box-shadow__2kbD_{box-shadow:var(--box-shadow-l)}.Notification-module_hds-icon__2ocjD{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.Notification-module_hds-icon--size-xs__2Mj5D{--icon-size:var(--spacing-layout-2-xs)}.Notification-module_hds-icon--size-s__igOqE{--icon-size:var(--spacing-layout-xs)}.Notification-module_hds-icon--size-m__sxXOh{--icon-size:var(--spacing-layout-s)}.Notification-module_hds-icon--size-l__3Ho_A{--icon-size:var(--spacing-layout-m)}.Notification-module_hds-icon--size-xl__1cTta{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Notification-module_hds-icon--alert-circle-fill__12XKS{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-start--alert-circle-fill__TwQNY{--mask-image-before:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-end--alert-circle-fill__3gb8C{--mask-image-after:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon--check-circle-fill__2wjh3{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-start--check-circle-fill__2QULC{--mask-image-before:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-end--check-circle-fill__2gbRD{--mask-image-after:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon--error-fill__159Nf{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.Notification-module_hds-icon-start--error-fill__2FrGR{--mask-image-before:var(--mask-image-error-fill)}.Notification-module_hds-icon-end--error-fill__1qx8A{--mask-image-after:var(--mask-image-error-fill)}.Notification-module_hds-icon--info-circle-fill__1F7dp{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-start--info-circle-fill__1-3q2{--mask-image-before:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-end--info-circle-fill__w7XD0{--mask-image-after:var(--mask-image-info-circle-fill)}.Notification-module_notification__3eUBu{overflow:hidden}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH{border:0;padding-top:calc(var(--notification-padding) + var(--notification-border-width))}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH .Notification-module_close__nX5bK{top:calc(var(--notification-close-button-offset) + var(--notification-border-width))}.Notification-module_autoClose__3mkBX{background-color:var(--notification-border-color);height:var(--notification-border-width);left:0;position:absolute;top:0;width:100%}.Notification-module_icon__3xieh{background-color:transparent}`);
const fi = typeof document < "u" ? z.useLayoutEffect : () => {
};
function en(t) {
  const e = H(null);
  return fi(() => {
    e.current = t;
  }, [
    t
  ]), q((...i) => {
    const n = e.current;
    return n == null ? void 0 : n(...i);
  }, []);
}
let lt = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((t) => {
  lt.delete(t);
});
function tn(t, e) {
  if (t === e) return t;
  let i = lt.get(t);
  if (i)
    return i.forEach((o) => o.current = e), e;
  let n = lt.get(e);
  return n ? (n.forEach((o) => o.current = t), t) : e;
}
function nn(...t) {
  return (...e) => {
    for (let i of t) typeof i == "function" && i(...e);
  };
}
const on = (t) => {
  var e;
  return (e = t == null ? void 0 : t.ownerDocument) !== null && e !== void 0 ? e : document;
};
function sn(t) {
  return t !== null && typeof t == "object" && "nodeType" in t && typeof t.nodeType == "number";
}
function rn(t) {
  return sn(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
}
let an = !1;
function xt() {
  return an;
}
function ln(t, e) {
  if (!xt()) return e && t ? t.contains(e) : !1;
  if (!t || !e) return !1;
  let i = e;
  for (; i !== null; ) {
    if (i === t) return !0;
    i.tagName === "SLOT" && i.assignedSlot ? i = i.assignedSlot.parentNode : rn(i) ? i = i.host : i = i.parentNode;
  }
  return !1;
}
const cn = (t = document) => {
  var e;
  if (!xt()) return t.activeElement;
  let i = t.activeElement;
  for (; i && "shadowRoot" in i && (!((e = i.shadowRoot) === null || e === void 0) && e.activeElement); ) i = i.shadowRoot.activeElement;
  return i;
};
function fn(t) {
  return xt() && t.target.shadowRoot && t.composedPath ? t.composedPath()[0] : t.target;
}
function di(t) {
  var e, i, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (i = di(t[e])) && (n && (n += " "), n += i);
  } else for (i in t) t[i] && (n && (n += " "), n += i);
  return n;
}
function dn() {
  for (var t, e, i = 0, n = "", o = arguments.length; i < o; i++) (t = arguments[i]) && (e = di(t)) && (n && (n += " "), n += e);
  return n;
}
function un(...t) {
  let e = {
    ...t[0]
  };
  for (let i = 1; i < t.length; i++) {
    let n = t[i];
    for (let o in n) {
      let s = e[o], r = n[o];
      typeof s == "function" && typeof r == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? e[o] = nn(s, r) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof r == "string" ? e[o] = dn(s, r) : o === "id" && s && r ? e.id = tn(s, r) : e[o] = r !== void 0 ? r : s;
    }
  }
  return e;
}
function hn() {
  let t = H(/* @__PURE__ */ new Map()), e = q((o, s, r, l) => {
    let a = l != null && l.once ? (...c) => {
      t.current.delete(r), r(...c);
    } : r;
    t.current.set(r, {
      type: s,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(s, a, l);
  }, []), i = q((o, s, r, l) => {
    var a;
    let c = ((a = t.current.get(r)) === null || a === void 0 ? void 0 : a.fn) || r;
    o.removeEventListener(s, c, l), t.current.delete(r);
  }, []), n = q(() => {
    t.current.forEach((o, s) => {
      i(o.eventTarget, o.type, s, o.options);
    });
  }, [
    i
  ]);
  return ae(() => n, [
    n
  ]), {
    addGlobalListener: e,
    removeGlobalListener: i,
    removeAllGlobalListeners: n
  };
}
class ui {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(e, i) {
    this.nativeEvent = i, this.target = i.target, this.currentTarget = i.currentTarget, this.relatedTarget = i.relatedTarget, this.bubbles = i.bubbles, this.cancelable = i.cancelable, this.defaultPrevented = i.defaultPrevented, this.eventPhase = i.eventPhase, this.isTrusted = i.isTrusted, this.timeStamp = i.timeStamp, this.type = e;
  }
}
function mn(t) {
  let e = H({
    isFocused: !1,
    observer: null
  });
  fi(() => {
    const n = e.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let i = en((n) => {
    t == null || t(n);
  });
  return q((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let o = n.target, s = (r) => {
        e.current.isFocused = !1, o.disabled && i(new ui("blur", r)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      o.addEventListener("focusout", s, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && o.disabled) {
          var r;
          (r = e.current.observer) === null || r === void 0 || r.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), e.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    i
  ]);
}
function gn(t) {
  let { isDisabled: e, onBlurWithin: i, onFocusWithin: n, onFocusWithinChange: o } = t, s = H({
    isFocusWithin: !1
  }), { addGlobalListener: r, removeAllGlobalListeners: l } = hn(), a = q((d) => {
    d.currentTarget.contains(d.target) && s.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (s.current.isFocusWithin = !1, l(), i && i(d), o && o(!1));
  }, [
    i,
    o,
    s,
    l
  ]), c = mn(a), u = q((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const g = on(d.target), w = cn(g);
    if (!s.current.isFocusWithin && w === fn(d.nativeEvent)) {
      n && n(d), o && o(!0), s.current.isFocusWithin = !0, c(d);
      let h = d.currentTarget;
      r(g, "focus", (p) => {
        if (s.current.isFocusWithin && !ln(h, p.target)) {
          let m = new ui("blur", new g.defaultView.FocusEvent("blur", {
            relatedTarget: p.target
          }));
          m.target = h, m.currentTarget = h, a(m);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    c,
    r,
    a
  ]);
  return e ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: a
    }
  };
}
const Ft = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function pn(t = {}) {
  let { style: e, isFocusable: i } = t, [n, o] = ne(!1), { focusWithinProps: s } = gn({
    isDisabled: !i,
    onFocusWithinChange: (l) => o(l)
  }), r = we(() => n ? e : e ? {
    ...Ft,
    ...e
  } : Ft, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...s,
      style: r
    }
  };
}
function _n(t) {
  let { children: e, elementType: i = "div", isFocusable: n, style: o, ...s } = t, { visuallyHiddenProps: r } = pn(t);
  return /* @__PURE__ */ z.createElement(i, un(s, r), e);
}
let qe = L();
const b = (t) => Ve(t, qe);
let Qe = L();
b.write = (t) => Ve(t, Qe);
let Ge = L();
b.onStart = (t) => Ve(t, Ge);
let vt = L();
b.onFrame = (t) => Ve(t, vt);
let yt = L();
b.onFinish = (t) => Ve(t, yt);
let ie = [];
b.setTimeout = (t, e) => {
  let i = b.now() + e, n = () => {
    let s = ie.findIndex((r) => r.cancel == n);
    ~s && ie.splice(s, 1), K.count -= ~s ? 1 : 0;
  }, o = {
    time: i,
    handler: t,
    cancel: n
  };
  return ie.splice(hi(i), 0, o), K.count += 1, mi(), o;
};
let hi = (t) => ~(~ie.findIndex((e) => e.time > t) || ~ie.length);
b.cancel = (t) => {
  qe.delete(t), Qe.delete(t);
};
b.sync = (t) => {
  ct = !0, b.batchedUpdates(t), ct = !1;
};
b.throttle = (t) => {
  let e;
  function i() {
    try {
      t(...e);
    } finally {
      e = null;
    }
  }
  function n(...o) {
    e = o, b.onStart(i);
  }
  return n.handler = t, n.cancel = () => {
    Ge.delete(i), e = null;
  }, n;
};
let wt = typeof window < "u" ? window.requestAnimationFrame : () => {
};
b.use = (t) => wt = t;
b.now = typeof performance < "u" ? () => performance.now() : Date.now;
b.batchedUpdates = (t) => t();
b.catch = console.error;
b.frameLoop = "always";
b.advance = () => {
  b.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : pi();
};
let X = -1, ct = !1;
function Ve(t, e) {
  ct ? (e.delete(t), t(0)) : (e.add(t), mi());
}
function mi() {
  X < 0 && (X = 0, b.frameLoop !== "demand" && wt(gi));
}
function gi() {
  ~X && (wt(gi), b.batchedUpdates(pi));
}
function pi() {
  let t = X;
  X = b.now();
  let e = hi(X);
  e && (_i(ie.splice(0, e), (i) => i.handler()), K.count -= e), Ge.flush(), qe.flush(t ? Math.min(64, X - t) : 16.667), vt.flush(), Qe.flush(), yt.flush();
}
function L() {
  let t = /* @__PURE__ */ new Set(), e = t;
  return {
    add(i) {
      K.count += e == t && !t.has(i) ? 1 : 0, t.add(i);
    },
    delete(i) {
      return K.count -= e == t && t.has(i) ? 1 : 0, t.delete(i);
    },
    flush(i) {
      e.size && (t = /* @__PURE__ */ new Set(), K.count -= e.size, _i(e, (n) => n(i) && t.add(n)), K.count += t.size, e = t);
    }
  };
}
function _i(t, e) {
  t.forEach((i) => {
    try {
      e(i);
    } catch (n) {
      b.catch(n);
    }
  });
}
const K = {
  count: 0,
  clear() {
    X = -1, ie = [], Ge = L(), qe = L(), vt = L(), Qe = L(), yt = L(), K.count = 0;
  }
};
function ft() {
}
const bn = (t, e, i) => Object.defineProperty(t, e, {
  value: i,
  writable: !0,
  configurable: !0
}), f = {
  arr: Array.isArray,
  obj: (t) => !!t && t.constructor.name === "Object",
  fun: (t) => typeof t == "function",
  str: (t) => typeof t == "string",
  num: (t) => typeof t == "number",
  und: (t) => t === void 0
};
function U(t, e) {
  if (f.arr(t)) {
    if (!f.arr(e) || t.length !== e.length) return !1;
    for (let i = 0; i < t.length; i++)
      if (t[i] !== e[i]) return !1;
    return !0;
  }
  return t === e;
}
const y = (t, e) => t.forEach(e);
function D(t, e, i) {
  if (f.arr(t)) {
    for (let n = 0; n < t.length; n++)
      e.call(i, t[n], `${n}`);
    return;
  }
  for (const n in t)
    t.hasOwnProperty(n) && e.call(i, t[n], n);
}
const T = (t) => f.und(t) ? [] : f.arr(t) ? t : [t];
function ze(t, e) {
  if (t.size) {
    const i = Array.from(t);
    t.clear(), y(i, e);
  }
}
const ke = (t, ...e) => ze(t, (i) => i(...e));
let kt, bi, J = null, xi = !1, zt = ft;
const xn = (t) => {
  t.to && (bi = t.to), t.now && (b.now = t.now), t.colors !== void 0 && (J = t.colors), t.skipAnimation != null && (xi = t.skipAnimation), t.createStringInterpolator && (kt = t.createStringInterpolator), t.requestAnimationFrame && b.use(t.requestAnimationFrame), t.batchedUpdates && (b.batchedUpdates = t.batchedUpdates), t.willAdvance && (zt = t.willAdvance), t.frameLoop && (b.frameLoop = t.frameLoop);
};
var B = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return kt;
  },
  get to() {
    return bi;
  },
  get colors() {
    return J;
  },
  get skipAnimation() {
    return xi;
  },
  get willAdvance() {
    return zt;
  },
  assign: xn
});
const Ne = /* @__PURE__ */ new Set();
let F = [], et = [], He = 0;
const We = {
  get idle() {
    return !Ne.size && !F.length;
  },
  start(t) {
    He > t.priority ? (Ne.add(t), b.onStart(vn)) : (vi(t), b(dt));
  },
  advance: dt,
  sort(t) {
    if (He)
      b.onFrame(() => We.sort(t));
    else {
      const e = F.indexOf(t);
      ~e && (F.splice(e, 1), yi(t));
    }
  },
  clear() {
    F = [], Ne.clear();
  }
};
function vn() {
  Ne.forEach(vi), Ne.clear(), b(dt);
}
function vi(t) {
  F.includes(t) || yi(t);
}
function yi(t) {
  F.splice(yn(F, (e) => e.priority > t.priority), 0, t);
}
function dt(t) {
  const e = et;
  for (let i = 0; i < F.length; i++) {
    const n = F[i];
    He = n.priority, n.idle || (zt(n), n.advance(t), n.idle || e.push(n));
  }
  return He = 0, et = F, et.length = 0, F = e, F.length > 0;
}
function yn(t, e) {
  const i = t.findIndex(e);
  return i < 0 ? t.length : i;
}
const wn = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, I = "[-+]?\\d*\\.?\\d+", Me = I + "%";
function Ze(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const kn = new RegExp("rgb" + Ze(I, I, I)), zn = new RegExp("rgba" + Ze(I, I, I, I)), Nn = new RegExp("hsl" + Ze(I, Me, Me)), Sn = new RegExp("hsla" + Ze(I, Me, Me, I)), Cn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Pn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, En = /^#([0-9a-fA-F]{6})$/, An = /^#([0-9a-fA-F]{8})$/;
function $n(t) {
  let e;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = En.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : J && J[t] !== void 0 ? J[t] : (e = kn.exec(t)) ? (ce(e[1]) << 24 | ce(e[2]) << 16 | ce(e[3]) << 8 | 255) >>> 0 : (e = zn.exec(t)) ? (ce(e[1]) << 24 | ce(e[2]) << 16 | ce(e[3]) << 8 | jt(e[4])) >>> 0 : (e = Cn.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = An.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = Pn.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = Nn.exec(t)) ? (Vt(It(e[1]), Ie(e[2]), Ie(e[3])) | 255) >>> 0 : (e = Sn.exec(t)) ? (Vt(It(e[1]), Ie(e[2]), Ie(e[3])) | jt(e[4])) >>> 0 : null;
}
function tt(t, e, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
}
function Vt(t, e, i) {
  const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n, s = tt(o, n, t + 1 / 3), r = tt(o, n, t), l = tt(o, n, t - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(r * 255) << 16 | Math.round(l * 255) << 8;
}
function ce(t) {
  const e = parseInt(t, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function It(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function jt(t) {
  const e = parseFloat(t);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function Ie(t) {
  const e = parseFloat(t);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function Lt(t) {
  let e = $n(t);
  if (e === null) return t;
  e = e || 0;
  let i = (e & 4278190080) >>> 24, n = (e & 16711680) >>> 16, o = (e & 65280) >>> 8, s = (e & 255) / 255;
  return `rgba(${i}, ${n}, ${o}, ${s})`;
}
const Ee = (t, e, i) => {
  if (f.fun(t))
    return t;
  if (f.arr(t))
    return Ee({
      range: t,
      output: e,
      extrapolate: i
    });
  if (f.str(t.output[0]))
    return kt(t);
  const n = t, o = n.output, s = n.range || [0, 1], r = n.extrapolateLeft || n.extrapolate || "extend", l = n.extrapolateRight || n.extrapolate || "extend", a = n.easing || ((c) => c);
  return (c) => {
    const u = On(c, s);
    return Tn(c, s[u], s[u + 1], o[u], o[u + 1], a, r, l, n.map);
  };
};
function Tn(t, e, i, n, o, s, r, l, a) {
  let c = a ? a(t) : t;
  if (c < e) {
    if (r === "identity") return c;
    r === "clamp" && (c = e);
  }
  if (c > i) {
    if (l === "identity") return c;
    l === "clamp" && (c = i);
  }
  return n === o ? n : e === i ? t <= e ? n : o : (e === -1 / 0 ? c = -c : i === 1 / 0 ? c = c - e : c = (c - e) / (i - e), c = s(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c = c + n : c = c * (o - n) + n, c);
}
function On(t, e) {
  for (var i = 1; i < e.length - 1 && !(e[i] >= t); ++i) ;
  return i - 1;
}
function ut() {
  return ut = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, ut.apply(this, arguments);
}
const he = Symbol.for("FluidValue.get"), se = Symbol.for("FluidValue.observers"), R = (t) => !!(t && t[he]), E = (t) => t && t[he] ? t[he]() : t, Ht = (t) => t[se] || null;
function Rn(t, e) {
  t.eventObserved ? t.eventObserved(e) : t(e);
}
function Ae(t, e) {
  let i = t[se];
  i && i.forEach((n) => {
    Rn(n, e);
  });
}
class wi {
  constructor(e) {
    if (this[he] = void 0, this[se] = void 0, !e && !(e = this.get))
      throw Error("Unknown getter");
    Fn(this, e);
  }
}
const Fn = (t, e) => ki(t, he, e);
function pe(t, e) {
  if (t[he]) {
    let i = t[se];
    i || ki(t, se, i = /* @__PURE__ */ new Set()), i.has(e) || (i.add(e), t.observerAdded && t.observerAdded(i.size, e));
  }
  return e;
}
function $e(t, e) {
  let i = t[se];
  if (i && i.has(e)) {
    const n = i.size - 1;
    n ? i.delete(e) : t[se] = null, t.observerRemoved && t.observerRemoved(n, e);
  }
}
const ki = (t, e, i) => Object.defineProperty(t, e, {
  value: i,
  writable: !0,
  configurable: !0
}), je = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Vn = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Mt = new RegExp(`(${je.source})(%|[a-z]+)`, "i");
let it;
const In = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, jn = (t, e, i, n, o) => `rgba(${Math.round(e)}, ${Math.round(i)}, ${Math.round(n)}, ${o})`, zi = (t) => {
  it || (it = J ? new RegExp(`(${Object.keys(J).join("|")})(?!\\w)`, "g") : /^\b$/);
  const e = t.output.map((s) => E(s).replace(Vn, Lt).replace(it, Lt)), i = e.map((s) => s.match(je).map(Number)), o = i[0].map((s, r) => i.map((l) => {
    if (!(r in l))
      throw Error('The arity of each "output" value must be equal');
    return l[r];
  })).map((s) => Ee(ut({}, t, {
    output: s
  })));
  return (s) => {
    var r;
    const l = !Mt.test(e[0]) && ((r = e.find((c) => Mt.test(c))) == null ? void 0 : r.replace(je, ""));
    let a = 0;
    return e[0].replace(je, () => `${o[a++](s)}${l || ""}`).replace(In, jn);
  };
}, Nt = "react-spring: ", Ni = (t) => {
  const e = t;
  let i = !1;
  if (typeof e != "function")
    throw new TypeError(`${Nt}once requires a function parameter`);
  return (...n) => {
    i || (e(...n), i = !0);
  };
}, Ln = Ni(console.warn);
function Hn() {
  Ln(`${Nt}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const Mn = Ni(console.warn);
function Dn() {
  Mn(`${Nt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Xe(t) {
  return f.str(t) && (t[0] == "#" || /\d/.test(t) || t in (J || {}));
}
const St = (t) => ae(t, Bn), Bn = [];
function Si() {
  const t = ne()[1], e = ne(Un)[0];
  return St(e.unmount), () => {
    e.current && t({});
  };
}
function Un() {
  const t = {
    current: !0,
    unmount: () => () => {
      t.current = !1;
    }
  };
  return t;
}
function qn(t, e) {
  const [i] = ne(() => ({
    inputs: e,
    result: t()
  })), n = H(), o = n.current;
  let s = o;
  return s ? s.inputs && Qn(e, s.inputs) || (s = {
    inputs: e,
    result: t()
  }) : s = i, ae(() => {
    n.current = s, o == i && (i.inputs = i.result = void 0);
  }, [s]), s.result;
}
function Qn(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let i = 0; i < t.length; i++)
    if (t[i] !== e[i])
      return !1;
  return !0;
}
function Dt(t) {
  const e = H();
  return ae(() => {
    e.current = t;
  }), e.current;
}
const Ci = typeof window < "u" && window.document && window.document.createElement ? Pe.useLayoutEffect : Pe.useEffect, Te = Symbol.for("Animated:node"), Gn = (t) => !!t && t[Te] === t, j = (t) => t && t[Te], Ct = (t, e) => bn(t, Te, e), Ke = (t) => t && t[Te] && t[Te].getPayload();
class Pi {
  constructor() {
    this.payload = void 0, Ct(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class _e extends Pi {
  constructor(e) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = e, f.num(this._value) && (this.lastPosition = this._value);
  }
  static create(e) {
    return new _e(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, i) {
    return f.num(e) && (this.lastPosition = e, i && (e = Math.round(e / i) * i, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const {
      done: e
    } = this;
    this.done = !1, f.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}
class me extends _e {
  constructor(e) {
    super(0), this._string = null, this._toString = void 0, this._toString = Ee({
      output: [e, e]
    });
  }
  static create(e) {
    return new me(e);
  }
  getValue() {
    let e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (f.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = Ee({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}
const De = {
  dependencies: null
};
class Je extends Pi {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const i = {};
    return D(this.source, (n, o) => {
      Gn(n) ? i[o] = n.getValue(e) : R(n) ? i[o] = E(n) : e || (i[o] = n);
    }), i;
  }
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && y(this.payload, (e) => e.reset());
  }
  _makePayload(e) {
    if (e) {
      const i = /* @__PURE__ */ new Set();
      return D(e, this._addToPayload, i), Array.from(i);
    }
  }
  _addToPayload(e) {
    De.dependencies && R(e) && De.dependencies.add(e);
    const i = Ke(e);
    i && y(i, (n) => this.add(n));
  }
}
class Pt extends Je {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new Pt(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const i = this.getPayload();
    return e.length == i.length ? i.map((n, o) => n.setValue(e[o])).some(Boolean) : (super.setValue(e.map(Wn)), !0);
  }
}
function Wn(t) {
  return (Xe(t) ? me : _e).create(t);
}
function ht(t) {
  const e = j(t);
  return e ? e.constructor : f.arr(t) ? Pt : Xe(t) ? me : _e;
}
function Be() {
  return Be = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, Be.apply(this, arguments);
}
const Bt = (t, e) => {
  const i = !f.fun(t) || t.prototype && t.prototype.isReactComponent;
  return Qi((n, o) => {
    const s = H(null), r = i && q((h) => {
      s.current = Kn(o, h);
    }, [o]), [l, a] = Xn(n, e), c = Si(), u = () => {
      const h = s.current;
      if (i && !h)
        return;
      (h ? e.applyAnimatedValues(h, l.getValue(!0)) : !1) === !1 && c();
    }, d = new Zn(u, a), g = H();
    Ci(() => {
      const h = g.current;
      g.current = d, y(a, (p) => pe(p, d)), h && (y(h.deps, (p) => $e(p, h)), b.cancel(h.update));
    }), ae(u, []), St(() => () => {
      const h = g.current;
      y(h.deps, (p) => $e(p, h));
    });
    const w = e.getComponentProps(l.getValue());
    return Pe.createElement(t, Be({}, w, {
      ref: r
    }));
  });
};
class Zn {
  constructor(e, i) {
    this.update = e, this.deps = i;
  }
  eventObserved(e) {
    e.type == "change" && b.write(this.update);
  }
}
function Xn(t, e) {
  const i = /* @__PURE__ */ new Set();
  return De.dependencies = i, t.style && (t = Be({}, t, {
    style: e.createAnimatedStyle(t.style)
  })), t = new Je(t), De.dependencies = null, [t, i];
}
function Kn(t, e) {
  return t && (f.fun(t) ? t(e) : t.current = e), e;
}
const Ut = Symbol.for("AnimatedComponent"), Jn = (t, {
  applyAnimatedValues: e = () => !1,
  createAnimatedStyle: i = (o) => new Je(o),
  getComponentProps: n = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: e,
    createAnimatedStyle: i,
    getComponentProps: n
  }, s = (r) => {
    const l = qt(r) || "Anonymous";
    return f.str(r) ? r = s[r] || (s[r] = Bt(r, o)) : r = r[Ut] || (r[Ut] = Bt(r, o)), r.displayName = `Animated(${l})`, r;
  };
  return D(t, (r, l) => {
    f.arr(t) && (l = qt(r)), s[l] = s(r);
  }), {
    animated: s
  };
}, qt = (t) => f.str(t) ? t : t && f.str(t.displayName) ? t.displayName : f.fun(t) && t.name || null;
function S() {
  return S = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, S.apply(this, arguments);
}
function ee(t, ...e) {
  return f.fun(t) ? t(...e) : t;
}
const Se = (t, e) => t === !0 || !!(e && t && (f.fun(t) ? t(e) : T(t).includes(e))), Ei = (t, e) => f.obj(t) ? e && t[e] : t, Ai = (t, e) => t.default === !0 ? t[e] : t.default ? t.default[e] : void 0, Yn = (t) => t, Et = (t, e = Yn) => {
  let i = eo;
  t.default && t.default !== !0 && (t = t.default, i = Object.keys(t));
  const n = {};
  for (const o of i) {
    const s = e(t[o], o);
    f.und(s) || (n[o] = s);
  }
  return n;
}, eo = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], to = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function io(t) {
  const e = {};
  let i = 0;
  if (D(t, (n, o) => {
    to[o] || (e[o] = n, i++);
  }), i)
    return e;
}
function $i(t) {
  const e = io(t);
  if (e) {
    const i = {
      to: e
    };
    return D(t, (n, o) => o in e || (i[o] = n)), i;
  }
  return S({}, t);
}
function Oe(t) {
  return t = E(t), f.arr(t) ? t.map(Oe) : Xe(t) ? B.createStringInterpolator({
    range: [0, 1],
    output: [t, t]
  })(1) : t;
}
function no(t) {
  for (const e in t) return !0;
  return !1;
}
function mt(t) {
  return f.fun(t) || f.arr(t) && f.obj(t[0]);
}
function oo(t, e) {
  var i;
  (i = t.ref) == null || i.delete(t), e == null || e.delete(t);
}
function so(t, e) {
  if (e && t.ref !== e) {
    var i;
    (i = t.ref) == null || i.delete(t), e.add(t), t.ref = e;
  }
}
const ro = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
}, ao = (t) => t, gt = S({}, ro.default, {
  mass: 1,
  damping: 1,
  easing: ao,
  clamp: !1
});
class lo {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, gt);
  }
}
function co(t, e, i) {
  i && (i = S({}, i), Qt(i, e), e = S({}, i, e)), Qt(t, e), Object.assign(t, e);
  for (const r in gt)
    t[r] == null && (t[r] = gt[r]);
  let {
    mass: n,
    frequency: o,
    damping: s
  } = t;
  return f.und(o) || (o < 0.01 && (o = 0.01), s < 0 && (s = 0), t.tension = Math.pow(2 * Math.PI / o, 2) * n, t.friction = 4 * Math.PI * s * n / o), t;
}
function Qt(t, e) {
  if (!f.und(e.decay))
    t.duration = void 0;
  else {
    const i = !f.und(e.tension) || !f.und(e.friction);
    (i || !f.und(e.frequency) || !f.und(e.damping) || !f.und(e.mass)) && (t.duration = void 0, t.decay = void 0), i && (t.frequency = void 0);
  }
}
const Gt = [];
class fo {
  constructor() {
    this.changed = !1, this.values = Gt, this.toValues = null, this.fromValues = Gt, this.to = void 0, this.from = void 0, this.config = new lo(), this.immediate = !1;
  }
}
function Ti(t, {
  key: e,
  props: i,
  defaultProps: n,
  state: o,
  actions: s
}) {
  return new Promise((r, l) => {
    var a;
    let c, u, d = Se((a = i.cancel) != null ? a : n == null ? void 0 : n.cancel, e);
    if (d)
      h();
    else {
      f.und(i.pause) || (o.paused = Se(i.pause, e));
      let p = n == null ? void 0 : n.pause;
      p !== !0 && (p = o.paused || Se(p, e)), c = ee(i.delay || 0, e), p ? (o.resumeQueue.add(w), s.pause()) : (s.resume(), w());
    }
    function g() {
      o.resumeQueue.add(w), o.timeouts.delete(u), u.cancel(), c = u.time - b.now();
    }
    function w() {
      c > 0 && !B.skipAnimation ? (u = b.setTimeout(h, c), o.pauseQueue.add(g), o.timeouts.add(u)) : h();
    }
    function h() {
      o.pauseQueue.delete(g), o.timeouts.delete(u), t <= (o.cancelId || 0) && (d = !0);
      try {
        s.start(S({}, i, {
          callId: t,
          cancel: d
        }), r);
      } catch (p) {
        l(p);
      }
    }
  });
}
const At = (t, e) => e.length == 1 ? e[0] : e.some((i) => i.cancelled) ? ue(t.get()) : e.every((i) => i.noop) ? Oi(t.get()) : V(t.get(), e.every((i) => i.finished)), Oi = (t) => ({
  value: t,
  noop: !0,
  finished: !0,
  cancelled: !1
}), V = (t, e, i = !1) => ({
  value: t,
  finished: e,
  cancelled: i
}), ue = (t) => ({
  value: t,
  cancelled: !0,
  finished: !1
});
function Ri(t, e, i, n) {
  const {
    callId: o,
    parentId: s,
    onRest: r
  } = e, {
    asyncTo: l,
    promise: a
  } = i;
  return !s && t === l && !e.reset ? a : i.promise = (async () => {
    i.asyncId = o, i.asyncTo = t;
    const c = Et(e, (m, v) => v === "onRest" ? void 0 : m);
    let u, d;
    const g = new Promise((m, v) => (u = m, d = v)), w = (m) => {
      const v = o <= (i.cancelId || 0) && ue(n) || o !== i.asyncId && V(n, !1);
      if (v)
        throw m.result = v, d(m), m;
    }, h = (m, v) => {
      const x = new Wt(), _ = new Zt();
      return (async () => {
        if (B.skipAnimation)
          throw Re(i), _.result = V(n, !1), d(_), _;
        w(x);
        const k = f.obj(m) ? S({}, m) : S({}, v, {
          to: m
        });
        k.parentId = o, D(c, (C, Q) => {
          f.und(k[Q]) && (k[Q] = C);
        });
        const N = await n.start(k);
        return w(x), i.paused && await new Promise((C) => {
          i.resumeQueue.add(C);
        }), N;
      })();
    };
    let p;
    if (B.skipAnimation)
      return Re(i), V(n, !1);
    try {
      let m;
      f.arr(t) ? m = (async (v) => {
        for (const x of v)
          await h(x);
      })(t) : m = Promise.resolve(t(h, n.stop.bind(n))), await Promise.all([m.then(u), g]), p = V(n.get(), !0, !1);
    } catch (m) {
      if (m instanceof Wt)
        p = m.result;
      else if (m instanceof Zt)
        p = m.result;
      else
        throw m;
    } finally {
      o == i.asyncId && (i.asyncId = s, i.asyncTo = s ? l : void 0, i.promise = s ? a : void 0);
    }
    return f.fun(r) && b.batchedUpdates(() => {
      r(p, n, n.item);
    }), p;
  })();
}
function Re(t, e) {
  ze(t.timeouts, (i) => i.cancel()), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e);
}
class Wt extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class Zt extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const pt = (t) => t instanceof $t;
let uo = 1;
class $t extends wi {
  constructor(...e) {
    super(...e), this.id = uo++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  get() {
    const e = j(this);
    return e && e.getValue();
  }
  to(...e) {
    return B.to(this, e);
  }
  interpolate(...e) {
    return Hn(), B.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(e, i = !1) {
    Ae(this, {
      type: "change",
      parent: this,
      value: e,
      idle: i
    });
  }
  _onPriorityChange(e) {
    this.idle || We.sort(this), Ae(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}
const re = Symbol.for("SpringPhase"), Fi = 1, Vi = 2, Ii = 4, nt = (t) => (t[re] & Fi) > 0, Z = (t) => (t[re] & Vi) > 0, xe = (t) => (t[re] & Ii) > 0, Xt = (t, e) => e ? t[re] |= Vi | Fi : t[re] &= -3, Kt = (t, e) => e ? t[re] |= Ii : t[re] &= -5;
class ho extends $t {
  constructor(e, i) {
    if (super(), this.key = void 0, this.animation = new fo(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !f.und(e) || !f.und(i)) {
      const n = f.obj(e) ? S({}, e) : S({}, i, {
        from: e
      });
      f.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  get idle() {
    return !(Z(this) || this._state.asyncTo) || xe(this);
  }
  get goal() {
    return E(this.animation.to);
  }
  get velocity() {
    const e = j(this);
    return e instanceof _e ? e.lastVelocity || 0 : e.getPayload().map((i) => i.lastVelocity || 0);
  }
  get hasAnimated() {
    return nt(this);
  }
  get isAnimating() {
    return Z(this);
  }
  get isPaused() {
    return xe(this);
  }
  advance(e) {
    let i = !0, n = !1;
    const o = this.animation;
    let {
      config: s,
      toValues: r
    } = o;
    const l = Ke(o.to);
    !l && R(o.to) && (r = T(E(o.to))), o.values.forEach((u, d) => {
      if (u.done) return;
      const g = u.constructor == me ? 1 : l ? l[d].lastPosition : r[d];
      let w = o.immediate, h = g;
      if (!w) {
        if (h = u.lastPosition, s.tension <= 0) {
          u.done = !0;
          return;
        }
        let p = u.elapsedTime += e;
        const m = o.fromValues[d], v = u.v0 != null ? u.v0 : u.v0 = f.arr(s.velocity) ? s.velocity[d] : s.velocity;
        let x;
        if (f.und(s.duration))
          if (s.decay) {
            const _ = s.decay === !0 ? 0.998 : s.decay, k = Math.exp(-(1 - _) * p);
            h = m + v / (1 - _) * (1 - k), w = Math.abs(u.lastPosition - h) < 0.1, x = v * k;
          } else {
            x = u.lastVelocity == null ? v : u.lastVelocity;
            const _ = s.precision || (m == g ? 5e-3 : Math.min(1, Math.abs(g - m) * 1e-3)), k = s.restVelocity || _ / 10, N = s.clamp ? 0 : s.bounce, C = !f.und(N), Q = m == g ? u.v0 > 0 : m < g;
            let A, le = !1;
            const P = 1, Y = Math.ceil(e / P);
            for (let O = 0; O < Y && (A = Math.abs(x) > k, !(!A && (w = Math.abs(g - h) <= _, w))); ++O) {
              C && (le = h == g || h > g == Q, le && (x = -x * N, h = g));
              const G = -s.tension * 1e-6 * (h - g), be = -s.friction * 1e-3 * x, W = (G + be) / s.mass;
              x = x + W * P, h = h + x * P;
            }
          }
        else {
          let _ = 1;
          s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, u.durationProgress > 0 && (u.elapsedTime = s.duration * u.durationProgress, p = u.elapsedTime += e)), _ = (s.progress || 0) + p / this._memoizedDuration, _ = _ > 1 ? 1 : _ < 0 ? 0 : _, u.durationProgress = _), h = m + s.easing(_) * (g - m), x = (h - u.lastPosition) / e, w = _ == 1;
        }
        u.lastVelocity = x, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), w = !0);
      }
      l && !l[d].done && (w = !1), w ? u.done = !0 : i = !1, u.setValue(h, s.round) && (n = !0);
    });
    const a = j(this), c = a.getValue();
    if (i) {
      const u = E(o.to);
      (c !== u || n) && !s.decay ? (a.setValue(u), this._onChange(u)) : n && s.decay && this._onChange(c), this._stop();
    } else n && this._onChange(c);
  }
  set(e) {
    return b.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
    }), this;
  }
  pause() {
    this._update({
      pause: !0
    });
  }
  resume() {
    this._update({
      pause: !1
    });
  }
  finish() {
    if (Z(this)) {
      const {
        to: e,
        config: i
      } = this.animation;
      b.batchedUpdates(() => {
        this._onStart(), i.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, i) {
    let n;
    return f.und(e) ? (n = this.queue || [], this.queue = []) : n = [f.obj(e) ? e : S({}, i, {
      to: e
    })], Promise.all(n.map((o) => this._update(o))).then((o) => At(this, o));
  }
  stop(e) {
    const {
      to: i
    } = this.animation;
    return this._focus(this.get()), Re(this._state, e && this._lastCallId), b.batchedUpdates(() => this._stop(i, e)), this;
  }
  reset() {
    this._update({
      reset: !0
    });
  }
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  _prepareNode(e) {
    const i = this.key || "";
    let {
      to: n,
      from: o
    } = e;
    n = f.obj(n) ? n[i] : n, (n == null || mt(n)) && (n = void 0), o = f.obj(o) ? o[i] : o, o == null && (o = void 0);
    const s = {
      to: n,
      from: o
    };
    return nt(this) || (e.reverse && ([n, o] = [o, n]), o = E(o), f.und(o) ? j(this) || this._set(n) : this._set(o)), s;
  }
  _update(e, i) {
    let n = S({}, e);
    const {
      key: o,
      defaultProps: s
    } = this;
    n.default && Object.assign(s, Et(n, (a, c) => /^on/.test(c) ? Ei(a, o) : a)), Yt(this, n, "onProps"), ye(this, "onProps", n, this);
    const r = this._prepareNode(n);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const l = this._state;
    return Ti(++this._lastCallId, {
      key: o,
      props: n,
      defaultProps: s,
      state: l,
      actions: {
        pause: () => {
          xe(this) || (Kt(this, !0), ke(l.pauseQueue), ye(this, "onPause", V(this, ve(this, this.animation.to)), this));
        },
        resume: () => {
          xe(this) && (Kt(this, !1), Z(this) && this._resume(), ke(l.resumeQueue), ye(this, "onResume", V(this, ve(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, r)
      }
    }).then((a) => {
      if (n.loop && a.finished && !(i && a.noop)) {
        const c = ji(n);
        if (c)
          return this._update(c, !0);
      }
      return a;
    });
  }
  _merge(e, i, n) {
    if (i.cancel)
      return this.stop(!0), n(ue(this));
    const o = !f.und(e.to), s = !f.und(e.from);
    if (o || s)
      if (i.callId > this._lastToId)
        this._lastToId = i.callId;
      else
        return n(ue(this));
    const {
      key: r,
      defaultProps: l,
      animation: a
    } = this, {
      to: c,
      from: u
    } = a;
    let {
      to: d = c,
      from: g = u
    } = e;
    s && !o && (!i.default || f.und(d)) && (d = g), i.reverse && ([d, g] = [g, d]);
    const w = !U(g, u);
    w && (a.from = g), g = E(g);
    const h = !U(d, c);
    h && this._focus(d);
    const p = mt(i.to), {
      config: m
    } = a, {
      decay: v,
      velocity: x
    } = m;
    (o || s) && (m.velocity = 0), i.config && !p && co(m, ee(i.config, r), i.config !== l.config ? ee(l.config, r) : void 0);
    let _ = j(this);
    if (!_ || f.und(d))
      return n(V(this, !0));
    const k = f.und(i.reset) ? s && !i.default : !f.und(g) && Se(i.reset, r), N = k ? g : this.get(), C = Oe(d), Q = f.num(C) || f.arr(C) || Xe(C), A = !p && (!Q || Se(l.immediate || i.immediate, r));
    if (h) {
      const O = ht(d);
      if (O !== _.constructor)
        if (A)
          _ = this._set(C);
        else throw Error(`Cannot animate between ${_.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    const le = _.constructor;
    let P = R(d), Y = !1;
    if (!P) {
      const O = k || !nt(this) && w;
      (h || O) && (Y = U(Oe(N), C), P = !Y), (!U(a.immediate, A) && !A || !U(m.decay, v) || !U(m.velocity, x)) && (P = !0);
    }
    if (Y && Z(this) && (a.changed && !k ? P = !0 : P || this._stop(c)), !p && ((P || R(c)) && (a.values = _.getPayload(), a.toValues = R(d) ? null : le == me ? [1] : T(C)), a.immediate != A && (a.immediate = A, !A && !k && this._set(c)), P)) {
      const {
        onRest: O
      } = a;
      y(go, (be) => Yt(this, i, be));
      const G = V(this, ve(this, c));
      ke(this._pendingCalls, G), this._pendingCalls.add(n), a.changed && b.batchedUpdates(() => {
        a.changed = !k, O == null || O(G, this), k ? ee(l.onRest, G) : a.onStart == null || a.onStart(G, this);
      });
    }
    k && this._set(N), p ? n(Ri(i.to, i, this._state, this)) : P ? this._start() : Z(this) && !h ? this._pendingCalls.add(n) : n(Oi(N));
  }
  _focus(e) {
    const i = this.animation;
    e !== i.to && (Ht(this) && this._detach(), i.to = e, Ht(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const {
      to: i
    } = this.animation;
    R(i) && (pe(i, this), pt(i) && (e = i.priority + 1)), this.priority = e;
  }
  _detach() {
    const {
      to: e
    } = this.animation;
    R(e) && $e(e, this);
  }
  _set(e, i = !0) {
    const n = E(e);
    if (!f.und(n)) {
      const o = j(this);
      if (!o || !U(n, o.getValue())) {
        const s = ht(n);
        !o || o.constructor != s ? Ct(this, s.create(n)) : o.setValue(n), o && b.batchedUpdates(() => {
          this._onChange(n, i);
        });
      }
    }
    return j(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, ye(this, "onStart", V(this, ve(this, e.to)), this));
  }
  _onChange(e, i) {
    i || (this._onStart(), ee(this.animation.onChange, e, this)), ee(this.defaultProps.onChange, e, this), super._onChange(e, i);
  }
  _start() {
    const e = this.animation;
    j(this).reset(E(e.to)), e.immediate || (e.fromValues = e.values.map((i) => i.lastPosition)), Z(this) || (Xt(this, !0), xe(this) || this._resume());
  }
  _resume() {
    B.skipAnimation ? this.finish() : We.start(this);
  }
  _stop(e, i) {
    if (Z(this)) {
      Xt(this, !1);
      const n = this.animation;
      y(n.values, (s) => {
        s.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ae(this, {
        type: "idle",
        parent: this
      });
      const o = i ? ue(this.get()) : V(this.get(), ve(this, e ?? n.to));
      ke(this._pendingCalls, o), n.changed && (n.changed = !1, ye(this, "onRest", o, this));
    }
  }
}
function ve(t, e) {
  const i = Oe(e), n = Oe(t.get());
  return U(n, i);
}
function ji(t, e = t.loop, i = t.to) {
  let n = ee(e);
  if (n) {
    const o = n !== !0 && $i(n), s = (o || t).reverse, r = !o || o.reset;
    return Fe(S({}, t, {
      loop: e,
      default: !1,
      pause: void 0,
      to: !s || mt(i) ? i : void 0,
      from: r ? t.from : void 0,
      reset: r
    }, o));
  }
}
function Fe(t) {
  const {
    to: e,
    from: i
  } = t = $i(t), n = /* @__PURE__ */ new Set();
  return f.obj(e) && Jt(e, n), f.obj(i) && Jt(i, n), t.keys = n.size ? Array.from(n) : null, t;
}
function mo(t) {
  const e = Fe(t);
  return f.und(e.default) && (e.default = Et(e)), e;
}
function Jt(t, e) {
  D(t, (i, n) => i != null && e.add(n));
}
const go = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Yt(t, e, i) {
  t.animation[i] = e[i] !== Ai(e, i) ? Ei(e[i], t.key) : void 0;
}
function ye(t, e, ...i) {
  var n, o, s, r;
  (n = (o = t.animation)[e]) == null || n.call(o, ...i), (s = (r = t.defaultProps)[e]) == null || s.call(r, ...i);
}
const po = ["onStart", "onChange", "onRest"];
let _o = 1;
class bo {
  constructor(e, i) {
    this.id = _o++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), i && (this._flush = i), e && this.start(S({
      default: !0
    }, e));
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle);
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e;
  }
  get() {
    const e = {};
    return this.each((i, n) => e[n] = i.get()), e;
  }
  set(e) {
    for (const i in e) {
      const n = e[i];
      f.und(n) || this.springs[i].set(n);
    }
  }
  update(e) {
    return e && this.queue.push(Fe(e)), this;
  }
  start(e) {
    let {
      queue: i
    } = this;
    return e ? i = T(e).map(Fe) : this.queue = [], this._flush ? this._flush(this, i) : (Bi(this, i), _t(this, i));
  }
  stop(e, i) {
    if (e !== !!e && (i = e), i) {
      const n = this.springs;
      y(T(i), (o) => n[o].stop(!!e));
    } else
      Re(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (f.und(e))
      this.start({
        pause: !0
      });
    else {
      const i = this.springs;
      y(T(e), (n) => i[n].pause());
    }
    return this;
  }
  resume(e) {
    if (f.und(e))
      this.start({
        pause: !1
      });
    else {
      const i = this.springs;
      y(T(e), (n) => i[n].resume());
    }
    return this;
  }
  each(e) {
    D(this.springs, e);
  }
  _onFrame() {
    const {
      onStart: e,
      onChange: i,
      onRest: n
    } = this._events, o = this._active.size > 0, s = this._changed.size > 0;
    (o && !this._started || s && !this._started) && (this._started = !0, ze(e, ([a, c]) => {
      c.value = this.get(), a(c, this, this._item);
    }));
    const r = !o && this._started, l = s || r && n.size ? this.get() : null;
    s && i.size && ze(i, ([a, c]) => {
      c.value = l, a(c, this, this._item);
    }), r && (this._started = !1, ze(n, ([a, c]) => {
      c.value = l, a(c, this, this._item);
    }));
  }
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else return;
    b.onFrame(this._onFrame);
  }
}
function _t(t, e) {
  return Promise.all(e.map((i) => Li(t, i))).then((i) => At(t, i));
}
async function Li(t, e, i) {
  const {
    keys: n,
    to: o,
    from: s,
    loop: r,
    onRest: l,
    onResolve: a
  } = e, c = f.obj(e.default) && e.default;
  r && (e.loop = !1), o === !1 && (e.to = null), s === !1 && (e.from = null);
  const u = f.arr(o) || f.fun(o) ? o : void 0;
  u ? (e.to = void 0, e.onRest = void 0, c && (c.onRest = void 0)) : y(po, (p) => {
    const m = e[p];
    if (f.fun(m)) {
      const v = t._events[p];
      e[p] = ({
        finished: x,
        cancelled: _
      }) => {
        const k = v.get(m);
        k ? (x || (k.finished = !1), _ && (k.cancelled = !0)) : v.set(m, {
          value: null,
          finished: x || !1,
          cancelled: _ || !1
        });
      }, c && (c[p] = e[p]);
    }
  });
  const d = t._state;
  e.pause === !d.paused ? (d.paused = e.pause, ke(e.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (e.pause = !0);
  const g = (n || Object.keys(t.springs)).map((p) => t.springs[p].start(e)), w = e.cancel === !0 || Ai(e, "cancel") === !0;
  (u || w && d.asyncId) && g.push(Ti(++t._lastAsyncId, {
    props: e,
    state: d,
    actions: {
      pause: ft,
      resume: ft,
      start(p, m) {
        w ? (Re(d, t._lastAsyncId), m(ue(t))) : (p.onRest = l, m(Ri(u, p, d, t)));
      }
    }
  })), d.paused && await new Promise((p) => {
    d.resumeQueue.add(p);
  });
  const h = At(t, await Promise.all(g));
  if (r && h.finished && !(i && h.noop)) {
    const p = ji(e, r, o);
    if (p)
      return Bi(t, [p]), Li(t, p, !0);
  }
  return a && b.batchedUpdates(() => a(h, t, t.item)), h;
}
function ei(t, e) {
  const i = S({}, t.springs);
  return e && y(T(e), (n) => {
    f.und(n.keys) && (n = Fe(n)), f.obj(n.to) || (n = S({}, n, {
      to: void 0
    })), Di(i, n, (o) => Mi(o));
  }), Hi(t, i), i;
}
function Hi(t, e) {
  D(e, (i, n) => {
    t.springs[n] || (t.springs[n] = i, pe(i, t));
  });
}
function Mi(t, e) {
  const i = new ho();
  return i.key = t, e && pe(i, e), i;
}
function Di(t, e, i) {
  e.keys && y(e.keys, (n) => {
    (t[n] || (t[n] = i(n)))._prepareNode(e);
  });
}
function Bi(t, e) {
  y(e, (i) => {
    Di(t.springs, i, (n) => Mi(n, t));
  });
}
function xo(t, e) {
  if (t == null) return {};
  var i = {}, n = Object.keys(t), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(e.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
const vo = ["children"], Ye = (t) => {
  let {
    children: e
  } = t, i = xo(t, vo);
  const n = li(Ue), o = i.pause || !!n.pause, s = i.immediate || !!n.immediate;
  i = qn(() => ({
    pause: o,
    immediate: s
  }), [o, s]);
  const {
    Provider: r
  } = Ue;
  return Pe.createElement(r, {
    value: i
  }, e);
}, Ue = yo(Ye, {});
Ye.Provider = Ue.Provider;
Ye.Consumer = Ue.Consumer;
function yo(t, e) {
  return Object.assign(t, Pe.createContext(e)), t.Provider._context = t, t.Consumer._context = t, t;
}
const wo = () => {
  const t = [], e = function(o) {
    Dn();
    const s = [];
    return y(t, (r, l) => {
      if (f.und(o))
        s.push(r.start());
      else {
        const a = i(o, r, l);
        a && s.push(r.start(a));
      }
    }), s;
  };
  e.current = t, e.add = function(n) {
    t.includes(n) || t.push(n);
  }, e.delete = function(n) {
    const o = t.indexOf(n);
    ~o && t.splice(o, 1);
  }, e.pause = function() {
    return y(t, (n) => n.pause(...arguments)), this;
  }, e.resume = function() {
    return y(t, (n) => n.resume(...arguments)), this;
  }, e.set = function(n) {
    y(t, (o) => o.set(n));
  }, e.start = function(n) {
    const o = [];
    return y(t, (s, r) => {
      if (f.und(n))
        o.push(s.start());
      else {
        const l = this._getProps(n, s, r);
        l && o.push(s.start(l));
      }
    }), o;
  }, e.stop = function() {
    return y(t, (n) => n.stop(...arguments)), this;
  }, e.update = function(n) {
    return y(t, (o, s) => o.update(this._getProps(n, o, s))), this;
  };
  const i = function(o, s, r) {
    return f.fun(o) ? o(r, s) : o;
  };
  return e._getProps = i, e;
};
function ko(t, e, i) {
  const n = f.fun(e) && e;
  n && !i && (i = []);
  const o = we(() => n || arguments.length == 3 ? wo() : void 0, []), s = H(0), r = Si(), l = we(() => ({
    ctrls: [],
    queue: [],
    flush(v, x) {
      const _ = ei(v, x);
      return s.current > 0 && !l.queue.length && !Object.keys(_).some((N) => !v.springs[N]) ? _t(v, x) : new Promise((N) => {
        Hi(v, _), l.queue.push(() => {
          N(_t(v, x));
        }), r();
      });
    }
  }), []), a = H([...l.ctrls]), c = [], u = Dt(t) || 0;
  we(() => {
    y(a.current.slice(t, u), (v) => {
      oo(v, o), v.stop(!0);
    }), a.current.length = t, d(u, t);
  }, [t]), we(() => {
    d(0, Math.min(u, t));
  }, i);
  function d(v, x) {
    for (let _ = v; _ < x; _++) {
      const k = a.current[_] || (a.current[_] = new bo(null, l.flush)), N = n ? n(_, k) : e[_];
      N && (c[_] = mo(N));
    }
  }
  const g = a.current.map((v, x) => ei(v, c[x])), w = li(Ye), h = Dt(w), p = w !== h && no(w);
  Ci(() => {
    s.current++, l.ctrls = a.current;
    const {
      queue: v
    } = l;
    v.length && (l.queue = [], y(v, (x) => x())), y(a.current, (x, _) => {
      o == null || o.add(x), p && x.start({
        default: w
      });
      const k = c[_];
      k && (so(x, k.ref), x.ref ? x.queue.push(k) : x.start(k));
    });
  }), St(() => () => {
    y(l.ctrls, (v) => v.stop(!0));
  });
  const m = g.map((v) => S({}, v));
  return o ? [m, o] : m;
}
function ti(t, e) {
  const i = f.fun(t), [[n], o] = ko(1, i ? t : [t], i ? [] : e);
  return i || arguments.length == 2 ? [n, o] : n;
}
let ii;
(function(t) {
  t.MOUNT = "mount", t.ENTER = "enter", t.UPDATE = "update", t.LEAVE = "leave";
})(ii || (ii = {}));
class zo extends $t {
  constructor(e, i) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = e, this.calc = Ee(...i);
    const n = this._get(), o = ht(n);
    Ct(this, o.create(n));
  }
  advance(e) {
    const i = this._get(), n = this.get();
    U(i, n) || (j(this).setValue(i), this._onChange(i, this.idle)), !this.idle && ni(this._active) && ot(this);
  }
  _get() {
    const e = f.arr(this.source) ? this.source.map(E) : T(E(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !ni(this._active) && (this.idle = !1, y(Ke(this), (e) => {
      e.done = !1;
    }), B.skipAnimation ? (b.batchedUpdates(() => this.advance()), ot(this)) : We.start(this));
  }
  _attach() {
    let e = 1;
    y(T(this.source), (i) => {
      R(i) && pe(i, this), pt(i) && (i.idle || this._active.add(i), e = Math.max(e, i.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    y(T(this.source), (e) => {
      R(e) && $e(e, this);
    }), this._active.clear(), ot(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = T(this.source).reduce((i, n) => Math.max(i, (pt(n) ? n.priority : 0) + 1), 0));
  }
}
function No(t) {
  return t.idle !== !1;
}
function ni(t) {
  return !t.size || Array.from(t).every(No);
}
function ot(t) {
  t.idle || (t.idle = !0, y(Ke(t), (e) => {
    e.done = !0;
  }), Ae(t, {
    type: "idle",
    parent: t
  }));
}
B.assign({
  createStringInterpolator: zi,
  to: (t, e) => new zo(t, e)
});
function Tt(t, e) {
  if (t == null) return {};
  var i = {}, n = Object.keys(t), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(e.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
const So = ["style", "children", "scrollTop", "scrollLeft"], Ui = /^--/;
function Co(t, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !Ui.test(t) && !(Ce.hasOwnProperty(t) && Ce[t]) ? e + "px" : ("" + e).trim();
}
const oi = {};
function Po(t, e) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  const i = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", n = e, {
    style: o,
    children: s,
    scrollTop: r,
    scrollLeft: l
  } = n, a = Tt(n, So), c = Object.values(a), u = Object.keys(a).map((d) => i || t.hasAttribute(d) ? d : oi[d] || (oi[d] = d.replace(/([A-Z])/g, (g) => "-" + g.toLowerCase())));
  s !== void 0 && (t.textContent = s);
  for (let d in o)
    if (o.hasOwnProperty(d)) {
      const g = Co(d, o[d]);
      Ui.test(d) ? t.style.setProperty(d, g) : t.style[d] = g;
    }
  u.forEach((d, g) => {
    t.setAttribute(d, c[g]);
  }), r !== void 0 && (t.scrollTop = r), l !== void 0 && (t.scrollLeft = l);
}
let Ce = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
const Eo = (t, e) => t + e.charAt(0).toUpperCase() + e.substring(1), Ao = ["Webkit", "Ms", "Moz", "O"];
Ce = Object.keys(Ce).reduce((t, e) => (Ao.forEach((i) => t[Eo(i, e)] = t[e]), t), Ce);
const $o = ["x", "y", "z"], To = /^(matrix|translate|scale|rotate|skew)/, Oo = /^(translate)/, Ro = /^(rotate|skew)/, st = (t, e) => f.num(t) && t !== 0 ? t + e : t, Le = (t, e) => f.arr(t) ? t.every((i) => Le(i, e)) : f.num(t) ? t === e : parseFloat(t) === e;
class Fo extends Je {
  constructor(e) {
    let {
      x: i,
      y: n,
      z: o
    } = e, s = Tt(e, $o);
    const r = [], l = [];
    (i || n || o) && (r.push([i || 0, n || 0, o || 0]), l.push((a) => [`translate3d(${a.map((c) => st(c, "px")).join(",")})`, Le(a, 0)])), D(s, (a, c) => {
      if (c === "transform")
        r.push([a || ""]), l.push((u) => [u, u === ""]);
      else if (To.test(c)) {
        if (delete s[c], f.und(a)) return;
        const u = Oo.test(c) ? "px" : Ro.test(c) ? "deg" : "";
        r.push(T(a)), l.push(c === "rotate3d" ? ([d, g, w, h]) => [`rotate3d(${d},${g},${w},${st(h, u)})`, Le(h, 0)] : (d) => [`${c}(${d.map((g) => st(g, u)).join(",")})`, Le(d, c.startsWith("scale") ? 1 : 0)]);
      }
    }), r.length && (s.transform = new Vo(r, l)), super(s);
  }
}
class Vo extends wi {
  constructor(e, i) {
    super(), this._value = null, this.inputs = e, this.transforms = i;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", i = !0;
    return y(this.inputs, (n, o) => {
      const s = E(n[0]), [r, l] = this.transforms[o](f.arr(s) ? s : n.map(E));
      e += " " + r, i = i && l;
    }), i ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && y(this.inputs, (i) => y(i, (n) => R(n) && pe(n, this)));
  }
  observerRemoved(e) {
    e == 0 && y(this.inputs, (i) => y(i, (n) => R(n) && $e(n, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Ae(this, e);
  }
}
const Io = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], jo = ["scrollTop", "scrollLeft"];
B.assign({
  batchedUpdates: Gi,
  createStringInterpolator: zi,
  colors: wn
});
const Lo = Jn(Io, {
  applyAnimatedValues: Po,
  createAnimatedStyle: (t) => new Fo(t),
  getComponentProps: (t) => Tt(t, jo)
}), si = Lo.animated;
var te;
(function(t) {
  t.Small = "small", t.Medium = "medium", t.Large = "large";
})(te || (te = {}));
const Ho = { info: Zi, success: Xi, error: Ji, alert: Wi }, ri = ({ visuallyHidden: t, children: e }) => t ? z.createElement(_n, null, e) : e, Mo = z.forwardRef((t, e) => {
  var { autoClose: i = !1, autoCloseDuration: n = 6e3, boxShadow: o = !1, children: s, className: r = "", closeAnimationDuration: l = 85, closeButtonLabelText: a, dismissible: c = !1, displayAutoCloseProgress: u = !0, invisible: d = !1, label: g, notificationAriaLabel: w = "Notification", position: h = "inline", onClose: p = () => null, size: m = te.Medium, style: v, type: x = "info", headingLevel: _ = 2 } = t, k = ge(t, ["autoClose", "autoCloseDuration", "boxShadow", "children", "className", "closeAnimationDuration", "closeButtonLabelText", "dismissible", "displayAutoCloseProgress", "invisible", "label", "notificationAriaLabel", "position", "onClose", "size", "style", "type", "headingLevel"]);
  const N = h !== "inline";
  N && m === te.Large && (console.warn(`Size '${m}' is only allowed for inline positioned notifications`), m = te.Medium), !N && i && (console.warn("The 'autoClose' property is not allowed for inline positioned notifications"), i = !1);
  const [C, Q] = ne(!0), A = q(() => {
    Q(!1), setTimeout(() => p(), l);
  }, [p, l]);
  ae(() => {
    const W = setTimeout(() => {
      i && A();
    }, n);
    return () => clearTimeout(W);
  }, [i, n, A]);
  const le = Ho[x], P = N ? ((W) => {
    const Ot = W.includes("center");
    return { from: { transform: `translate3d(${Ot ? "-50%" : "0"}, ${W.includes("top") ? "-" : ""}32px, 0)`, opacity: 0.66 }, to: { transform: `translate3d(${Ot ? "-50%" : "0"}, 0, 0)`, opacity: 1 }, config: { friction: 30, tension: 300 } };
  })(h) : {}, Y = { from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: l } }, O = u ? /* @__PURE__ */ ((W) => ({ from: { transform: "translate3d(0%, 0, 0)" }, to: { transform: "translate3d(-100%, 0, 0)" }, config: { duration: W } }))(n) : {}, G = ti(C ? P : Y), be = ti(O);
  return z.createElement(ri, { visuallyHidden: d }, z.createElement(si.section, Object.assign({}, k, { style: Object.assign(Object.assign({}, G), v), className: Rt($[h], $.notification, $[m], $[x], i && $.noBorder, o && $.boxShadow, r), "aria-label": w, role: N || d ? "alert" : void 0 }), i && z.createElement(si.div, { style: be, className: $.autoClose }), z.createElement("div", { className: $.content, ref: e }, g && z.createElement("div", Object.assign({ className: $.label }, N || d ? {} : { role: "heading", "aria-level": _ }), z.createElement(le, { className: $.icon }), z.createElement(ri, { visuallyHidden: m === te.Small }, g)), s && z.createElement("div", { className: $.body }, s)), c && z.createElement("button", { className: Rt($.close, $[x]), type: "button", title: a, "aria-label": a, onClick: A }, z.createElement(Ki, null))));
}), Do = (t) => {
  const { notifications: e, closeNotification: i } = t;
  return /* @__PURE__ */ fe(rt, { children: e.map((n) => /* @__PURE__ */ fe("div", { className: "notification-container", children: /* @__PURE__ */ at(
    Mo,
    {
      type: n.level,
      label: n.title,
      dismissible: !0,
      closeButtonLabelText: "Sulje ilmoitus",
      onClose: () => i(n),
      size: te.Medium,
      children: [
        n.content,
        n.external_url && /* @__PURE__ */ at(rt, { children: [
          /* @__PURE__ */ fe("br", {}),
          /* @__PURE__ */ fe("a", { href: n.external_url, children: n.external_url_text || n.external_url })
        ] })
      ]
    }
  ) }, n.id)) });
};
function ai(t = []) {
  const e = localStorage.getItem("closedNotifications");
  let i = e ? JSON.parse(e) : [];
  return i = Bo(t, i), qi(i), i;
}
function Bo(t, e) {
  return t.filter(
    (i) => i.level !== "error"
  ).filter((i) => {
    const n = de(i);
    return e.includes(n);
  }).map((i) => de(i));
}
function de(t) {
  return "".concat(t.modified_at, "#", t.id);
}
function qi(t) {
  localStorage.setItem("closedNotifications", JSON.stringify(t));
}
const Go = (t) => {
  const { notifications: e } = t, [i, n] = ne(ai(e)), [o, s] = ne(() => e.filter(
    (a) => !i.includes(
      de(a)
    )
  ));
  ae(() => {
    const a = ai(e);
    n(a), s(e.filter(
      (c) => !a.includes(
        de(c)
      )
    ));
  }, [e]);
  const r = (a) => {
    const c = de(a);
    i.push(c), qi(i), s(e.filter((u) => !i.includes(de(u))));
  }, l = () => {
    localStorage.removeItem("closedNotifications"), i.splice(0, i.length), s(e);
  };
  return /* @__PURE__ */ at(rt, { children: [
    /* @__PURE__ */ fe(Do, { notifications: o, closeNotification: r }),
    o.length < e.length && /* @__PURE__ */ fe("button", { onClick: () => l(), children: "Näytä kaikki ilmoitukset" })
  ] });
};
export {
  Go as NotificationService
};
