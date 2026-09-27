import { icons } from "./index.js";

export function renderIcons(container = document) {
  Object.keys(icons).forEach(name => {
    container.querySelectorAll(`.${name}-icon`).forEach(el => {
      el.innerHTML = icons[name];
    });
  });
}