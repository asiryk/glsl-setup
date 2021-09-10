import { styled } from "./utils.js";

export function initDocument() {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  styled(html, body)`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: block;
  `;
}

export function initCanvas(contextType) {
  const root = document.querySelector("#root");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext(contextType);
  const setLayout = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setLayout();
  window.addEventListener('resize', setLayout);

  root.appendChild(canvas);
  styled(canvas)`
    position: absolute;
    top: 0;
    left: 0;
  `;

  return ctx;
}
