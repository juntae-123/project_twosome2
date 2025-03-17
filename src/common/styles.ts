export type twosomeColors =
  | "#d50037"
  | "#707070"
  | "#000"
  | "#fff"
  | "#f5ce3e"
  | "#777"
  | "#999"
  | "#333";

export type twosomeFontSize =
  | "56px"
  | "24px"
  | "16px"
  | "20px"
  | "32px"
  | "14px"
  | "12px";

export type TwosomeColorKey = `color${twosomeColors}`;
export type HexColor = `#${string}`;

export type TwosomeFontKey = `color${twosomeFontSize}`;
