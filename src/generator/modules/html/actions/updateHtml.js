import { update } from "immutable";
import { w3CodeColor } from "../../../others/syntaxHighlight/variables";
import { htmlSnippets } from "../variables";

const updateContent = (htmlSnippet, module, begin = false) => {
  const input = module.querySelector(".input__textarea");
  if (!input.value.includes(htmlSnippet)) {
    if (!begin) {
      input.value += htmlSnippet;
    } else {
      input.value = htmlSnippet + input.value;
    }
  } else {
    input.value = input.value.replace(htmlSnippet, "");
  }
};

const updateHtml = (action, module) => {
  switch (action) {
    case "bannerUpd":
      updateContent(htmlSnippets.bannerUpd, module);
      break;
    case "runClock24Before":
      updateContent(htmlSnippets.runClock24Before, module);
      break;
    case "nbspFix":
      updateContent(htmlSnippets.nbspFix, module);
      break;
    case "script":
      updateContent(htmlSnippets.script, module);
      break;
    case "style":
      updateContent(htmlSnippets.style, module);
      break;
    case "fakeMenu":
      updateContent(htmlSnippets.fakeMenu, module);
      break;
    case "YTIframe":
      updateContent(htmlSnippets.YT, module);
      break;
    case "lpTitle":
      updateContent(htmlSnippets.lpTitle, module);
      break;
    case "asterisk":
      updateContent(htmlSnippets.lpAsterisk, module);
      break;
    case "comment":
      updateContent(htmlSnippets.comment, module, true);
      break;
    case "tipBtn":
      updateContent(htmlSnippets.tipBtn, module);
      break;
    case "max5InRow":
      updateContent(htmlSnippets.maxFiveInRow, module);
      break;
    case "observer":
      updateContent(htmlSnippets.observer, module);
      break;
    case "lpIframe":
      updateContent(htmlSnippets.lpIframe, module);
      break;
    case "heroNewListingTitle":
      updateContent(htmlSnippets.heroNewListingTitle, module);
      break;
    case "promoSquaresAndBorder":
      updateContent(htmlSnippets.promoSquaresAndBorder, module);
      break;
    case "animatedBorder":
      updateContent(htmlSnippets.animatedBorder, module);
      break;
    case "payback":
      updateContent(htmlSnippets.payback, module);
      break;
    default:
      break;
  }

  // copy code to fake code input and highlight syntax
  const codeDiv = module.querySelector(".chill-syntax-hl-container");
  const codeTextarea = module.querySelector("textarea[id^=html_content_]");
  codeDiv.innerText = codeTextarea.value;
  w3CodeColor(codeDiv);
};

export default updateHtml;
