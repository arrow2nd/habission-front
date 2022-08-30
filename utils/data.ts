import { User } from "@interfaces/users.ts";
import { Mission } from "@interfaces/missions.ts";

/**
 * ユーザ情報を取得
 * TODO: asyncにする
 * @returns ユーザ情報
 */
export function fetchUser(): User {
  return {
    id: "id",
    name: "ユーザ名",
    pass: "pass",
    rank: 0,
  };
}

export function fetchMissions(): Mission[] {
  return [
    {
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
    {
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
  ];
}
