import { MdSearch } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import "styles/components/layout.scss";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo-wrapper">
          <img src="/icons/spotify-1.svg" alt="spotify" />
        </div>
      </div>
      <div className="navbar--ghost"></div>
      <div className="sidebar">
        <div className="sidebar--section">
          <p>Main</p>
          <div className="side-item">
            <MdPlaylistAddCheck size={"25px"} />
            <span className="ml-8">Your Playlist</span>
          </div>
          <div className="side-item">
            <MdSearch size={"25px"} />
            <span className="ml-8">Find Song</span>
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </>
  );
};

export default Layout;
