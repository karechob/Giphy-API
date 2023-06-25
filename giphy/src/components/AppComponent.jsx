import React, { useState, useEffect } from "react";
import axios from "axios";

function AppComponent() {
  //const [trendingGifs, setTrendingGifs] = useState([]);
  //const [searchInput, setSearchInput] = useState("");
  const [searchGifs, setSearchGifs] = useState([]);
  //const [currentDisplayGifs, setCurrentDisplayGifs] = useState([]);

  useEffect(() => {
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

    fetchTrendingGifs();
  }, []);

  function displayGif() {
    if (searchGifs.length === 0) {
      return <div>Loading GIFs...</div>;
    }

    return (
      <div>
        {searchGifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt="GIF" />
        ))}
      </div>
    );
  }

  // const handleSearchTerm = event => {
  //   setSearchInput(event.target.value)
  // }

  // const handleSubmission = async event => {
  //   event.preventDefault();
  //   const response = await axios.get(
  //     "https://api.giphy.com/v1/gifs/serach", {
  //       params: {
  //         api_key: "hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1",
  //         q: searchInput
  //       }
  //     }
  //    );
  //    searchGifs(response.data.data)
  // }

  return (
    <div className="app-component">
      <h1>GIF SEARCH</h1>
      <div className="input-form">
        <form className="form">
          <button className="home-btn">Home</button>
          <input
            type="text"
            placeholder="search by description"
            className="form-control"
            // onChange={handleSearchTerm}
            // value={searchInput}
          />
          {/* <button onClick={handleSubmission} type="submit">Submit</button> */}
          <button type="submit">Random</button>
          <div class="form-check">
            <h2>RATING CATEGORIES</h2>
            <p className="desc-categories">*search defaults to all ratings*</p>
            {/* <div class="form-check"> */}
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
            {/* </div> */}
          </div>
        </form>
      </div>
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
