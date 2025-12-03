import React from 'react';

// Data for the timeline steps
// I've replicated the data from your image, including the repeated '02'
const admissionSteps = [
  {
    id: '01',
    title: 'Application Form Submission',
    description: 'Fill out the online application or visit our campus office.',
  },
  {
    id: '02',
    title: 'Application Form Submission',
    description: 'Fill out the online application or visit our campus office.',
  },
  {
    id: '03',
    title: 'Application Form Submission',
    description: 'Fill out the online application or visit our campus office.',
  },
  {
    id: '04', // As per the image
    title: 'Application Form Submission',
    description: 'Fill out the online application or visit our campus office.',
  },
];

/**
 * A responsive timeline component for admission steps.
 * - Mobile: Single-sided timeline.
 * - Tablet/Desktop: Alternating centered timeline.
 */
const AdmissionTimeline = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="relative mx-auto w-full max-w-3xl">
        
        {/* The main vertical dashed line (visible on tablet and up) */}
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-[#2A4767] block"></div>

        <div className="space-y-12">
          {admissionSteps.map((step, index) => {
            // Determine if the card should be on the right
            // 0, 2, 4... (even indices) are on the right
            const isRightSide = index % 2 === 0;

            return (
              <div key={index} className="relative">
                


                {/* === Tablet & Desktop View (Alternating) === */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                  {isRightSide ? (
                    <div></div> // Empty spacer on the left
                  ) : (
                    // Left Card
                    <div className="text-right">
                      <div className="inline-block rounded-lg bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[#F8A813]">{step.title}</h3>
                        <p className="mt-1 text-sm text-[#2A4767]">{step.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Center Circle & Horizontal Line */}
                  <div className="relative flex items-center justify-center">
                    {/* Horizontal line */}
                    <div className="h-0.5 w-full bg-gray-300"></div>
                    {/* Circle */}
                    <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F8A813] bg-white">
                      <span className="font-bold text-[#F8A813]">{step.id}</span>
                    </div>
                  </div>

                  {isRightSide ? (
                    // Right Card
                    <div className="text-left">
                      <div className="inline-block rounded-lg bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[#F8A813]">{step.title}</h3>
                        <p className="mt-1 text-sm text-[#2A4767]">{step.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div></div> // Empty spacer on the right
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdmissionTimeline;