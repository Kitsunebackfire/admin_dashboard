import React from "react";
import Styling from "./styleModules/LeftSidebar.module.css";
import Icon from "@mdi/react";
import {
  mdiViewDashboard,
  mdiHome,
  mdiAccountCircleOutline,
  mdiMessageTextOutline,
  mdiHistory,
  mdiFormatListChecks,
  mdiAccountGroup,
  mdiCog,
  mdiCommentQuestionOutline,
  mdiShieldCheckOutline,
} from "@mdi/js";

function LeftSidebar() {
  return (
    <div className={Styling.mainContainer}>
      <div className={Styling.titleContainer}>
        <Icon
          className={Styling.titleIcon}
          path={mdiViewDashboard}
          alt="dashboard"
        />
        <div className={Styling.title}>Dashboard</div>
      </div>

      <div className={Styling.generalNavContainer}>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon className={Styling.navIcon} path={mdiHome} alt="home" />
          </div>
          <div className={Styling.navTitle}>Home</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiAccountCircleOutline}
              alt="user"
            />
          </div>
          <div className={Styling.navTitle}>Profile</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiMessageTextOutline}
              alt="messages"
            />
          </div>
          <div className={Styling.navTitle}>Messages</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon className={Styling.navIcon} path={mdiHistory} alt="history" />
          </div>
          <div className={Styling.navTitle}>History</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiFormatListChecks}
              alt="tasks"
            />
          </div>
          <div className={Styling.navTitle}>Tasks</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiAccountGroup}
              alt="communities"
            />
          </div>
          <div className={Styling.navTitle}>Communities</div>
        </div>
      </div>

      <div className={Styling.supportContainer}>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiCog}
              alt="settings gear"
            />
          </div>
          <div className={Styling.navTitle}>Settings</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiCommentQuestionOutline}
              alt="support"
            />
          </div>
          <div className={Styling.navTitle}>Support</div>
        </div>
        <div className={Styling.navTitleContainer}>
          <div className={Styling.navIconContainer}>
            <Icon
              className={Styling.navIcon}
              path={mdiShieldCheckOutline}
              alt="privacy"
            />
          </div>
          <div className={Styling.navTitle}>Privacy</div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
