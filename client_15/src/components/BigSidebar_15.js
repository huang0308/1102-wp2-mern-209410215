import { useAppContext } from '../context/appContext_15';
import NavLinks from './NavLinks_15';
import Logo from './Logo_15';
import Wrapper from '../assets/wrappers/BigSidebar_15';

const BigSidebar_15 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_15;
