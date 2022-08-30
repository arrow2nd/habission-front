/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Button from "@components/common/button.tsx";

export default function Logout() {
  const handleClick = () => {
    alert("Logout");
  };

  return (
    <Button className={tw`bg-black hover:bg-gray-800`} onClick={handleClick}>
      <span class={tw`text-white`}>Logout</span>
    </Button>
  );
}
