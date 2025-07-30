import IconButton from "./IconButton";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex w-full justify-between ">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt=""
            iconPath={`/icons/ic-back-left${isDark ? "-white" : ""}.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
      </div>
      {showCloseButton && (
        <IconButton
          alt=""
          iconPath={`/icons/ic-cancel${isDark ? "-white" : ""}.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
