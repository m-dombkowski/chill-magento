import "./menu.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  generateMenu,
  hideElements,
  categoryList,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "generateMenu", callback: generateMenu },
    { btnName: "hideElements", callback: hideElements },
    { btnName: "categoryList", callback: categoryList },
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default menu;
