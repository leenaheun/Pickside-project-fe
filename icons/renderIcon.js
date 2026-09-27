import { icons } from "./index.js";

export function renderIcon(name, element) {
  if (!icons[name] || !element) return;
  element.innerHTML = icons[name];
}