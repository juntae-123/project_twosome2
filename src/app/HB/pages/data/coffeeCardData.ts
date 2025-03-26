type CoffeeCardType = {
  img: string;
  title: string;
  subTitle: string;
  name: string;
  detail: string;
  roast: string;
  taste1: string;
  taste2: string;
  taste3: string;
  origin: string;
  review1: number;
  review2: number;
};

export const CoffeeCardData: CoffeeCardType[] = [
  {
    img: "https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_swp.svg",
    title: "BLACK GROUND",
    subTitle: "DARK ROAST",
    name: "블랙그라운드",
    detail:
      "묵직하고 스모키한 첫인상과 입안 가득 꽉 차는 바디감, 다크초콜릿의 달콤쌉싸름한 여운이 매력적인 다크 로스팅 블렌드",
    roast: "Dark Roast",
    taste1: "Full-Body",
    taste2: "Nutty",
    taste3: "Chocolaty",
    origin: "콜롬비아, 브라질, 에티오피아, 과테말라",
    review1: 3,
    review2: 5,
  },
  {
    img: "https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_aroma.svg",
    title: "AROMA NOTE",
    subTitle: "MEDIUM ROAST",
    name: "아로마노트",
    detail:
      "잘 익은 과일향, 플로럴한 아로마에 부드럽고 밀도 있는 단맛과 은은한 산미의 밸런스가 좋은 미디엄 로스팅 블렌드",
    roast: "Medium Roast",
    taste1: "Full-Body",
    taste2: "Juicy",
    taste3: "Chocolaty",
    origin: "에티오피아(Natural), 과테말라",
    review1: 3,
    review2: 5,
  },
  {
    img: "https://www.twosome.co.kr/resources/images/icon/ico_64_coffee_swp.svg",
    title: "SWP. DECAF",
    subTitle: "DARK ROAST",
    name: "SWP. 디카페인",
    detail:
      "친환경 방식의 스위스 워터 프로세스로 카페인을 제거하고 견과류의 고소한 풍미는 그대로 남긴 다크 로스팅 블렌드",
    roast: "Dark Roast",
    taste1: "Rich",
    taste2: "Sweet",
    taste3: "Well-Balanced",
    origin: "콜롬비아, 브라질, 에티오피아, 과테말라",
    review1: 2,
    review2: 3,
  },
];
