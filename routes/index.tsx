/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Button from "@components/common/button.tsx";
import Input from "@components/common/input.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Input name="test" placeholder="test" type="password" />
      <Button className="bg-blue-100">ボタン</Button>
    </div>
  );
}
