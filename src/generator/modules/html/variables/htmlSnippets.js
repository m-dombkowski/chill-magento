const htmlSnippets = {
  lpIframe: `
<!-- landing-page-iframe -->
<iframe
  class="landing-page-iframe hidden-iframe"
  style="width: 100%; min-height: 110vh; overflow: hidden"
  src="https://www.neonet.pl/images24/promocje/"
  frameborder="0"
></iframe>
<style>
  .landing-page-iframe.hidden-iframe {
    opacity: 0;
  }
</style>

<script>
  const script = () => {
    function resizeIframe(obj) {
      const height =
        Number(obj.contentWindow.document.documentElement.scrollHeight) + 20;

      obj.style.height = height + "px";
    }
    const iframe = document.querySelector(".landing-page-iframe");
    iframe.classList.remove("hidden-iframe");
    resizeIframe(iframe);
  };

  const runScriptForElement = (requiredElementSelector, callback) => {
    const observerOptions = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
      subtree: true,
    };
  
    let wasTheScriptRun = false;
    const runScript = (observer) => {
      wasTheScriptRun = true;
      observer.disconnect();
      callback();
    };
    const observer = new MutationObserver((mutation) => {
      const requiredElement = document.querySelector(requiredElementSelector);
      if (requiredElement && !wasTheScriptRun) {
        runScript(observer);
      }
    });
    observer.observe(document.body, observerOptions);
  };

  runScriptForElement(".landing-page-iframe", script);
</script>  
  `,
  observer: `
<script>
  const script = () => {
    console.warn(
      "Kod landing page'a jest już na stronie"
    );
  };

  const runScriptForElement = (requiredElementSelector, callback) => {
    const observerOptions = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
      subtree: true,
    };
  
    let wasTheScriptRun = false;
    const runScript = (observer) => {
      wasTheScriptRun = true;
      observer.disconnect();
      callback();
    };
    const observer = new MutationObserver((mutation) => {
      const requiredElement = document.querySelector(requiredElementSelector);
      if (requiredElement && !wasTheScriptRun) {
        runScript(observer);
      }
    });
    observer.observe(document.body, observerOptions);
  };
  runScriptForElement(".landing-page", script);

  // requiredElementSelector - check if element with this selector has been rendered
  // callback - callback
</script>
  `,
  comment: `<!--  -->
  `,
  lpTitle: `
<!-- lp-Title -->
<div class="lp-title"></div>
  `,
  lpAsterisk: `
  <!-- lp-asterisk -->
<div class="lp-asterisk"></div>
  `,
  YT: `
<!-- YT -->
<iframe
  class="lp-iframe"
  src=""
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
<style>
  .lp-iframe {
    width: 100vw;
    height: calc(100vw * 0.5625);
    max-width: 1100px;
    max-height: calc(1100px * 0.5625);
    display: block;
    margin: auto;
  }
  @media (min-width: 1600px) {
    .lp-iframe {
      max-width: 1300px;
      max-height: calc(1300px * 0.5625);
    }
  }
</style>
  `,
  fakeMenu: `
  <!-- fake-Menu -->
  <div class="menuDesktopScss-root-3xn menuDesktopScss-grid_container-5Vr">
    <div class="menuDesktopScss-inner-1GU">
      <button class="secondaryItemDesktopCss-root-p6v">Watch 6 40mm</button>
      <button class="secondaryItemDesktopCss-root-p6v">Watch 6 44mm</button>
      <button class="secondaryItemDesktopCss-root-p6v">
        Watch 6 Classic 43mm
      </button>
      <button class="secondaryItemDesktopCss-root-p6v">
        Watch 6 Classic 47mm
      </button>
    </div>
  </div>
  
  <!-- WARNING! When there is more than one fake menu script and style should be attached once. 
  If you want to have more than 1 fake menu and also normal listings on LP you need to add new class to the "menuDesktopScss-inner-1GU" div and 
  "secondaryItemDesktopCss-root-p6v" buttons. 
  -->
  
  <style>
    [class*="productsScss-root_slider-"] {
      display: none;
    }
    [class*="productsScss-root_slider-"].show {
      display: block;
    }
  </style>
  
  <script>
    setTimeout(() => {
      const lists = document.querySelectorAll(
        "[class*=productsScss-root_slider-2eI]"
      );

      <!--
      Change class if you need more than one fake menu 
      -->
      const btnsContainers = document.querySelectorAll(
        ".menuDesktopScss-inner-1GU"
      );
  
      <!--
      If you have normal listings on LP change ranges beneath to the ones that are going to be attached to fake menu
      -->
      const fakeMenu = (ranges = [[0, lists.length]]) => {
        ranges.forEach(([start, end], i) => {
          const listsInRange = Array.from(lists).filter(
            (el, i) => i >= start && i <= end
          );
  
          listsInRange[0].classList.add("show");
          listsInRange.forEach((list) => {
            list.classList.add("fake-menu-list");
          });
          <!-- Class to change if more than 1 fake menu -->
          const btns = btnsContainers[i].querySelectorAll(
            ".secondaryItemDesktopCss-root-p6v"
          );
          btns[0].classList.add("secondaryItemDesktopCss-selected-2pA");
          btns.forEach(function (btn, i) {
            btn.addEventListener("click", function (e) {
              const showedList = listsInRange.filter((el) =>
                el.classList.contains("show")
              )[0];
              const activeBtn = Array.from(btns).filter((el) =>
                el.classList.contains("secondaryItemDesktopCss-selected-2pA")
              )[0];
              if (activeBtn && showedList) {
                showedList.classList.remove("show");
                activeBtn.classList.remove(
                  "secondaryItemDesktopCss-selected-2pA"
                );
              }
              listsInRange[i].classList.add("show");
              btns[i].classList.add("secondaryItemDesktopCss-selected-2pA");
  
              window.scrollBy(0, 1);
              window.scrollBy(0, -1);
            });
          });
        });
        document
          .querySelectorAll(
            '[class*="productsScss-root_slider-"]:not(.fake-menu-list)'
          )
          .forEach((el) => el.classList.add("show"));
      };
      fakeMenu();
    }, 2000);
  </script>
  
`,
  script: `
<!-- script -->
<script>
  
</script>
  `,
  style: `
<!-- style -->
<style>
  
</style>
    `,
  tipBtn: `
  <!-- Jak skorzystać z promocji? -->
  <button class="cartButtonCss-cart__button-3Oz custom-nn-btn">
    Jak skorzystać z promocji?
  </button>
  <style>
    .custom-nn-btn {
      margin: 20px auto 15px;
      height: 36px;
    }
    [class^="tipScss-root-"],
    .bannerAsStepsCss-root-3qb,
    .tipCss-root-1rW,
    .tipCss-title-1az {
      display: none;
    }
    [class^="tipScss-root-"].show,
    .bannerAsStepsCss-root-3qb.show {
      display: block;
    }
    .tipCss-root-1rW.show {
      display: flex;
    }
  </style>
  <script>
    document.querySelector(".custom-nn-btn").addEventListener("click", () => {
      document
        .querySelector(
          ".bannerAsStepsCss-root-3qb, .tipCss-root-1rW, [class^=tipScss-root-]"
        )
        .classList.toggle("show");
    });
  </script>
  
  
`,
  maxFiveInRow: `
<!-- Max Five In Row -->
<style>
  @media (min-width: 756px) {
    .custom-slider .defaultCss-root-1kS {
      width: 50%;
    }
  }
  @media (min-width: 1100px) {
    .custom-slider .defaultCss-root-1kS {
      width: 33.3%;
    }
  }
  @media (min-width: 1600px) {
    .custom-slider .defaultCss-root-1kS {
      width: 20%;
    }
  }
</style>
<script>
  const maxFiveInRow = (listingIDNumber = 0) => {
    const onElementLoad = (
      elementSelector,
      callback,
      delay = 700,
      container = document
    ) => {
      let i = 0;
      const iterator = () => {
        i++;
        setTimeout(() => {
          if (container.querySelector(elementSelector)) {
            if (callback) {
              setTimeout(() => {
                callback(elementSelector);
              }, delay);
            }
          } else if (i < 700) {
            iterator();
          } else {
            console.warn(
              "onElementLoad: stop working for " + elementSelector
            );
          }
        }, 50);
      };
      iterator();
    };
    onElementLoad("[class^=_4columnsCss-root]", (selector) => {
      document
        .querySelectorAll(selector)
        [listingIDNumber].classList.add("custom-slider");
    });
  };
  maxFiveInRow();
</script>
  `,
  bannerUpd: `  
<!-- Banner update -->
<script>
  const update_banner = () => {
    const bannerHero = document.querySelector(
      "img[class^=heroBannerScss], img[alt~=update_banner-oryginal]"
    );
    const bannersToSwap = Array.from(
      document.querySelectorAll("img[alt~=update_banner-from]")
    );
    const date = new Date();
    const curentTime = date.getTime();

    // in case of any bugs in next lines of code
    setTimeout(() => {
      bannerHero.classList.add("update_banner-display");
    }, 0);

    const swapBanners = function (curentTime) {
      const imagesData = bannersToSwap
        .map((newBanner, i) => {
          const alt = newBanner.alt;
          const src = newBanner.src;
          const altDate = alt.substr(alt.indexOf("update_banner-from") + 19);
          const startTime = new Date(altDate).getTime();
          if (isNaN(startTime)) {
            console.error(
              "update_banner: time of images[" + i + "] is not a number"
            );
          }
          return { src, startTime };
        })
        .filter(({ startTime }) => startTime < curentTime);

      const theLatestImage = imagesData.length
        ? imagesData.reduce(function (prev, current) {
            return prev.startTime > current.startTime ? prev : current;
          })
        : null;

      if (theLatestImage) {
        bannerHero.src = theLatestImage.src;
      } else {
        console.warn("update_banner: no banners to swap found");
      }
    };

    swapBanners(curentTime);
  };

  update_banner();
</script>
<style>
  img[alt~="update_banner-oryginal"],
  img[alt~="update_banner-from"] {
    display: none;
  }

  img.update_banner-display {
    display: block;
  }
</style>
  `,
  nbspFix: `
<!-- nbspFix -->
<script src="https://www.neonet.pl/images24/promocje/lib/nbsp_fix/nbsp_fix_3.js"></script>
<script>
  setTimeout(() => {
    nbspFix({
      containerSelector: ".landing-page",
      howManyLetters: 1,
    });
  }, 2500);
</script>
  `,
  heroNewListingTitle: `
  <script>
  const heroTitle = document.querySelector(".dealOfTheWeekWrapperScss-title-1hy");
  heroTitle.innerHTML = "Your title!"
  </script`,
  promoSquaresAndBorder: `

<div style="text-align: center">
  <div
    class="lp-asterisk"
    style="
      font-size: 2.3rem;
      margin: 20px auto;
      padding: 16px 32px;
      font-weight: bold;
      border: #ff444f solid 3px;
      border-radius: 5px;
      max-width: unset;
      display: inline-block;
      letter-spacing: 2px;
      line-height: 1.4;
      width: auto;
    "
  >
    Rabat 12% udzielany jest w koszyku z kodem RABAT12
  </div>
</div>

<div class="container">

  <div class="child">
      <img
        class="promotionsCss-promotion-3Mh"
        src="https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi1tMi5uZW9uZXQucGwiLCJrZXkiOiJtZWRpYS9tYXJrZXRpbmcvY2FtcGFpZ24vbS9iL21iYW5lcl8zMTV4MjAwMTY4MDUzMTA0NmNvcHkwLnBuZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9fX0=/mbaner_315x2001680531046copy0.png"
        alt="lodowki"
        data-layer-click-set="true"
      />
      <a
        target="_blank"
        class="promotionsCss-buttonPromotion-2zE"
        href="https://www.neonet.pl/lpage/promo-pralki-lodowki-suszarki-taniej-m5.html?kwplcm=banner_promo_home"
      >
        Sprawdź promocję
      </a>
  </div>

<!--
 <div class="child">
      <img
        class="promotionsCss-promotion-3Mh"
        src="https://cdn-img.neonet.pl/eyJidWNrZXQiOiJodHRwczovL2Nkbi1tMi5uZW9uZXQucGwiLCJrZXkiOiJtZWRpYS9tYXJrZXRpbmcvY2FtcGFpZ24vbS9iL21iYW5lcl8zMTV4MjAwMTY3OTM4NDk1MWNvcHkwLnBuZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODB9fX0=/mbaner_315x2001679384951copy0.png"
        alt="banner wyprzedaz duzego agd"
        data-layer-click-set="true"
      />
      <a
        target="_blank"
        class="promotionsCss-buttonPromotion-2zE"
        href="https://www.neonet.pl/lpage/promo-wyprzedaz-duzego-agd.html?kwplcm=banner_promo_home"
      >
        Sprawdź promocję
      </a>
  </div>
  -->
</div>

<style>
   .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
      border: 1px solid rgb(222, 222, 222);
    }

    .child a {
      font-weight: 500;
      padding: 14px 20px;
      display: inline-block;
      color: rgb(56, 56, 56);
      font-size: 16px;
      border: 0;
      line-height: 18px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      position: relative;
      text-decoration: none;
    }

    .child a::after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      right: 4px;
      border-top: 2px solid rgb(255, 68, 79);
      border-right: 2px solid rgb(255, 68, 79);
      -moz-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      transform: rotate(45deg);
      transition: transform 0.2s;
      margin: 0 auto;
      position: absolute;
      top: 19px;
    }
    </style>
  `,

  animatedBorder: `
  <div style="text-align: center; max-width: 750px; margin: 0 auto;">
  <div
    class="box"
    "
  >
  <p>Akcja łączy się z innymi promocjami.<br/>Rabat 6% udzielany jest od poniżej obowiązujących cen.<br/>Aby skorzystać z obu promocji, należy w koszyku zaznaczyć
oba kafle promocyjne lub wpisać dodatkowy kod LODOWKA.</p>
  </div>
</div>
<style>
  @import url("https://fonts.googleapis.com/css?family=Raleway:400");


@property --angle {
  syntax: '<angle>';
  initial-value: 90deg;
  inherits: true;
}

@property --gradX {
  syntax: '<percentage>';
  initial-value: 50%;
  inherits: true;
}

@property --gradY {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: true;
}



:root {
	--d: 2500ms;
	--angle: 60deg;
	--gradX: 100%;
	--gradY: 50%;
	--c1: rgba(255,68,79,1);
	--c2: rgba(255,68,79,0.02);
}


.box {
	font-size: 1.2rem;
max-width: 700px;
	 margin: 20px auto;
	border: 0.4rem solid;
	padding: 16px 32px;
	border-image: conic-gradient(from var(--angle), var(--c2), var(--c1) 0.4turn, var(--c1) 0.55turn, var(--c2) 0.7turn) 30;
animation: borderRotate var(--d) linear infinite forwards;
}



@keyframes borderRotate {
	100% {
		--angle: 420deg;
	}
}

@keyframes borderRadial {
	20% {
		--gradX: 100%;
		--gradY: 50%;
	}
	40% {
		--gradX: 100%;
		--gradY: 100%;
	}
	60% {
		--gradX: 50%;
		--gradY: 100%;
	}
	80% {
		--gradX: 0%;
		--gradY: 50%;
	}
	100% {
		--gradX: 50%;
		--gradY: 0%;
	}
}
.box p{
    font-size: 1.2rem;
      font-weight: bold;
letter-spacing: 1.2px;
      line-height: 1.4;
}
</style>
  `,
};
export default htmlSnippets;
