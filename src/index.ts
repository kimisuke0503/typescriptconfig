import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething(
  "俺たちは大きな目的のために生きているのではない。もっと小さな目的のために生きている。"
);
saySomething.sayText(root);
