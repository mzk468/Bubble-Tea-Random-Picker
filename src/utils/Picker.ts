export function pickATea(
  teaList: { name: string; type: string[]; canBeWarm: boolean }[]
): string {
  return teaList[Math.floor(Math.random() * teaList.length)].name;
}
