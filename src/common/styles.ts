export type TwosomeColorNames =
  | "red"
  | "gray"
  | "black"
  | "white"
  | "yellow"
  | "grayTwo"
  | "grayTh"
  | "blackTwo"
  | "grayFor";

export type TwosomeFontSize =
  | "56px"
  | "24px"
  | "16px"
  | "20px"
  | "32px"
  | "14px"
  | "12px";

export type TwosomeColorKey = `color-${TwosomeColorNames}`;
export type HexColor = `#${string}`;
export type TwosomeFontKey = `fontSize-${TwosomeFontSize}`;

export const kiaAllColors: { [key in TwosomeColorKey]: HexColor } = {
  "color-red": "#d50037",
  "color-gray": "#707070",
  "color-black": "#000",
  "color-white": "#fff",
  "color-yellow": "#f5ce3e",
  "color-grayTwo": "#777",
  "color-grayTh": "#999",
  "color-blackTwo": "#333",
  "color-grayFor": "#f5f5f5",
};
