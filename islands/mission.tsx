/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Card from "@components/card.tsx";
import { Mission } from "@interfaces/missions.ts";

export default function MissionCard() {
  const missions: Mission[] = [
    {
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
    {
      title: "テスト",
      desc: "説明",
      isDone: false,
    },
  ];

  // MEMO: idほしいかも

  return (
    <Card title="Today's Mission" icon="checklist">
      {missions.map(({ title, desc, isDone }) => (
        <div>
          <input type="checkbox" id="scales" name="scales" checked={isDone} />
          <label class={tw`ml-1`} for="scales" title={desc}>
            {title}
          </label>
        </div>
      ))}
    </Card>
  );
}
