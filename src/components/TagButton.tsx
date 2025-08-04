interface TagButtonProps {
  children: string;
  onClick: () => void;
  isChecked: boolean;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: TagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "bg-dark-opacity text-white";

  return (
    <button
      className={`rounded-tag-button px-[10px] h-[33px] border border-white ${buttonStyle} text-sm font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
