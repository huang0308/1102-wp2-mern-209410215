import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_15, BigSidebar_15, SmallSidebar_15 } from '../../components';

const SharedLayout_15 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_15 />
        <BigSidebar_15 />
        <div>
          <Navbar_15 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_15;

/*
const SharedLayout_15 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
