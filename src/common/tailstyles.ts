export type TwosomeTwColorNames =
  | "red"
  | "gray"
  | "black"
  | "white"
  | "yellow"
  | "grayTwo"
  | "grayTh"
  | "blackTwo"
  | "grayFor";

export type TwosomeTwFontSize =
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

export type TwosomeColorKey = `color-${TwosomeTwColorNames}`;
export type HexColor = `#${string}`;
export type TwosomeFontKey = `fontSize-${TwosomeTwFontSize}`;

export const TwosomeTwColors: { [key in TwosomeColorKey]: any } = {
  "color-red": "text-[#d50037]",
  "color-gray": "text-[#707070]",
  "color-black": "text-[#000]",
  "color-white": "text-[#fff]",
  "color-yellow": "text-[#f5ce3e]",
  "color-grayTwo": "text-[#777]",
  "color-grayTh": "text-[#999]",
  "color-blackTwo": "text-[#333]",
  "color-grayFor": "text-[#f5f5f5]",
};

export const TwosomeTwFontSizes: { [key in TwosomeFontKey]: string } = {
  "fontSize-72px": "text-[72px]",
  "fontSize-56px": "text-[56px]",
  "fontSize-24px": "text-[24px]",
  "fontSize-16px": "text-[16px]",
  "fontSize-20px": "text-[20px]",
  "fontSize-40px": "text-[40px]",
  "fontSize-32px": "text-[32px]",
  "fontSize-18px": "text-[18px]",
  "fontSize-14px": "text-[14px]",
  "fontSize-13px": "text-[13px]",
  "fontSize-12px": "text-[12px]",
};
