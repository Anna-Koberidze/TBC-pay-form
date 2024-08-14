import React from "react";

interface StepCounterProps {
  currentStep: number;
  totalSteps: number;
}

const StepCounter: React.FC<StepCounterProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center mb-16 space-x-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index + 1 === currentStep ? "bg-pink-500" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default StepCounter;
