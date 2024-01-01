import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center mt-1 px-8 border-b">
      <Logo />
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
