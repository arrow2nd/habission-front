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

/**
 * ミッション一覧を取得する
 * @returns ミッション一覧
 */
export async function fetchMissions(): Promise<Mission[]> {
  const url = "https://maningen.herokuapp.com/missions";

  // 5秒でタイムアウト
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), 5000);

  try {
    const res = await fetch(url.toString(), { signal: ctrl.signal });
    if (!res.ok) {
      return [];
    }

    clearTimeout(id);

    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

/**
 * ミッションを完了にする
 * @param userId ユーザID
 * @param missionId ミッションID
 * @returns 正常に完了したか
 */
export async function doneMission(
  userId: string,
  missionId: string,
): Promise<boolean> {
  const url = new URL("https://maningen.herokuapp.com/users");
  url.searchParams.append("user_id", userId);
  url.searchParams.append("mission_id", missionId);

  const res = await fetch(url, {
    method: "PATCH",
  });

  return res.ok;
}
