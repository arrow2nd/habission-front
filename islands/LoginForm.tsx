/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

import { tw } from "@utils/twind.ts";
import { setLoginInfoToLocalStorage } from "../utils/storage.ts";

// フェッチのラップ関数の型
type MyFetch = (body: { name: string; pass: string }) => { result: boolean };

// データ取得、フェッチのラップ関数の予定だった
// 時間的に無理そうバックエンドチーム頑張って
const myFetch: MyFetch = (body) => {
  try {
    if (!["ikki", "teraki", "teru", "arrow"].includes(body.name)) {
      throw "NOT_FOUND_USER";
    }

    return { result: true };
  } catch {
    return { result: false };
  }
};

const LoginForm = () => {
  const [result, setResult] = useState<"Yet" | "Error" | "SUCCESS">("Yet");
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const onClick = () => {
    const res = myFetch({
      name,
      pass,
    });

    if (res.result) {
      setLoginInfoToLocalStorage({ id: "1", name: name });
      setResult("SUCCESS");
    } else {
      setResult("Error");
    }
  };

  return (
    <div>
      <h1 class={tw`text-center mb-16 mt-8 text-6xl`}>Habission</h1>
      {result === "Error" ? (
        <p class={tw`text-center mb-8`}>
          ユーザー名かパスワードが間違っています。
        </p>
      ) : null}
      {result === "SUCCESS" ? (
        <p class={tw`text-center mb-8`}>
          <p>ログイン成功しました。</p>
          <a href="./mypage" class={tw`text-blue-700`}>
            マイページはこちら
          </a>
        </p>
      ) : null}
      <div class={tw`flex flex-col justify-center`}>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          class={tw`w-[320px] mx-auto border mb-8 rounded-md`}
        />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
          class={tw`w-[320px] mx-auto border mb-8 rounded-md`}
        />
        <div class={tw`text-center`}>
          <button
            onClick={onClick}
            class={tw`p-2 text(background sm) bg-text hover:bg-icon rounded-md shadow-sm transition-colors bg-blue-100 w-[80px]`}
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
