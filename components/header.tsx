/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

import Logout from "@islands/logout.tsx";

export default function Header() {
  return (
    <header
      class={tw`flex item-center justify-between items-center px-12 py-6 w-full bg-yellow-200`}
    >
      <span class={tw`font-bold text-lg`}>Habission</span>
      <Logout />
    </header>
  );
}
