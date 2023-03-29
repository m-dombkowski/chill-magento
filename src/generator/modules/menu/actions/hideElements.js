import "./hideElements.scss";

const hideElements = ({ module }) => {
  module.classList.toggle("menu-show-hidden-elements");
  module
    .querySelector(".chill-btn-container button:nth-child(3)")
    .classList.toggle("change-btn-txt");
};

export default hideElements;
