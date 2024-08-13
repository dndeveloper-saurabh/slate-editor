"use client";

import Image from "next/image";
import Link from "next/link";

import newsIcon from "@/assets/images/icons/news.svg";
import newsActiveIcon from "@/assets/images/icons/news-active.svg";
import eventsIcon from "@/assets/images/icons/events.svg";
import eventsActiveIcon from "@/assets/images/icons/events-active.svg";
import blazeIcon from "@/assets/images/icons/flash.svg";

const NewsIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={25}
    height={25}
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <g data-name="Layer 2">
      <path
        d="M16 2H4a2.003 2.003 0 0 0-2 2v15a3.003 3.003 0 0 0 3 3h12a1 1 0 0 0 1-1V4a2.003 2.003 0 0 0-2-2zM6.5 6h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm7 12.5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0-3.5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0-3.5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2z"
        data-original="#000000"
      />
      <path
        d="M19 22h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a3.003 3.003 0 0 1-3 3zm-1-2h1a1 1 0 0 0 1-1v-9h-2z"
        data-original="#000000"
      />
    </g>
  </svg>
);

export default function Home() {
  const isEventActive = false;
  const isNewsActive = false;

  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center font-featureRegular">
      <div className="w-full max-w-[400px] bg-primary h-[100vh] overflow-auto">
        <div className="fixed bottom-0 w-full h-[60px]">
          <div className="w-full flex justify-between relative h-full">
            <div className="left__menu flex-1 flex items-stretch justify-start">
              <Link
                href="/"
                onClick={(e) => {}}
                style={{ textDecoration: "inherit" }}
                id="homeIntro"
                className={
                  "w-[92%] flex items-center justify-center mobile-border " +
                  (isNewsActive ? "news-border" : "")
                }
              >
                <div className="nav__box__wrapper flex flex-col items-center justify-center">
                  <Image
                    height={100}
                    width={100}
                    className="nav__icon__img w-5 h-5"
                    src={!isNewsActive ? newsIcon : newsActiveIcon}
                    alt="News Icon"
                  />
                  <p
                    className={
                      "text-xs mt-0.5 " +
                      (isNewsActive ? " text-[#4c72fa]" : " text-[#B6B6B6]")
                    }
                  >
                    News
                  </p>
                </div>
              </Link>
            </div>
            <div className="middle__menu w-[104px] flex-shrink-0">
              <svg
                width={115}
                height={76}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#a)">
                  <path
                    d="M104.5 12.845V19L57 66 10 19v-5.065c0-1.723 2.033-2.64 3.324-1.5l43.351 38.288a4 4 0 0 0 5.483-.177l38.924-39.112c1.259-1.264 3.418-.373 3.418 1.41Z"
                    fill="#232323"
                    fillOpacity={0.07}
                  />
                </g>
                <path
                  d="M109 16.603V71H6V16.603c0-1.781 2.154-2.674 3.414-1.414L50.43 56.204c3.905 3.905 10.237 3.905 14.142 0l41.015-41.015c1.26-1.26 3.414-.367 3.414 1.414Z"
                  fill="#f8f5d7"
                />
                <defs>
                  <filter
                    id="a"
                    x={0}
                    y={0.841}
                    width={114.5}
                    height={75.159}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={5}
                      result="effect1_foregroundBlur_126_19"
                    />
                  </filter>
                </defs>
              </svg>
              {/*<div className="left__fall" />*/}
              <Link
                href="/blaze"
                onClick={(e) => {}}
                style={{
                  textDecoration: "inherit",
                  // animation:
                  //   location.pathname.includes("/blaze") &&
                  //   bounce &&
                  //   "bounce 0.15s ease both",
                }}
                className="diamond"
                id="blazeIntro"
              >
                <div className="nav__box__wrapper diamond__blaze">
                  <Image
                    height={100}
                    width={100}
                    className="nav__icon__img"
                    src={blazeIcon}
                    alt="Blaze Icon"
                  />
                </div>
              </Link>
              {/*<div className="blaze__waterfall" />*/}
              {/*<div className="blaze__waterfall border" />*/}
              {/*<div className="blaze__bg__blur" />*/}
              {/*<div className="right__fall" />*/}
            </div>
            <div className="right__menu flex-1 flex items-stretch justify-end">
              <Link
                href="/events"
                style={{ textDecoration: "inherit" }}
                onClick={(e) => {}}
                id="classesIntro"
                className={
                  "w-[92%] flex items-center justify-center mobile-border " +
                  (isEventActive ? "events-border " : "")
                }
              >
                <div className="nav__box__wrapper flex flex-col items-center justify-center">
                  <Image
                    height={100}
                    width={100}
                    className="w-5"
                    src={!isEventActive ? eventsIcon : eventsActiveIcon}
                    alt="Events Icon"
                  />
                  <p
                    className={
                      "text-xs mt-0.5 " +
                      (isEventActive ? "text-[#dd2476]" : " text-[#B6B6B6]")
                    }
                  >
                    Events
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
