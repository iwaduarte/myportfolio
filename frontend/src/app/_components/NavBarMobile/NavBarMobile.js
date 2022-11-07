import Icons from '../Icons/Icons';
import Logo from '../Logo/Logo';
import style from './NavBarMobile.module.css';

const { navBar } = style;
const NavBarMobile = () => {
  return (
    <div className={navBar}>
      <Logo extraBarCode={false} />
      <Icons displayArrow={false} size={24} iconsColor="#22292d" />
    </div>
  );
};

export default NavBarMobile;
