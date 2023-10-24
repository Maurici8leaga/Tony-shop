import React from 'react';

import Container from '@mui/material/Container';
// component
import MenuProfile from '@molecules/menu/menu-profile/MenuProfile';
import MenuProfileAdaptive from '@molecules/menu/menu-profile-adaptive/MenuProfileAdaptive';

// ccss
import '../profile/Profile.scss';

const MyShopping = () => {
  return (
    <div className="container-profile">
      <Container fixed>
        <div className="container-grid-profile">
          <div className="menu-profile">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfile />
          </div>
          <div className="menu-profile-adaptive">
            {/* a este component a futuro se le debe pasar data para tener acceso al user */}
            <MenuProfileAdaptive />
          </div>
          <div className="profile-content">contenido</div>
        </div>
      </Container>
    </div>
  );
};

export default MyShopping;
