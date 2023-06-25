import React from 'react'

function SearchField() {
  return (
    <div className="input-form">
        <form className="form">
          <input
            type="text"
            placeholder="search by description"
            className="form-control"
          />
          <button type="submit">Submit</button>
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
  )
}

export default SearchField