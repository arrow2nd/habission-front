/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

type Props = {
  className?: string;
  type?: string;
  onClick: () => void;
  children: ComponentChildren;
};

export default function Button({ className, type, onClick, children }: Props) {
  return (
    <button
      class={tw`px-4 py-2 inline-flex items-center text(background sm) rounded-md shadow-sm transition-colors ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
