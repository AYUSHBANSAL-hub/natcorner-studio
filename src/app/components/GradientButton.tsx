"use client";

type GradientButtonProps = {
  text: string; // The 'text' prop should be a string
  className?: string; // Renamed 'class' to 'className' and made it optional
};

const GradientButton = ({ text, className }: GradientButtonProps) => {
  return (
    <button
      className={`relative w-48 h-11 bg-gradient-to-r from-buttongradientpurple to-buttongradientblue text-white text-lg font-lexend rounded-lg transform -skew-x-6 ${className}`}
    >
      <div className=" skew-x-6">
        {text}
      </div>
    </button>
  );
};

export default GradientButton;
