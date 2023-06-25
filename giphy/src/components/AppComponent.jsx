import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";
import axios from "axios";

function AppComponent() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  //const [searchInput, setSearchInput] = useState('');
  //   const [regularSearchGifs, setRegularSearchGifs] = useState([]);
  //   const [currentDisplayGifs, setCurrentDisplayGifs] = useState([]);

  useEffect(() => {
    async function fetchTrendingGifs() {
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/trending?api_key=hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1&limit=20&offset=0&rating=g&bundle=messaging_non_clips"
        );
        setTrendingGifs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrendingGifs();
  }, []);

  function displayGif() {
    if (trendingGifs.length === 0) {
      return <div>Loading GIFs...</div>;
    }

    return (
      <div>
        {trendingGifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt="GIF" />
        ))}
      </div>
    );
  }

  return (
    <div className="app-component">
      <h1>GIF SEARCH</h1>
      <SearchField/>
      <div>{displayGif()}</div>
    </div>
  );
}

export default AppComponent;
// <div>{displayGif()}</div>;

//old form control

  /* <div class="form-check">
<p>Categories</p>
<label>
  <input className="checkbox" type="checkbox" />
  <label className="checkbox-desc">G</label>
</label>
<label>
  <input className="checkbox" type="checkbox" />
  <label className="checkbox-desc">PG</label>
</label>
<label>
  <input className="checkbox" type="checkbox" />
  <label className="checkbox-desc">PG-13</label>
</label>
<label>
  <input className="checkbox" type="checkbox" />
  <label className="checkbox-desc">R</label>
</label>
</div> */

