/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import LoginForm from "../islands/LoginForm.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <LoginForm />
    </div>
  );
}
