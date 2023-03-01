import styled from "styled-components";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "filled"
  | "danger"
  | "agnostic"
  | string;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  iconOnly?: boolean;
  children?: React.ReactNode;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  width?: string;
  height?: string;
  loading?: boolean;
  text?: string;
  noShadow?: boolean;
}

export const ButtonContainer = styled.div<{ width?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width};
`;

export const Button = styled.button<ButtonBaseProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 24px;
  min-height: 32px;
  border: none;
  opacity: 1;

  transition: 0.5s all;
  font-weight: 700;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  height: ${({ height }) => height};
`;

export function ButtonBase(props: ButtonBaseProps) {
  const {
    text,
    iconStart,
    iconEnd,
    children,
    buttonRef,
    loading = false,
    ...rest
  } = props;

  return (
    <ButtonContainer>
      <Button {...props}>
        <span>{text}</span>
      </Button>
    </ButtonContainer>
  );
}
