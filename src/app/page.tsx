"use client";

import {
  DatePicker,
  GetProp,
  Radio,
  RadioChangeEvent,
  Upload,
  UploadProps,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { TiUpload } from "react-icons/ti";

function getRandomDarkHexColor() {
  let color = "#";
  for (let i = 0; i < 3; i++) {
    // Generate a random number between 0 and 127 (to keep it dark)
    let randomValue = Math.floor(Math.random() * 128);
    // Convert to hexadecimal and ensure it's two digits
    let hex = randomValue.toString(16).padStart(2, "0");
    color += hex;
  }
  return color;
}

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    // if (status === "done") {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === "error") {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export default function Home() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (label?: string) => (
    <button
      style={{ border: 0, background: "none" }}
      className="flex flex-col items-center justify-center py-3"
      type="button"
    >
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <TiUpload className="text-5xl text-black text-opacity-65" />
      <div className="text-base" style={{ marginTop: 8 }}>
        {label ?? "Upload Event Image"}
      </div>
    </button>
  );

  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div className="w-full max-w-[900px] mx-auto py-2 h-[80vh] overflow-auto">
        <div>
          <h2 className="text-appBlack text-[30px] mt-8 font-larkenExtraBold">
            Create Event
          </h2>
        </div>
        <div className="mt-7">
          <div>
            <span className="uppercase block text-sm mb-1 font-larkenExtraBold text-black text-opacity-60">
              Event Details
            </span>
            <hr />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Event Title
              </h4>
              <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Post Title"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              />
            </div>
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Event Date
              </h4>
              {/* <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Post Title"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              /> */}
              <DatePicker
                showTime
                onChange={(value, dateString) => {
                  console.log("Selected Time: ", value);
                  console.log("Formatted Selected Time: ", dateString);
                }}
                onOk={() => {}}
                className="ant-picker-minerva-date"
              />
            </div>
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Event Description
              </h4>
              {/* <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Post Title"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              /> */}
              <textarea
                // disabled={isPending}
                className="border text-[16px] w-full resize-none flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Post Title"
                rows={4}
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              />
            </div>
            <div
              className="flex flex-col"
              style={{
                gridRow: "2 / 4",
                gridColumn: "2",
              }}
            >
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Image
              </h4>
              <Upload
                name="avatar"
                listType="picture-card"
                className="minerva-event-image-uploader"
                showUploadList={false}
                // beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    className="h-full w-full object-contain"
                    style={{ width: "100%" }}
                  />
                ) : (
                  uploadButton()
                )}
              </Upload>
            </div>
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Venue
              </h4>
              <Radio.Group
                className="minerva-venue-radio w-full grid grid-cols-2"
                onChange={onChange}
                value={value}
              >
                <Radio value={1}>Offline</Radio>
                <Radio value={2}>Online</Radio>
              </Radio.Group>
              <div className="w-full mt-3">
                {/* <input
                  // disabled={isPending}
                  className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                  placeholder="Link to the meeting"
                  type="text"
                  style={{
                    fontVariationSettings: '"wght" 400,"opsz" 10',
                  }}
                /> */}
                <input
                  // disabled={isPending}
                  className="border text-[16px] w-full flex-1 flex-shrink mb-2 py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                  placeholder="Event Venue Details"
                  type="text"
                  style={{
                    fontVariationSettings: '"wght" 400,"opsz" 10',
                  }}
                />
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="minerva-venue-image-uploader"
                  showUploadList={false}
                  // beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      className="h-full w-full object-contain"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton("Upload Venue Image")
                  )}
                </Upload>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <span className="uppercase block text-sm mb-1 font-larkenExtraBold text-black text-opacity-60">
              Organizer Info
            </span>
            <hr />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Organizer Name
              </h4>
              <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the name of the organizer"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              />
            </div>
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Organizer Info
              </h4>
              {/* <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Post Title"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              /> */}
              <textarea
                // disabled={isPending}
                className="border text-[16px] w-full resize-none flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter the Organizer Info"
                rows={4}
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              />
            </div>
            <div
              className="flex flex-col"
              style={{
                gridRow: "1 / 3",
                gridColumn: "2",
              }}
            >
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Organizer Image
              </h4>
              <Upload
                name="avatar"
                listType="picture-card"
                className="minerva-organizer-image-uploader"
                showUploadList={false}
                // beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    className="h-full w-full object-contain"
                    style={{ width: "100%" }}
                  />
                ) : (
                  uploadButton()
                )}
              </Upload>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <span className="uppercase block text-sm mb-1 font-larkenExtraBold text-black text-opacity-60">
              Contact Info
            </span>
            <hr />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[12px] font-helvetica uppercase ml-1 mb-1 text-appBlack">
                Contact Email
              </h4>
              <input
                // disabled={isPending}
                className="border text-[16px] w-full flex-1 flex-shrink py-1 px-2 bg-lightPrimary focus:outline-appBlack focus:outline-offset-[-2]"
                placeholder="Enter contact email"
                type="text"
                style={{
                  fontVariationSettings: '"wght" 400,"opsz" 10',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
