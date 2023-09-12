import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar/TopNavbar';
import Footer from './Footer/Footer';
import ChatHelper from './ChatHelper/ChatHelper';
import SideNavbar from './SideNavbar/SideNavbar';

const Layout = () => {
  return (
    <div>
      <TopNavbar />
      <SideNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatHelper />
    </div>
  );
};

export default Layout;
