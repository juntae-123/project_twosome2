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
  | "13px"
  | "40px"
  | "18px"
  | "72px"
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

export const TwosomeColors: { [key in TwosomeColorKey]: HexColor } = {
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

export const TwosomeFontSizes: { [key in TwosomeFontKey]: string } = {
  "fontSize-72px": "72px",
  "fontSize-56px": "56px",
  "fontSize-24px": "24px",
  "fontSize-16px": "16px",
  "fontSize-20px": "20px",
  "fontSize-40px": "40px",
  "fontSize-32px": "32px",
  "fontSize-18px": "18px",
  "fontSize-14px": "14px",
  "fontSize-13px": "13px",
  "fontSize-12px": "12px",
};
