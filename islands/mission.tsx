/** @jsx h */
import { h } from "preact";

import { tw } from "@utils/twind.ts";
import { doneMission } from "@utils/data.ts";

import Card from "@components/card.tsx";

import { Mission } from "@interfaces/missions.ts";

type Props = {
  items: Mission[];
};

export default function MissionCard({ items }: Props) {
  const handleChange = async (
    e: h.JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    if (!e.currentTarget.checked) {
      alert("既に完了済みのミッションです");
      return;
    }

    const ok = await doneMission("", e.currentTarget.id.toString());
    alert(
      ok ? "ミッションを完了しました" : "ミッションを完了にできませんでした"
    );
  };

  return (
    <Card title="Today's Mission" icon="checklist">
      {items.length > 0 ? (
        items.map(({ id, title, description }) => (
          <div>
            <input
              type="checkbox"
              id={id}
              name={id}
              checked={false}
              onChange={handleChange}
            />
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
