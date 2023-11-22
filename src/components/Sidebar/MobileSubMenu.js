import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled nav link
const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #780899;
    border-left: 4px solid #AC14C9;
    cursor: pointer;
    color: red
  }
`;

// Styled link label
const SidebarLabel = styled.span`
  margin-left: 16px;
  font-family: 'Exo', sans-serif;
`;

// Styled dropdown link
const DropdownLink = styled(Link)`
  background: #F1F2F2;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #780899;
    cursor: pointer;
    color: red;
  }
`;

// Submenu
const SubMenu = ({ item }) => {

  // Initialize subnav state
  const [subnav, setSubnav] = useState(false);

  // Negate subnav state
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

// Export Sub Menu
export default SubMenu;