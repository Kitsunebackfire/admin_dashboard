import React from "react";
import Styling from "./styleModules/LeftSidebar.module.css";

function LeftSidebar() {
  return (
    <div className={Styling.mainContainer}>
      <div>title</div>
      <div>home</div>
      <div>profile</div>
      <div>messages</div>
      <div>history</div>
      <div>tasks</div>
      <div>communities</div>
      <div>settings</div>
      <div>support</div>
      <div>privacy</div>
    </div>
  );
}

export default LeftSidebar;
