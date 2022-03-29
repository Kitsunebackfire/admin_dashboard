import Styling from "./components/styleModules/App.module.css";
import LeftSidebar from "./components/LeftSidebar";
import TopBar from "./components/TopBar";
import ProjectsContainer from "./components/ProjectsContainer";

function App() {
  return (
    <div className={Styling.App}>
      <div className={Styling.leftNavbar}>
        <LeftSidebar />
      </div>
      <div className={Styling.topBar}>
        <TopBar />
      </div>
      <div className={Styling.projectsContainer}>
        <ProjectsContainer />
      </div>
    </div>
  );
}
//<div className={Styling.projectsContainer}>fsdfsds</div>
export default App;
