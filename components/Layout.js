const Layout = (props) => (
  <div>
    {props.children}
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@500&display=swap");
      :global(body) {
        margin: 0;
        font-family: Raleway, Helvetica, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
