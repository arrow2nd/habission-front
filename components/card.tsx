/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@utils/twind.ts";

type Props = {
  title: string;
  icon: string;
  children: ComponentChildren;
};

export default function Card({ title, icon, children }: Props) {
  return (
    <div class={tw`px-8 py-6 w-full border bg-gray-100 rounded-md shadow-md`}>
      <div class={tw`flex items-center mb-2`}>
        <i class={tw`ti ti-${icon} text-2xl`} />
        <span class={tw`ml-1 text-xl`}>{title}</span>
      </div>
      {children}
    </div>
  );
}
