import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TuristCard from "./Turistcard";
import Restaurant from "./Restaurant";

const Addresslines = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = props => {
  const Addresslines = props.Addresslines;
  return (
    <div className="footer">
      <ul>
        {Addresslines.map((line, i) => (
          <li key={line + i}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="row">
        <TuristCard
          img="https://tse2.mm.bing.net/th?id=OIP.-HZVxSsNvvSozSczGbIMhgHaEL&pid=Api&P=0&w=275&h=156"
          alt=""
        />
        <TuristCard
          img="https://tse4.mm.bing.net/th?id=OIP.ClGAZGC1SRijOYpYrAJVUQHaEK&pid=Api&P=0&w=349&h=197"
          alt=""
        />
        <TuristCard
          img="https://tse2.mm.bing.net/th?id=OIP._ZKe4aBjkDba12Qrn1ThVAHaEK&pid=Api&P=0&w=318&h=179"
          alt=""
        />
      </div>

      <Bookings />
      <Restaurant />
      <Footer Addresslines={Addresslines} />
    </div>
  );
};

export default App;
