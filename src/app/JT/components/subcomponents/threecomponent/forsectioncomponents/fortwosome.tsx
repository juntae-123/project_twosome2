"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    title: "투썸오더",
    subtitle: "투썸하트 앱 스마트하게 이용하는 법",
    description:
      "투썸하트 앱을 통해 간편하게 주문하여 매장 방문 시 기다림 없이\n쉽고 빠르게 주문한 메뉴를 수령할 수 있는 모바일 주문 서비스입니다.",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_shop_select.svg",
        label: "매장 선택",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_menu_select.svg",
        label: "메뉴 선택",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_60_card.svg",
        label: "주문&결제",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_60_receive.svg",
        label: "메뉴 수령",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_01_2@3x.png",
  },
  {
    title: "홀케이크 24",
    subtitle: "투썸하트 앱 스마트하게 이용하는 법",
    description:
      "투썸플레이스의 다양한 홀케이크를 언제 어디서나 원하는 매장으로 픽업 예약할 수 있으며,\n케이크 토퍼 등 어울리는 다양한 부가 상품을 함께 구매할 수 있습니다.",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_menu_select.svg",
        label: "메뉴 선택",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_shop_select.svg",
        label: "매장 선택",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_pickup.svg",
        label: "픽업 예약",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_oder_cake.svg",
        label: "메뉴 수령",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_02_2@3x.png",
  },
  {
    title: "멤버십",
    subtitle: "투썸하트 앱 스마트하게 이용하는 법",
    description:
      "하트는 투썸하트 햅 회원이 제품 구매시 적립되는 단위로.\n하트 적립에 따라 등급 산정 및 혜택 제공이 이루어집니다",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_menu_oder.svg",
        label: "메뉴 주문",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_s_barcode.svg",
        label: "바코드 제시",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_60_card.svg",
        label: "결제",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_s_accumulate.svg",
        label: "하트 적립",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_07@3x.png",
  },
  {
    title: "스탬프",
    subtitle: "투썸하트 앱 스마트하게 이용하는 법",
    description:
      "특정 기간 동안 이벤트 상품구매 시 적립되는 스탬프에 따라 쿠폰 등 다양한 혜택이\n지급되며, 친구에게 선물할 수 있습니다.",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_event.svg",
        label: "이벤트 참여",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_stemp_accumulate.svg",
        label: "스탬프 적립",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_coupon_benefits.svg",
        label: "쿠폰 혜택",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_stemp_gift.svg",
        label: "스탬프 선물",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_04@3x.png",
  },
  {
    title: "기프트카드",
    subtitle: "투썸하트 앱 스마트하게 이용하는 법",
    description:
      "투썸플레이스 전 매장에서 현금처럼 사용이 가능한 충전식 선불카드 입니다\n원하는 이미지, 특별한 이름으로 나만의 카드를 등록해보세요",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_cardadd.svg",
        label: "카드 등록/구매",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_cardrecharge.svg",
        label: "카드 충전",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_tsorder.svg",
        label: "투썸오더 결제",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_giftcard_s.svg",
        label: "카드 선물",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_05@3x.png",
  },
  {
    title: "선물하기",
    subtitle:
      "금액권,교환권 등 다양한 선물을 구매할 수 있고, 친구에게 가지고 싶은 선물을\n조를 수도 있습니다. 투썸의 달콤함을 선물해 보세요",
    description:
      "사전 주문 예약 기능을 통해\n원하는 시간에 음료와 디저트를 미리 준비해드립니다.",
    icons: [
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_giftcash.svg",
        label: "금액권 선물",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_voucher.svg",
        label: "교환권 선물",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_giftcard_s.svg",
        label: "카드 선물",
      },
      {
        src: "https://www.twosome.co.kr/resources/images/icon/ico_desiredgift.svg",
        label: "선물 조르기",
      },
    ],
    mobileImage:
      "https://www.twosome.co.kr/resources/images/content/img_mockup_06@3x.png",
  },
];

const TwosomeSwiper = () => {
  return (
    <section style={{ height: "700px" }} className=" bg-gray-100">
      <div className="max-w-[1312px] mx-auto mb-30">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          className="mt-4"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between items-center">
                <div className="w-1/2 pr-12">
                  <p className="text-red-500 font-bold">{slide.subtitle}</p>
                  <h2 className="text-4xl font-bold my-4">{slide.title}</h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {slide.description}
                  </p>

                  <div className="gap-8 mt-6 grid grid-cols-2 md:grid-cols-4   text-center">
                    {slide.icons?.map((icon, i) => (
                      <div key={i} className="text-center">
                        <Image
                          className="ml-5"
                          src={icon.src}
                          alt={icon.label}
                          width={48}
                          height={48}
                        />
                        <p className="mt-2 font-bold  px-2 py-1 rounded-md">
                          {icon.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-1/2 relative">
                  <div className="  rounded-3xl p-4 w-[340px] mx-auto ">
                    <Image
                      src={slide.mobileImage}
                      alt={slide.title}
                      width={340}
                      height={680}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-[1312px] mx-auto flex justify-between items-center py-6 mb-28">
        <h2 className=" text-xl md:text-3xl font-bold">투썸하트 앱 다운로드</h2>

        <div className="flex items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.cj.twosome"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-300 px-10 py-3 "
          >
            <img
              src="https://www.twosome.co.kr/resources/images/icon/img_playstore.svg"
              alt=""
              className="w-6 h-6 mr-2"
            />
            <span className="font-bold">Google play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-300 px-10 py-3  "
          >
            <img
              src="https://www.twosome.co.kr/resources/images/icon/img_apple.svg"
              alt=""
              className="w-6 h-6 mr-2"
            />
            <span className="font-bold">App store</span>
          </a>

          <img
            src="https://www.twosome.co.kr/resources/images/content/app_barcode.png"
            alt=""
            className="w-14 h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default TwosomeSwiper;
