import styled from "styled-components";

const Text = styled.span`
  font-family: ${({ weight }) =>
    weight ? `GeneralSans-${weight}` : "GeneralSans-400"};
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity || 1};

  max-width: ${({ maxWidth }) => `${maxWidth}px` || "400px"};
`;

export default Text;
