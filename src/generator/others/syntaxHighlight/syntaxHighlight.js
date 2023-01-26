import "./syntaxHighlight.scss";
import { w3CodeColor } from "./variables";

const syntaxHighlight = () => {
  const codeTextareas = document.querySelectorAll(
    "textarea[id^=html_content_], [id^=html_product_block_]"
  );
  codeTextareas.forEach((codeTextarea, i) => {
    // hide oryginal inputs
    codeTextarea.style.display = "none";

    // create fake input
    const codeDiv = document.createElement("div");
    codeDiv.setAttribute("contenteditable", "true");
    codeDiv.setAttribute("id", "chill-syntax-hl-container" + i);
    codeDiv.classList.add("chill-syntax-hl-container");
    codeTextarea.parentElement.appendChild(codeDiv);
    codeDiv.innerText = codeTextarea.value;
    const myDiv = document.getElementById("chill-syntax-hl-container" + i);
    const textarea = codeTextarea;
    // highlight function
    const hlt = (e) => {
      console.log(!e.shiftKey, !e.ctrlKey, !e.altKey, e.key, e.code);
      if (
        !e.shiftKey &&
        !e.ctrlKey &&
        !e.altKey &&
        e.key !== "Shift" &&
        e.key !== "Control" &&
        e.code !== "Enter"
      ) {
        textarea.value = myDiv.innerText;
        function getCaretIndex(element) {
          let position = 0;
          const isSupported = typeof window.getSelection !== "undefined";
          if (isSupported) {
            const selection = window.getSelection();
            if (selection.rangeCount !== 0) {
              const range = window.getSelection().getRangeAt(0);
              const preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              position = preCaretRange.toString().length;
            }
          }
          return position;
        }
        const chars = getCaretIndex(myDiv);

        const code = textarea.value;
        myDiv.innerText = textarea.value;

        function createRange(node, chars, range) {
          range = document.createRange();

          range.selectNode(node);
          range.setStart(node, 0);

          if (chars.count === 0) {
            range.setEnd(node, chars.count);
          } else if (node && chars.count > 0) {
            if (node.nodeType === Node.TEXT_NODE) {
              if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
              } else {
                range.setEnd(node, chars.count);
                chars.count = 0;
              }
            } else {
              for (var lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);

                if (chars.count === 0) {
                  break;
                }
              }
            }
          }

          return range;
        }

        function setCurrentCursorPosition(chars) {
          var selection = window.getSelection();

          var range = createRange(myDiv, {
            count: chars,
          });

          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        w3CodeColor(myDiv);

        myDiv.focus();
        setCurrentCursorPosition(chars);
      }
    };
    codeDiv.addEventListener("keyup", hlt);

    w3CodeColor(codeDiv);
  });
};
export default syntaxHighlight;
