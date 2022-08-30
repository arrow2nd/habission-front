/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Card from "@components/card.tsx";

import { fetchUser } from "@utils/data.ts";

export default function StatusCard() {
  const { name, rank } = fetchUser();

  return (
    <Card title="Status" icon="info-circle">
      <div class={tw`flex items-center`}>
        <i class={tw`ti ti-user text-lg`} />
        <span class={tw`ml-1 text-md`}>{name}</span>
      </div>
      <div class={tw`flex items-center`}>
        <i class={tw`ti ti-badge text-lg`} />
        <span class={tw`ml-1 text-md`}>{rank}</span>
      </div>
    </Card>
  );
}
