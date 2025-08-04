type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme: PrimaryButtonTheme;
  disabled?: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-primary";
const disabledStyle = "disabled:bg-mono200 disabled:text-mono100";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  children,
  onClick,
  disabled,
}: IPrimaryButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`w-full rounded-primary-button h-[59px] ${color[theme]} ${disabledStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
