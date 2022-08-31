/** @jsx h */
import { h } from "preact";

import { tw } from "@utils/twind.ts";

import Card from "@components/card.tsx";

import { Mission } from "@interfaces/missions.ts";
import { getDefaultLoginInfo } from "../utils/strage.ts";

type Props = {
  items: Mission[];
};

export default function MissionCard({ items }: Props) {
  const user = getDefaultLoginInfo()
  console.log(user)
  return (
    <Card title="Today's Mission" icon="checklist">
      {items.length > 0 ? (
        items.map(({ id, title, description }) => (
          <div>
            <input type="checkbox" id={id} name={id} checked={false} />
            <label class={tw`ml-1`} for={id} title={description}>
              {title}
            </label>
          </div>
        ))
      ) : (
        <p>No Items</p>
      )}
    </Card>
  );
}
