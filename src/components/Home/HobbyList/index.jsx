import PropTypes from "prop-types";
import React from "react";
import "./HobbyList.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.string,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (!onHobbyClick) return;
    onHobbyClick(hobby);
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          onClick={() => handleClick(hobby)}
          className={hobby.id === activeId ? "active" : ""}>
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
