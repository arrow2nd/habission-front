/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Card from "@components/card.tsx";
import Header from "@components/header.tsx";
import MissionCard from "@islands/mission.tsx";

export default function MyPage() {
  return (
    <div>
      <Header />
      <main class={tw`px-16 py-8 flex flex-col justify-center space-y-6`}>
        <Card title="Status" icon="info-circle">
          test
        </Card>
        <MissionCard />
      </main>
    </div>
  );
}
