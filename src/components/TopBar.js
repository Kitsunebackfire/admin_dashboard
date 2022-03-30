import React from "react";
import Styling from "./styleModules/TopBar.module.css";
import Icon from "@mdi/react";
import { mdiMagnify, mdiBellRingOutline } from "@mdi/js";
import Dobie from "./photos/dobie.jpg";

function TopBar() {
  return (
    <div className={Styling.mainContainer}>
      <div className={Styling.topRow}>
        <div className={Styling.searchContainer}>
          <Icon
            className={Styling.searchIcon}
            path={mdiMagnify}
            alt="search magnifying glass"
          />
          <input
            className={Styling.searchInput}
            id="searchInput"
            name="searchInput"
            type="text"
          />
        </div>
        <div className={Styling.userContainer}>
          <Icon className={Styling.alertIcon} path={mdiBellRingOutline} />
          <img
            className={Styling.userImageSmall}
            alt="doberman headshot"
            src={Dobie}
          />
          <div className={Styling.topRowName} style={{ display: "inline" }}>
            Stella Isabella Ivey
          </div>
        </div>
      </div>
      <div className={Styling.bottomRow}>
        <div className={Styling.welcomeContainer}>
          <img
            className={Styling.userImageLarge}
            alt="doberman headshot"
            src={Dobie}
          />
          <div className={Styling.hiThere} style={{ display: "inline" }}>
            Hi there,
          </div>
          <div className={Styling.welcomeName} style={{ display: "inline" }}>
            Stella Isabella Ivey (@stellaTheDobie)
          </div>
        </div>
        <div className={Styling.buttonContainer}>
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
