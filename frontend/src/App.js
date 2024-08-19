import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { fetchCards, fetchCardByTitle } from "./services/cardServices";
import "./index.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true);
      const data = await fetchCards();
      setCards(data);
      setLoading(false);
    };

    loadCards();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    setMessage("");

    if (!query.trim()) {
      const data = await fetchCards();
      setCards(data);
      setLoading(false);
      return;
    }

    const normalizedQuery = query.trim().toLowerCase();

    const card = await fetchCardByTitle(normalizedQuery);
    if (card) {
      setCards([card]);
    } else {
      setCards([]);
      setMessage("The title you searched for is not in the database.");
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <div className="content-container">
          {cards.length > 0 ? (
            <CardGrid cards={cards} />
          ) : (
            <p className="no-cards-message">{message}</p>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
