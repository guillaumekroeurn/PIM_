import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue);}}>
        <NavLink to="/mission" >
          <BottomNavigationAction
            label="Mission"
            icon={<LightbulbOutlinedIcon/>}/>
        </NavLink>
        <NavLink to="/photo" >
          <img  className="Gopht-btn" src="../image/photo.png"/>
        </NavLink>
        <NavLink to="/collection" >
          <BottomNavigationAction
            label="Collection"
            icon={<LocalFloristOutlinedIcon />}/>
        </NavLink>
    </BottomNavigation>
  );
}