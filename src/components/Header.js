import React, { useEffect, useState } from "react";
import coin from "../icons/coin.svg";
import styled from "styled-components";
import getUser from "../helpers/getUser";
import ModalCoins from "./modals/ModalCoins";
import useModal from "../hooks/useModal";

const DivActions = styled.div`
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
`;

const DivUser = styled.div`
  font-weight: 500;
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #0d0d0d;
`;

const DivCoins = styled.div`
  width: 60%;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  background-color: #ededed;
  border-radius: 50px;
  display: flex;
  padding: 10px;
`;

function Header() {
  const { isOpen, toggle } = useModal();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");

  useEffect(() => {
    if (!userName) {
      getUser().then(
        (data) => setUserName(data.name) && setUserPoints(data.points)
      );
    } else {
      return null;
    }
  }, [userName]);

  useEffect(() => {
    // if (!userPoints) {
    getUser().then((data) => setUserPoints(data.points));
    // } else {
    //   return null;
    // }
  }, [userPoints]);

  return (
    <>
      <div className="nav d-flex justify-content-around navbar">
        <div
          className="header__actions d-flex justify-content-between"
          style={{ width: "20%" }}
        >
          <DivActions onClick={toggle}>
            <i
              class="fas fa-plus-circle coin"
              style={{ color: "#ffcf00", marginRight: 5 }}
            ></i>
            Add more coins
          </DivActions>
          <ModalCoins isOpen={isOpen} hide={toggle} />
          <DivActions>
            <i
              class="fas fa-history history"
              style={{ color: "#ff8800", marginRight: 5 }}
            ></i>
            Redeem history
          </DivActions>
        </div>
        <DivUser>
          {userName != "" ? userName : ""}
          <DivCoins>
            {userPoints != "" ? userPoints : ""}
            <img src={coin} alt="Coin" />
          </DivCoins>
        </DivUser>
      </div>
    </>
  );
}

export default Header;
