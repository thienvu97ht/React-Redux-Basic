import casual from "casual-browserify";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList/index";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // const hobbyState = useSelector(
  //   (state) => ({
  //     list: state.hobby.list,
  //     activeId: state.hobby.activeId,
  //   }),
  //   shallowEqual
  // );

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    // Random a hobby object: { id, title}
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>

      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
