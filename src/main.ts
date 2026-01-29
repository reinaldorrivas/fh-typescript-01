import { helloWorld } from "./bases/helloWorld";
import { typeAny } from "./bases/typeAny";
import { TypeArray } from "./bases/typeArray";
import { typeBoolean } from "./bases/typeBoolean";
import { typeDataIntro } from "./bases/typeDataIntro";
import { typeEnum } from "./bases/typeEnum";
import { typeNever } from "./bases/typeNever";
import { typeNumber } from "./bases/typeNumber";
import { typeString } from "./bases/typeString";
import { typeTuple } from "./bases/typeTuple";
import { typeVoid } from "./bases/typeVoid";
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
typeString();
typeAny();
typeString();
typeAny();
TypeArray();
typeTuple();
typeEnum();
typeVoid();
typeNever();
