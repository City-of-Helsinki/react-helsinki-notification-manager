import { useEffect as e, useState as t } from "react";
import { I18nextProvider as n, useTranslation as r } from "react-i18next";
import { Link as i, Notification as a, NotificationSize as o } from "hds-react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "i18next";
//#region lib/components/NotificationList.tsx
var d = (e) => {
	let { t } = r("hns"), { notifications: n, onClose: u } = e, d = t("close"), f = t("notificationAriaLabel"), p = t("openExternalDomainAriaLabel");
	return /* @__PURE__ */ c(s, { children: n.map((e) => /* @__PURE__ */ c("div", {
		className: "notification-container",
		children: /* @__PURE__ */ l(a, {
			type: e.level,
			label: e.title,
			dismissible: !0,
			closeButtonLabelText: d,
			onClose: () => u(e),
			size: o.Medium,
			notificationAriaLabel: f,
			children: [e.content, e.external_url && /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c("br", {}), /* @__PURE__ */ c(i, {
				href: e.external_url,
				external: !0,
				openInExternalDomainAriaLabel: p,
				children: e.external_url_text || e.external_url
			})] })]
		})
	}, e.id)) });
};
//#endregion
//#region lib/i18n.ts
u.init({
	fallbackLng: "fi",
	interpolation: { escapeValue: !1 },
	resources: {
		fi: { hns: {
			close: "Sulje",
			notificationAriaLabel: "Ilmoitus",
			openExternalDomainAriaLabel: "Avaa ulkoinen verkkosivusto"
		} },
		sv: { hns: {
			close: "Stäng",
			notificationAriaLabel: "Meddelande",
			openExternalDomainAriaLabel: "Öppna extern webbplats"
		} },
		en: { hns: {
			close: "Close",
			notificationAriaLabel: "Notification",
			openExternalDomainAriaLabel: "Open external website"
		} }
	}
});
var f = u, p = "persistentClosedNotifications", m = "sessionClosedNotifications";
function h(e = []) {
	let t = g(e), n = _();
	return [...t, ...n];
}
function g(e = []) {
	let t = localStorage.getItem(p), n = t ? JSON.parse(t) : [];
	return e.length > 0 && (n = v(e, n), x(n)), n;
}
function _() {
	let e = sessionStorage.getItem(m);
	return e ? JSON.parse(e) : [];
}
function v(e, t) {
	return e.length === 0 ? t : e.filter((e) => e.level === "info" || e.level === "alert").filter((e) => {
		let n = y(e);
		return t.includes(n);
	}).map((e) => y(e));
}
function y(e) {
	return `${e.modified_at}#${e.id}`;
}
function b(e) {
	e.level === "error" ? S([..._(), y(e)]) : x([...g([]), y(e)]);
}
function x(e) {
	localStorage.setItem(p, JSON.stringify(e));
}
function S(e) {
	sessionStorage.setItem(m, JSON.stringify(e));
}
//#endregion
//#region lib/NotificationService.tsx
var C = (r) => {
	let { notifications: i, language: a = "fi", visibleTypes: o = [
		"info",
		"alert",
		"error"
	] } = r, [s, l] = t(h(i)), [u, p] = t(() => i.filter((e) => !s.includes(y(e)) && o.includes(e.level)));
	return e(() => {
		a && f.changeLanguage(a);
	}, [a]), e(() => {
		let e = h(i);
		l(e), p(i.filter((t) => !e.includes(y(t)) && o.includes(t.level)));
	}, [i, o]), /* @__PURE__ */ c(n, {
		i18n: f,
		children: /* @__PURE__ */ c(d, {
			notifications: u,
			onClose: (e) => {
				b(e);
				let t = y(e), n = [...s, t];
				l(n), p(i.filter((e) => !n.includes(y(e)) && o.includes(e.level)));
			}
		})
	});
};
//#endregion
export { C as NotificationService };
