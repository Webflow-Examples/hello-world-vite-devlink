import "./style.css";
import honoLogo from "/hono.svg";
import viteLogo from "/vite.svg";
import webflowLogo from "/webflow.svg";
import { setupApi } from "./api.ts";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://hono.dev/" target="_blank">
      <img src="${honoLogo}" class="logo vanilla" alt="Hono logo" />
    </a>
    <a href="https://webflow.com/cloud" target="_blank">
      <img src="${webflowLogo}" class="logo vanilla" alt="Webflow logo" />
    </a>
    <h1>Vite + Hono + Webflow Cloud</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="api-button" type="button">Call API</button>
      <p id="api-response" class="api-response">&nbsp;</p>
    </div>
    <p class="read-the-docs">
      Click on the Vite, Hono and Webflow logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

setupApi(
  document.querySelector<HTMLButtonElement>("#api-button")!,
  document.querySelector<HTMLParagraphElement>("#api-response")!
);
