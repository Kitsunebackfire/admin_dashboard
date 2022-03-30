import React from "react";
import Styling from "./styleModules/ProjectsContainer.module.css";
import Icon from "@mdi/react";
import { mdiStarPlusOutline, mdiDeleteOutline, mdiShareVariant } from "@mdi/js";

function ProjectsContainer() {
  const projects = [
    {
      id: 1,
      title: "title 1",
      summary:
        "Lorem ipsum dolor sit ameusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu. Platea dictulutpat consequat mauris.",
    },
    {
      id: 2,
      title: "title 2",
      summary:
        "sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nul",
    },
    {
      id: 3,
      title: "title 3",
      summary:
        "or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam",
    },
    {
      id: 4,
      title: "title 4",
      summary:
        "aliquam nulla. Metus dictum at tempor commodo ullamcorper a lacus.",
    },
    {
      id: 5,
      title: "title 5",
      summary:
        "f dsawerwe asdffsaonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut la",
    },
    {
      id: 6,
      title: "title 6",
      summary:
        " ggea a dsfsdfsdfawonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut la",
    },
    {
      id: 7,
      title: "title 7",
      summary:
        " fewfawe232gsda gfdaonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut la",
    },
  ];
  return (
    <div className={Styling.mainContainer}>
      <div className={Styling.projectSection}>
        <div className={Styling.projectTitle}>Your Projects</div>
        <div className={Styling.projectContainer}>
          {projects.map((project) => (
            <div className={Styling.projectCard} key={project.id}>
              <div>{project.title}</div>
              <div>{project.summary}</div>
              <Icon
                className={Styling.icon}
                path={mdiStarPlusOutline}
                alt="star"
              />
              <Icon
                className={Styling.icon}
                path={mdiDeleteOutline}
                alt="delete trashcan"
              />
              <Icon
                className={Styling.icon}
                path={mdiShareVariant}
                alt="share"
              />
            </div>
          ))}
        </div>
        <div className={Styling.rightSideContainer}></div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
