import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export function generateRandomid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
 return result;
}

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    className: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/',
    icon: <SettingsIcon />,
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '/',
    icon: <InfoIcon />,
    className: 'nav-text'
  },
]