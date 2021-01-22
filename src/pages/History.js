import { Link } from "@reach/router";
import React from "react";
import { HeaderTitle } from "../components/HeaderTitle";
import HistoryContainer from "../components/HistoryContainer";

function Header() {
  return (
    <div className="nav d-flex justify-content-around navbar">
      <Link to="/" style={{ color: "#2a2a2a" }}>
        <div>
          <i
            class="fas fa-home"
            style={{ color: "#ff8800", marginRight: 5 }}
          ></i>
          Home
        </div>
      </Link>
    </div>
  );
}

const History = () => {
  return (
    <div>
      <Header />
      <HeaderTitle subtitle="Redeem History" />
      <HistoryContainer />
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};
export default History;
