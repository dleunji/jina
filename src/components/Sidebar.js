import React from 'react';
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa'
import styled from "styled-components"
import 'react-pro-sidebar/dist/css/styles.css';
const Sidebar = () => {
  return(
    <ProSidebar>
      <SidebarHeader
      style={{
        padding:'24px',
        letterSpacing: '1px',
        fontFamily: 'Verdana',
        textAlign: 'center',
      }}>
        Jina Demo
      </SidebarHeader>
      <SidebarContent>
        <div className="description">
          AI search engine <a href="https://github.com/jina-ai/jina"><b>Jina</b></a> offers<br/>
          Large-scal indexing and querying of any kind of unstructured<br/>
          : video, image, long/short text, music, source code, PDF, etc.<br/>
          Try it out! <br/>
        </div>
        <Menu iconShape="square"
        style={{
          padding:'24px',
          letterSpacing: '1px',
          fontFamily: 'Verdana',
        }}>
          <MenuItem icon={<FaGem />}>Poké</MenuItem>
          <MenuItem icon={<FaGem />}>Cross Modal</MenuItem>
        </Menu>
        <div className="foooter">
          <FaGithub/>
          <div className="ainize"></div>
        </div>
      </SidebarContent>
    </ProSidebar>
  );
}

const Footer = styled.div`
  width : 20px;
  height: auto;
`

const Ainize = styled.img`
  src : "/images/Group.svg";
`


export default Sidebar;