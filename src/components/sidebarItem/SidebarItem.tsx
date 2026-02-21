import { PolymorphicButton } from "../polymorphic-button/PolymorphicButton";
import s from "./SidebarItem.module.scss";
export function SidebarItem({
  as,
  label,
  href,
  pathname,
  component,
  isMobile,
  buttonHandler,
}: {
  as?: React.ElementType;
  label: string;
  href: string;
  pathname: string;
  component: React.ReactNode;
  isMobile: boolean;
  buttonHandler?: () => void;
}) {
  return (
    <PolymorphicButton
      as={as}
      key={label}
      href={href}
      isActive={pathname === href}
      variant="text"
      className={s.item}
      onClick={buttonHandler}
    >
      {component} {isMobile ? "" : label}
    </PolymorphicButton>
  );
}
