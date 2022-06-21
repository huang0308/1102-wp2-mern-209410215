import Wrapper from '../assets/wrappers/SmallSidebar_15';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_15';

import Logo_15 from './Logo_15';
import NavLinks_15 from './NavLinks_15';

const SmallSidebar_15 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_15 />
          </header>
          <NavLinks_15 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_15;
