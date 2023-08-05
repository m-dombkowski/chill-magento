import "./html.scss";
import { moduleFix } from "../../common";
import {
  existingModuleCallback,
  newModuleCallback,
  updateHtml,
  onSave,
} from "./actions";

const html = moduleFix({
  moduleClass: "module__html",
  actions: [
    {
      btnName: "moduleTitle",
      callback: ({ module }) => {
        updateHtml("comment", module);
      },
    },
    {
      btnName: "lpTitle",
      callback: ({ module }) => {
        updateHtml("lpTitle", module);
      },
    },
    {
      btnName: "asterisk",
      callback: ({ module }) => {
        updateHtml("asterisk", module);
      },
    },
    {
      btnName: "observer",
      callback: ({ module }) => {
        updateHtml("observer", module);
      },
    },
    {
      btnName: "YTIframe",
      callback: ({ module }) => {
        updateHtml("YTIframe", module);
      },
    },
    {
      btnName: "lpIframe",
      callback: ({ module }) => {
        updateHtml("lpIframe", module);
      },
    },
    {
      btnName: "script",
      callback: ({ module }) => {
        updateHtml("script", module);
      },
    },
    {
      btnName: "style",
      callback: ({ module }) => {
        updateHtml("style", module);
      },
    },
    {
      btnName: "nbspFix",
      callback: ({ module }) => {
        updateHtml("nbspFix", module);
      },
    },
    {
      btnName: "tipBtn",
      callback: ({ module }) => {
        updateHtml("tipBtn", module);
      },
    },
    {
      btnName: "bannerUpd",
      callback: ({ module }) => {
        updateHtml("bannerUpd", module);
      },
    },
    {
      btnName: "fakeMenu",
      callback: ({ module }) => {
        updateHtml("fakeMenu", module);
      },
    },
    {
      btnName: "max5InRow",
      callback: ({ module }) => {
        updateHtml("max5InRow", module);
      },
    },
    {
      btnName: "heroNewListingTitle",
      callback: ({ module }) => {
        updateHtml("heroNewListingTitle", module);
      },
    },
    {
      btnName: "promoSquaresAndBorder",
      callback: ({ module }) => {
        updateHtml("promoSquaresAndBorder", module);
      },
    },
    {
      btnName: "animatedBorder",
      callback: ({ module }) => {
        updateHtml("animatedBorder", module);
      },
    },
    {
      btnName: "payback",
      callback: ({ module }) => {
        updateHtml("payback", module);
      },
    },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default html;
