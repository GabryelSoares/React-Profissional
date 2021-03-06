import React from "react";

const AppBar = ({ onReload, onSave, isLoading }) => (
  <div className="app-bar">
    <div className="app-bar__container">
      <span className="app-bar__brand">Note.js</span>
      <button className="app-bar__action" onClick={onReload}>
        <i className="material-icons">refresh</i>
      </button>
      <button className="app-bar__action" onClick={onSave}>
        <i className="material-icons">save</i>
      </button>
    </div>
  </div>
);

export default AppBar;