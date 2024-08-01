"use client";
import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Button, Image, Upload, UploadFile, UploadProps } from "antd";
import { BsPlusCircle } from "react-icons/bs";
import { IoCloudDone } from "react-icons/io5";

const imageUrl = [
  "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg",
  "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
  "https://img.artpal.com/565372/14-23-4-8-13-3-53m.jpg",
  "https://www.superprof.co.in/blog/wp-content/uploads/2018/02/landscape-photography-tutorials.jpg",
  "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65ea99845e53084280471b71_most%20beautiful%20landscapes%20in%20the%20world.webp",
  "https://cdn.pixabay.com/photo/2023/11/04/10/03/bear-8364583_640.png",
  "https://images.unsplash.com/photo-1476610182048-b716b8518aae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos
        className="text-md"
        style={{
          color: "black",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <MdOutlineArrowBackIos
        className="text-md"
        style={{
          color: "black",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function Home() {

  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div className="w-[900px]">
        <div className="w-full h-auto border-2 border-dashed p-4">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            className="my-classname"
            rootClassName="root-classname"
            itemRender={(
              originNode,
              file,
              fileList,
              { download, preview, remove }
            ) => {
              // @ts-ignore
              console.log("file.isUploaded - ", file.isUploaded);
              return (
                <div className={"relative w-full h-full "}>
                  {originNode}
                  {/* @ts-ignore */}
                  {file.isUploaded && (
                    <div className="rounded-[8px] absolute top-0 left-0 w-full h-full bg-green-600 bg-opacity-35 flex items-center justify-center text-4xl text-white">
                      <IoCloudDone />
                    </div>
                  )}
                </div>
              );
            }}
          >
            {fileList.length >= 20 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
          <div className="flex justify-end mt-5">
            <Button onClick={handleSubmit}>Save Carousel</Button>
          </div>
        </div>
      </div>
      {/* <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
      </svg> */}
    </div>
  );
}
