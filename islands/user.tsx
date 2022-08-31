/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

import Card from "@components/card.tsx";

import { fetchUser } from "@utils/data.ts";
import { getRank } from "@utils/rank.ts";
import { getDefaultLoginInfo } from "../utils/storage.ts";

type Props = {
  missionPt: number;
};

export default function StatusCard({ missionPt }: Props) {
  const { name } = getDefaultLoginInfo();
  const { rank } = fetchUser();
  const rankText = getRank(missionPt, rank);

  return (
    <Card title="Status" icon="info-circle">
      <div class={tw`flex items-center`}>
        <i class={tw`ti ti-user text-lg`} />
        <span class={tw`ml-1 text-md`}>{name}</span>
      </div>
      <div class={tw`flex items-center`}>
        <i class={tw`ti ti-badge text-lg`} />
        <span class={tw`ml-1 text-md`}>{rankText}</span>
      </div>
    </Card>
  );
}
