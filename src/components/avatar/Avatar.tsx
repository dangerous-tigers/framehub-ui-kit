import clsx from "clsx";
import s from "./Avatar.module.scss";
import avatarPlaceholder from "../../core/assets/illustrations/avatar-placeholder.png";

export type AvatarSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type AvatarProps = {
  src?: string | null;
  url?: string | null;
  size: AvatarSize;
  className?: string;
};

export function Avatar({ url, size = "m", className }: AvatarProps) {
  const avatarSrc = url || avatarPlaceholder;

  return (
    <img
      className={clsx(s.root, s[`root__${size}`], className)}
      src={avatarSrc}
      alt="user-avatar"
    />
  );
}
