export type BadgeProps = {
  content: string | React.ReactNode;
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  toUpperCase?: boolean;
  children: React.ReactNode;
};
