import React from "react";

import Icon from "@material/react-material-icon";

const AppBar = ({ isLoading }) => {
  return (
    <div className="app-bar">
      <span>My AppJS</span>
      {isLoading && (
        <button className="app-bar__btn app-bar__btn--rotation">
          <Icon icon="refresh" />
        </button>
      )}
    </div>
  );
};

export default AppBar;
