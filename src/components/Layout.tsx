import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ChatHelper from './ChatHelper/ChatHelper';
import SideNavbar from './SideNavbar/SideNavbar';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <SideNavbar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatHelper />
    </div>
  );
};

export default Layout;
