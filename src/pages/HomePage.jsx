import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList/index";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>

      <HobbyList hobbyList={hobbyList} />
    </div>
  );
}

export default HomePage;
