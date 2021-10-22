import { SidebarType } from './types';

export function generateRandomid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
 return result;
}

export const SidebarData: SidebarType[] = [
  {
    title: 'Home',
    path: '/',
    className: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/',
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '/',
    className: 'nav-text'
  },
]