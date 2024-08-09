"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaUser } from "react-icons/fa6";
import { IoMdMap } from "react-icons/io";

const ZoomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={35}
    height={35}
    fillRule="evenodd"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={67.83}
        x2={474.19}
        y1={82.42}
        y2={389.98}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4a8cff" />
        <stop offset={1} stopColor="#23b7ec" />
      </linearGradient>
    </defs>
    <path
      fill='url("#a")'
      d="M256 0c141.39 0 256 114.61 256 256S397.39 512 256 512 0 397.39 0 256 114.61 0 256 0z"
      data-original="url(#a)"
    />
    <path
      fill="#FFF"
      fillRule="nonzero"
      d="M117.44 188.39v101.48c.1 22.95 18.84 41.41 41.69 41.32h147.93c4.21 0 7.59-3.38 7.59-7.49V222.21c-.09-22.94-18.83-41.41-41.69-41.32H125.03c-4.2 0-7.59 3.38-7.59 7.5zm206.63 39.58 61.07-44.61c5.3-4.39 9.42-3.29 9.42 4.66v136.04c0 9.05-5.03 7.96-9.42 4.67l-61.07-44.53z"
      data-original="#ffffff"
    />
  </svg>
);

const MeetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={35}
    height={35}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="#FF2820"
      d="M128 44.8 0 172.8l64 39.617 64-39.617 36.141-64z"
      data-original="#ff2820"
    />
    <path
      fill="#0084FF"
      d="M128 172.8H0v166.4l64 35.145 64-35.145z"
      data-original="#0084ff"
    />
    <path
      fill="#06D"
      d="M0 339.2v85.333C0 448 19.2 467.2 42.667 467.2H128l36.141-67.942L128 339.2z"
      data-original="#0066dd"
    />
    <path
      fill="#00AD3C"
      d="M485.565 90.246 406.4 152.957v.643l-25.819 98.57 25.819 99.753 78.813 63.431c10.574 8.873 26.787 1.42 26.787-12.422V102.668c0-13.842-15.861-21.295-26.435-12.422z"
      data-original="#00ad3c"
    />
    <path
      fill="#FFBA00"
      d="M406.4 152.957v-65.98c0-23.197-18.792-42.177-41.76-42.177H128v128h156.8V256l84.244-9.385z"
      data-original="#ffba00"
    />
    <path
      fill="#00AD3C"
      d="M284.8 339.2H128v128h236.64c22.968 0 41.76-18.952 41.76-42.116V352l-41.793-85.861L284.8 256z"
      data-original="#00ad3c"
    />
    <path
      fill="#00831E"
      d="m284.8 256 121.6 96V152.957z"
      data-original="#00831e"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div className="w-full max-w-[900px] mx-auto py-2 h-[80vh] overflow-auto">
        <hr className="border-dashed border-[#1f1d1a4d] mt-[20px]" />
        <hr className="border-dashed border-[#1f1d1a4d] mt-[1px]" />

        <div className="mt-8">
          <div className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div>
              <div className="styles_title">
                <p>
                  <span className="inline-flex mr-2">
                    <FaCalendarCheck />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="font-featureBold text-[20px] leading-[27px]">
                <p>Description</p>
              </div>
              <div className="mt-2">
                <p className="leading-[120%]">
                  Donald John Trump (born June 14, 1946) is an American
                  politician, media personality, and businessman who served as
                  the 45th
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="styles_divider !my-6"></div>

        <div>
          <div className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div>
              <div className="styles_title">
                <p>
                  <span className="inline-flex mr-2">
                    <FaUser />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="font-featureBold text-[20px] leading-[27px]">
                <p>Organizer</p>
              </div>
              <div className="mt-1">
                <div className="flex flex-col w-full items-center gap-2 p-4">
                  <div>
                    <Image
                      className="w-10 md:w-14 h-10 md:h-14 rounded-full"
                      width={30}
                      height={30}
                      src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"
                      alt="Nothing"
                    />
                  </div>
                  <div>
                    <span className="text-lg md:text-2xl font-featureHeadline">
                      Tech Innovators Inc.
                    </span>
                  </div>
                </div>
                <p className="leading-[120%]">
                  Donald John Trump (born June 14, 1946) is an American
                  politician, media personality, and businessman who served as
                  the 45th
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="styles_divider !my-6"></div>

        <div>
          <div className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div>
              <div className="styles_title">
                <p>
                  <span className="inline-flex mr-2">
                    <FaUser />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="font-featureBold text-[20px] leading-[27px]">
                <p>Date & Time</p>
              </div>
              <div className="mt-2">
                <div className="flex items-center divide-x divide-dashed divide-[#1f1d1a19]">
                  <div className="flex-1">
                    <p className="text-sm mb-1 text-appBlack text-opacity-60">
                      Starts On:
                    </p>
                    <p>
                      <b>September 07, 2024</b>
                    </p>
                    <p>
                      <b>09:00 AM</b>
                    </p>
                  </div>
                  <div className="flex-1 pl-4">
                    <p className="text-sm mb-1 text-appBlack text-opacity-60">
                      Ends On:
                    </p>
                    <p>
                      <b>September 07, 2024</b>
                    </p>
                    <p>
                      <b>11:00 AM</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="styles_divider !my-6"></div>

        <div>
          <div className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div>
              <div className="styles_title">
                <p>
                  <span className="inline-flex mr-2">
                    <FaUser />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="font-featureBold text-[20px] leading-[27px]">
                <p>Venue</p>
              </div>
              <div className="mt-2">
                <div className="flex-1 flex items-center gap-3 cursor-pointer">
                  <div>
                    <MeetIcon />
                  </div>
                  <div>
                    <p className="text-lg font-featureHeadline">
                      Online Meeting
                    </p>
                    <p className="text-xs">Join Meet Link</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="styles_divider !my-6"></div>

        <div>
          <div className="grid grid-cols-[16px_1fr] gap-4 md:gap-5">
            <div>
              <div className="styles_title">
                <p>
                  <span className="inline-flex mr-2">
                    <FaCalendarCheck />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="font-featureBold text-[20px] leading-[27px]">
                <p>Contact</p>
              </div>
              <div className="mt-2">
                <p className="leading-[120%]">saurs2000@gmail.com</p>
                <p className="leading-[120%] mt-2">+91 93198-25600</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="styles_title">
            <p>
              <span className="inline-flex mr-2">
                <FaCalendarCheck />
              </span>
              Description
            </p>
          </div>
        </div>
        <div>
          <p>
            Donald John Trump (born June 14, 1946) is an American politician,
            media personality, and businessman who served as the 45th
          </p>
        </div>

        <div className="mt-8">
          <div className="styles_divider"></div>
          <div className="styles_title">
            <p>
              <span className="inline-flex mr-2">
                <FaUser />
              </span>
              Organizer
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="border divide-y divide-dashed divide-[#1f1d1a65] border-dashed border-[#1f1d1a] rounded-2xl bg-lightPrimary">
            <div className="flex items-center gap-2 p-4">
              <div>
                <Image
                  className="w-6 md:w-8 h-6 md:h-8 rounded-full"
                  width={30}
                  height={30}
                  src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"
                  alt="Nothing"
                />
              </div>
              <div>
                <span className="text-base md:text-lg font-featureHeadline">
                  Tech Innovators Inc.
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <p className="text-sm mb-1 text-appBlack text-opacity-60">
                Donald John Trump (born June 14, 1946) is an American
                politician, media personality, and businessman who served as the
                45th Donald John Trump (born June 14, 1946) is sman who served
                as the 45th Donald John Trump (born June 14, 1946) is an
                American politician, media personality, and businessman who
                served as the 45th
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="styles_divider"></div>
          <div className="styles_title">
            <p>
              <span className="inline-flex mr-2">
                <FaUser />
              </span>
              Date & Time
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center p-4 border divide-x divide-dashed divide-[#1f1d1a19] border-dashed border-[#1f1d1a] rounded-2xl bg-lightPrimary">
            <div className="flex-1">
              <p className="text-sm mb-1 text-appBlack text-opacity-60">
                Starts On:
              </p>
              <p>
                <b>September 07, 2024</b>
              </p>
              <p>
                <b>09:00 AM</b>
              </p>
            </div>
            <div className="flex-1 pl-4">
              <p className="text-sm mb-1 text-appBlack text-opacity-60">
                Ends On:
              </p>
              <p>
                <b>September 07, 2024</b>
              </p>
              <p>
                <b>11:00 AM</b>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="styles_divider"></div>
          <div className="styles_title">
            <p>
              <span className="inline-flex mr-2">
                <FaUser />
              </span>
              Venue
            </p>
          </div>
        </div>
        <div className="mt-5">
          {/* <div className="flex cursor-pointer items-center before:absolute relative before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-60 overflow-hidden before:z-[2] border divide-x divide-dashed divide-[#1f1d1a19] border-dashed border-[#1f1d1a] rounded-2xl bg-lightPrimary">
            <Image
              className="w-full aspect-video rounded-2xl"
              width={1000}
              height={1000}
              src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"
              alt="Nothing"
            />
            <div className="absolute bottom-3 md:bottom-5 w-full z-10 px-3 md:px-8 flex items-center justify-between">
              <div className="text-white">
                <h3 className="font-featureHeadline text-[18px] md:text-[25px]">
                  Courtyard, Downtown
                </h3>
                <p className="text-white text-[12px] md:text-[16px] text-opacity-40">
                  Open in maps
                </p>
              </div>
              <div className="w-10 h-10 text-xl text-gray-400 border border-gray-500 rounded-full bg-gray-700 flex items-center justify-center">
                <IoMdMap />
              </div>
            </div>
          </div> */}
          <div className="p-4 border divide-x divide-dashed divide-[#1f1d1a19] border-dashed border-[#1f1d1a] rounded-2xl bg-lightPrimary">
            <div className="flex-1">
              <p className="text-sm text-appBlack text-opacity-60">
                Meet link:
              </p>
              <Link href={"#"} target="_blank" className="text-appBlue">
                <b>
                  <u>https://meet.google.com</u>
                </b>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="styles_divider"></div>
          <div className="styles_title">
            <p>
              <span className="inline-flex mr-2">
                <FaUser />
              </span>
              Contact
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="p-4 border divide-x divide-dashed divide-[#1f1d1a19] border-dashed border-[#1f1d1a] rounded-2xl bg-lightPrimary">
            <div className="flex-1">
              <p className="text-sm text-appBlack text-opacity-60">Email:</p>
              <p>
                <b>saurs2000@gmail.com</b>
              </p>
            </div>
            <div className="flex-1 mt-3">
              <p className="text-sm text-appBlack text-opacity-60">Phone:</p>
              <p>
                <b>+91 93198-25600</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
