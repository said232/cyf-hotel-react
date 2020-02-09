import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = () => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults bookings={fakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
