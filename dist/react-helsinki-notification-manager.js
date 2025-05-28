import { jsx as s, Fragment as p, jsxs as N } from "react/jsx-runtime";
import { useState as b, useEffect as x } from "react";
import { useTranslation as L, I18nextProvider as v } from "react-i18next";
import { Notification as A, NotificationSize as S, Link as C } from "hds-react";
import { createInstance as E } from "i18next";
const D = (i) => {
  const { t } = L("hns"), { notifications: e, onClose: o } = i, a = t("close"), f = t("notificationAriaLabel"), u = t("openExternalDomainAriaLabel");
  return /* @__PURE__ */ s(p, { children: e.map((n) => /* @__PURE__ */ s("div", { className: "notification-container", children: /* @__PURE__ */ N(
    A,
    {
      type: n.level,
      label: n.title,
      dismissible: !0,
      closeButtonLabelText: a,
      onClose: () => o(n),
      size: S.Medium,
      notificationAriaLabel: f,
      children: [
        n.content,
        n.external_url && /* @__PURE__ */ N(p, { children: [
          /* @__PURE__ */ s("br", {}),
          /* @__PURE__ */ s(
            C,
            {
              href: n.external_url,
              external: !0,
              openInExternalDomainAriaLabel: u,
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
function h(i = []) {
  const t = localStorage.getItem("closedNotifications");
  let e = t ? JSON.parse(t) : [];
  return e = I(i, e), g(e), e;
}
function I(i, t) {
  return i.length === 0 ? i : i.filter((e) => e.level !== "error").filter((e) => {
    const o = r(e);
    return t.includes(o);
  }).map((e) => r(e));
}
function r(i) {
  return "".concat(i.modified_at, "#", i.id);
}
function g(i) {
  localStorage.setItem("closedNotifications", JSON.stringify(i));
}
const T = (i) => {
  const { notifications: t, language: e = "fi", visibleTypes: o = ["info", "alert", "error"] } = i, [a, f] = b(h(t)), [u, n] = b(() => t.filter(
    (l) => !a.includes(r(l)) && o.includes(l.level)
  ));
  return x(() => {
    e && d.changeLanguage(e);
  }, [e]), x(() => {
    const l = h(t);
    f(l), n(
      t.filter(
        (c) => !l.includes(r(c)) && o.includes(c.level)
      )
    );
  }, [t, o]), /* @__PURE__ */ s(v, { i18n: d, children: /* @__PURE__ */ s(D, { notifications: u, onClose: (l) => {
    const c = r(l);
    a.push(c), g(a), n(
      t.filter((m) => !a.includes(r(m)) && o.includes(m.level))
    );
  } }) });
};
export {
  T as NotificationService
};
