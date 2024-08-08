"use client";

const NoEventIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      d="M17.796 15.345c-.42-.42-1.07-.41-1.48 0l-1.31 1.31-1.31-1.31c-.41-.41-1.09-.41-1.5 0a1.088 1.088 0 0 0 0 1.5l1.31 1.31-1.3 1.3c-.21.21-.31.47-.31.74 0 .26.1.54.31.75.41.41 1.07.41 1.48 0l1.31-1.31 1.31 1.31c.41.41 1.07.41 1.48 0 .42-.41.42-1.08.01-1.49l-1.31-1.31 1.31-1.31c.41-.41.41-1.08 0-1.49z"
      data-original="#000000"
    />
    <path
      d="M24.59 4.27h-.4v2.52c0 1.65-1.34 3-3 3-1.65 0-3-1.35-3-3V4.27h-6.38v2.52c0 1.65-1.35 3-3 3-1.66 0-3-1.35-3-3V4.27h-.4C3.53 4.27 2 5.8 2 7.68v16.16c0 1.88 1.53 3.41 3.41 3.41h19.18c1.88 0 3.41-1.53 3.41-3.41V7.68c0-1.88-1.53-3.41-3.41-3.41zm0 20.98H5.41c-.78 0-1.41-.63-1.41-1.41V11.8h22v12.04c0 .78-.63 1.41-1.41 1.41z"
      data-original="#000000"
    />
    <path
      d="M8.807 7.787a1 1 0 0 0 1-1V3.75a1 1 0 1 0-2 0v3.036a1 1 0 0 0 1 1zm12.385 0a1 1 0 0 0 1-1V3.75a1 1 0 1 0-2 0v3.036a1 1 0 0 0 1 1z"
      data-original="#000000"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center justify-center font-featureRegular">
      <div className="w-full max-w-[400px] bg-lightPrimary h-[100vh] overflow-auto">
        <section>
          <div className="w-full h-[100px] bg-july bg-cover overlay-black text-white flex items-center justify-center">
            <span className="block relative text-3xl font-[600] font-helvetica">
              July
            </span>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-green-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-0 items-center font-helvetica justify-start">
                <p className="text-xs text-danger-800">TUE</p>
                <p className="text-lg font-medium w-8 h-8 rounded-full bg-danger-800 text-white flex items-center justify-center">
                  9
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-danger-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-orange-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-[100px] bg-august bg-cover overlay-black text-white flex items-center justify-center">
            <span className="block relative text-3xl font-[600] font-helvetica">
              August
            </span>
          </div>
          <div className="py-2">
            <div>
              <p className="text-sm flex items-center justify-center gap-3 py-3 text-appBlack font-helvetica text-opacity-65">
                <NoEventIcon fill="#1f1d1a" />
                <span className="-mb-0.5">No Events</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-[100px] bg-september bg-cover overlay-black text-white flex items-center justify-center">
            <span className="block relative text-3xl font-[600] font-helvetica">
              September
            </span>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-green-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-0 items-center font-helvetica justify-start">
                <p className="text-xs text-danger-800">TUE</p>
                <p className="text-lg font-medium w-8 h-8 rounded-full bg-danger-800 text-white flex items-center justify-center">
                  12
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-danger-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-orange-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-[100px] bg-october bg-cover overlay-black text-white flex items-center justify-center">
            <span className="block relative text-3xl font-[600] font-helvetica">
              October
            </span>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">13</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-green-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-0 items-center font-helvetica justify-start">
                <p className="text-xs text-danger-800">TUE</p>
                <p className="text-lg font-medium w-8 h-8 rounded-full bg-danger-800 text-white flex items-center justify-center">
                  22
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-danger-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-orange-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-[100px] bg-november bg-cover overlay-black text-white flex items-center justify-center">
            <span className="block relative text-3xl font-[600] font-helvetica">
              November
            </span>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-green-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-0 items-center font-helvetica justify-start">
                <p className="text-xs text-danger-800">TUE</p>
                <p className="text-lg font-medium w-8 h-8 rounded-full bg-danger-800 text-white flex items-center justify-center">
                  9
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-danger-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] items-stretch w-full py-2 pl-0 md:pl-2 md:px-2 pr-2">
              <div className="flex flex-col py-1 items-center font-helvetica justify-start">
                <p className="text-xs">TUE</p>
                <p className="text-xl font-medium">9</p>
              </div>
              <div className="flex-1">
                <div className="w-full py-2 px-4 bg-orange-800 text-white rounded-xl text-sm font-helvetica">
                  <p className="font-bold">Annual Tech Conference 2024</p>
                  <p className="text-xs mt-1">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
