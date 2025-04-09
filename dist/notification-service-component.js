import { jsx as ke, Fragment as ci, jsxs as Et } from "react/jsx-runtime";
import * as Ue from "react";
import E, { isValidElement as Un, useRef as K, useCallback as te, useEffect as J, useState as le, useMemo as we, forwardRef as Bn, useContext as Bt, createContext as Kn, createElement as qn } from "react";
import { unstable_batchedUpdates as Wn } from "react-dom";
import './main.css';function ce(i, e) {
  var t = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(i); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[o]) && (t[n[o]] = i[n[o]]);
  }
  return t;
}
function gt(i, e) {
  e === void 0 && (e = {});
  var t = e.insertAt;
  if (i && typeof document < "u") {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i));
  }
}
var Z;
(function(i) {
  i.ExtraSmall = "extraSmall", i.Small = "small", i.Medium = "medium", i.Large = "large", i.ExtraLarge = "extraLarge";
})(Z || (Z = {}));
var q = { icon: "Icon-module_icon__1Jtzj icon_hds-icon__1YqNC", extraSmall: "Icon-module_extraSmall__3Q7tD icon_hds-icon--size-xs__3dAMZ", small: "Icon-module_small__gTGkU icon_hds-icon--size-s__2Lkik", medium: "Icon-module_medium__1D6Pb icon_hds-icon--size-m__1mcHv", large: "Icon-module_large__28YAW icon_hds-icon--size-l__3Zczy", extraLarge: "Icon-module_extraLarge__27rtn icon_hds-icon--size-xl__1Jes8" };
gt('.icon_hds-icon__1YqNC{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.icon_hds-icon--size-xs__3dAMZ{--icon-size:var(--spacing-layout-2-xs)}.icon_hds-icon--size-s__2Lkik{--icon-size:var(--spacing-layout-xs)}.icon_hds-icon--size-m__1mcHv{--icon-size:var(--spacing-layout-s)}.icon_hds-icon--size-l__3Zczy{--icon-size:var(--spacing-layout-m)}.icon_hds-icon--size-xl__1Jes8{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Icon-module_icon__1Jtzj{background-color:transparent}');
const Qn = (i) => {
  var { "aria-label": e = "alert-circle-fill", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM13 16V18H11V16H13ZM13 6V14H11V6H13Z", fill: "currentColor" }));
}, Gn = (i) => {
  var { "aria-label": e = "info-circle-fill", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM13 10V16.5H15V18H9V16.5H11V11.5H9V10H13ZM11.8125 6C12.5374 6 13.125 6.5876 13.125 7.3125C13.125 8.03735 12.5374 8.625 11.8125 8.625C11.0876 8.625 10.5 8.03735 10.5 7.3125C10.5 6.5876 11.0876 6 11.8125 6Z", fill: "currentColor" }));
}, Zn = (i) => {
  var { "aria-label": e = "check-circle-fill", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.5 8L18 9.5L10.5 17L6 12.5L7.5 11L10.5 14L16.5 8Z", fill: "currentColor" }));
}, Jn = (i) => {
  var { "aria-label": e = "cross", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 7.5L13.5 12L18 16.5L16.5 18L12 13.5L7.5 18L6 16.5L10.5 12L6 7.5L7.5 6L12 10.5L16.5 6L18 7.5Z", fill: "currentColor" }));
}, Yn = (i) => {
  var { "aria-label": e = "error-fill", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.175 3.45608C11.5239 2.86969 12.3977 2.84875 12.7842 3.39325L12.825 3.45608L21.8771 18.6666C22.2202 19.2432 21.8055 19.951 21.1235 19.9976L21.052 20H2.94799C2.24813 20 1.7987 19.3114 2.09013 18.7267L2.12295 18.6666L11.175 3.45608ZM13 16V18H11V16H13ZM13 8.5V14.5H11V8.5H13Z", fill: "currentColor" }));
}, Xn = (i) => {
  var { "aria-label": e = "link-external", "aria-hidden": t = !0, className: n = "", color: o, size: r = Z.Small, style: s = {} } = i, l = ce(i, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return E.createElement("svg", Object.assign({ "aria-label": e, "aria-hidden": t, className: [q.icon, q[r], n].filter((a) => a).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: o, style: s }, l), E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 3V19H21V21H3V3H5ZM21 3V12H19V6.413L9.91421 15.5L8.5 14.0858L17.585 5H12V3H21Z", fill: "currentColor" }));
};
gt(':root{--breakpoint-xs:320px;--breakpoint-s:576px;--breakpoint-m:768px;--breakpoint-l:992px;--breakpoint-xl:1248px;--container-width-xs:288px;--container-width-s:544px;--container-width-m:720px;--container-width-l:944px;--container-width-xl:1200px;--color-brick:#bd2719;--color-brick-light:#ffeeed;--color-brick-medium-light:#facbc8;--color-brick-dark:#800e04;--color-bus:#0000bf;--color-bus-light:#f0f0ff;--color-bus-medium-light:#ccf;--color-bus-dark:#00005e;--color-coat-of-arms:#0072c6;--color-coat-of-arms-light:#e6f4ff;--color-coat-of-arms-medium-light:#b5daf7;--color-coat-of-arms-dark:#005799;--color-copper:#00d7a7;--color-copper-light:#cffaf1;--color-copper-medium-light:#9ef0de;--color-copper-dark:#00a17d;--color-engel:#ffe977;--color-engel-light:#fff9db;--color-engel-medium-light:#fff3b8;--color-engel-dark:#dbc030;--color-fog:#9fc9eb;--color-fog-light:#e8f3fc;--color-fog-medium-light:#d0e6f7;--color-fog-dark:#72a5cf;--color-gold:#c2a251;--color-gold-light:#f7f2e4;--color-gold-medium-light:#e8d7a7;--color-gold-dark:#9e823c;--color-metro:#fd4f00;--color-metro-light:#ffeee6;--color-metro-medium-light:#ffcab3;--color-metro-dark:#bd2f00;--color-silver:#dedfe1;--color-silver-light:#f7f7f8;--color-silver-medium-light:#efeff0;--color-silver-dark:#b0b8bf;--color-summer:#ffc61e;--color-summer-light:#fff4d4;--color-summer-medium-light:#ffe49c;--color-summer-dark:#cc9200;--color-suomenlinna:#f5a3c7;--color-suomenlinna-light:#fff0f7;--color-suomenlinna-medium-light:#ffdbeb;--color-suomenlinna-dark:#e673a5;--color-tram:#008741;--color-tram-light:#dff7eb;--color-tram-medium-light:#a3e3c2;--color-tram-dark:#006631;--color-focus-outline:#0072c6;--color-black:#000;--color-white:#fff;--color-black-5:#f2f2f2;--color-black-10:#e6e6e6;--color-black-20:#ccc;--color-black-30:#b3b3b3;--color-black-40:#999;--color-black-50:grey;--color-black-60:#595959;--color-black-70:#4d4d4d;--color-black-80:#333;--color-black-90:#1a1a1a;--color-error:#b01038;--color-error-light:#f6e2e6;--color-error-dark:#8d0d2d;--color-success:#007a64;--color-success-light:#e2f5f3;--color-success-dark:#006250;--color-alert:#ffda07;--color-alert-light:#fff4b4;--color-alert-dark:#d18200;--color-info:#0062b9;--color-info-light:#e5eff8;--color-info-dark:#004f94;--box-shadow-s:0px 2px 10px 0px rgba(0,0,0,0.07);--box-shadow-m:0px 2px 10px 0px rgba(0,0,0,0.1);--box-shadow-l:0px 2px 20px 0px rgba(0,0,0,0.2);--spacing-layout-2-xs:1rem;--spacing-layout-xs:1.5rem;--spacing-layout-s:2rem;--spacing-layout-m:3rem;--spacing-layout-l:4rem;--spacing-layout-xl:6rem;--spacing-layout-2-xl:8rem;--spacing-4-xs:0.125rem;--spacing-3-xs:0.25rem;--spacing-2-xs:0.5rem;--spacing-xs:0.75rem;--spacing-s:1rem;--spacing-m:1.5rem;--spacing-l:2rem;--spacing-xl:2.5rem;--spacing-2-xl:3.0rem;--spacing-3-xl:3.5rem;--spacing-4-xl:4rem;--spacing-5-xl:4.5rem;--fontsize-heading-xxl:4rem;--fontsize-heading-xl:3rem;--fontsize-heading-xl-mobile:2.5rem;--fontsize-heading-l:2rem;--fontsize-heading-m:1.5rem;--fontsize-heading-s:1.25rem;--fontsize-heading-xs:1.125rem;--fontsize-heading-xxs:1rem;--fontsize-body-s:0.875rem;--fontsize-body-m:1rem;--fontsize-body-l:1.125rem;--fontsize-body-xl:1.25rem;--font-default:HelsinkiGrotesk,Arial,sans-serif;--lineheight-s:1;--lineheight-m:1.2;--lineheight-l:1.5;--lineheight-xl:1.75}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.visually-hidden{border:0;clip:"rect(0 0 0 0)";height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.button-reset{background:none;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}.text-body{color:var(--color-black-90);font-size:var(--fontsize-body-m);line-height:var(--lineheight-l)}.text-body,.text-medium{font-family:var(--font-default)}.text-medium{font-weight:500}.text-bold{font-family:var(--font-default);font-weight:700}.text-xl{font-size:var(--fontsize-heading-m)}.text-lg{font-size:var(--fontsize-heading-s)}.text-md{font-size:var(--fontsize-heading-xs)}.subtitle{font-size:var(--fontsize-body-m)}.text-sm{font-size:var(--fontsize-body-s);line-height:var(--lineheight-xl)}.heading-xxl{font-size:var(--fontsize-heading-xxl);letter-spacing:-1.2px}.heading-xl,.heading-xxl{font-weight:400;line-height:var(--lineheight-s)}.heading-xl{font-size:var(--fontsize-heading-xl);letter-spacing:-1px}.heading-xl-mobile{font-size:var(--fontsize-heading-xl-mobile);font-weight:400;letter-spacing:-.8px;line-height:var(--lineheight-s)}.heading-l{font-size:var(--fontsize-heading-l);font-weight:400;letter-spacing:-.4px}.heading-l,.heading-m{line-height:var(--lineheight-m)}.heading-m{font-size:var(--fontsize-heading-m);font-weight:500;letter-spacing:-.2px}.heading-s{font-size:var(--fontsize-heading-s);font-weight:500}.heading-s,.heading-xs{letter-spacing:0;line-height:var(--lineheight-l)}.heading-xs{font-size:var(--fontsize-heading-xs);font-weight:700}.heading-xxs{font-size:var(--fontsize-heading-xxs);font-weight:700;letter-spacing:.2px;line-height:var(--lineheight-l)}.helper-text{color:var(--color-black-60);display:block;flex-basis:100%;font-size:var(--fontsize-body-m);margin-top:var(--spacing-2-xs)}html{-webkit-text-size-adjust:100%}');
const eo = {}.hasOwnProperty;
function Yi(i) {
  const e = typeof i;
  return i ? e === "string" || e === "number" ? i : Array.isArray(i) ? i.length ? i.map((t) => Yi(t)).filter(Boolean).join(" ") : null : e === "object" ? ((t, n = null) => {
    if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
    const o = Object.assign({}, t);
    return n && Object.keys(n).filter((r) => !!t[r]).forEach((r) => {
      o[n[r]] = !0;
    }), Object.keys(o).filter((r) => eo.call(o, r) && !!o[r]).join(" ");
  })(i, this) : null : null;
}
var Ve = (...i) => i.map(Yi).filter(Boolean).join(" "), H = { "hds-icon": "Notification-module_hds-icon__2ocjD", "hds-icon--size-xs": "Notification-module_hds-icon--size-xs__2Mj5D", "hds-icon--size-s": "Notification-module_hds-icon--size-s__igOqE", "hds-icon--size-m": "Notification-module_hds-icon--size-m__sxXOh", "hds-icon--size-l": "Notification-module_hds-icon--size-l__3Ho_A", "hds-icon--size-xl": "Notification-module_hds-icon--size-xl__1cTta", "hds-icon--alert-circle-fill": "Notification-module_hds-icon--alert-circle-fill__12XKS", "hds-icon-start--alert-circle-fill": "Notification-module_hds-icon-start--alert-circle-fill__TwQNY", "hds-icon-end--alert-circle-fill": "Notification-module_hds-icon-end--alert-circle-fill__3gb8C", "hds-icon--check-circle-fill": "Notification-module_hds-icon--check-circle-fill__2wjh3", "hds-icon-start--check-circle-fill": "Notification-module_hds-icon-start--check-circle-fill__2QULC", "hds-icon-end--check-circle-fill": "Notification-module_hds-icon-end--check-circle-fill__2gbRD", "hds-icon--error-fill": "Notification-module_hds-icon--error-fill__159Nf", "hds-icon-start--error-fill": "Notification-module_hds-icon-start--error-fill__2FrGR", "hds-icon-end--error-fill": "Notification-module_hds-icon-end--error-fill__1qx8A", "hds-icon--info-circle-fill": "Notification-module_hds-icon--info-circle-fill__1F7dp", "hds-icon-start--info-circle-fill": "Notification-module_hds-icon-start--info-circle-fill__1-3q2", "hds-icon-end--info-circle-fill": "Notification-module_hds-icon-end--info-circle-fill__w7XD0", notification: "Notification-module_notification__3eUBu notification_hds-notification__2DQPN", noBorder: "Notification-module_noBorder__3HZZH", close: "Notification-module_close__nX5bK notification_hds-notification__close-button__1yGIj", autoClose: "Notification-module_autoClose__3mkBX", content: "Notification-module_content__2E8Z_ notification_hds-notification__content__5ylSS", icon: "Notification-module_icon__3xieh notification_hds-icon__29HQM", label: "Notification-module_label__2OUcx notification_hds-notification__label__2t1lR", body: "Notification-module_body__2lrYE notification_hds-notification__body__3cobH", small: "Notification-module_small__3Vi8R notification_hds-notification--small__1wVl6", large: "Notification-module_large__3sVHL notification_hds-notification--large__260Qm", "top-left": "Notification-module_top-left__nZQMd notification_hds-notification--top-left__sIHO2", "top-center": "Notification-module_top-center__1GWPg notification_hds-notification--top-center__GDWo5", "top-right": "Notification-module_top-right__1HAHi notification_hds-notification--top-right__3Wa5K", "bottom-left": "Notification-module_bottom-left__17y2g notification_hds-notification--bottom-left__eB4ZK", "bottom-center": "Notification-module_bottom-center__2i8Ht notification_hds-notification--bottom-center__5EgOP", "bottom-right": "Notification-module_bottom-right__1Giev notification_hds-notification--bottom-right__1SmfT", success: "Notification-module_success__TdJna notification_hds-notification--success__1_3XZ", alert: "Notification-module_alert__1bsQa notification_hds-notification--alert__1MV7H", error: "Notification-module_error___-koD notification_hds-notification--error__3T1Of", boxShadow: "Notification-module_boxShadow__2yJQB notification_hds-notification--box-shadow__2kbD_" };
gt(`.notification_hds-icon__29HQM{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.notification_hds-icon--size-xs__19VKz{--icon-size:var(--spacing-layout-2-xs)}.notification_hds-icon--size-s__2Ffyw{--icon-size:var(--spacing-layout-xs)}.notification_hds-icon--size-m__28mpE{--icon-size:var(--spacing-layout-s)}.notification_hds-icon--size-l__T6YEf{--icon-size:var(--spacing-layout-m)}.notification_hds-icon--size-xl__18_OX{--icon-size:var(--spacing-layout-l)}.notification_hds-icon--alert-circle-fill__3er4k{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.notification_hds-icon-start--alert-circle-fill__1r-B3{--mask-image-before:var(--mask-image-alert-circle-fill)}.notification_hds-icon-end--alert-circle-fill__2dkn2{--mask-image-after:var(--mask-image-alert-circle-fill)}.notification_hds-icon--check-circle-fill__2u1G4{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.notification_hds-icon-start--check-circle-fill__2JuU0{--mask-image-before:var(--mask-image-check-circle-fill)}.notification_hds-icon-end--check-circle-fill__3YsAQ{--mask-image-after:var(--mask-image-check-circle-fill)}.notification_hds-icon--error-fill__jPWn1{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.notification_hds-icon-start--error-fill__1sR7v{--mask-image-before:var(--mask-image-error-fill)}.notification_hds-icon-end--error-fill__1jyx_{--mask-image-after:var(--mask-image-error-fill)}.notification_hds-icon--info-circle-fill__1gXDU{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.notification_hds-icon-start--info-circle-fill__rortu{--mask-image-before:var(--mask-image-info-circle-fill)}.notification_hds-icon-end--info-circle-fill__3ycxA{--mask-image-after:var(--mask-image-info-circle-fill)}.notification_hds-notification__2DQPN{--notification-background-color:var(--color-info-light);--notification-border-color:var(--color-info);--notification-border-width:var(--spacing-2-xs);--notification-icon-color:var(--color-info);--notification-color:var(--color-black-90);--notification-max-width-inline:none;--notification-max-width-toast:21rem;--notification-z-index-inline:auto;--notification-z-index-toast:99;--notification-offset:var(--spacing-layout-s);--notification-padding:var(--spacing-s);background-color:var(--notification-background-color);border:solid var(--notification-border-color);border-left-width:var(--notification-border-width);border-bottom-width:0;border-right-width:0;border-top-width:0;box-sizing:border-box;color:var(--notification-color);max-width:var(--notification-max-width-inline);padding:var(--notification-padding);position:relative;width:100%;z-index:var(--notification-z-index-inline)}.notification_hds-notification__content__5ylSS{display:grid;grid-gap:var(--spacing-s);gap:var(--spacing-s)}.notification_hds-notification__label__2t1lR{align-items:center;display:flex;font-size:var(--fontsize-heading-xs);font-weight:700;letter-spacing:0;line-height:24px;margin-right:var(--spacing-l)}.notification_hds-notification__2DQPN .notification_hds-icon__29HQM{--icon-size:var(--spacing-layout-xs)}.notification_hds-notification__label__2t1lR>.notification_hds-icon__29HQM{color:var(--notification-icon-color);flex:none;margin-right:var(--spacing-2-xs)}.notification_hds-notification__body__3cobH{font-size:var(--fontsize-body-s);line-height:24px}.notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-s);background:none;border:none;cursor:pointer;display:flex;outline:none;padding:0;position:absolute;right:var(--notification-close-button-offset);top:var(--notification-close-button-offset)}.notification_hds-notification__close-button__1yGIj:focus{box-shadow:0 0 0 3px var(--color-focus-outline)}.notification_hds-notification--small__1wVl6{--notification-padding:var(--spacing-2-xs)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__content__5ylSS{display:flex;grid-gap:0;gap:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__body__3cobH{margin-right:var(--spacing-l)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--large__260Qm{--notification-padding:var(--spacing-l)}.notification_hds-notification--large__260Qm .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--large__260Qm .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--bottom-center__5EgOP,.notification_hds-notification--bottom-left__eB4ZK,.notification_hds-notification--bottom-right__1SmfT,.notification_hds-notification--top-center__GDWo5,.notification_hds-notification--top-left__sIHO2,.notification_hds-notification--top-right__3Wa5K{border-left-width:0;border-bottom-width:0;border-right-width:0;border-top-width:var(--notification-border-width);max-width:var(--notification-max-width-toast);position:fixed;width:calc(100% - var(--spacing-l));z-index:var(--notification-z-index-toast)}.notification_hds-notification--top-left__sIHO2{left:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--top-center__GDWo5{left:50%;top:var(--notification-offset);transform:translateX(-50%)}.notification_hds-notification--top-right__3Wa5K{right:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--bottom-left__eB4ZK{bottom:var(--notification-offset);left:var(--notification-offset)}.notification_hds-notification--bottom-center__5EgOP{bottom:var(--notification-offset);left:50%;transform:translateX(-50%)}.notification_hds-notification--bottom-right__1SmfT{bottom:var(--notification-offset);right:var(--notification-offset)}@media only screen and (max-width:765.98px){.notification_hds-notification__2DQPN{--notification-offset:var(--spacing-s)}}.notification_hds-notification--success__1_3XZ{--notification-background-color:var(--color-success-light);--notification-border-color:var(--color-success);--notification-icon-color:var(--color-success)}.notification_hds-notification--alert__1MV7H{--notification-background-color:var(--color-alert-light);--notification-border-color:var(--color-alert-dark);--notification-icon-color:var(--color-alert-dark)}.notification_hds-notification--error__3T1Of{--notification-background-color:var(--color-error-light);--notification-border-color:var(--color-error);--notification-icon-color:var(--color-error)}.notification_hds-notification--box-shadow__2kbD_{box-shadow:var(--box-shadow-l)}.Notification-module_hds-icon__2ocjD{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.Notification-module_hds-icon--size-xs__2Mj5D{--icon-size:var(--spacing-layout-2-xs)}.Notification-module_hds-icon--size-s__igOqE{--icon-size:var(--spacing-layout-xs)}.Notification-module_hds-icon--size-m__sxXOh{--icon-size:var(--spacing-layout-s)}.Notification-module_hds-icon--size-l__3Ho_A{--icon-size:var(--spacing-layout-m)}.Notification-module_hds-icon--size-xl__1cTta{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Notification-module_hds-icon--alert-circle-fill__12XKS{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-start--alert-circle-fill__TwQNY{--mask-image-before:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-end--alert-circle-fill__3gb8C{--mask-image-after:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon--check-circle-fill__2wjh3{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-start--check-circle-fill__2QULC{--mask-image-before:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-end--check-circle-fill__2gbRD{--mask-image-after:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon--error-fill__159Nf{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.Notification-module_hds-icon-start--error-fill__2FrGR{--mask-image-before:var(--mask-image-error-fill)}.Notification-module_hds-icon-end--error-fill__1qx8A{--mask-image-after:var(--mask-image-error-fill)}.Notification-module_hds-icon--info-circle-fill__1F7dp{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-start--info-circle-fill__1-3q2{--mask-image-before:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-end--info-circle-fill__w7XD0{--mask-image-after:var(--mask-image-info-circle-fill)}.Notification-module_notification__3eUBu{overflow:hidden}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH{border:0;padding-top:calc(var(--notification-padding) + var(--notification-border-width))}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH .Notification-module_close__nX5bK{top:calc(var(--notification-close-button-offset) + var(--notification-border-width))}.Notification-module_autoClose__3mkBX{background-color:var(--notification-border-color);height:var(--notification-border-width);left:0;position:absolute;top:0;width:100%}.Notification-module_icon__3xieh{background-color:transparent}`);
const Be = (i) => typeof i == "string" ? i : Un(i) ? Be(i.props.children) : Array.isArray(i) ? i.map(Be).join("") : "";
var oe, Y = { link: "Link-module_link__TeBQo link_hds-link__5Oxo-", icon: "Link-module_icon__3ReCc link_icon__i_HqN", iconStart: "Link-module_iconStart__2bkHS link_hds-icon-start__385-w", verticalAlignMediumIcon: "Link-module_verticalAlignMediumIcon__12PVa link_vertical-align-medium-icon__3IWi1", verticalAlignBigIcon: "Link-module_verticalAlignBigIcon__2L0Ln link_vertical-align-big-icon__3yWNL", verticalAlignSmallIcon: "Link-module_verticalAlignSmallIcon__2IwL7 link_vertical-align-small-icon__3lxhH", disableVisitedStyles: "Link-module_disableVisitedStyles__3wG_H link_hds-link--disable-visited-styles__2gk1d", "link-small": "Link-module_link-small__3G0d9 link_hds-link--small__2ldrg", "link-medium": "Link-module_link-medium__3gvla link_hds-link--medium__xEU_F", "link-large": "Link-module_link-large__20sE0 link_hds-link--large__D3jO3", button: "Link-module_button__1hPh3 button_hds-button__3eV18 button_hds-button--primary__YFEUq", buttonLabel: "Link-module_buttonLabel__EFeWo undefined" };
gt(`.link_hds-icon__2pRV-{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.link_hds-icon--size-xs__2RlDP{--icon-size:var(--spacing-layout-2-xs)}.link_hds-icon--size-s__2iqHu{--icon-size:var(--spacing-layout-xs)}.link_hds-icon--size-m__19mxF{--icon-size:var(--spacing-layout-s)}.link_hds-icon--size-l__2JXJt{--icon-size:var(--spacing-layout-m)}.link_hds-icon--size-xl__1oFrI{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.link_hds-icon--link-external__1R5f9{--mask-image-link-external:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 3v16h16v2H3V3h2zm16 0v9h-2V6.413L9.914 15.5 8.5 14.086 17.585 5H12V3h9z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-link-external)}.link_hds-icon-start--link-external__1LHEl{--mask-image-before:var(--mask-image-link-external)}.link_hds-icon-end--link-external__2N1mo{--mask-image-after:var(--mask-image-link-external)}.link_hds-link__5Oxo-{--link-visited-color:#551a8b;--link-color:var(--color-bus);border:3px solid transparent;box-sizing:border-box;color:var(--link-color);text-decoration:underline}.link_hds-link__5Oxo-:visited{color:var(--link-visited-color)}.link_hds-link__5Oxo-:visited svg g path{fill:var(--link-visited-color)}.link_hds-link__5Oxo-:focus{border:3px solid var(--color-focus-outline);outline:none}.link_hds-link__5Oxo-.link_focus-visible__36mmB,.link_hds-link__5Oxo-:focus-visible{outline:none}.link_hds-link__5Oxo- .link_vertical-align-medium-icon__3IWi1{vertical-align:sub}.link_hds-link__5Oxo- .link_vertical-align-big-icon__3yWNL{vertical-align:middle}.link_hds-link__5Oxo- .link_vertical-align-small-icon__3lxhH{vertical-align:text-top}.link_hds-link--disable-visited-styles__2gk1d:visited{color:var(--color-bus)}.link_hds-link--small__2ldrg{font-size:14px}.link_hds-link--medium__xEU_F{font-size:16px}.link_hds-link--large__D3jO3{display:block;font-size:18px;width:-moz-fit-content;width:fit-content}.link_hds-link--small__2ldrg .link_icon__i_HqN{margin-left:7px}.link_hds-link--medium__xEU_F .link_icon__i_HqN{margin-left:var(--spacing-2-xs);margin-top:-3px}.link_hds-link--large__D3jO3 .link_icon__i_HqN{margin-left:var(--spacing-s)}.link_hds-link--small__2ldrg .link_hds-icon-start__385-w{margin-right:4px;vertical-align:text-top}.link_hds-link--medium__xEU_F .link_hds-icon-start__385-w{margin-right:8px;vertical-align:sub}.link_hds-link--large__D3jO3 .link_hds-icon-start__385-w{margin-right:16px;vertical-align:middle}.button_hds-button__3eV18{--border-width:2px;--outline-width-focus:3px;--padding-horizontal:var(--spacing-l);--min-size:56px;--padding-vertical:var(--spacing-s);--padding:calc(var(--padding-vertical) - var(--border-width)) calc(var(--padding-horizontal) - var(--border-width));--icon-reposition:calc(-1 * var(--spacing-2-xs));--computed-background-color:var(--background-color,transparent);--computed-background-color-focus:var(--background-color-focus,var(--computed-background-color,transparent));--computed-background-color-hover:var(--background-color-hover,var(--computed-background-color-focus,transparent));--computed-background-color-active:var(--background-color-active,var(--computed-background-color-hover,transparent));--computed-background-color-disabled:var(--background-color-disabled,var(--color-black-20,transparent));--computed-color:var(--color,inherit);--computed-color-focus:var(--color-focus,var(--computed-color,inherit));--computed-color-hover:var(--color-hover,var(--computed-color-focus,inherit));--computed-color-active:var(--color-active,var(--computed-color-hover,inherit));--computed-color-disabled:var(--color-disabled,var(--color-white,inherit));--computed-border-color:var(--border-color,var(--computed-background-color));--computed-border-color-focus:var(--border-color-focus,var(--computed-border-color,transparent));--computed-border-color-hover:var(--border-color-hover,var(--computed-border-color-focus,transparent));--computed-border-color-active:var(--border-color-active,var(--computed-border-color-hover,transparent));--computed-border-color-disabled:var(--border-color-disabled,var(--computed-background-color-disabled,transparent));--computed-outline-color-focus:var(--outline-color-focus,transparent);--computed-icon-size:var(--icon-size,var(--spacing-m));align-content:flex-start;align-items:center;background-color:var(--computed-background-color);border:var(--border-width) solid var(--computed-border-color);border-radius:0;box-sizing:border-box;color:var(--computed-color,inherit);grid-column-gap:var(--spacing-2-xs);-moz-column-gap:var(--spacing-2-xs);column-gap:var(--spacing-2-xs);cursor:var(--cursor,pointer);display:inline-flex;font-family:inherit;font-size:100%;font-weight:500;-webkit-hyphens:auto;hyphens:auto;justify-content:center;line-height:var(--lineheight-l);margin:0;min-height:var(--min-size);min-width:var(--min-size);outline:none;outline-offset:2px;overflow:hidden;overflow-wrap:anywhere;padding:var(--padding);position:relative;text-align:center;text-decoration:none;text-transform:none;vertical-align:top}.button_hds-button__3eV18:after{margin-right:var(--icon-reposition)}.button_hds-button__3eV18:before{margin-left:var(--icon-reposition)}.button_hds-button__3eV18,.button_hds-button__3eV18[type=button],.button_hds-button__3eV18[type=reset],.button_hds-button__3eV18[type=submit]{-webkit-appearance:button}.button_hds-button__3eV18.button_focus-visible__UfLEJ,.button_hds-button__3eV18:focus-visible{background-color:var(--computed-background-color-focus);border-color:var(--computed-border-color-focus);color:var(--computed-color-focus);outline:var(--outline-width-focus) solid var(--computed-outline-color-focus)}.button_hds-button__3eV18:hover{background-color:var(--computed-background-color-hover);border-color:var(--computed-border-color-hover);color:var(--computed-color-hover)}.button_hds-button__3eV18:active{background-color:var(--computed-background-color-active);border-color:var(--computed-border-color-active);color:var(--computed-color-active);outline:var(--outline-width-focus) solid var(--computed-outline-color-focus)}.button_hds-button__3eV18:disabled{--cursor:not-allowed;background-color:var(--computed-background-color-disabled);border-color:var(--computed-border-color-disabled);color:var(--computed-color-disabled);outline:none}button.button_button__3YOda{-webkit-appearance:button}.button_hds-button__3eV18 .button_hds-icon__yxejC{flex-shrink:0;height:var(--computed-icon-size);width:var(--computed-icon-size)}.button_hds-button__3eV18 .button_hds-icon__yxejC:first-child:not(:last-child){margin-left:var(--icon-reposition)}.button_hds-button__3eV18 .button_hds-icon__yxejC:last-child:not(:first-child){margin-right:var(--icon-reposition)}.button_hds-button--small__3wRD3{--min-size:44px;--padding-horizontal:var(--spacing-m);--padding-vertical:var(--spacing-2-xs)}.button_hds-button--fullwidth__1XCri{width:100%}.button_hds-button--primary__YFEUq{--background-color:var(--color-bus);--background-color-hover:var(--color-bus-dark);--background-color-focus:var(--color-bus);--background-color-disabled:var(--color-black-20);--border-color:transparent;--color:var(--color-white);--color-disabled:var(--color-white);--outline-color-focus:var(--color-coat-of-arms)}.button_hds-button--secondary__2p6Pe{--border-color:var(--color-bus);--border-color-disabled:var(--color-disabled)}.button_hds-button--secondary__2p6Pe,.button_hds-button--supplementary__2frZ3{--background-color:transparent;--background-color-hover:var(--color-bus-light);--background-color-focus:transparent;--background-color-disabled:transparent;--color:var(--color-bus);--color-disabled:var(--color-black-40);--outline-color-focus:var(--color-coat-of-arms)}.button_hds-button--clear__EkNHz,.button_hds-button--supplementary__2frZ3{--border-color:transparent;--border-color-disabled:transparent}.button_hds-button--clear__EkNHz{--background-color:transparent;--background-color-disabled:transparent;--color:var(--color-black-90);--color-disabled:var(--color-black-90)}.button_hds-button--success__3WFYX{--background-color:var(--color-success);--background-color-hover:var(--color-success-dark);--background-color-focus:var(--color-success);--border-color:var(--color-success);--border-color-hover:var(--color-success-dark);--border-color-focus:var(--color-success)}.button_hds-button--danger__gKWHW,.button_hds-button--success__3WFYX{--color:var(--color-white);--outline-color-focus:var(--color-coat-of-arms)}.button_hds-button--danger__gKWHW{--background-color:var(--color-error);--background-color-hover:var(--color-error-dark);--background-color-focus:var(--color-error);--border-color:var(--color-error);--border-color-hover:var(--color-error-dark);--border-color-focus:var(--color-error)}.button_hds-button--primary__YFEUq.button_hds-button--theme-coat__1gYsE{--background-color:var(--color-coat-of-arms);--background-color-hover:var(--color-coat-of-arms-dark);--background-color-focus:var(--color-coat-of-arms);--border-color:var(--color-coat-of-arms);--border-color-hover:var(--color-coat-of-arms-dark);--border-color-focus:var(--color-coat-of-arms);--color:var(--color-white)}.button_hds-button--secondary__2p6Pe.button_hds-button--theme-coat__1gYsE{--border-color:var(--color-coat-of-arms)}.button_hds-button--secondary__2p6Pe.button_hds-button--theme-coat__1gYsE,.button_hds-button--supplementary__2frZ3.button_hds-button--theme-coat__1gYsE{--background-color:transparent;--background-color-hover:var(--color-coat-of-arms-light);--background-color-focus:transparent;--color:var(--color-coat-of-arms)}.button_hds-button--supplementary__2frZ3.button_hds-button--theme-coat__1gYsE{--border-color:transparent}.button_hds-button--primary__YFEUq.button_hds-button--theme-black__1gEzv{--background-color:var(--color-black);--background-color-hover:var(--color-black);--background-color-focus:var(--color-black);--color:var(--color-white);--color-hover:var(--color-white);--color-focus:var(--color-white)}.button_hds-button--primary__YFEUq.button_hds-button--theme-black__1gEzv,.button_hds-button--secondary__2p6Pe.button_hds-button--theme-black__1gEzv{--border-color:var(--color-black);--border-color-hover:var(--color-black);--border-color-focus:var(--color-black)}.button_hds-button--secondary__2p6Pe.button_hds-button--theme-black__1gEzv,.button_hds-button--supplementary__2frZ3.button_hds-button--theme-black__1gEzv{--background-color:transparent;--background-color-hover:var(--color-black-5);--background-color-focus:transparent;--color:var(--color-black);--color-hover:var(--color-black);--color-focus:var(--color-black)}.button_hds-button--supplementary__2frZ3.button_hds-button--theme-black__1gEzv{--border-color:transparent;--border-color-hover:transparent}`), function(i) {
  i.Small = "small", i.Medium = "medium", i.Large = "large";
}(oe || (oe = {}));
const to = E.forwardRef((i, e) => {
  var { "aria-label": t, children: n, className: o, disableVisitedStyles: r = !1, external: s = !1, href: l, iconStart: a, openInNewTab: c = !1, openInExternalDomainAriaLabel: f, openInNewTabAriaLabel: u, style: d = {}, size: b = oe.Medium, useButtonStyles: h = !1 } = i, g = ce(i, ["aria-label", "children", "className", "disableVisitedStyles", "external", "href", "iconStart", "openInNewTab", "openInExternalDomainAriaLabel", "openInNewTabAriaLabel", "style", "size", "useButtonStyles"]);
  const m = { [oe.Large]: Z.Large, [oe.Medium]: Z.Small, [oe.Small]: Z.ExtraSmall }, x = { [oe.Large]: Y.verticalAlignBigIcon, [oe.Medium]: Y.verticalAlignMediumIcon, [oe.Small]: Y.verticalAlignSmallIcon }, _ = Ve(Y.link, Y[`link-${b}`], r ? Y.disableVisitedStyles : "");
  return E.createElement("a", Object.assign({ className: Ve(h ? Y.button : _, o), href: l, style: d }, c && { target: "_blank", rel: "noopener" }, (c || s || t) && { "aria-label": (() => {
    let v = t || Be(n);
    const y = c ? u || "Avautuu uudessa välilehdessä." : "", O = s ? f || "Siirtyy toiseen sivustoon." : "";
    return v && v.slice(-1) !== "." && (v = `${v}.`), [v, y, O].filter((z) => z).join(" ");
  })() }, { ref: e }, g), a && E.createElement("span", { className: Y.iconStart, "aria-hidden": "true" }, a), h ? E.createElement("span", { className: Y.buttonLabel }, n) : n, s && E.createElement(Xn, { size: m[b], className: Ve(Y.icon, x[b]) }));
}), Xi = typeof document < "u" ? E.useLayoutEffect : () => {
};
function io(i) {
  const e = K(null);
  return Xi(() => {
    e.current = i;
  }, [
    i
  ]), te((...t) => {
    const n = e.current;
    return n == null ? void 0 : n(...t);
  }, []);
}
let zt = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((i) => {
  zt.delete(i);
});
function no(i, e) {
  if (i === e) return i;
  let t = zt.get(i);
  if (t)
    return t.forEach((o) => o.current = e), e;
  let n = zt.get(e);
  return n ? (n.forEach((o) => o.current = i), i) : e;
}
function oo(...i) {
  return (...e) => {
    for (let t of i) typeof t == "function" && t(...e);
  };
}
const ro = (i) => {
  var e;
  return (e = i == null ? void 0 : i.ownerDocument) !== null && e !== void 0 ? e : document;
};
function so(i) {
  return i !== null && typeof i == "object" && "nodeType" in i && typeof i.nodeType == "number";
}
function ao(i) {
  return so(i) && i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in i;
}
let lo = !1;
function Kt() {
  return lo;
}
function co(i, e) {
  if (!Kt()) return e && i ? i.contains(e) : !1;
  if (!i || !e) return !1;
  let t = e;
  for (; t !== null; ) {
    if (t === i) return !0;
    t.tagName === "SLOT" && t.assignedSlot ? t = t.assignedSlot.parentNode : ao(t) ? t = t.host : t = t.parentNode;
  }
  return !1;
}
const fo = (i = document) => {
  var e;
  if (!Kt()) return i.activeElement;
  let t = i.activeElement;
  for (; t && "shadowRoot" in t && (!((e = t.shadowRoot) === null || e === void 0) && e.activeElement); ) t = t.shadowRoot.activeElement;
  return t;
};
function uo(i) {
  return Kt() && i.target.shadowRoot && i.composedPath ? i.composedPath()[0] : i.target;
}
function en(i) {
  var e, t, n = "";
  if (typeof i == "string" || typeof i == "number") n += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var o = i.length;
    for (e = 0; e < o; e++) i[e] && (t = en(i[e])) && (n && (n += " "), n += t);
  } else for (t in i) i[t] && (n && (n += " "), n += t);
  return n;
}
function ho() {
  for (var i, e, t = 0, n = "", o = arguments.length; t < o; t++) (i = arguments[t]) && (e = en(i)) && (n && (n += " "), n += e);
  return n;
}
function go(...i) {
  let e = {
    ...i[0]
  };
  for (let t = 1; t < i.length; t++) {
    let n = i[t];
    for (let o in n) {
      let r = e[o], s = n[o];
      typeof r == "function" && typeof s == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? e[o] = oo(r, s) : (o === "className" || o === "UNSAFE_className") && typeof r == "string" && typeof s == "string" ? e[o] = ho(r, s) : o === "id" && r && s ? e.id = no(r, s) : e[o] = s !== void 0 ? s : r;
    }
  }
  return e;
}
function mo() {
  let i = K(/* @__PURE__ */ new Map()), e = te((o, r, s, l) => {
    let a = l != null && l.once ? (...c) => {
      i.current.delete(s), s(...c);
    } : s;
    i.current.set(s, {
      type: r,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(r, a, l);
  }, []), t = te((o, r, s, l) => {
    var a;
    let c = ((a = i.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
    o.removeEventListener(r, c, l), i.current.delete(s);
  }, []), n = te(() => {
    i.current.forEach((o, r) => {
      t(o.eventTarget, o.type, r, o.options);
    });
  }, [
    t
  ]);
  return J(() => n, [
    n
  ]), {
    addGlobalListener: e,
    removeGlobalListener: t,
    removeAllGlobalListeners: n
  };
}
class tn {
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
  constructor(e, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e;
  }
}
function po(i) {
  let e = K({
    isFocused: !1,
    observer: null
  });
  Xi(() => {
    const n = e.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let t = io((n) => {
    i == null || i(n);
  });
  return te((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let o = n.target, r = (s) => {
        e.current.isFocused = !1, o.disabled && t(new tn("blur", s)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      o.addEventListener("focusout", r, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && o.disabled) {
          var s;
          (s = e.current.observer) === null || s === void 0 || s.disconnect();
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
    t
  ]);
}
function bo(i) {
  let { isDisabled: e, onBlurWithin: t, onFocusWithin: n, onFocusWithinChange: o } = i, r = K({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = mo(), a = te((u) => {
    u.currentTarget.contains(u.target) && r.current.isFocusWithin && !u.currentTarget.contains(u.relatedTarget) && (r.current.isFocusWithin = !1, l(), t && t(u), o && o(!1));
  }, [
    t,
    o,
    r,
    l
  ]), c = po(a), f = te((u) => {
    if (!u.currentTarget.contains(u.target)) return;
    const d = ro(u.target), b = fo(d);
    if (!r.current.isFocusWithin && b === uo(u.nativeEvent)) {
      n && n(u), o && o(!0), r.current.isFocusWithin = !0, c(u);
      let h = u.currentTarget;
      s(d, "focus", (g) => {
        if (r.current.isFocusWithin && !co(h, g.target)) {
          let m = new tn("blur", new d.defaultView.FocusEvent("blur", {
            relatedTarget: g.target
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
    s,
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
      onFocus: f,
      onBlur: a
    }
  };
}
const fi = {
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
function _o(i = {}) {
  let { style: e, isFocusable: t } = i, [n, o] = le(!1), { focusWithinProps: r } = bo({
    isDisabled: !t,
    onFocusWithinChange: (l) => o(l)
  }), s = we(() => n ? e : e ? {
    ...fi,
    ...e
  } : fi, [
    n
  ]);
  return {
    visuallyHiddenProps: {
      ...r,
      style: s
    }
  };
}
function vo(i) {
  let { children: e, elementType: t = "div", isFocusable: n, style: o, ...r } = i, { visuallyHiddenProps: s } = _o(i);
  return /* @__PURE__ */ E.createElement(t, go(r, s), e);
}
let qt = et();
const w = (i) => Xe(i, qt);
let Wt = et();
w.write = (i) => Xe(i, Wt);
let Qt = et();
w.onStart = (i) => Xe(i, Qt);
let nn = et();
w.onFrame = (i) => Xe(i, nn);
let on = et();
w.onFinish = (i) => Xe(i, on);
let Ne = [];
w.setTimeout = (i, e) => {
  let t = w.now() + e, n = () => {
    let r = Ne.findIndex((s) => s.cancel == n);
    ~r && Ne.splice(r, 1), ge.count -= ~r ? 1 : 0;
  }, o = {
    time: t,
    handler: i,
    cancel: n
  };
  return Ne.splice(rn(t), 0, o), ge.count += 1, sn(), o;
};
let rn = (i) => ~(~Ne.findIndex((e) => e.time > i) || ~Ne.length);
w.cancel = (i) => {
  qt.delete(i), Wt.delete(i);
};
w.sync = (i) => {
  Pt = !0, w.batchedUpdates(i), Pt = !1;
};
w.throttle = (i) => {
  let e;
  function t() {
    try {
      i(...e);
    } finally {
      e = null;
    }
  }
  function n(...o) {
    e = o, w.onStart(t);
  }
  return n.handler = i, n.cancel = () => {
    Qt.delete(t), e = null;
  }, n;
};
let Gt = typeof window < "u" ? window.requestAnimationFrame : () => {
};
w.use = (i) => Gt = i;
w.now = typeof performance < "u" ? () => performance.now() : Date.now;
w.batchedUpdates = (i) => i();
w.catch = console.error;
w.frameLoop = "always";
w.advance = () => {
  w.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ln();
};
let he = -1, Pt = !1;
function Xe(i, e) {
  Pt ? (e.delete(i), i(0)) : (e.add(i), sn());
}
function sn() {
  he < 0 && (he = 0, w.frameLoop !== "demand" && Gt(an));
}
function an() {
  ~he && (Gt(an), w.batchedUpdates(ln));
}
function ln() {
  let i = he;
  he = w.now();
  let e = rn(he);
  e && (cn(Ne.splice(0, e), (t) => t.handler()), ge.count -= e), Qt.flush(), qt.flush(i ? Math.min(64, he - i) : 16.667), nn.flush(), Wt.flush(), on.flush();
}
function et() {
  let i = /* @__PURE__ */ new Set(), e = i;
  return {
    add(t) {
      ge.count += e == i && !i.has(t) ? 1 : 0, i.add(t);
    },
    delete(t) {
      return ge.count -= e == i && i.has(t) ? 1 : 0, i.delete(t);
    },
    flush(t) {
      e.size && (i = /* @__PURE__ */ new Set(), ge.count -= e.size, cn(e, (n) => n(t) && i.add(n)), ge.count += i.size, e = i);
    }
  };
}
function cn(i, e) {
  i.forEach((t) => {
    try {
      e(t);
    } catch (n) {
      w.catch(n);
    }
  });
}
const ge = {
  count: 0
};
function $t() {
}
const xo = (i, e, t) => Object.defineProperty(i, e, {
  value: t,
  writable: !0,
  configurable: !0
}), p = {
  arr: Array.isArray,
  obj: (i) => !!i && i.constructor.name === "Object",
  fun: (i) => typeof i == "function",
  str: (i) => typeof i == "string",
  num: (i) => typeof i == "number",
  und: (i) => i === void 0
};
function re(i, e) {
  if (p.arr(i)) {
    if (!p.arr(e) || i.length !== e.length) return !1;
    for (let t = 0; t < i.length; t++)
      if (i[t] !== e[t]) return !1;
    return !0;
  }
  return i === e;
}
const L = (i, e) => i.forEach(e);
function ie(i, e, t) {
  if (p.arr(i)) {
    for (let n = 0; n < i.length; n++)
      e.call(t, i[n], `${n}`);
    return;
  }
  for (const n in i)
    i.hasOwnProperty(n) && e.call(t, i[n], n);
}
const M = (i) => p.und(i) ? [] : p.arr(i) ? i : [i];
function Ie(i, e) {
  if (i.size) {
    const t = Array.from(i);
    i.clear(), L(t, e);
  }
}
const Te = (i, ...e) => Ie(i, (t) => t(...e));
let Zt, fn, ae = null, un = !1, Jt = $t;
const yo = (i) => {
  i.to && (fn = i.to), i.now && (w.now = i.now), i.colors !== void 0 && (ae = i.colors), i.skipAnimation != null && (un = i.skipAnimation), i.createStringInterpolator && (Zt = i.createStringInterpolator), i.requestAnimationFrame && w.use(i.requestAnimationFrame), i.batchedUpdates && (w.batchedUpdates = i.batchedUpdates), i.willAdvance && (Jt = i.willAdvance), i.frameLoop && (w.frameLoop = i.frameLoop);
};
var ne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return Zt;
  },
  get to() {
    return fn;
  },
  get colors() {
    return ae;
  },
  get skipAnimation() {
    return un;
  },
  get willAdvance() {
    return Jt;
  },
  assign: yo
});
const je = /* @__PURE__ */ new Set();
let B = [], kt = [], rt = 0;
const mt = {
  get idle() {
    return !je.size && !B.length;
  },
  start(i) {
    rt > i.priority ? (je.add(i), w.onStart(ko)) : (dn(i), w(Rt));
  },
  advance: Rt,
  sort(i) {
    if (rt)
      w.onFrame(() => mt.sort(i));
    else {
      const e = B.indexOf(i);
      ~e && (B.splice(e, 1), hn(i));
    }
  },
  clear() {
    B = [], je.clear();
  }
};
function ko() {
  je.forEach(dn), je.clear(), w(Rt);
}
function dn(i) {
  B.includes(i) || hn(i);
}
function hn(i) {
  B.splice(wo(B, (e) => e.priority > i.priority), 0, i);
}
function Rt(i) {
  const e = kt;
  for (let t = 0; t < B.length; t++) {
    const n = B[t];
    rt = n.priority, n.idle || (Jt(n), n.advance(i), n.idle || e.push(n));
  }
  return rt = 0, kt = B, kt.length = 0, B = e, B.length > 0;
}
function wo(i, e) {
  const t = i.findIndex(e);
  return t < 0 ? i.length : t;
}
const So = {
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
}, G = "[-+]?\\d*\\.?\\d+", st = G + "%";
function pt(...i) {
  return "\\(\\s*(" + i.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const No = new RegExp("rgb" + pt(G, G, G)), Lo = new RegExp("rgba" + pt(G, G, G, G)), Oo = new RegExp("hsl" + pt(G, st, st)), Co = new RegExp("hsla" + pt(G, st, st, G)), Eo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, zo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Po = /^#([0-9a-fA-F]{6})$/, $o = /^#([0-9a-fA-F]{8})$/;
function Ro(i) {
  let e;
  return typeof i == "number" ? i >>> 0 === i && i >= 0 && i <= 4294967295 ? i : null : (e = Po.exec(i)) ? parseInt(e[1] + "ff", 16) >>> 0 : ae && ae[i] !== void 0 ? ae[i] : (e = No.exec(i)) ? (ve(e[1]) << 24 | ve(e[2]) << 16 | ve(e[3]) << 8 | 255) >>> 0 : (e = Lo.exec(i)) ? (ve(e[1]) << 24 | ve(e[2]) << 16 | ve(e[3]) << 8 | hi(e[4])) >>> 0 : (e = Eo.exec(i)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = $o.exec(i)) ? parseInt(e[1], 16) >>> 0 : (e = zo.exec(i)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = Oo.exec(i)) ? (ui(di(e[1]), tt(e[2]), tt(e[3])) | 255) >>> 0 : (e = Co.exec(i)) ? (ui(di(e[1]), tt(e[2]), tt(e[3])) | hi(e[4])) >>> 0 : null;
}
function wt(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * (2 / 3 - t) * 6 : i;
}
function ui(i, e, t) {
  const n = t < 0.5 ? t * (1 + e) : t + e - t * e, o = 2 * t - n, r = wt(o, n, i + 1 / 3), s = wt(o, n, i), l = wt(o, n, i - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(s * 255) << 16 | Math.round(l * 255) << 8;
}
function ve(i) {
  const e = parseInt(i, 10);
  return e < 0 ? 0 : e > 255 ? 255 : e;
}
function di(i) {
  return (parseFloat(i) % 360 + 360) % 360 / 360;
}
function hi(i) {
  const e = parseFloat(i);
  return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
}
function tt(i) {
  const e = parseFloat(i);
  return e < 0 ? 0 : e > 100 ? 1 : e / 100;
}
function gi(i) {
  let e = Ro(i);
  if (e === null) return i;
  e = e || 0;
  let t = (e & 4278190080) >>> 24, n = (e & 16711680) >>> 16, o = (e & 65280) >>> 8, r = (e & 255) / 255;
  return `rgba(${t}, ${n}, ${o}, ${r})`;
}
const Ke = (i, e, t) => {
  if (p.fun(i))
    return i;
  if (p.arr(i))
    return Ke({
      range: i,
      output: e,
      extrapolate: t
    });
  if (p.str(i.output[0]))
    return Zt(i);
  const n = i, o = n.output, r = n.range || [0, 1], s = n.extrapolateLeft || n.extrapolate || "extend", l = n.extrapolateRight || n.extrapolate || "extend", a = n.easing || ((c) => c);
  return (c) => {
    const f = Fo(c, r);
    return Ao(c, r[f], r[f + 1], o[f], o[f + 1], a, s, l, n.map);
  };
};
function Ao(i, e, t, n, o, r, s, l, a) {
  let c = a ? a(i) : i;
  if (c < e) {
    if (s === "identity") return c;
    s === "clamp" && (c = e);
  }
  if (c > t) {
    if (l === "identity") return c;
    l === "clamp" && (c = t);
  }
  return n === o ? n : e === t ? i <= e ? n : o : (e === -1 / 0 ? c = -c : t === 1 / 0 ? c = c - e : c = (c - e) / (t - e), c = r(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c = c + n : c = c * (o - n) + n, c);
}
function Fo(i, e) {
  for (var t = 1; t < e.length - 1 && !(e[t] >= i); ++t) ;
  return t - 1;
}
function At() {
  return At = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, At.apply(this, arguments);
}
const Oe = Symbol.for("FluidValue.get"), be = Symbol.for("FluidValue.observers"), U = (i) => !!(i && i[Oe]), I = (i) => i && i[Oe] ? i[Oe]() : i, mi = (i) => i[be] || null;
function To(i, e) {
  i.eventObserved ? i.eventObserved(e) : i(e);
}
function qe(i, e) {
  let t = i[be];
  t && t.forEach((n) => {
    To(n, e);
  });
}
class gn {
  constructor(e) {
    if (this[Oe] = void 0, this[be] = void 0, !e && !(e = this.get))
      throw Error("Unknown getter");
    Vo(this, e);
  }
}
const Vo = (i, e) => mn(i, Oe, e);
function Ee(i, e) {
  if (i[Oe]) {
    let t = i[be];
    t || mn(i, be, t = /* @__PURE__ */ new Set()), t.has(e) || (t.add(e), i.observerAdded && i.observerAdded(t.size, e));
  }
  return e;
}
function We(i, e) {
  let t = i[be];
  if (t && t.has(e)) {
    const n = t.size - 1;
    n ? t.delete(e) : i[be] = null, i.observerRemoved && i.observerRemoved(n, e);
  }
}
const mn = (i, e, t) => Object.defineProperty(i, e, {
  value: t,
  writable: !0,
  configurable: !0
}), nt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Io = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, pi = new RegExp(`(${nt.source})(%|[a-z]+)`, "i");
let St;
const jo = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Do = (i, e, t, n, o) => `rgba(${Math.round(e)}, ${Math.round(t)}, ${Math.round(n)}, ${o})`, pn = (i) => {
  St || (St = ae ? new RegExp(`(${Object.keys(ae).join("|")})(?!\\w)`, "g") : /^\b$/);
  const e = i.output.map((r) => I(r).replace(Io, gi).replace(St, gi)), t = e.map((r) => r.match(nt).map(Number)), o = t[0].map((r, s) => t.map((l) => {
    if (!(s in l))
      throw Error('The arity of each "output" value must be equal');
    return l[s];
  })).map((r) => Ke(At({}, i, {
    output: r
  })));
  return (r) => {
    var s;
    const l = !pi.test(e[0]) && ((s = e.find((c) => pi.test(c))) == null ? void 0 : s.replace(nt, ""));
    let a = 0;
    return e[0].replace(nt, () => `${o[a++](r)}${l || ""}`).replace(jo, Do);
  };
}, Yt = "react-spring: ", bn = (i) => {
  const e = i;
  let t = !1;
  if (typeof e != "function")
    throw new TypeError(`${Yt}once requires a function parameter`);
  return (...n) => {
    t || (e(...n), t = !0);
  };
}, Ho = bn(console.warn);
function Mo() {
  Ho(`${Yt}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const Uo = bn(console.warn);
function Bo() {
  Uo(`${Yt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function bt(i) {
  return p.str(i) && (i[0] == "#" || /\d/.test(i) || i in (ae || {}));
}
const Xt = (i) => J(i, Ko), Ko = [];
function _n() {
  const i = le()[1], e = le(qo)[0];
  return Xt(e.unmount), () => {
    e.current && i({});
  };
}
function qo() {
  const i = {
    current: !0,
    unmount: () => () => {
      i.current = !1;
    }
  };
  return i;
}
function Wo(i, e) {
  const [t] = le(() => ({
    inputs: e,
    result: i()
  })), n = K(), o = n.current;
  let r = o;
  return r ? e && r.inputs && Qo(e, r.inputs) || (r = {
    inputs: e,
    result: i()
  }) : r = t, J(() => {
    n.current = r, o == t && (t.inputs = t.result = void 0);
  }, [r]), r.result;
}
function Qo(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function bi(i) {
  const e = K();
  return J(() => {
    e.current = i;
  }), e.current;
}
const vn = typeof window < "u" && window.document && window.document.createElement ? Ue.useLayoutEffect : Ue.useEffect, Qe = Symbol.for("Animated:node"), Go = (i) => !!i && i[Qe] === i, X = (i) => i && i[Qe], ei = (i, e) => xo(i, Qe, e), _t = (i) => i && i[Qe] && i[Qe].getPayload();
class xn {
  constructor() {
    this.payload = void 0, ei(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class ze extends xn {
  constructor(e) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = e, p.num(this._value) && (this.lastPosition = this._value);
  }
  static create(e) {
    return new ze(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return p.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const {
      done: e
    } = this;
    this.done = !1, p.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}
class Ce extends ze {
  constructor(e) {
    super(0), this._string = null, this._toString = void 0, this._toString = Ke({
      output: [e, e]
    });
  }
  static create(e) {
    return new Ce(e);
  }
  getValue() {
    let e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (p.str(e)) {
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
    e && (this._toString = Ke({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}
const at = {
  dependencies: null
};
class vt extends xn {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return ie(this.source, (n, o) => {
      Go(n) ? t[o] = n.getValue(e) : U(n) ? t[o] = I(n) : e || (t[o] = n);
    }), t;
  }
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && L(this.payload, (e) => e.reset());
  }
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return ie(e, this._addToPayload, t), Array.from(t);
    }
  }
  _addToPayload(e) {
    at.dependencies && U(e) && at.dependencies.add(e);
    const t = _t(e);
    t && L(t, (n) => this.add(n));
  }
}
class ti extends vt {
  constructor(e) {
    super(e);
  }
  static create(e) {
    return new ti(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((n, o) => n.setValue(e[o])).some(Boolean) : (super.setValue(e.map(Zo)), !0);
  }
}
function Zo(i) {
  return (bt(i) ? Ce : ze).create(i);
}
function Ft(i) {
  const e = X(i);
  return e ? e.constructor : p.arr(i) ? ti : bt(i) ? Ce : ze;
}
function lt() {
  return lt = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, lt.apply(this, arguments);
}
const _i = (i, e) => {
  const t = !p.fun(i) || i.prototype && i.prototype.isReactComponent;
  return Bn((n, o) => {
    const r = K(null), s = t && te((h) => {
      r.current = Xo(o, h);
    }, [o]), [l, a] = Yo(n, e), c = _n(), f = () => {
      const h = r.current;
      if (t && !h)
        return;
      (h ? e.applyAnimatedValues(h, l.getValue(!0)) : !1) === !1 && c();
    }, u = new Jo(f, a), d = K();
    vn(() => {
      const h = d.current;
      d.current = u, L(a, (g) => Ee(g, u)), h && (L(h.deps, (g) => We(g, h)), w.cancel(h.update));
    }), J(f, []), Xt(() => () => {
      const h = d.current;
      L(h.deps, (g) => We(g, h));
    });
    const b = e.getComponentProps(l.getValue());
    return Ue.createElement(i, lt({}, b, {
      ref: s
    }));
  });
};
class Jo {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && w.write(this.update);
  }
}
function Yo(i, e) {
  const t = /* @__PURE__ */ new Set();
  return at.dependencies = t, i.style && (i = lt({}, i, {
    style: e.createAnimatedStyle(i.style)
  })), i = new vt(i), at.dependencies = null, [i, t];
}
function Xo(i, e) {
  return i && (p.fun(i) ? i(e) : i.current = e), e;
}
const vi = Symbol.for("AnimatedComponent"), er = (i, {
  applyAnimatedValues: e = () => !1,
  createAnimatedStyle: t = (o) => new vt(o),
  getComponentProps: n = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: e,
    createAnimatedStyle: t,
    getComponentProps: n
  }, r = (s) => {
    const l = xi(s) || "Anonymous";
    return p.str(s) ? s = r[s] || (r[s] = _i(s, o)) : s = s[vi] || (s[vi] = _i(s, o)), s.displayName = `Animated(${l})`, s;
  };
  return ie(i, (s, l) => {
    p.arr(i) && (l = xi(s)), r[l] = r(s);
  }), {
    animated: r
  };
}, xi = (i) => p.str(i) ? i : i && p.str(i.displayName) ? i.displayName : p.fun(i) && i.name || null;
function A() {
  return A = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, A.apply(this, arguments);
}
function de(i, ...e) {
  return p.fun(i) ? i(...e) : i;
}
const De = (i, e) => i === !0 || !!(e && i && (p.fun(i) ? i(e) : M(i).includes(e))), yn = (i, e) => p.obj(i) ? e && i[e] : i, kn = (i, e) => i.default === !0 ? i[e] : i.default ? i.default[e] : void 0, tr = (i) => i, ii = (i, e = tr) => {
  let t = ir;
  i.default && i.default !== !0 && (i = i.default, t = Object.keys(i));
  const n = {};
  for (const o of t) {
    const r = e(i[o], o);
    p.und(r) || (n[o] = r);
  }
  return n;
}, ir = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], nr = {
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
function or(i) {
  const e = {};
  let t = 0;
  if (ie(i, (n, o) => {
    nr[o] || (e[o] = n, t++);
  }), t)
    return e;
}
function wn(i) {
  const e = or(i);
  if (e) {
    const t = {
      to: e
    };
    return ie(i, (n, o) => o in e || (t[o] = n)), t;
  }
  return A({}, i);
}
function Ge(i) {
  return i = I(i), p.arr(i) ? i.map(Ge) : bt(i) ? ne.createStringInterpolator({
    range: [0, 1],
    output: [i, i]
  })(1) : i;
}
function rr(i) {
  for (const e in i) return !0;
  return !1;
}
function Tt(i) {
  return p.fun(i) || p.arr(i) && p.obj(i[0]);
}
function sr(i, e) {
  var t;
  (t = i.ref) == null || t.delete(i), e == null || e.delete(i);
}
function ar(i, e) {
  if (e && i.ref !== e) {
    var t;
    (t = i.ref) == null || t.delete(i), e.add(i), i.ref = e;
  }
}
const lr = {
  default: {
    tension: 170,
    friction: 26
  }
}, cr = (i) => i, Vt = A({}, lr.default, {
  mass: 1,
  damping: 1,
  easing: cr,
  clamp: !1
});
class fr {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Vt);
  }
}
function ur(i, e, t) {
  t && (t = A({}, t), yi(t, e), e = A({}, t, e)), yi(i, e), Object.assign(i, e);
  for (const s in Vt)
    i[s] == null && (i[s] = Vt[s]);
  let {
    mass: n,
    frequency: o,
    damping: r
  } = i;
  return p.und(o) || (o < 0.01 && (o = 0.01), r < 0 && (r = 0), i.tension = Math.pow(2 * Math.PI / o, 2) * n, i.friction = 4 * Math.PI * r * n / o), i;
}
function yi(i, e) {
  if (!p.und(e.decay))
    i.duration = void 0;
  else {
    const t = !p.und(e.tension) || !p.und(e.friction);
    (t || !p.und(e.frequency) || !p.und(e.damping) || !p.und(e.mass)) && (i.duration = void 0, i.decay = void 0), t && (i.frequency = void 0);
  }
}
const ki = [];
class dr {
  constructor() {
    this.changed = !1, this.values = ki, this.toValues = null, this.fromValues = ki, this.to = void 0, this.from = void 0, this.config = new fr(), this.immediate = !1;
  }
}
function Sn(i, {
  key: e,
  props: t,
  defaultProps: n,
  state: o,
  actions: r
}) {
  return new Promise((s, l) => {
    var a;
    let c, f, u = De((a = t.cancel) != null ? a : n == null ? void 0 : n.cancel, e);
    if (u)
      h();
    else {
      p.und(t.pause) || (o.paused = De(t.pause, e));
      let g = n == null ? void 0 : n.pause;
      g !== !0 && (g = o.paused || De(g, e)), c = de(t.delay || 0, e), g ? (o.resumeQueue.add(b), r.pause()) : (r.resume(), b());
    }
    function d() {
      o.resumeQueue.add(b), o.timeouts.delete(f), f.cancel(), c = f.time - w.now();
    }
    function b() {
      c > 0 && !ne.skipAnimation ? (f = w.setTimeout(h, c), o.pauseQueue.add(d), o.timeouts.add(f)) : h();
    }
    function h() {
      o.pauseQueue.delete(d), o.timeouts.delete(f), i <= (o.cancelId || 0) && (u = !0);
      try {
        r.start(A({}, t, {
          callId: i,
          cancel: u
        }), s);
      } catch (g) {
        l(g);
      }
    }
  });
}
const ni = (i, e) => e.length == 1 ? e[0] : e.some((t) => t.cancelled) ? Le(i.get()) : e.every((t) => t.noop) ? Nn(i.get()) : Q(i.get(), e.every((t) => t.finished)), Nn = (i) => ({
  value: i,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Q = (i, e, t = !1) => ({
  value: i,
  finished: e,
  cancelled: t
}), Le = (i) => ({
  value: i,
  cancelled: !0,
  finished: !1
});
function Ln(i, e, t, n) {
  const {
    callId: o,
    parentId: r,
    onRest: s
  } = e, {
    asyncTo: l,
    promise: a
  } = t;
  return !r && i === l && !e.reset ? a : t.promise = (async () => {
    t.asyncId = o, t.asyncTo = i;
    const c = ii(e, (m, x) => x === "onRest" ? void 0 : m);
    let f, u;
    const d = new Promise((m, x) => (f = m, u = x)), b = (m) => {
      const x = o <= (t.cancelId || 0) && Le(n) || o !== t.asyncId && Q(n, !1);
      if (x)
        throw m.result = x, u(m), m;
    }, h = (m, x) => {
      const _ = new wi(), v = new Si();
      return (async () => {
        if (ne.skipAnimation)
          throw Ze(t), v.result = Q(n, !1), u(v), v;
        b(_);
        const y = p.obj(m) ? A({}, m) : A({}, x, {
          to: m
        });
        y.parentId = o, ie(c, (z, S) => {
          p.und(y[S]) && (y[S] = z);
        });
        const O = await n.start(y);
        return b(_), t.paused && await new Promise((z) => {
          t.resumeQueue.add(z);
        }), O;
      })();
    };
    let g;
    if (ne.skipAnimation)
      return Ze(t), Q(n, !1);
    try {
      let m;
      p.arr(i) ? m = (async (x) => {
        for (const _ of x)
          await h(_);
      })(i) : m = Promise.resolve(i(h, n.stop.bind(n))), await Promise.all([m.then(f), d]), g = Q(n.get(), !0, !1);
    } catch (m) {
      if (m instanceof wi)
        g = m.result;
      else if (m instanceof Si)
        g = m.result;
      else
        throw m;
    } finally {
      o == t.asyncId && (t.asyncId = r, t.asyncTo = r ? l : void 0, t.promise = r ? a : void 0);
    }
    return p.fun(s) && w.batchedUpdates(() => {
      s(g, n, n.item);
    }), g;
  })();
}
function Ze(i, e) {
  Ie(i.timeouts, (t) => t.cancel()), i.pauseQueue.clear(), i.resumeQueue.clear(), i.asyncId = i.asyncTo = i.promise = void 0, e && (i.cancelId = e);
}
class wi extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class Si extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const It = (i) => i instanceof oi;
let hr = 1;
class oi extends gn {
  constructor(...e) {
    super(...e), this.id = hr++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  get() {
    const e = X(this);
    return e && e.getValue();
  }
  to(...e) {
    return ne.to(this, e);
  }
  interpolate(...e) {
    return Mo(), ne.to(this, e);
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
  _onChange(e, t = !1) {
    qe(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  _onPriorityChange(e) {
    this.idle || mt.sort(this), qe(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}
const _e = Symbol.for("SpringPhase"), On = 1, Cn = 2, En = 4, Nt = (i) => (i[_e] & On) > 0, se = (i) => (i[_e] & Cn) > 0, $e = (i) => (i[_e] & En) > 0, Ni = (i, e) => e ? i[_e] |= Cn | On : i[_e] &= -3, Li = (i, e) => e ? i[_e] |= En : i[_e] &= -5;
class gr extends oi {
  constructor(e, t) {
    if (super(), this.key = void 0, this.animation = new dr(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !p.und(e) || !p.und(t)) {
      const n = p.obj(e) ? A({}, e) : A({}, t, {
        from: e
      });
      p.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  get idle() {
    return !(se(this) || this._state.asyncTo) || $e(this);
  }
  get goal() {
    return I(this.animation.to);
  }
  get velocity() {
    const e = X(this);
    return e instanceof ze ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  get hasAnimated() {
    return Nt(this);
  }
  get isAnimating() {
    return se(this);
  }
  get isPaused() {
    return $e(this);
  }
  advance(e) {
    let t = !0, n = !1;
    const o = this.animation;
    let {
      config: r,
      toValues: s
    } = o;
    const l = _t(o.to);
    !l && U(o.to) && (s = M(I(o.to))), o.values.forEach((f, u) => {
      if (f.done) return;
      const d = f.constructor == Ce ? 1 : l ? l[u].lastPosition : s[u];
      let b = o.immediate, h = d;
      if (!b) {
        if (h = f.lastPosition, r.tension <= 0) {
          f.done = !0;
          return;
        }
        let g = f.elapsedTime += e;
        const m = o.fromValues[u], x = f.v0 != null ? f.v0 : f.v0 = p.arr(r.velocity) ? r.velocity[u] : r.velocity;
        let _;
        if (p.und(r.duration))
          if (r.decay) {
            const v = r.decay === !0 ? 0.998 : r.decay, y = Math.exp(-(1 - v) * g);
            h = m + x / (1 - v) * (1 - y), b = Math.abs(f.lastPosition - h) < 0.1, _ = x * y;
          } else {
            _ = f.lastVelocity == null ? x : f.lastVelocity;
            const v = r.precision || (m == d ? 5e-3 : Math.min(1, Math.abs(d - m) * 1e-3)), y = r.restVelocity || v / 10, O = r.clamp ? 0 : r.bounce, z = !p.und(O), S = m == d ? f.v0 > 0 : m < d;
            let N, P = !1;
            const C = 1, R = Math.ceil(e / C);
            for (let $ = 0; $ < R && (N = Math.abs(_) > y, !(!N && (b = Math.abs(d - h) <= v, b))); ++$) {
              z && (P = h == d || h > d == S, P && (_ = -_ * O, h = d));
              const W = -r.tension * 1e-6 * (h - d), F = -r.friction * 1e-3 * _, j = (W + F) / r.mass;
              _ = _ + j * C, h = h + _ * C;
            }
          }
        else {
          let v = 1;
          r.duration > 0 && (this._memoizedDuration !== r.duration && (this._memoizedDuration = r.duration, f.durationProgress > 0 && (f.elapsedTime = r.duration * f.durationProgress, g = f.elapsedTime += e)), v = (r.progress || 0) + g / this._memoizedDuration, v = v > 1 ? 1 : v < 0 ? 0 : v, f.durationProgress = v), h = m + r.easing(v) * (d - m), _ = (h - f.lastPosition) / e, b = v == 1;
        }
        f.lastVelocity = _, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), b = !0);
      }
      l && !l[u].done && (b = !1), b ? f.done = !0 : t = !1, f.setValue(h, r.round) && (n = !0);
    });
    const a = X(this), c = a.getValue();
    if (t) {
      const f = I(o.to);
      (c !== f || n) && !r.decay ? (a.setValue(f), this._onChange(f)) : n && r.decay && this._onChange(c), this._stop();
    } else n && this._onChange(c);
  }
  set(e) {
    return w.batchedUpdates(() => {
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
    if (se(this)) {
      const {
        to: e,
        config: t
      } = this.animation;
      w.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, t) {
    let n;
    return p.und(e) ? (n = this.queue || [], this.queue = []) : n = [p.obj(e) ? e : A({}, t, {
      to: e
    })], Promise.all(n.map((o) => this._update(o))).then((o) => ni(this, o));
  }
  stop(e) {
    const {
      to: t
    } = this.animation;
    return this._focus(this.get()), Ze(this._state, e && this._lastCallId), w.batchedUpdates(() => this._stop(t, e)), this;
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
    const t = this.key || "";
    let {
      to: n,
      from: o
    } = e;
    n = p.obj(n) ? n[t] : n, (n == null || Tt(n)) && (n = void 0), o = p.obj(o) ? o[t] : o, o == null && (o = void 0);
    const r = {
      to: n,
      from: o
    };
    return Nt(this) || (e.reverse && ([n, o] = [o, n]), o = I(o), p.und(o) ? X(this) || this._set(n) : this._set(o)), r;
  }
  _update(e, t) {
    let n = A({}, e);
    const {
      key: o,
      defaultProps: r
    } = this;
    n.default && Object.assign(r, ii(n, (a, c) => /^on/.test(c) ? yn(a, o) : a)), Ci(this, n, "onProps"), Ae(this, "onProps", n, this);
    const s = this._prepareNode(n);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const l = this._state;
    return Sn(++this._lastCallId, {
      key: o,
      props: n,
      defaultProps: r,
      state: l,
      actions: {
        pause: () => {
          $e(this) || (Li(this, !0), Te(l.pauseQueue), Ae(this, "onPause", Q(this, Re(this, this.animation.to)), this));
        },
        resume: () => {
          $e(this) && (Li(this, !1), se(this) && this._resume(), Te(l.resumeQueue), Ae(this, "onResume", Q(this, Re(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, s)
      }
    }).then((a) => {
      if (n.loop && a.finished && !(t && a.noop)) {
        const c = zn(n);
        if (c)
          return this._update(c, !0);
      }
      return a;
    });
  }
  _merge(e, t, n) {
    if (t.cancel)
      return this.stop(!0), n(Le(this));
    const o = !p.und(e.to), r = !p.und(e.from);
    if (o || r)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return n(Le(this));
    const {
      key: s,
      defaultProps: l,
      animation: a
    } = this, {
      to: c,
      from: f
    } = a;
    let {
      to: u = c,
      from: d = f
    } = e;
    r && !o && (!t.default || p.und(u)) && (u = d), t.reverse && ([u, d] = [d, u]);
    const b = !re(d, f);
    b && (a.from = d), d = I(d);
    const h = !re(u, c);
    h && this._focus(u);
    const g = Tt(t.to), {
      config: m
    } = a, {
      decay: x,
      velocity: _
    } = m;
    (o || r) && (m.velocity = 0), t.config && !g && ur(m, de(t.config, s), t.config !== l.config ? de(l.config, s) : void 0);
    let v = X(this);
    if (!v || p.und(u))
      return n(Q(this, !0));
    const y = p.und(t.reset) ? r && !t.default : !p.und(d) && De(t.reset, s), O = y ? d : this.get(), z = Ge(u), S = p.num(z) || p.arr(z) || bt(z), N = !g && (!S || De(l.immediate || t.immediate, s));
    if (h) {
      const $ = Ft(u);
      if ($ !== v.constructor)
        if (N)
          v = this._set(z);
        else throw Error(`Cannot animate between ${v.constructor.name} and ${$.name}, as the "to" prop suggests`);
    }
    const P = v.constructor;
    let C = U(u), R = !1;
    if (!C) {
      const $ = y || !Nt(this) && b;
      (h || $) && (R = re(Ge(O), z), C = !R), (!re(a.immediate, N) && !N || !re(m.decay, x) || !re(m.velocity, _)) && (C = !0);
    }
    if (R && se(this) && (a.changed && !y ? C = !0 : C || this._stop(c)), !g && ((C || U(c)) && (a.values = v.getPayload(), a.toValues = U(u) ? null : P == Ce ? [1] : M(z)), a.immediate != N && (a.immediate = N, !N && !y && this._set(c)), C)) {
      const {
        onRest: $
      } = a;
      L(pr, (F) => Ci(this, t, F));
      const W = Q(this, Re(this, c));
      Te(this._pendingCalls, W), this._pendingCalls.add(n), a.changed && w.batchedUpdates(() => {
        a.changed = !y, $ == null || $(W, this), y ? de(l.onRest, W) : a.onStart == null || a.onStart(W, this);
      });
    }
    y && this._set(O), g ? n(Ln(t.to, t, this._state, this)) : C ? this._start() : se(this) && !h ? this._pendingCalls.add(n) : n(Nn(O));
  }
  _focus(e) {
    const t = this.animation;
    e !== t.to && (mi(this) && this._detach(), t.to = e, mi(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const {
      to: t
    } = this.animation;
    U(t) && (Ee(t, this), It(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const {
      to: e
    } = this.animation;
    U(e) && We(e, this);
  }
  _set(e, t = !0) {
    const n = I(e);
    if (!p.und(n)) {
      const o = X(this);
      if (!o || !re(n, o.getValue())) {
        const r = Ft(n);
        !o || o.constructor != r ? ei(this, r.create(n)) : o.setValue(n), o && w.batchedUpdates(() => {
          this._onChange(n, t);
        });
      }
    }
    return X(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Ae(this, "onStart", Q(this, Re(this, e.to)), this));
  }
  _onChange(e, t) {
    t || (this._onStart(), de(this.animation.onChange, e, this)), de(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  _start() {
    const e = this.animation;
    X(this).reset(I(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), se(this) || (Ni(this, !0), $e(this) || this._resume());
  }
  _resume() {
    ne.skipAnimation ? this.finish() : mt.start(this);
  }
  _stop(e, t) {
    if (se(this)) {
      Ni(this, !1);
      const n = this.animation;
      L(n.values, (r) => {
        r.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), qe(this, {
        type: "idle",
        parent: this
      });
      const o = t ? Le(this.get()) : Q(this.get(), Re(this, e ?? n.to));
      Te(this._pendingCalls, o), n.changed && (n.changed = !1, Ae(this, "onRest", o, this));
    }
  }
}
function Re(i, e) {
  const t = Ge(e), n = Ge(i.get());
  return re(n, t);
}
function zn(i, e = i.loop, t = i.to) {
  let n = de(e);
  if (n) {
    const o = n !== !0 && wn(n), r = (o || i).reverse, s = !o || o.reset;
    return Je(A({}, i, {
      loop: e,
      default: !1,
      pause: void 0,
      to: !r || Tt(t) ? t : void 0,
      from: s ? i.from : void 0,
      reset: s
    }, o));
  }
}
function Je(i) {
  const {
    to: e,
    from: t
  } = i = wn(i), n = /* @__PURE__ */ new Set();
  return p.obj(e) && Oi(e, n), p.obj(t) && Oi(t, n), i.keys = n.size ? Array.from(n) : null, i;
}
function mr(i) {
  const e = Je(i);
  return p.und(e.default) && (e.default = ii(e)), e;
}
function Oi(i, e) {
  ie(i, (t, n) => t != null && e.add(n));
}
const pr = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Ci(i, e, t) {
  i.animation[t] = e[t] !== kn(e, t) ? yn(e[t], i.key) : void 0;
}
function Ae(i, e, ...t) {
  var n, o, r, s;
  (n = (o = i.animation)[e]) == null || n.call(o, ...t), (r = (s = i.defaultProps)[e]) == null || r.call(s, ...t);
}
const br = ["onStart", "onChange", "onRest"];
let _r = 1;
class vr {
  constructor(e, t) {
    this.id = _r++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start(A({
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
    return this.each((t, n) => e[n] = t.get()), e;
  }
  set(e) {
    for (const t in e) {
      const n = e[t];
      p.und(n) || this.springs[t].set(n);
    }
  }
  update(e) {
    return e && this.queue.push(Je(e)), this;
  }
  start(e) {
    let {
      queue: t
    } = this;
    return e ? t = M(e).map(Je) : this.queue = [], this._flush ? this._flush(this, t) : (Fn(this, t), jt(this, t));
  }
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const n = this.springs;
      L(M(t), (o) => n[o].stop(!!e));
    } else
      Ze(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  pause(e) {
    if (p.und(e))
      this.start({
        pause: !0
      });
    else {
      const t = this.springs;
      L(M(e), (n) => t[n].pause());
    }
    return this;
  }
  resume(e) {
    if (p.und(e))
      this.start({
        pause: !1
      });
    else {
      const t = this.springs;
      L(M(e), (n) => t[n].resume());
    }
    return this;
  }
  each(e) {
    ie(this.springs, e);
  }
  _onFrame() {
    const {
      onStart: e,
      onChange: t,
      onRest: n
    } = this._events, o = this._active.size > 0, r = this._changed.size > 0;
    (o && !this._started || r && !this._started) && (this._started = !0, Ie(e, ([a, c]) => {
      c.value = this.get(), a(c, this, this._item);
    }));
    const s = !o && this._started, l = r || s && n.size ? this.get() : null;
    r && t.size && Ie(t, ([a, c]) => {
      c.value = l, a(c, this, this._item);
    }), s && (this._started = !1, Ie(n, ([a, c]) => {
      c.value = l, a(c, this, this._item);
    }));
  }
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else return;
    w.onFrame(this._onFrame);
  }
}
function jt(i, e) {
  return Promise.all(e.map((t) => Pn(i, t))).then((t) => ni(i, t));
}
async function Pn(i, e, t) {
  const {
    keys: n,
    to: o,
    from: r,
    loop: s,
    onRest: l,
    onResolve: a
  } = e, c = p.obj(e.default) && e.default;
  s && (e.loop = !1), o === !1 && (e.to = null), r === !1 && (e.from = null);
  const f = p.arr(o) || p.fun(o) ? o : void 0;
  f ? (e.to = void 0, e.onRest = void 0, c && (c.onRest = void 0)) : L(br, (g) => {
    const m = e[g];
    if (p.fun(m)) {
      const x = i._events[g];
      e[g] = ({
        finished: _,
        cancelled: v
      }) => {
        const y = x.get(m);
        y ? (_ || (y.finished = !1), v && (y.cancelled = !0)) : x.set(m, {
          value: null,
          finished: _ || !1,
          cancelled: v || !1
        });
      }, c && (c[g] = e[g]);
    }
  });
  const u = i._state;
  e.pause === !u.paused ? (u.paused = e.pause, Te(e.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (e.pause = !0);
  const d = (n || Object.keys(i.springs)).map((g) => i.springs[g].start(e)), b = e.cancel === !0 || kn(e, "cancel") === !0;
  (f || b && u.asyncId) && d.push(Sn(++i._lastAsyncId, {
    props: e,
    state: u,
    actions: {
      pause: $t,
      resume: $t,
      start(g, m) {
        b ? (Ze(u, i._lastAsyncId), m(Le(i))) : (g.onRest = l, m(Ln(f, g, u, i)));
      }
    }
  })), u.paused && await new Promise((g) => {
    u.resumeQueue.add(g);
  });
  const h = ni(i, await Promise.all(d));
  if (s && h.finished && !(t && h.noop)) {
    const g = zn(e, s, o);
    if (g)
      return Fn(i, [g]), Pn(i, g, !0);
  }
  return a && w.batchedUpdates(() => a(h, i, i.item)), h;
}
function Ei(i, e) {
  const t = A({}, i.springs);
  return e && L(M(e), (n) => {
    p.und(n.keys) && (n = Je(n)), p.obj(n.to) || (n = A({}, n, {
      to: void 0
    })), An(t, n, (o) => Rn(o));
  }), $n(i, t), t;
}
function $n(i, e) {
  ie(e, (t, n) => {
    i.springs[n] || (i.springs[n] = t, Ee(t, i));
  });
}
function Rn(i, e) {
  const t = new gr();
  return t.key = i, e && Ee(t, e), t;
}
function An(i, e, t) {
  e.keys && L(e.keys, (n) => {
    (i[n] || (i[n] = t(n)))._prepareNode(e);
  });
}
function Fn(i, e) {
  L(e, (t) => {
    An(i.springs, t, (n) => Rn(n, i));
  });
}
function xr(i, e) {
  if (i == null) return {};
  var t = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(e.indexOf(o) >= 0) && (t[o] = i[o]);
  return t;
}
const yr = ["children"], xt = (i) => {
  let {
    children: e
  } = i, t = xr(i, yr);
  const n = Bt(ct), o = t.pause || !!n.pause, r = t.immediate || !!n.immediate;
  t = Wo(() => ({
    pause: o,
    immediate: r
  }), [o, r]);
  const {
    Provider: s
  } = ct;
  return Ue.createElement(s, {
    value: t
  }, e);
}, ct = kr(xt, {});
xt.Provider = ct.Provider;
xt.Consumer = ct.Consumer;
function kr(i, e) {
  return Object.assign(i, Ue.createContext(e)), i.Provider._context = i, i.Consumer._context = i, i;
}
const wr = () => {
  const i = [], e = function(o) {
    Bo();
    const r = [];
    return L(i, (s, l) => {
      if (p.und(o))
        r.push(s.start());
      else {
        const a = t(o, s, l);
        a && r.push(s.start(a));
      }
    }), r;
  };
  e.current = i, e.add = function(n) {
    i.includes(n) || i.push(n);
  }, e.delete = function(n) {
    const o = i.indexOf(n);
    ~o && i.splice(o, 1);
  }, e.pause = function() {
    return L(i, (n) => n.pause(...arguments)), this;
  }, e.resume = function() {
    return L(i, (n) => n.resume(...arguments)), this;
  }, e.set = function(n) {
    L(i, (o) => o.set(n));
  }, e.start = function(n) {
    const o = [];
    return L(i, (r, s) => {
      if (p.und(n))
        o.push(r.start());
      else {
        const l = this._getProps(n, r, s);
        l && o.push(r.start(l));
      }
    }), o;
  }, e.stop = function() {
    return L(i, (n) => n.stop(...arguments)), this;
  }, e.update = function(n) {
    return L(i, (o, r) => o.update(this._getProps(n, o, r))), this;
  };
  const t = function(o, r, s) {
    return p.fun(o) ? o(s, r) : o;
  };
  return e._getProps = t, e;
};
function Sr(i, e, t) {
  const n = p.fun(e) && e;
  n && !t && (t = []);
  const o = we(() => n || arguments.length == 3 ? wr() : void 0, []), r = K(0), s = _n(), l = we(() => ({
    ctrls: [],
    queue: [],
    flush(x, _) {
      const v = Ei(x, _);
      return r.current > 0 && !l.queue.length && !Object.keys(v).some((O) => !x.springs[O]) ? jt(x, _) : new Promise((O) => {
        $n(x, v), l.queue.push(() => {
          O(jt(x, _));
        }), s();
      });
    }
  }), []), a = K([...l.ctrls]), c = [], f = bi(i) || 0;
  we(() => {
    L(a.current.slice(i, f), (x) => {
      sr(x, o), x.stop(!0);
    }), a.current.length = i, u(f, i);
  }, [i]), we(() => {
    u(0, Math.min(f, i));
  }, t);
  function u(x, _) {
    for (let v = x; v < _; v++) {
      const y = a.current[v] || (a.current[v] = new vr(null, l.flush)), O = n ? n(v, y) : e[v];
      O && (c[v] = mr(O));
    }
  }
  const d = a.current.map((x, _) => Ei(x, c[_])), b = Bt(xt), h = bi(b), g = b !== h && rr(b);
  vn(() => {
    r.current++, l.ctrls = a.current;
    const {
      queue: x
    } = l;
    x.length && (l.queue = [], L(x, (_) => _())), L(a.current, (_, v) => {
      o == null || o.add(_), g && _.start({
        default: b
      });
      const y = c[v];
      y && (ar(_, y.ref), _.ref ? _.queue.push(y) : _.start(y));
    });
  }), Xt(() => () => {
    L(l.ctrls, (x) => x.stop(!0));
  });
  const m = d.map((x) => A({}, x));
  return o ? [m, o] : m;
}
function zi(i, e) {
  const t = p.fun(i), [[n], o] = Sr(1, t ? i : [i], t ? [] : e);
  return t || arguments.length == 2 ? [n, o] : n;
}
let Pi;
(function(i) {
  i.MOUNT = "mount", i.ENTER = "enter", i.UPDATE = "update", i.LEAVE = "leave";
})(Pi || (Pi = {}));
class Nr extends oi {
  constructor(e, t) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = e, this.calc = Ke(...t);
    const n = this._get(), o = Ft(n);
    ei(this, o.create(n));
  }
  advance(e) {
    const t = this._get(), n = this.get();
    re(t, n) || (X(this).setValue(t), this._onChange(t, this.idle)), !this.idle && $i(this._active) && Lt(this);
  }
  _get() {
    const e = p.arr(this.source) ? this.source.map(I) : M(I(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !$i(this._active) && (this.idle = !1, L(_t(this), (e) => {
      e.done = !1;
    }), ne.skipAnimation ? (w.batchedUpdates(() => this.advance()), Lt(this)) : mt.start(this));
  }
  _attach() {
    let e = 1;
    L(M(this.source), (t) => {
      U(t) && Ee(t, this), It(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  _detach() {
    L(M(this.source), (e) => {
      U(e) && We(e, this);
    }), this._active.clear(), Lt(this);
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = M(this.source).reduce((t, n) => Math.max(t, (It(n) ? n.priority : 0) + 1), 0));
  }
}
function Lr(i) {
  return i.idle !== !1;
}
function $i(i) {
  return !i.size || Array.from(i).every(Lr);
}
function Lt(i) {
  i.idle || (i.idle = !0, L(_t(i), (e) => {
    e.done = !0;
  }), qe(i, {
    type: "idle",
    parent: i
  }));
}
ne.assign({
  createStringInterpolator: pn,
  to: (i, e) => new Nr(i, e)
});
function ri(i, e) {
  if (i == null) return {};
  var t = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(e.indexOf(o) >= 0) && (t[o] = i[o]);
  return t;
}
const Or = ["style", "children", "scrollTop", "scrollLeft"], Tn = /^--/;
function Cr(i, e) {
  return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !Tn.test(i) && !(He.hasOwnProperty(i) && He[i]) ? e + "px" : ("" + e).trim();
}
const Ri = {};
function Er(i, e) {
  if (!i.nodeType || !i.setAttribute)
    return !1;
  const t = i.nodeName === "filter" || i.parentNode && i.parentNode.nodeName === "filter", n = e, {
    style: o,
    children: r,
    scrollTop: s,
    scrollLeft: l
  } = n, a = ri(n, Or), c = Object.values(a), f = Object.keys(a).map((u) => t || i.hasAttribute(u) ? u : Ri[u] || (Ri[u] = u.replace(/([A-Z])/g, (d) => "-" + d.toLowerCase())));
  r !== void 0 && (i.textContent = r);
  for (let u in o)
    if (o.hasOwnProperty(u)) {
      const d = Cr(u, o[u]);
      Tn.test(u) ? i.style.setProperty(u, d) : i.style[u] = d;
    }
  f.forEach((u, d) => {
    i.setAttribute(u, c[d]);
  }), s !== void 0 && (i.scrollTop = s), l !== void 0 && (i.scrollLeft = l);
}
let He = {
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
const zr = (i, e) => i + e.charAt(0).toUpperCase() + e.substring(1), Pr = ["Webkit", "Ms", "Moz", "O"];
He = Object.keys(He).reduce((i, e) => (Pr.forEach((t) => i[zr(t, e)] = i[e]), i), He);
const $r = ["x", "y", "z"], Rr = /^(matrix|translate|scale|rotate|skew)/, Ar = /^(translate)/, Fr = /^(rotate|skew)/, Ot = (i, e) => p.num(i) && i !== 0 ? i + e : i, ot = (i, e) => p.arr(i) ? i.every((t) => ot(t, e)) : p.num(i) ? i === e : parseFloat(i) === e;
class Tr extends vt {
  constructor(e) {
    let {
      x: t,
      y: n,
      z: o
    } = e, r = ri(e, $r);
    const s = [], l = [];
    (t || n || o) && (s.push([t || 0, n || 0, o || 0]), l.push((a) => [`translate3d(${a.map((c) => Ot(c, "px")).join(",")})`, ot(a, 0)])), ie(r, (a, c) => {
      if (c === "transform")
        s.push([a || ""]), l.push((f) => [f, f === ""]);
      else if (Rr.test(c)) {
        if (delete r[c], p.und(a)) return;
        const f = Ar.test(c) ? "px" : Fr.test(c) ? "deg" : "";
        s.push(M(a)), l.push(c === "rotate3d" ? ([u, d, b, h]) => [`rotate3d(${u},${d},${b},${Ot(h, f)})`, ot(h, 0)] : (u) => [`${c}(${u.map((d) => Ot(d, f)).join(",")})`, ot(u, c.startsWith("scale") ? 1 : 0)]);
      }
    }), s.length && (r.transform = new Vr(s, l)), super(r);
  }
}
class Vr extends gn {
  constructor(e, t) {
    super(), this._value = null, this.inputs = e, this.transforms = t;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return L(this.inputs, (n, o) => {
      const r = I(n[0]), [s, l] = this.transforms[o](p.arr(r) ? r : n.map(I));
      e += " " + s, t = t && l;
    }), t ? "none" : e;
  }
  observerAdded(e) {
    e == 1 && L(this.inputs, (t) => L(t, (n) => U(n) && Ee(n, this)));
  }
  observerRemoved(e) {
    e == 0 && L(this.inputs, (t) => L(t, (n) => U(n) && We(n, this)));
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), qe(this, e);
  }
}
const Ir = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], jr = ["scrollTop", "scrollLeft"];
ne.assign({
  batchedUpdates: Wn,
  createStringInterpolator: pn,
  colors: So
});
const Dr = er(Ir, {
  applyAnimatedValues: Er,
  createAnimatedStyle: (i) => new Tr(i),
  getComponentProps: (i) => ri(i, jr)
}), Ai = Dr.animated;
var me;
(function(i) {
  i.Small = "small", i.Medium = "medium", i.Large = "large";
})(me || (me = {}));
const Hr = { info: Gn, success: Zn, error: Yn, alert: Qn }, Fi = ({ visuallyHidden: i, children: e }) => i ? E.createElement(vo, null, e) : e, Mr = E.forwardRef((i, e) => {
  var { autoClose: t = !1, autoCloseDuration: n, boxShadow: o = !1, children: r, className: s = "", closeAnimationDuration: l = 85, closeButtonLabelText: a, dismissible: c = !1, displayAutoCloseProgress: f = !0, invisible: u = !1, label: d, notificationAriaLabel: b = "Notification", position: h = "inline", onClose: g = () => null, size: m = me.Medium, style: x, type: _ = "info", headingLevel: v = 2 } = i, y = ce(i, ["autoClose", "autoCloseDuration", "boxShadow", "children", "className", "closeAnimationDuration", "closeButtonLabelText", "dismissible", "displayAutoCloseProgress", "invisible", "label", "notificationAriaLabel", "position", "onClose", "size", "style", "type", "headingLevel"]);
  const O = h !== "inline";
  O && m === me.Large && (console.warn(`Size '${m}' is only allowed for inline positioned notifications`), m = me.Medium), !O && t && (console.warn("The 'autoClose' property is not allowed for inline positioned notifications"), t = !1);
  const [z, S] = le(!0), N = te(() => {
    S(!1), setTimeout(() => g(), l);
  }, [g, l]), P = n > 0 || !t ? n : (() => {
    const T = 60 * (Be(r).length + Be(d).length) + 1e3;
    return T < 4e3 ? 4e3 : T;
  })();
  J(() => {
    if (t) {
      const T = setTimeout(() => {
        N();
      }, P);
      return () => clearTimeout(T);
    }
  }, [t, n, N]);
  const C = Hr[_], R = O ? ((T) => {
    const fe = T.includes("center");
    return { from: { transform: `translate3d(${fe ? "-50%" : "0"}, ${T.includes("top") ? "-" : ""}32px, 0)`, opacity: 0.66 }, to: { transform: `translate3d(${fe ? "-50%" : "0"}, 0, 0)`, opacity: 1 }, config: { friction: 30, tension: 300 } };
  })(h) : {}, $ = { from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: l } }, W = f ? /* @__PURE__ */ ((T) => ({ from: { transform: "translate3d(0%, 0, 0)" }, to: { transform: "translate3d(-100%, 0, 0)" }, config: { duration: T } }))(P) : {}, F = zi(z ? R : $), j = zi(W);
  return E.createElement(Fi, { visuallyHidden: u }, E.createElement(Ai.section, Object.assign({}, y, { style: Object.assign(Object.assign({}, F), x), className: Ve(H[h], H.notification, H[m], H[_], t && H.noBorder, o && H.boxShadow, s), "aria-label": b, role: O || u ? "alert" : void 0 }), t && E.createElement(Ai.div, { style: j, className: H.autoClose }), E.createElement("div", { className: H.content, ref: e }, d && E.createElement("div", Object.assign({ className: H.label }, O || u ? {} : { role: "heading", "aria-level": v }), E.createElement(C, { className: H.icon }), E.createElement(Fi, { visuallyHidden: m === me.Small }, d)), r && E.createElement("div", { className: H.body }, r)), c && E.createElement("button", { className: Ve(H.close, H[_]), type: "button", title: a, "aria-label": a, onClick: N }, E.createElement(Jn, null))));
}), Ur = (i, e, t, n) => {
  var r, s, l, a;
  const o = [t, {
    code: e,
    ...n || {}
  }];
  if ((s = (r = i == null ? void 0 : i.services) == null ? void 0 : r.logger) != null && s.forward)
    return i.services.logger.forward(o, "warn", "react-i18next::", !0);
  pe(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), (a = (l = i == null ? void 0 : i.services) == null ? void 0 : l.logger) != null && a.warn ? i.services.logger.warn(...o) : console != null && console.warn && console.warn(...o);
}, Ti = {}, Dt = (i, e, t, n) => {
  pe(t) && Ti[t] || (pe(t) && (Ti[t] = /* @__PURE__ */ new Date()), Ur(i, e, t, n));
}, Vn = (i, e) => () => {
  if (i.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        i.off("initialized", t);
      }, 0), e();
    };
    i.on("initialized", t);
  }
}, Ht = (i, e, t) => {
  i.loadNamespaces(e, Vn(i, t));
}, Vi = (i, e, t, n) => {
  if (pe(t) && (t = [t]), i.options.preload && i.options.preload.indexOf(e) > -1) return Ht(i, t, n);
  t.forEach((o) => {
    i.options.ns.indexOf(o) < 0 && i.options.ns.push(o);
  }), i.loadLanguages(e, Vn(i, n));
}, Br = (i, e, t = {}) => !e.languages || !e.languages.length ? (Dt(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (n, o) => {
    var r;
    if (((r = t.bindI18n) == null ? void 0 : r.indexOf("languageChanging")) > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !o(n.isLanguageChangingTo, i)) return !1;
  }
}), pe = (i) => typeof i == "string", Kr = (i) => typeof i == "object" && i !== null, qr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Wr = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Qr = (i) => Wr[i], Gr = (i) => i.replace(qr, Qr);
let Zr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Gr
};
const Jr = () => Zr;
let Yr;
const Xr = () => Yr, In = Kn();
class es {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const ts = (i, e) => {
  const t = K();
  return J(() => {
    t.current = i;
  }, [i, e]), t.current;
}, jn = (i, e, t, n) => i.getFixedT(e, t, n), is = (i, e, t, n) => te(jn(i, e, t, n), [i, e, t, n]), ns = (i, e = {}) => {
  var y, O, z;
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = Bt(In) || {}, r = t || n || Xr();
  if (r && !r.reportNamespaces && (r.reportNamespaces = new es()), !r) {
    Dt(r, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const S = (P, C) => pe(C) ? C : Kr(C) && pe(C.defaultValue) ? C.defaultValue : Array.isArray(P) ? P[P.length - 1] : P, N = [S, {}, !1];
    return N.t = S, N.i18n = {}, N.ready = !1, N;
  }
  (y = r.options.react) != null && y.wait && Dt(r, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Jr(),
    ...r.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: a
  } = s;
  let c = i;
  c = pe(c) ? [c] : c || ["translation"], (z = (O = r.reportNamespaces).addUsedNamespaces) == null || z.call(O, c);
  const f = (r.isInitialized || r.initializedStoreOnce) && c.every((S) => Br(S, r, s)), u = is(r, e.lng || null, s.nsMode === "fallback" ? c : c[0], a), d = () => u, b = () => jn(r, e.lng || null, s.nsMode === "fallback" ? c : c[0], a), [h, g] = le(d);
  let m = c.join();
  e.lng && (m = `${e.lng}${m}`);
  const x = ts(m), _ = K(!0);
  J(() => {
    const {
      bindI18n: S,
      bindI18nStore: N
    } = s;
    _.current = !0, !f && !l && (e.lng ? Vi(r, e.lng, c, () => {
      _.current && g(b);
    }) : Ht(r, c, () => {
      _.current && g(b);
    })), f && x && x !== m && _.current && g(b);
    const P = () => {
      _.current && g(b);
    };
    return S && (r == null || r.on(S, P)), N && (r == null || r.store.on(N, P)), () => {
      _.current = !1, r && (S == null || S.split(" ").forEach((C) => r.off(C, P))), N && r && N.split(" ").forEach((C) => r.store.off(C, P));
    };
  }, [r, m]), J(() => {
    _.current && f && g(d);
  }, [r, a, f]);
  const v = [h, r, f];
  if (v.t = h, v.i18n = r, v.ready = f, f || !f && !l) return v;
  throw new Promise((S) => {
    e.lng ? Vi(r, e.lng, c, () => S()) : Ht(r, c, () => S());
  });
};
function os({
  i18n: i,
  defaultNS: e,
  children: t
}) {
  const n = we(() => ({
    i18n: i,
    defaultNS: e
  }), [i, e]);
  return qn(In.Provider, {
    value: n
  }, t);
}
const rs = (i) => {
  const { t: e } = ns("hns"), { notifications: t, onClose: n } = i, o = e("close"), r = e("notificationAriaLabel"), s = e("openExternalDomainAriaLabel"), l = e("openNewTabAriaLabel");
  return /* @__PURE__ */ ke(ci, { children: t.map((a) => /* @__PURE__ */ ke("div", { className: "notification-container", children: /* @__PURE__ */ Et(
    Mr,
    {
      type: a.level,
      label: a.title,
      dismissible: !0,
      closeButtonLabelText: o,
      onClose: () => n(a),
      size: me.Medium,
      notificationAriaLabel: r,
      children: [
        a.content,
        a.external_url && /* @__PURE__ */ Et(ci, { children: [
          /* @__PURE__ */ ke("br", {}),
          /* @__PURE__ */ ke(
            to,
            {
              href: a.external_url,
              external: !0,
              openInNewTab: !0,
              openInNewTabAriaLabel: l,
              openInExternalDomainAriaLabel: s,
              children: a.external_url_text || a.external_url
            }
          )
        ] })
      ]
    }
  ) }, a.id)) });
}, k = (i) => typeof i == "string", Fe = () => {
  let i, e;
  const t = new Promise((n, o) => {
    i = n, e = o;
  });
  return t.resolve = i, t.reject = e, t;
}, Ii = (i) => i == null ? "" : "" + i, ss = (i, e, t) => {
  i.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, as = /###/g, ji = (i) => i && i.indexOf("###") > -1 ? i.replace(as, ".") : i, Di = (i) => !i || k(i), Me = (i, e, t) => {
  const n = k(e) ? e.split(".") : e;
  let o = 0;
  for (; o < n.length - 1; ) {
    if (Di(i)) return {};
    const r = ji(n[o]);
    !i[r] && t && (i[r] = new t()), Object.prototype.hasOwnProperty.call(i, r) ? i = i[r] : i = {}, ++o;
  }
  return Di(i) ? {} : {
    obj: i,
    k: ji(n[o])
  };
}, Hi = (i, e, t) => {
  const {
    obj: n,
    k: o
  } = Me(i, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[o] = t;
    return;
  }
  let r = e[e.length - 1], s = e.slice(0, e.length - 1), l = Me(i, s, Object);
  for (; l.obj === void 0 && s.length; )
    r = `${s[s.length - 1]}.${r}`, s = s.slice(0, s.length - 1), l = Me(i, s, Object), l != null && l.obj && typeof l.obj[`${l.k}.${r}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${r}`] = t;
}, ls = (i, e, t, n) => {
  const {
    obj: o,
    k: r
  } = Me(i, e, Object);
  o[r] = o[r] || [], o[r].push(t);
}, ft = (i, e) => {
  const {
    obj: t,
    k: n
  } = Me(i, e);
  if (t && Object.prototype.hasOwnProperty.call(t, n))
    return t[n];
}, cs = (i, e, t) => {
  const n = ft(i, t);
  return n !== void 0 ? n : ft(e, t);
}, Dn = (i, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in i ? k(i[n]) || i[n] instanceof String || k(e[n]) || e[n] instanceof String ? t && (i[n] = e[n]) : Dn(i[n], e[n], t) : i[n] = e[n]);
  return i;
}, xe = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var fs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const us = (i) => k(i) ? i.replace(/[&<>"'\/]/g, (e) => fs[e]) : i;
class ds {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const hs = [" ", ",", "?", "!", ";"], gs = new ds(20), ms = (i, e, t) => {
  e = e || "", t = t || "";
  const n = hs.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
  if (n.length === 0) return !0;
  const o = gs.getRegExp(`(${n.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let r = !o.test(i);
  if (!r) {
    const s = i.indexOf(t);
    s > 0 && !o.test(i.substring(0, s)) && (r = !0);
  }
  return r;
}, Mt = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i) return;
  if (i[e])
    return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
  const n = e.split(t);
  let o = i;
  for (let r = 0; r < n.length; ) {
    if (!o || typeof o != "object")
      return;
    let s, l = "";
    for (let a = r; a < n.length; ++a)
      if (a !== r && (l += t), l += n[a], s = o[l], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && a < n.length - 1)
          continue;
        r += a - r + 1;
        break;
      }
    o = s;
  }
  return o;
}, ut = (i) => i == null ? void 0 : i.replace("_", "-"), ps = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, e) {
    var t, n;
    (n = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || n.call(t, console, e);
  }
};
class dt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || ps, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, o) {
    return o && !this.debug ? null : (k(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new dt(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new dt(this.logger, e);
  }
}
var ee = new dt();
class yt {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const o = this.observers[n].get(t) || 0;
      this.observers[n].set(t, o + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((s) => {
      let [l, a] = s;
      for (let c = 0; c < a; c++)
        l(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [l, a] = s;
      for (let c = 0; c < a; c++)
        l.apply(l, [e, ...n]);
    });
  }
}
class Mi extends yt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    var c, f;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], n && (Array.isArray(n) ? l.push(...n) : k(n) && r ? l.push(...n.split(r)) : l.push(n)));
    const a = ft(this.data, l);
    return !a && !t && !n && e.indexOf(".") > -1 && (e = l[0], t = l[1], n = l.slice(2).join(".")), a || !s || !k(n) ? a : Mt((f = (c = this.data) == null ? void 0 : c[e]) == null ? void 0 : f[t], n, r);
  }
  addResource(e, t, n, o) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), Hi(this.data, l, o), r.silent || this.emit("added", e, t, n, o);
  }
  addResources(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const r in n)
      (k(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, o, r) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), o = n, n = t, t = l[1]), this.addNamespaces(t);
    let a = ft(this.data, l) || {};
    s.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? Dn(a, n, r) : a = {
      ...a,
      ...n
    }, Hi(this.data, l, a), s.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((o) => t[o] && Object.keys(t[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Hn = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, n, o) {
    return i.forEach((r) => {
      var s;
      e = ((s = this.processors[r]) == null ? void 0 : s.process(e, t, n, o)) ?? e;
    }), e;
  }
};
const Ui = {}, Bi = (i) => !k(i) && typeof i != "boolean" && typeof i != "number";
class ht extends yt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), ss(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ee.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const n = this.resolve(e, t);
    return (n == null ? void 0 : n.res) !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !ms(e, n, o);
    if (s && !l) {
      const a = e.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0)
        return {
          key: e,
          namespaces: k(r) ? [r] : r
        };
      const c = e.split(n);
      (n !== o || n === o && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()), e = c.join(o);
    }
    return {
      key: e,
      namespaces: k(r) ? [r] : r
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), a = l[l.length - 1], c = t.lng || this.language, f = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((c == null ? void 0 : c.toLowerCase()) === "cimode") {
      if (f) {
        const R = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${a}${R}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: c,
          usedNS: a,
          usedParams: this.getUsedParamsDetails(t)
        } : `${a}${R}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: c,
        usedNS: a,
        usedParams: this.getUsedParamsDetails(t)
      } : s;
    }
    const u = this.resolve(e, t);
    let d = u == null ? void 0 : u.res;
    const b = (u == null ? void 0 : u.usedKey) || s, h = (u == null ? void 0 : u.exactUsedKey) || s, g = ["[object Number]", "[object Function]", "[object RegExp]"], m = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject, _ = t.count !== void 0 && !k(t.count), v = ht.hasDefaultValue(t), y = _ ? this.pluralResolver.getSuffix(c, t.count, t) : "", O = t.ordinal && _ ? this.pluralResolver.getSuffix(c, t.count, {
      ordinal: !1
    }) : "", z = _ && !t.ordinal && t.count === 0, S = z && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${y}`] || t[`defaultValue${O}`] || t.defaultValue;
    let N = d;
    x && !d && v && (N = S);
    const P = Bi(N), C = Object.prototype.toString.apply(N);
    if (x && N && P && g.indexOf(C) < 0 && !(k(m) && Array.isArray(N))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, N, {
          ...t,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (u.res = R, u.usedParams = this.getUsedParamsDetails(t), u) : R;
      }
      if (r) {
        const R = Array.isArray(N), $ = R ? [] : {}, W = R ? h : b;
        for (const F in N)
          if (Object.prototype.hasOwnProperty.call(N, F)) {
            const j = `${W}${r}${F}`;
            v && !d ? $[F] = this.translate(j, {
              ...t,
              defaultValue: Bi(S) ? S[F] : void 0,
              joinArrays: !1,
              ns: l
            }) : $[F] = this.translate(j, {
              ...t,
              joinArrays: !1,
              ns: l
            }), $[F] === j && ($[F] = N[F]);
          }
        d = $;
      }
    } else if (x && k(m) && Array.isArray(d))
      d = d.join(m), d && (d = this.extendTranslation(d, e, t, n));
    else {
      let R = !1, $ = !1;
      !this.isValidLookup(d) && v && (R = !0, d = S), this.isValidLookup(d) || ($ = !0, d = s);
      const F = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && $ ? void 0 : d, j = v && S !== d && this.options.updateMissing;
      if ($ || R || j) {
        if (this.logger.log(j ? "updateKey" : "missingKey", c, a, s, j ? S : d), r) {
          const D = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let T = [];
        const fe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fe && fe[0])
          for (let D = 0; D < fe.length; D++)
            T.push(fe[D]);
        else this.options.saveMissingTo === "all" ? T = this.languageUtils.toResolveHierarchy(t.lng || this.language) : T.push(t.lng || this.language);
        const si = (D, ue, Pe) => {
          var li;
          const ai = v && Pe !== d ? Pe : F;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, a, ue, ai, j, t) : (li = this.backendConnector) != null && li.saveMissing && this.backendConnector.saveMissing(D, a, ue, ai, j, t), this.emit("missingKey", D, a, ue, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && _ ? T.forEach((D) => {
          const ue = this.pluralResolver.getSuffixes(D, t);
          z && t[`defaultValue${this.options.pluralSeparator}zero`] && ue.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ue.push(`${this.options.pluralSeparator}zero`), ue.forEach((Pe) => {
            si([D], s + Pe, t[`defaultValue${Pe}`] || S);
          });
        }) : si(T, s, S));
      }
      d = this.extendTranslation(d, e, t, u, n), $ && d === s && this.options.appendNamespaceToMissingKey && (d = `${a}:${s}`), ($ || R) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s, R ? d : void 0));
    }
    return o ? (u.res = d, u.usedParams = this.getUsedParamsDetails(t), u) : d;
  }
  extendTranslation(e, t, n, o, r) {
    var c, f;
    var s = this;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const u = k(e) && (((f = n == null ? void 0 : n.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const h = e.match(this.interpolator.nestingRegexp);
        d = h && h.length;
      }
      let b = n.replace && !k(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (b = {
        ...this.options.interpolation.defaultVariables,
        ...b
      }), e = this.interpolator.interpolate(e, b, n.lng || this.language || o.usedLng, n), u) {
        const h = e.match(this.interpolator.nestingRegexp), g = h && h.length;
        d < g && (n.nest = !1);
      }
      !n.lng && o && o.res && (n.lng = this.language || o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var h = arguments.length, g = new Array(h), m = 0; m < h; m++)
          g[m] = arguments[m];
        return (r == null ? void 0 : r[0]) === g[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : s.translate(...g, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, a = k(l) ? [l] : l;
    return e != null && (a != null && a.length) && n.applyPostProcessor !== !1 && (e = Hn.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, r, s, l;
    return k(e) && (e = [e]), e.forEach((a) => {
      if (this.isValidLookup(n)) return;
      const c = this.extractFromKey(a, t), f = c.key;
      o = f;
      let u = c.namespaces;
      this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && !k(t.count), b = d && !t.ordinal && t.count === 0, h = t.context !== void 0 && (k(t.context) || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      u.forEach((m) => {
        var x, _;
        this.isValidLookup(n) || (l = m, !Ui[`${g[0]}-${m}`] && ((x = this.utils) != null && x.hasLoadedNamespace) && !((_ = this.utils) != null && _.hasLoadedNamespace(l)) && (Ui[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((v) => {
          var z;
          if (this.isValidLookup(n)) return;
          s = v;
          const y = [f];
          if ((z = this.i18nFormat) != null && z.addLookupKeys)
            this.i18nFormat.addLookupKeys(y, f, v, m, t);
          else {
            let S;
            d && (S = this.pluralResolver.getSuffix(v, t.count, t));
            const N = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (y.push(f + S), t.ordinal && S.indexOf(P) === 0 && y.push(f + S.replace(P, this.options.pluralSeparator)), b && y.push(f + N)), h) {
              const C = `${f}${this.options.contextSeparator}${t.context}`;
              y.push(C), d && (y.push(C + S), t.ordinal && S.indexOf(P) === 0 && y.push(C + S.replace(P, this.options.pluralSeparator)), b && y.push(C + N));
            }
          }
          let O;
          for (; O = y.pop(); )
            this.isValidLookup(n) || (r = O, n = this.getResource(v, m, O, t));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: r,
      usedLng: s,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, n) {
    var r;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (r = this.i18nFormat) != null && r.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !k(e.replace);
    let o = n ? e.replace : e;
    if (n && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !n) {
      o = {
        ...o
      };
      for (const r of t)
        delete o[r];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class Ki {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ee.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ut(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ut(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (k(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((n) => {
      if (t) return;
      const o = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (t = o);
    }), !t && this.options.supportedLngs && e.forEach((n) => {
      if (t) return;
      const o = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(o)) return t = o;
      t = this.options.supportedLngs.find((r) => {
        if (r === o) return r;
        if (!(r.indexOf("-") < 0 && o.indexOf("-") < 0) && (r.indexOf("-") > 0 && o.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === o || r.indexOf(o) === 0 && o.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), k(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], r = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return k(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : k(e) && r(this.formatLanguageCode(e)), n.forEach((s) => {
      o.indexOf(s) < 0 && r(this.formatLanguageCode(s));
    }), o;
  }
}
const qi = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Wi = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class bs {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = ee.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = ut(e === "dev" ? "en" : e), o = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
      cleanedCode: n,
      type: o
    });
    if (r in this.pluralRulesCache)
      return this.pluralRulesCache[r];
    let s;
    try {
      s = new Intl.PluralRules(n, {
        type: o
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Wi;
      if (!e.match(/-|_/)) return Wi;
      const a = this.languageUtils.getLanguagePartFromCode(e);
      s = this.getRule(a, t);
    }
    return this.pluralRulesCache[r] = s, s;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((o) => `${t}${o}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((o, r) => qi[o] - qi[r]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(e, n);
    return o ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Qi = function(i, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = cs(i, e, t);
  return !r && o && k(t) && (r = Mt(i, t, n), r === void 0 && (r = Mt(e, t, n))), r;
}, Ct = (i) => i.replace(/\$/g, "$$$$");
class _s {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ee.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: o,
      prefix: r,
      prefixEscaped: s,
      suffix: l,
      suffixEscaped: a,
      formatSeparator: c,
      unescapeSuffix: f,
      unescapePrefix: u,
      nestingPrefix: d,
      nestingPrefixEscaped: b,
      nestingSuffix: h,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: x,
      alwaysFormat: _
    } = e.interpolation;
    this.escape = t !== void 0 ? t : us, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = r ? xe(r) : s || "{{", this.suffix = l ? xe(l) : a || "}}", this.formatSeparator = c || ",", this.unescapePrefix = f ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = d ? xe(d) : b || xe("$t("), this.nestingSuffix = h ? xe(h) : g || xe(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = _ !== void 0 ? _ : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => (t == null ? void 0 : t.source) === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, o) {
    var b;
    let r, s, l;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const _ = Qi(t, a, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(_, void 0, n, {
          ...o,
          ...t,
          interpolationkey: h
        }) : _;
      }
      const g = h.split(this.formatSeparator), m = g.shift().trim(), x = g.join(this.formatSeparator).trim();
      return this.format(Qi(t, a, m, this.options.keySeparator, this.options.ignoreJSONStructure), x, n, {
        ...o,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const f = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, u = ((b = o == null ? void 0 : o.interpolation) == null ? void 0 : b.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => Ct(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? Ct(this.escape(h)) : Ct(h)
    }].forEach((h) => {
      for (l = 0; r = h.regex.exec(e); ) {
        const g = r[1].trim();
        if (s = c(g), s === void 0)
          if (typeof f == "function") {
            const x = f(e, r, o);
            s = k(x) ? x : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (u) {
            s = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), s = "";
        else !k(s) && !this.useRawValueToEscape && (s = Ii(s));
        const m = h.safeValue(s);
        if (e = e.replace(r[0], m), u ? (h.regex.lastIndex += s.length, h.regex.lastIndex -= r[0].length) : h.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, r, s;
    const l = (a, c) => {
      const f = this.nestingOptionsSeparator;
      if (a.indexOf(f) < 0) return a;
      const u = a.split(new RegExp(`${f}[ ]*{`));
      let d = `{${u[1]}`;
      a = u[0], d = this.interpolate(d, s);
      const b = d.match(/'/g), h = d.match(/"/g);
      (((b == null ? void 0 : b.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        s = JSON.parse(d), c && (s = {
          ...c,
          ...s
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, g), `${a}${f}${d}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, a;
    };
    for (; o = this.nestingRegexp.exec(e); ) {
      let a = [];
      s = {
        ...n
      }, s = s.replace && !k(s.replace) ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let c = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const f = o[1].split(this.formatSeparator).map((u) => u.trim());
        o[1] = f.shift(), a = f, c = !0;
      }
      if (r = t(l.call(this, o[1].trim(), s), s), r && o[0] === e && !k(r)) return r;
      k(r) || (r = Ii(r)), r || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), r = ""), c && (r = a.reduce((f, u) => this.format(f, u, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), r.trim())), e = e.replace(o[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const vs = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const n = i.split("(");
    e = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? t.currency || (t.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? t.range || (t.range = o.trim()) : o.split(";").forEach((s) => {
      if (s) {
        const [l, ...a] = s.split(":"), c = a.join(":").trim().replace(/^'+|'+$/g, ""), f = l.trim();
        t[f] || (t[f] = c), c === "false" && (t[f] = !1), c === "true" && (t[f] = !0), isNaN(c) || (t[f] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ye = (i) => {
  const e = {};
  return (t, n, o) => {
    let r = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (r = {
      ...r,
      [o.interpolationkey]: void 0
    });
    const s = n + JSON.stringify(r);
    let l = e[s];
    return l || (l = i(ut(n), o), e[s] = l), l(t);
  };
};
class xs {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ee.create("formatter"), this.options = e, this.formats = {
      number: ye((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (r) => o.format(r);
      }),
      currency: ye((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (r) => o.format(r);
      }),
      datetime: ye((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (r) => o.format(r);
      }),
      relativetime: ye((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (r) => o.format(r, n.range || "day");
      }),
      list: ye((t, n) => {
        const o = new Intl.ListFormat(t, {
          ...n
        });
        return (r) => o.format(r);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ye(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (r.length > 1 && r[0].indexOf("(") > 1 && r[0].indexOf(")") < 0 && r.find((l) => l.indexOf(")") > -1)) {
      const l = r.findIndex((a) => a.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, l)].join(this.formatSeparator);
    }
    return r.reduce((l, a) => {
      var u;
      const {
        formatName: c,
        formatOptions: f
      } = vs(a);
      if (this.formats[c]) {
        let d = l;
        try {
          const b = ((u = o == null ? void 0 : o.formatParams) == null ? void 0 : u[o.interpolationkey]) || {}, h = b.locale || b.lng || o.locale || o.lng || n;
          d = this.formats[c](l, h, {
            ...f,
            ...o,
            ...b
          });
        } catch (b) {
          this.logger.warn(b);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return l;
    }, e);
  }
}
const ys = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class ks extends yt {
  constructor(e, t, n) {
    var r, s;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = ee.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (s = (r = this.backend) == null ? void 0 : r.init) == null || s.call(r, n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const r = {}, s = {}, l = {}, a = {};
    return e.forEach((c) => {
      let f = !0;
      t.forEach((u) => {
        const d = `${c}|${u}`;
        !n.reload && this.store.hasResourceBundle(c, u) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, f = !1, s[d] === void 0 && (s[d] = !0), r[d] === void 0 && (r[d] = !0), a[u] === void 0 && (a[u] = !0)));
      }), f || (l[c] = !0);
    }), (Object.keys(r).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(r),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(a)
    };
  }
  loaded(e, t, n) {
    const o = e.split("|"), r = o[0], s = o[1];
    t && this.emit("failedLoading", r, s, t), !t && n && this.store.addResourceBundle(r, s, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((a) => {
      ls(a.loaded, [r], s), ys(a, e), t && a.errors.push(t), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((c) => {
        l[c] || (l[c] = {});
        const f = a.loaded[c];
        f.length && f.forEach((u) => {
          l[c][u] === void 0 && (l[c][u] = !0);
        });
      }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((a) => !a.done);
  }
  read(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: o,
        wait: r,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const l = (c, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const u = this.waitingReads.shift();
        this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
      }
      if (c && f && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, o + 1, r * 2, s);
        }, r);
        return;
      }
      s(c, f);
    }, a = this.backend[n].bind(this.backend);
    if (a.length === 2) {
      try {
        const c = a(e, t);
        c && typeof c.then == "function" ? c.then((f) => l(null, f)).catch(l) : l(null, c);
      } catch (c) {
        l(c);
      }
      return;
    }
    return a(e, t, l);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    k(e) && (e = this.languageUtils.toResolveHierarchy(e)), k(t) && (t = [t]);
    const r = this.queueLoad(e, t, n, o);
    if (!r.toLoad.length)
      return r.pending.length || o(), null;
    r.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), o = n[0], r = n[1];
    this.read(o, r, "read", void 0, void 0, (s, l) => {
      s && this.logger.warn(`${t}loading namespace ${r} for language ${o} failed`, s), !s && l && this.logger.log(`${t}loaded namespace ${r} for language ${o}`, l), this.loaded(e, s, l);
    });
  }
  saveMissing(e, t, n, o, r) {
    var a, c, f, u, d;
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((c = (a = this.services) == null ? void 0 : a.utils) != null && c.hasLoadedNamespace && !((u = (f = this.services) == null ? void 0 : f.utils) != null && u.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((d = this.backend) != null && d.create) {
        const b = {
          ...s,
          isUpdate: r
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let g;
            h.length === 5 ? g = h(e, t, n, o, b) : g = h(e, t, n, o), g && typeof g.then == "function" ? g.then((m) => l(null, m)).catch(l) : l(null, g);
          } catch (g) {
            l(g);
          }
        else
          h(e, t, n, o, l, b);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, o);
    }
  }
}
const Gi = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), k(i[1]) && (e.defaultValue = i[1]), k(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((n) => {
        e[n] = t[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Zi = (i) => {
  var e, t;
  return k(i.ns) && (i.ns = [i.ns]), k(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), k(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i;
}, it = () => {
}, ws = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class Ye extends yt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Zi(e), this.services = {}, this.logger = ee, this.modules = {
      external: []
    }, ws(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (k(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const o = Gi();
    this.options = {
      ...o,
      ...this.options,
      ...Zi(t)
    }, this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? ee.init(r(this.modules.logger), this.options) : ee.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : f = xs;
      const u = new Ki(this.options);
      this.store = new Mi(this.options.resources, this.options);
      const d = this.services;
      d.logger = ee, d.resourceStore = this.store, d.languageUtils = u, d.pluralResolver = new bs(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (d.formatter = r(f), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new _s(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new ks(r(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(b) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(b, ...g);
      }), this.modules.languageDetector && (d.languageDetector = r(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = r(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new ht(this.services, this.options), this.translator.on("*", function(b) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(b, ...g);
      }), this.modules.external.forEach((b) => {
        b.init && b.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = it), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments), e;
      };
    });
    const a = Fe(), c = () => {
      const f = (u, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), n(u, d);
      };
      if (this.languages && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), a;
  }
  loadResources(e) {
    var r, s;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it;
    const o = k(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const l = [], a = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((u) => {
          u !== "cimode" && l.indexOf(u) < 0 && l.push(u);
        });
      };
      o ? a(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((f) => a(f)), (s = (r = this.options.preload) == null ? void 0 : r.forEach) == null || s.call(r, (c) => a(c)), this.services.backendConnector.load(l, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(c);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const o = Fe();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = it), this.services.backendConnector.reload(e, t, (r) => {
      o.resolve(), n(r);
    }), o;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Hn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const o = Fe();
    this.emit("languageChanging", e);
    const r = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, c) => {
      c ? (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), t && t(a, function() {
        return n.t(...arguments);
      });
    }, l = (a) => {
      var f, u;
      !e && !a && this.services.languageDetector && (a = []);
      const c = k(a) ? a : this.services.languageUtils.getBestMatchFromCodes(a);
      c && (this.language || r(c), this.translator.language || this.translator.changeLanguage(c), (u = (f = this.services.languageDetector) == null ? void 0 : f.cacheUserLanguage) == null || u.call(f, c)), this.loadResources(c, (d) => {
        s(d, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), o;
  }
  getFixedT(e, t, n) {
    var o = this;
    const r = function(s, l) {
      let a;
      if (typeof l != "object") {
        for (var c = arguments.length, f = new Array(c > 2 ? c - 2 : 0), u = 2; u < c; u++)
          f[u - 2] = arguments[u];
        a = o.options.overloadTranslationOptionHandler([s, l].concat(f));
      } else
        a = {
          ...l
        };
      a.lng = a.lng || r.lng, a.lngs = a.lngs || r.lngs, a.ns = a.ns || r.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || n || r.keyPrefix);
      const d = o.options.keySeparator || ".";
      let b;
      return a.keyPrefix && Array.isArray(s) ? b = s.map((h) => `${a.keyPrefix}${d}${h}`) : b = a.keyPrefix ? `${a.keyPrefix}${d}${s}` : s, o.t(b, a);
    };
    return k(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
  }
  t() {
    var o;
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (o = this.translator) == null ? void 0 : o.translate(...t);
  }
  exists() {
    var o;
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (o = this.translator) == null ? void 0 : o.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, r = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const s = (l, a) => {
      const c = this.services.backendConnector.state[`${l}|${a}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, e) && (!o || s(r, e)));
  }
  loadNamespaces(e, t) {
    const n = Fe();
    return this.options.ns ? (k(e) && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = Fe();
    k(e) && (e = [e]);
    const o = this.options.preload || [], r = e.filter((s) => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return r.length ? (this.options.preload = o.concat(r), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var o, r;
    if (e || (e = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((r = this.services) == null ? void 0 : r.languageUtils) || new Ki(Gi());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Ye(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, r = new Ye(o);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      r[l] = this[l];
    }), r.services = {
      ...this.services
    }, r.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, n) {
      const l = Object.keys(this.store.data).reduce((a, c) => (a[c] = {
        ...this.store.data[c]
      }, Object.keys(a[c]).reduce((f, u) => (f[u] = {
        ...a[c][u]
      }, f), {})), {});
      r.store = new Mi(l, o), r.services.resourceStore = r.store;
    }
    return r.translator = new ht(r.services, o), r.translator.on("*", function(l) {
      for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
        c[f - 1] = arguments[f];
      r.emit(l, ...c);
    }), r.init(o, t), r.translator.options = o, r.translator.backendConnector.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, r;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const V = Ye.createInstance();
V.createInstance = Ye.createInstance;
const Ss = V.createInstance;
V.dir;
V.init;
V.loadResources;
V.reloadResources;
V.use;
V.changeLanguage;
V.getFixedT;
V.t;
V.exists;
V.setDefaultNamespace;
V.hasLoadedNamespace;
V.loadNamespaces;
V.loadLanguages;
const Ut = Ss({
  fallbackLng: "fi",
  interpolation: {
    escapeValue: !1
    // React already does escaping
  },
  resources: {
    fi: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: "Sulje",
        notificationAriaLabel: "Ilmoitus",
        openNewTabAriaLabel: "Avaa uusi välilehti",
        openExternalDomainAriaLabel: "Avaa ulkoinen verkkosivusto"
      }
    },
    sv: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: "Stäng",
        notificationAriaLabel: "Meddelande",
        openNewTabAriaLabel: "Öppna ny flik",
        openExternalDomainAriaLabel: "Öppna extern webbplats"
      }
    },
    en: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: "Close",
        notificationAriaLabel: "Notification",
        openNewTabAriaLabel: "Open new tab",
        openExternalDomainAriaLabel: "Open external website"
      }
    }
  }
});
Ut.init();
function Ji(i = []) {
  const e = localStorage.getItem("closedNotifications");
  let t = e ? JSON.parse(e) : [];
  return t = Ns(i, t), Mn(t), t;
}
function Ns(i, e) {
  return i.filter(
    (t) => t.level !== "error"
  ).filter((t) => {
    const n = Se(t);
    return e.includes(n);
  }).map((t) => Se(t));
}
function Se(i) {
  return "".concat(i.modified_at, "#", i.id);
}
function Mn(i) {
  localStorage.setItem("closedNotifications", JSON.stringify(i));
}
const Es = (i) => {
  const { notifications: e, language: t = "fi" } = i, [n, o] = le(Ji(e)), [r, s] = le(() => e.filter(
    (c) => !n.includes(
      Se(c)
    )
  ));
  J(() => {
    t && (console.debug("ois pitänyt vaihtaa kieltä", t), Ut.changeLanguage(t));
  }, [t]), J(() => {
    const c = Ji(e);
    o(c), s(e.filter(
      (f) => !c.includes(
        Se(f)
      )
    ));
  }, [e]);
  const l = (c) => {
    const f = Se(c);
    n.push(f), Mn(n), s(e.filter((u) => !n.includes(Se(u))));
  }, a = () => {
    localStorage.removeItem("closedNotifications"), n.splice(0, n.length), s(e);
  };
  return /* @__PURE__ */ Et(os, { i18n: Ut, children: [
    /* @__PURE__ */ ke(rs, { notifications: r, onClose: l }),
    r.length < e.length && /* @__PURE__ */ ke("button", { onClick: () => a(), children: "Näytä kaikki ilmoitukset" })
  ] });
};
export {
  Es as NotificationService
};
