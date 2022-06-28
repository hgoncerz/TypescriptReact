import React from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <div className="flex items-center flex-col w-full h-screen">
      <span className="uppercase md:text-6xl text-2xl md:mt-8 mt-3 text-white text-center z-10">
        Task
      </span>
      <InputField />
    </div>
  );
};

export default App;
