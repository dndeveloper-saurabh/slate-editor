"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaUser } from "react-icons/fa6";
import { IoMdMap } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div className="w-full max-w-[900px] mx-auto py-2 h-[80vh] overflow-auto">
        <hr className="border-dashed border-[#1f1d1a4d] mt-[20px]" />
        <hr className="border-dashed border-[#1f1d1a4d] mt-[1px]" />

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
