import Header from "./header";
import MainContent from "./main-content";

const Layout = ({ children }) => {
    return (
      <div className="w-full mx-auto">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    )
  }

export default Layout;