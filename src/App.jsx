import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AddBookModal from "./components/AddBookModal/AddBookModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      <Hero onAddBook={openModal} />

      <Main onAddBook={openModal} />

      <Footer />

      {isModalOpen && (
        <AddBookModal onClose={closeModal} />
      )}
    </>
  );
}

export default App;