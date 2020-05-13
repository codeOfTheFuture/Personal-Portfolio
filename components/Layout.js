import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

const Layout = (props) => (
  <div>
    <Hamburger />
    <Navigation />
    {props.children}
  </div>
);

export default Layout;
