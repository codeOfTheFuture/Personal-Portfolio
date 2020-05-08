import Navigation from "./Navigation";

const Layout = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
