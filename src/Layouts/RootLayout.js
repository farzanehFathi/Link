import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <Header />
      <div className="pt-70px"></div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
