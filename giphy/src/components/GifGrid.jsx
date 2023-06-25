import React from "react";

function GifGrid(props) {
  function displayGif() {
    if (props.searchGifs.length === 0) {
      return <div>Loading GIFs...</div>;
    }

    return (
      <div className="gif-grid">
        {props.searchGifs.map((gif) => (
          <div key={gif.id} className="picture-card">
            <div className="picture-frame">
              <img src={gif.images.fixed_height.url} alt="GIF" />
            </div>
            <p className="desc-gif">{gif.title}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>{displayGif()}</div>;
}

export default GifGrid;

