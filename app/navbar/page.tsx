import ActionButtons from "./action-buttons";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center mt-1 px-8 border-b">
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
