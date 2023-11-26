import { useEasyThemeContext } from '@aspirity/easydev';

import { getMenuItems } from '@src/assets/data/sidebarMenu';
import { StyledEasySidebar } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

import './style.css';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { type } = useEasyThemeContext();
  const location = useLocation();
  const currentPathName = location.pathname;

  const links = getMenuItems(type!, currentPathName).map((item) => ({
    ...item,
    onClick: item.to != null ? () => navigate(item.to as string) : null,
  }));

  return <StyledEasySidebar sidebarToggleButtonProps={{ style: { bottom: 120 } }} menu={links} />;
};
