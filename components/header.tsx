/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  return (
    <header class={tw`flex item-center px-8 py-6 w-full bg-yellow-200`}>
      <span class={tw`font-bold text-lg`}>maningen-mission</span>
    </header>
  );
}
