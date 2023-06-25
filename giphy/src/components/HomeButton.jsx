import React from "react";

function HomeButton() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <button className="home-btn" onClick={refreshPage}>
      Reload Home
    </button>
  );
}

export default HomeButton;
