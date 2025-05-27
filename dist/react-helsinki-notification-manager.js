import { jsx as s, Fragment as m, jsxs as p } from "react/jsx-runtime";
import { useState as N, useEffect as b } from "react";
import { useTranslation as g, I18nextProvider as A } from "react-i18next";
import { Notification as v, NotificationSize as S, Link as C } from "hds-react";
import { createInstance as E } from "i18next";
const D = (i) => {
  const { t } = g("hns"), { notifications: e, onClose: o } = i, c = t("close"), f = t("notificationAriaLabel"), r = t("openExternalDomainAriaLabel");
  return /* @__PURE__ */ s(m, { children: e.map((n) => /* @__PURE__ */ s("div", { className: "notification-container", children: /* @__PURE__ */ p(
    v,
    {
      type: n.level,
      label: n.title,
      dismissible: !0,
      closeButtonLabelText: c,
      onClose: () => o(n),
      size: S.Medium,
      notificationAriaLabel: f,
      children: [
        n.content,
        n.external_url && /* @__PURE__ */ p(m, { children: [
          /* @__PURE__ */ s("br", {}),
          /* @__PURE__ */ s(
            C,
            {
              href: n.external_url,
              external: !0,
              openInExternalDomainAriaLabel: r,
              children: n.external_url_text || n.external_url
            }
          )
        ] })
      ]
    }
  ) }, n.id)) });
}, d = E({
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
function x(i = []) {
  const t = localStorage.getItem("closedNotifications");
  let e = t ? JSON.parse(t) : [];
  return e = I(i, e), h(e), e;
}
function I(i, t) {
  return i.filter((e) => e.level !== "error").filter((e) => {
    const o = l(e);
    return t.includes(o);
  }).map((e) => l(e));
}
function l(i) {
  return "".concat(i.modified_at, "#", i.id);
}
function h(i) {
  localStorage.setItem("closedNotifications", JSON.stringify(i));
}
const y = (i) => {
  const { notifications: t, language: e = "fi" } = i, [o, c] = N(x(t)), [f, r] = N(() => t.filter(
    (a) => !o.includes(l(a))
  ));
  return b(() => {
    e && d.changeLanguage(e);
  }, [e]), b(() => {
    const a = x(t);
    c(a), r(
      t.filter(
        (u) => !a.includes(l(u))
      )
    );
  }, [t]), /* @__PURE__ */ s(A, { i18n: d, children: /* @__PURE__ */ s(D, { notifications: f, onClose: (a) => {
    const u = l(a);
    o.push(u), h(o), r(
      t.filter((L) => !o.includes(l(L)))
    );
  } }) });
};
export {
  y as NotificationService
};
