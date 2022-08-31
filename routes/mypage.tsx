/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

import { tw } from "@utils/twind.ts";
import { fetchMissions } from "@utils/data.ts";

import Header from "@components/header.tsx";

import StatusCard from "@islands/user.tsx";
import MissionCard from "@islands/mission.tsx";

import { Mission } from "@interfaces/missions.ts";

type MyPageProps = {
  missions: Mission[];
  missionPt: number;
};

export const handler: Handlers<MyPageProps> = {
  async GET(_req, ctx) {
    const missions = await fetchMissions();

    let missionPt = 0;
    for (const e of missions) {
      missionPt += parseInt(e.point);
    }

    return ctx.render({
      missions,
      missionPt,
    });
  },
};

export default function MyPage({ data }: PageProps<MyPageProps>) {
  const { missions, missionPt } = data;
  return (
    <div>
      <Header />
      <main class={tw`px-16 py-8 flex flex-col justify-center space-y-6`}>
        <StatusCard missionPt={missionPt} />
        <MissionCard items={missions} />
      </main>
    </div>
  );
}
