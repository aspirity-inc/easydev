import { useEasyThemeContext } from '@aspirity/easydev';

import { getMenuItems } from '@src/assets/data/sidebarMenu';
import { StyledEasySidebar } from './styles';
import { useNavigate } from 'react-router-dom';

import './style.css';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { theme } = useEasyThemeContext();

  const links = getMenuItems(theme.type as string).map((item) => ({
    ...item,
    onClick: item.to != null ? () => navigate(item.to as string) : null,
  }));

  return <StyledEasySidebar menu={links} />;
};
