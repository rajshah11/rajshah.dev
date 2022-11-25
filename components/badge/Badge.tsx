import * as Types from "../badge/Badge.types";
import * as Styled from "../badge/Badge.styled";
import React from "react";
export const Badge = ({
  content,
  position = "top-right",
  toUpperCase = false,
  children,
}: Types.BadgeProps) => {
  const isTop = position.includes("top");
  const isLeft = position.includes("left");

  return (
    <Styled.BadgeRoot $isTop={isTop}>
      <Styled.Badge $isLeft={isLeft}>
        {typeof content === "string" || content instanceof String ? (
          <Styled.BadgeLabel>
            {toUpperCase ? content.toUpperCase() : content}
          </Styled.BadgeLabel>
        ) : (
          content
        )}
      </Styled.Badge>
      {children}
    </Styled.BadgeRoot>
  );
};
