"use client";

type OutlineButtonProps = {
  text: string; // The 'text' prop should be a string
};

const OutlineButton = ({ text }: OutlineButtonProps) => {
  return (
    <button className="relative w-48 h-11  bg-gradient-to-r from-[rgba(44,47,51,0.75)] to-[rgba(26,31,54,0.75)] border border-white text-white text-lg font-normal uppercase font-lexend rounded-lg transform -skew-x-6">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-6">
        {text}
      </span>
    </button>
  );
};

export default OutlineButton;
