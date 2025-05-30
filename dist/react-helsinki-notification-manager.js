import { jsx as a, Fragment as m, jsxs as g } from "react/jsx-runtime";
import { useState as b, useEffect as S } from "react";
import { useTranslation as A, I18nextProvider as E } from "react-i18next";
import { Notification as O, NotificationSize as _, Link as T } from "hds-react";
import { createInstance as D } from "i18next";
const k = (e) => {
  const { t } = A("hns"), { notifications: i, onClose: n } = e, r = t("close"), c = t("notificationAriaLabel"), u = t("openExternalDomainAriaLabel");
  return /* @__PURE__ */ a(m, { children: i.map((o) => /* @__PURE__ */ a("div", { className: "notification-container", children: /* @__PURE__ */ g(
    O,
    {
      type: o.level,
      label: o.title,
      dismissible: !0,
      closeButtonLabelText: r,
      onClose: () => n(o),
      size: _.Medium,
      notificationAriaLabel: c,
      children: [
        o.content,
        o.external_url && /* @__PURE__ */ g(m, { children: [
          /* @__PURE__ */ a("br", {}),
          /* @__PURE__ */ a(
            T,
            {
              href: o.external_url,
              external: !0,
              openInExternalDomainAriaLabel: u,
              children: o.external_url_text || o.external_url
            }
          )
        ] })
      ]
    }
  ) }, o.id)) });
}, d = D({
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
        openExternalDomainAriaLabel: "Avaa ulkoinen verkkosivusto"
      }
    },
    sv: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: "Stäng",
        notificationAriaLabel: "Meddelande",
        openExternalDomainAriaLabel: "Öppna extern webbplats"
      }
    },
    en: {
      hns: {
        // Make 'hns' a namespace, not a key
        close: "Close",
        notificationAriaLabel: "Notification",
        openExternalDomainAriaLabel: "Open external website"
      }
    }
  }
});
d.init();
const h = "persistentClosedNotifications", C = "sessionClosedNotifications";
function x(e = []) {
  const t = v(e), i = I();
  return [...t, ...i];
}
function v(e = []) {
  const t = localStorage.getItem(h);
  let i = t ? JSON.parse(t) : [];
  return e.length > 0 && (i = y(e, i), L(i)), i;
}
function I() {
  const e = sessionStorage.getItem(C);
  return e ? JSON.parse(e) : [];
}
function y(e, t) {
  return e.length === 0 ? t : e.filter(
    (n) => n.level === "info" || n.level === "alert"
  ).filter((n) => {
    const r = l(n);
    return t.includes(r);
  }).map((n) => l(n));
}
function l(e) {
  return "".concat(e.modified_at, "#", e.id);
}
function J(e) {
  e.level === "error" ? P([
    ...I(),
    l(e)
  ]) : L([
    ...v([]),
    l(e)
  ]);
}
function L(e) {
  localStorage.setItem(h, JSON.stringify(e));
}
function P(e) {
  sessionStorage.setItem(C, JSON.stringify(e));
}
const M = (e) => {
  const { notifications: t, language: i = "fi", visibleTypes: n = ["info", "alert", "error"] } = e, [r, c] = b(x(t)), [u, o] = b(() => t.filter(
    (s) => !r.includes(l(s)) && n.includes(s.level)
  ));
  return S(() => {
    i && d.changeLanguage(i);
  }, [i]), S(() => {
    const s = x(t);
    c(s), o(
      t.filter(
        (f) => !s.includes(l(f)) && n.includes(f.level)
      )
    );
  }, [t, n]), /* @__PURE__ */ a(E, { i18n: d, children: /* @__PURE__ */ a(k, { notifications: u, onClose: (s) => {
    J(s);
    const f = l(s), N = [...r, f];
    c(N), o(
      t.filter(
        (p) => !N.includes(l(p)) && n.includes(p.level)
      )
    );
  } }) });
};
export {
  M as NotificationService
};
