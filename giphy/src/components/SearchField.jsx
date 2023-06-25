import React from 'react'

function SearchField(props) {
  return (
    <form className="form">
    <input
      type="text"
      placeholder="search by description"
      className="form-control"
      onChange={props.handleSearchTerm}
      value={props.searchInput}
    />
    <button onClick={props.handleSubmission} type="submit">
      Submit
    </button>
    <div class="form-check">
      <h2>RATING CATEGORIES</h2>
      <p className="desc-categories">*search defaults to all ratings*</p>
      <div className="radio-btns">
        <input
          className="radio-field"
          name="rating"
          value="g"
          type="radio"
          onChange={(e) => props.setRating(e.target.value)}
        />
        G
        <input
          className="radio-field"
          name="rating"
          value="pg"
          type="radio"
          onChange={(e) => props.setRating(e.target.value)}
        />
        PG
        <input
          className="radio-field"
          name="rating"
          value="pg-13"
          type="radio"
          onChange={(e) => props.setRating(e.target.value)}
        />
        PG-13
        <input
          className="radio-field"
          name="rating"
          value="r"
          type="radio"
          onChange={(e) => props.setRating(e.target.value)}
        />
        R
      </div>
      <div>
        <p>Feeling adventurous? Get a random gif!</p>
      </div>
      <button onClick={props.handleSearchRandomGif}>Random</button>
    </div>
  </form>
  )
}

export default SearchField