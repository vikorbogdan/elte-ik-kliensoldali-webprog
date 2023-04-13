import Menu from "./menu/Menu";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Menu />
      <div className="ui container">{children}</div>
    </>
  );
};

export default Layout;
