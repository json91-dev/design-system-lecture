import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";

  return (
    <div className="relative">
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          className="outline-none"
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
