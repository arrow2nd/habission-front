/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>🦕 Top Page</p>
    </div>
  );
}