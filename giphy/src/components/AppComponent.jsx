import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeButton from "./HomeButton";
import SearchField from "./SearchField";
import GifGrid from "./GifGrid";

function AppComponent() {
  const [searchInput, setSearchInput] = useState("");
  const [searchGifs, setSearchGifs] = useState([]);
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  async function fetchTrendingGifs() {
    try {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1&limit=20&offset=0&rating=g&bundle=messaging_non_clips"
      );
      setSearchGifs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchTerm = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1",
        q: searchInput,
        rating: rating, // Include the selected rating in the request
      },
    });
    setSearchGifs(response.data.data);
  };

  const handleSearchRandomGif = async (event) => {
    event.preventDefault();
    const response = await axios.get("https://api.giphy.com/v1/gifs/random?", {
      params: {
        api_key: "hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1",
      },
    });
    setSearchGifs([response.data.data]);
  };

  return (
    <div className="app-component">
      <h1>GIF SEARCH</h1>
      <div className="input-form">
        <HomeButton />
        <SearchField
          handleSearchTerm={handleSearchTerm}
          searchInput={searchInput}
          handleSubmission={handleSubmission}
          handleSearchRandomGif={handleSearchRandomGif}
          searchGifs={searchGifs}
          setRating={setRating}
        />
      </div>
      <div>
        <GifGrid searchGifs={searchGifs} />
      </div>
    </div>
  );
}

export default AppComponent;
