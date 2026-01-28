import { helloWorld } from "./bases/helloWorld";
import { typeBoolean } from "./bases/typeBoolean";
import { typeDataIntro } from "./bases/typeDataIntro";
import { typeNumber } from "./bases/typeNumber";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;

helloWorld();
typeDataIntro();
typeBoolean();
typeNumber();
