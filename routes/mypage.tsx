/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

import { tw } from "@utils/twind.ts";
import { fetchMissions } from "@utils/data.ts";

import Header from "@components/header.tsx";

import StatusCard from "@islands/user.tsx";
import MissionCard from "@islands/mission.tsx";

import { Mission } from "@interfaces/missions.ts";

export const handler: Handlers<Mission[]> = {
  async GET(_req, ctx) {
    const missions = await fetchMissions();
    return ctx.render(missions);
  },
};

export default function MyPage({ data }: PageProps<Mission[]>) {
  return (
    <div>
      <Header />
      <main class={tw`px-16 py-8 flex flex-col justify-center space-y-6`}>
        <StatusCard />
        <MissionCard items={data} />
      </main>
    </div>
  );
}
