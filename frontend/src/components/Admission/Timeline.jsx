import React from 'react';

// Data for the timeline steps


const Step = ({ step, position }) => {
  const { number, title, description } = step;

  // Common components
  const NumberCircle = () => (
    <div className="w-10 h-10 rounded-full border-2 border-[#F8A813] flex items-center justify-center bg-white font-medium text-[#F8A813]">
      {number}
    </div>
  );

  const ContentBox = () => (
    <div className="bg-orange-50 border border-[#F8A813] rounded-full px-6 py-3 shadow-md text-center w-64">
      <h3 className="font-semibold text-[#F8A813]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const VerticalLine = () => (
    <div className="w-px h-16 bg-[#F8A813] my-2" />
  );

  return (
    <div className="relative h-80">
      {/* Main dot on the timeline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#F8A813] flex items-center justify-center z-10">
        <div className="w-3 h-3 bg-[#F8A813] rounded-full" />
      </div>

      {/* Content for steps on the TOP */}
      {position === 'top' && (
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 mb-8 flex flex-col items-center">
          <ContentBox />
          <VerticalLine />
          <NumberCircle />
        </div>
      )}

      {/* Content for steps on the BOTTOM */}
      {position === 'bottom' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-8 flex flex-col items-center">
          <NumberCircle />
          <VerticalLine />
          <ContentBox />
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-full max-w-6xl px-4">
        <div className="relative">
          {/* The dashed horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300" />

          {/* Grid container for the steps */}
          <div className="relative grid grid-cols-4">
            {timelineSteps.map((step, index) => (
              <Step
                key={step.number}
                step={step}
                position={index % 2 === 0 ? 'bottom' : 'top'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}