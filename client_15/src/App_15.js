import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
//import { Landing_15 } from "./pages/Landing_15";
import { Landing_15, Register_15, Error_15, ProtectedRoute_15,
TestFetchUseCors_15, TestFetchUseProxy_15} from './pages';

import {
  AddJob_15,
  AllJobs_15,
  Profile_15,
  Stats_15,
  SharedLayout_15,
} from './pages/dashboard';

import styled from 'styled-components';


function App_15() {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path='/'
          element={
            <ProtectedRoute_15>
              <SharedLayout_15 />
            </ProtectedRoute_15>
          }
        >
          <Route index element={<Stats_15 />} />
          <Route path='profile' element={<Profile_15 />} />
          <Route path='add-job' element={<AddJob_15 />} />
          <Route path='all-jobs' element={<AllJobs_15 />} />
        </Route>
      <Route path='/landing' element={<Landing_15 /> } />
      <Route path='/register' element={<Register_15/>}/>
      <Route path='/testcors' element={<TestFetchUseCors_15/>}/>
      <Route path='/testproxy' element={<TestFetchUseProxy_15/>}/>
      <Route path='*' element={<Error_15/>} />
    </Routes>
    {/*<Landing_15/> */}
    </BrowserRouter>
  );
}

export default App_15;
