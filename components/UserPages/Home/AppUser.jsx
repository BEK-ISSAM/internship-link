import React, { useState } from 'react';
import NavBarUser from './NavBarUser';
import SideNavUser from './SideNavUser';
import UserHome from './UserHome';

const AppUser = () => {
  const [activeContent, setActiveContent] = useState('Applications');

  return (
    <div>
      <NavBarUser />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <SideNavUser setActiveContent={setActiveContent} />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <UserHome activeContent={activeContent} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppUser;
