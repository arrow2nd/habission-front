/**
 * ランク文字列を取得
 * @param missionPoint ミッションPt
 * @param userRank ランクPt
 * @returns ランク文字列
 */
export function getRank(missionPoint: number, userRank: number): string {
  if (userRank <= 0) {
    return "だめ人間";
  }

  const base = missionPoint / userRank;
  return base >= 0.5 ? "真人間" : "だめ人間";
}
