/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

import { setLoginInfoToLocalStorage } from "../utils/storage.ts";

export default function Logout() {
  const handleClick = () => {
    setLoginInfoToLocalStorage(null);
    alert("ログアウトしました。");
  };

  return (
    <div
      className={tw`bg-black hover:bg-gray-800 p-2 rounded-md cursor-pointer`}
    >
      <a href="/" onClick={handleClick}>
        <span class={tw`text-white`}>Logout</span>
      </a>
    </div>
  );
}
