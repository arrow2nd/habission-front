/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

type Props = {
  className?: string;
  type?: string;
  children: ComponentChildren;
};

export default function Button({ className, type, children }: Props) {
  return (
    <button
      class={tw`p-2 inline-flex items-center text(background sm) bg-text hover:bg-icon rounded-md shadow-sm transition-colors ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
