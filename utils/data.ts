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
      id: "test-1",
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
    {
      id: "test-2",
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
  ];
}
