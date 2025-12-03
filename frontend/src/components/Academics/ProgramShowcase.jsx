import React, { useId } from "react";

const ProgramPill = ({ label }) => (
  <div className="flex items-center gap-3">
    {/* bullet icon */}
    <div className="relative">

       <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] border border-[#2A4767] drop-shadow-md drop-shadow-[#2A4767] bg-white shrink-0 rounded-full flex justify-center items-center '>
        <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
       </div>
           
    </div>
    <p className="text-[#2A4767] text-[24px] font-poppins font-medium">{label}</p>
  </div>
);

const ProgramShowcase = ({
  image =
    "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1640&auto=format&fit=crop",
  programsLeft = ["Program 1", "Program 2", "Program 3"],
  programsRight = ["Program 4", "Program 5", "Program 6"],
}) => {
  const clipId = useId();

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Desktop/Tablet layout */}
        <div className="hidden md:grid grid-cols-12 items-center gap-4 lg:gap-8">
          {/* Left programs */}
          <div className="col-span-3 flex flex-col justify-center gap-16">
            {programsLeft.map((p) => (
              <ProgramPill key={p} label={p} />
            ))}
          </div>

          {/* Center image with wavy top */}
          <div className="col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              <svg
                viewBox="0 0 560 720"
                className="w-full h-auto drop-shadow-xl"
                aria-hidden="true"
              >
                <defs>
                  {/* Curved/wavy top + soft rounded bottom */}
                  <clipPath id={clipId}>
                    <path
                      d="
                        M 60 40
                        Q 60 20 80 20
                        C 150 20 210 80 280 80
                        C 350 80 410 20 480 20
                        Q 500 20 500 40
                        L 500 640
                        Q 500 700 440 700
                        L 120 700
                        Q 60 700 60 640
                        Z
                      "
                      /* smooth corners */
                    />
                  </clipPath>
                </defs>

                {/* border outline */}
                <path
                  d="
                    M 60 40
                    Q 60 20 80 20
                    C 150 20 210 80 280 80
                    C 350 80 410 20 480 20
                    Q 500 20 500 40
                    L 500 640
                    Q 500 700 440 700
                    L 120 700
                    Q 60 700 60 640
                    Z
                  "
                  fill="#ffffff"
                />
                <image
                  href={image}
                  width="560"
                  height="720"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(${"#" + clipId})`}
                />
                {/* soft inner radius look */}
                <rect
                  x="60"
                  y="20"
                  width="440"
                  height="680"
                  rx="28"
                  fill="transparent"
                />
              </svg>
            </div>
          </div>

          {/* Right programs */}
          <div className="col-span-3 flex flex-col justify-center gap-16 md:pl-2">
            {programsRight.map((p) => (
              <div key={p} className="justify-end flex">
                <ProgramPill label={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {/* Center image first */}
          <div className="w-full">
            <div className="relative mx-auto w-[92%] max-w-md">
              <svg viewBox="0 0 560 720" className="w-full h-auto drop-shadow-xl">
                <defs>
                  <clipPath id={clipId + "-m"}>
                    <path
                      d="
                        M 60 40
                        Q 60 20 80 20
                        C 150 20 210 80 280 80
                        C 350 80 410 20 480 20
                        Q 500 20 500 40
                        L 500 640
                        Q 500 700 440 700
                        L 120 700
                        Q 60 700 60 640
                        Z
                      "
                    />
                  </clipPath>
                </defs>
                <path
                  d="
                    M 60 40
                    Q 60 20 80 20
                    C 150 20 210 80 280 80
                    C 350 80 410 20 480 20
                    Q 500 20 500 40
                    L 500 640
                    Q 500 700 440 700
                    L 120 700
                    Q 60 700 60 640
                    Z
                  "
                  fill="#ffffff"
                />
                <image
                  href={image}
                  width="560"
                  height="720"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(${"#" + clipId + "-m"})`}
                />
              </svg>
            </div>
          </div>

          {/* Programs in 2 columns */}
          <div className="flex flex-col items-center gap-y-8 w-full px-2 mx-auto">
            {[...programsLeft, ...programsRight].map((p) => (
              <ProgramPill key={p} label={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramShowcase;
