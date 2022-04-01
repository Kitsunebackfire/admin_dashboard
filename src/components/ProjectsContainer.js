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

  const announcements = [
    { id: 1, title: "update 1", summary: "something to show 1" },
    { id: 2, title: "update 2", summary: "something to show 2" },
    { id: 3, title: "update 3", summary: "something to show 3" },
    { id: 4, title: "update 4", summary: "something to show 4" },
  ];

  const trends = [
    { id: 1, title: "pigs flying 1", summary: "Pigs taking private jets 1" },
    { id: 2, title: "pigs flying 2", summary: "Pigs taking private jets 2" },
    { id: 3, title: "pigs flying 3", summary: "Pigs taking private jets 3" },
    { id: 4, title: "pigs flying 4", summary: "Pigs taking private jets 4" },
    { id: 5, title: "pigs flying 5", summary: "Pigs taking private jets 5" },
  ];
  return (
    <div className={Styling.mainContainer}>
      <div className={Styling.projectSection}>
        <div className={Styling.areaTitle}>Your Projects</div>
        <div className={Styling.projectContainer}>
          {projects.map((project) => (
            <div className={Styling.projectCardContainer} key={project.id}>
              <div className={Styling.projectCard}>
                <div className={Styling.projectCardTitle}>{project.title}</div>
                <div className={Styling.projectSummary}>{project.summary}</div>
                <div className={Styling.projectIconContainer}>
                  <div className={Styling.iconContainer}>
                    <Icon
                      className={Styling.icon}
                      path={mdiStarPlusOutline}
                      alt="star"
                    />
                  </div>
                  <div className={Styling.iconContainer}>
                    <Icon
                      className={Styling.icon}
                      path={mdiDeleteOutline}
                      alt="delete trashcan"
                    />
                  </div>
                  <div className={Styling.iconContainer}>
                    <Icon
                      className={Styling.icon}
                      path={mdiShareVariant}
                      alt="share"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={Styling.rightSideContainer}>
        <div className={Styling.sectionContainer}>
          <div className={Styling.areaTitle}>Announcements</div>
          <div className={Styling.contentContainer}>
            <div className={Styling.content}>
              {announcements.map((announcement) => (
                <div key={announcement.id} className={Styling.card}>
                  <div className={Styling.title}> {announcement.title}</div>
                  <div className={Styling.summary}> {announcement.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={Styling.sectionContainer}>
          <div className={Styling.areaTitle}>Trends</div>
          <div className={Styling.contentContainer}>
            <div className={Styling.content}>
              {trends.map((trend) => (
                <div key={trend.id} className={Styling.card}>
                  <div className={Styling.title}> {trend.title}</div>
                  <div className={Styling.summary}> {trend.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
