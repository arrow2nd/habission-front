type LoginInfo = {
  id: string;
  name: string;
};
/**
 * ローカルストレージからLoginInfoを取得
 * 取得できなかった場合は空のLoginInfoを返す
 * @returns LoginInfo
 */
export function getDefaultLoginInfo(): LoginInfo {
  try {
    const defaultLoginInfo = window.localStorage.getItem("loginInfo");

    if (defaultLoginInfo) {
      return JSON.parse(defaultLoginInfo) as LoginInfo;
    } else {
      return { id: "", name: "" };
    }
  } catch {
    return { id: "", name: "" };
  }
}

/**
 * ローカルストレージにLoginInfoを保存
 * @param loginInfo ログイン情報
 */
export function setLoginInfoToLocalStorage(loginInfo: LoginInfo | null): void {
  const authInfoStringfy = JSON.stringify(loginInfo);
  window.localStorage.setItem("loginInfo", authInfoStringfy);
}
