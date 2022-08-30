/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

import Header from "@components/header.tsx";

import StatusCard from "@islands/user.tsx";
import MissionCard from "@islands/mission.tsx";

export default function MyPage() {
  return (
    <div>
      <Header />
      <main class={tw`px-16 py-8 flex flex-col justify-center space-y-6`}>
        <StatusCard />
        <MissionCard />
      </main>
    </div>
  );
}
