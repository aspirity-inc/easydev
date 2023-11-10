import { useEasyThemeContext } from '@aspirity/easydev';

import { getMenuItems } from '@src/assets/data/sidebarMenu';
import { StyledEasySidebar } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

import type { CSSProperties } from 'react';
import './style.css';

export const Sidebar = ({ sidebarToggleButtonProps }: { sidebarToggleButtonProps: { style: CSSProperties } }) => {
  const navigate = useNavigate();
  const { type } = useEasyThemeContext();
  const location = useLocation();
  const currentPathName = location.pathname;

  const links = getMenuItems(type!, currentPathName).map((item) => ({
    ...item,
    onClick: item.to != null ? () => navigate(item.to as string) : null,
  }));

  return <StyledEasySidebar sidebarToggleButtonProps={sidebarToggleButtonProps} menu={links} />;
};
