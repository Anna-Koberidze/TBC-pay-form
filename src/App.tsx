import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PageContent from "./components/PageContent";

const App: React.FC = () => {
  const [isFormContainerOpen, setIsFormContainerOpen] =
    useState<boolean>(false);

  return (
    <>
      <Header {...{ setIsFormContainerOpen }} />
      <PageContent {...{ isFormContainerOpen, setIsFormContainerOpen }} />
    </>
  );
};

export default App;
