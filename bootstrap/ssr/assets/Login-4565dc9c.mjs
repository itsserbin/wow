import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./Checkbox-c87c898e.mjs";
import { _ as _sfc_main$1 } from "./GuestLayout-da746585.mjs";
import { _ as _sfc_main$4 } from "./InputError-71f0cb4c.mjs";
import { _ as _sfc_main$2 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$6 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import "./ApplicationLogo-76725da6.mjs";
import "./Logo-21a2caa8.mjs";
import "@inertiajs/vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="block mt-4"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        name: "remember",
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600">Remember me</span></label></div><div class="flex items-center justify-end mt-4">`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("password.request"),
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Forgot your password? `);
            } else {
              return [
                createTextVNode(" Forgot your password? ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$6, {
        class: ["ml-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              createTextVNode(" Log in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
