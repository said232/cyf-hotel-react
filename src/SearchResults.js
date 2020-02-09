import React from "react";
import "./data/fakeBookings.json";
import moment from "moment";

// make sure the Parent component passes the bookings (they will come as props)
// since it's an array, then loop through it and display each item (in html)
// install moment
// from the booking object .. wrap the checkinDate and checkoutDate (so moemnt(checkinDate))
// then calcualte checkOutDate.diff(checkInDate) and display it

const SearchResults = props => {
  state = {
    selected: null
  };

  const calcualteDays = (checkInDate, checkOutDate) => {
    const dayIn = moment(checkInDate);
    const dayOut = moment(checkOutDate);
    const days = dayOut.diff(dayIn, "days");
    return days;
  };

  const bookings = props.bookings;

  const renderRow = ({
    id,
    title,
    firstName,
    surname,
    roomId,
    checkInDate,
    checkOutDate,
    email
  }) => (
    <tr>
      <td scope="row">{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{email}</td>
      <td>{calcualteDays(checkInDate, checkOutDate)}</td>
    </tr>
  );
  const renderHeader = () => (
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">First name</th>
      <th scope="col">Surname</th>
      <th scope="col">Room ID</th>
      <th scope="col">CheckinDate</th>
      <th scope="col">Check checkOutDate</th>
      <th scope="col">Mail</th>
      <th scope="col">days</th>
    </tr>
  );
  return (
    <div>
      <table className="table table-bordered">
        <thead>{renderHeader()}</thead>
        <tbody>{bookings.map(book => renderRow(book))}</tbody>
      </table>
    </div>
  );
};
export default SearchResults;
