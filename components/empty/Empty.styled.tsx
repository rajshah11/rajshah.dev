import styled from "styled-components";

export const Empty = styled.div<{ space: string }>`
  padding: ${({ space }) => space};
`;
