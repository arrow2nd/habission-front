/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

import Card from "@components/card.tsx";

import { fetchMissions } from "@utils/data.ts";

export default function MissionCard() {
  const missions = fetchMissions();

  // MEMO: idほしいかも

  return (
    <Card title="Today's Mission" icon="checklist">
      {missions.map(({ title, desc, isDone }) => (
        <div>
          <input type="checkbox" id={title} name={title} checked={isDone} />
          <label class={tw`ml-1`} for="scales" title={desc}>
            {title}
          </label>
        </div>
      ))}
    </Card>
  );
}
