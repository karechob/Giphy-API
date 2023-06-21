import React, { useState, useEffect } from 'react'
import axios from 'axios'


function GifGrid() {
    const [trendingGifs, setTrendingGifs] = useState([])

    useEffect(() => {
        axios
          .get('https://api.giphy.com/v1/gifs/trending?api_key=hQD52LlFZsRpPIRbjrSeSqsMiOWxRDg1&limit=15&offset=0&rating=g&bundle=messaging_non_clips')
          .then(response => {
            setTrendingGifs(response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      function displayGif() {
        return <div>{trendingGifs.map(gif => (<img src={gif.images.fixed_height.url}/>))}</div>
      }
  return (
    <div>{displayGif()}</div>
  )
}

export default GifGrid
