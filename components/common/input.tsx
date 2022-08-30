/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

type Props = {
  name: string;
  placeholder: string;
  type: string;
};

export default function Input({ name, placeholder, type }: Props) {
  return (
    <input
      class={tw`border`}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
}
