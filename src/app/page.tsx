"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegStar, FaShare, FaStar } from "react-icons/fa6";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const imageUrl =
  "https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function PostListItem() {
  const [removed, setRemoved] = useState(false);

  const handleRemove = () => {
    setRemoved(true);
  };

  return (
    <div
      className="font-featureRegular overflow-hidden"
      style={{
        maxHeight: removed ? "0px" : "450px",
        opacity: removed ? 0 : 1,
        transition: "opacity 300ms, max-height 300ms 300ms",
      }}
    >
      {/* Author */}
      <div className="flex items-center gap-3 mb-[16px] mt-[32px]">
        <div className="w-[20px] h-[20px]">
          <Image
            alt="sd"
            src={imageUrl}
            className="w-full h-full object-cover rounded-full"
            width={20}
            height={20}
          />
        </div>
        <div>
          <span>Saurabh Singh</span>
        </div>
      </div>
      {/* Post Content */}
      <div className="flex">
        {/* Post Text Content */}
        <div className="flex-1">
          <h2 className="text-[24px] leading-[30px] line-clamp-3 font-bold font-featureBold">
            How I Built a Custom Protein-Binding Dataset for Machine Learning
            (in 5 steps)
          </h2>
          <p className="pt-[8px] max-h-[40px] line-clamp-2 text-[16px] text-[#6B6B6B] font-normal">
            A full guide with code, data visualizations, and sources
          </p>
          <div className="pt-[10px] flex items-center justify-between h-[48px]">
            <div className="flex items-center gap-3 text-xs text-appBlack">
              <span className="flex items-center gap-1">
                <FaStar className="text-[#d9c503] mb-0.5" />{" "}
                <span>5 min read</span>
              </span>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <span>Technology</span>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <span>2d ago</span>
            </div>
            <div className="flex items-center gap-3 text-base text-appBlack text-opacity-60">
              <span className="cursor-pointer" onClick={handleRemove}>
                <IoMdRemoveCircleOutline />
              </span>
              <span className="cursor-pointer">
                <FaShare />
              </span>
            </div>
          </div>
        </div>
        {/* Post Image */}
        <div className="ml-[50px] h-[107px] w-[160px] ">
          <Image
            alt="sd"
            src={imageUrl}
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-[4px] bg-gray-400"
          />
        </div>
      </div>
      <hr className="border-dashed border-[#1f1d1a1f] mt-[20px]" />
    </div>
  );
}

function PostListItemPortrait() {
  const handleRemove = () => {};
  return (
    <div className="w-[324px] pb-[50px]">
      <div
        className="w-full rounded-[4px] overflow-hidden"
        style={{ aspectRatio: 2 / 1 }}
      >
        <Image
          src={imageUrl}
          alt="sdf"
          className="w-full h-full object-cover"
          width={350}
          height={200}
        />
      </div>
      {/* Author */}
      <div className="flex items-center gap-3 mb-[16px] mt-[24px]">
        <div className="w-[20px] h-[20px]">
          <Image
            alt="sd"
            src={imageUrl}
            className="w-full h-full object-cover rounded-full"
            width={20}
            height={20}
          />
        </div>
        <div className="text-[13px] text-[#242424]">
          <span>Saurabh Singh</span>
        </div>
      </div>
      {/* Post Content */}
      <div className="flex">
        {/* Post Text Content */}
        <div className="flex-1">
          <h2 className="text-[20px] leading-[24px] line-clamp-3 font-bold font-featureBold">
            How I Built a Custom Protein-Binding Dataset for Machine Learning
            (in 5 steps)
          </h2>
          <p className="pt-[8px] max-h-[40px] line-clamp-2 text-[16px] text-[#6B6B6B] font-normal">
            A full guide with code, data visualizations, and sources
          </p>
          <div className="flex items-center justify-between h-[48px]">
            <div className="flex items-center gap-3 text-xs text-appBlack">
              <span className="flex items-center gap-1">
                <FaStar className="text-[#d9c503] mb-0.5" />{" "}
                <span>5 min read</span>
              </span>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <span>Technology</span>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <span>2d ago</span>
            </div>
            <div className="flex items-center gap-3 text-base text-appBlack text-opacity-60">
              <span className="cursor-pointer" onClick={handleRemove}>
                <IoMdRemoveCircleOutline />
              </span>
              <span className="cursor-pointer">
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div className="w-full max-w-[700px] h-[90vh] overflow-auto grid grid-cols-2 gap-x-2 justify-items-center">
        <PostListItemPortrait />
        <PostListItemPortrait />
        <PostListItemPortrait />
        <PostListItemPortrait />
        <PostListItemPortrait />
        <PostListItemPortrait />
      </div>
    </div>
  );
}
