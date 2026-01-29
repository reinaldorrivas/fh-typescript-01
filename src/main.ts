import { helloWorld } from "./bases/helloWorld";
import { typeAny } from "./bases/typeAny";
import { typeBoolean } from "./bases/typeBoolean";
import { typeDataIntro } from "./bases/typeDataIntro";
import { typeNumber } from "./bases/typeNumber";
import { typeString } from "./bases/typeString";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;

// helloWorld();
// typeDataIntro();
// typeBoolean();
// typeNumber();
// typeString();
// typeAny();
typeString();
