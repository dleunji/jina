import React from 'react';
import {useDispatch} from 'react-redux';
import {ProSidebar, Menu, MenuItem,SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

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
      <div className="content-wrapper">
        <div className="description">
          AI search engine <a href="https://github.com/jina-ai/jina"><b>Jina</b></a> offers<br/>
          Large-scal indexing and querying of any kind of unstructured<br/>
          : video, image, long/short text, music, source code, PDF, etc.<br/>
          Try it out! <br/>
        </div>
        <Menu iconShape="square"
        className="menu"
        style={{
          padding:'24px',
          letterSpacing: '1px',
          fontFamily: 'Verdana',
        }}>
          <MenuItem icon={<FaGem />}>Poké</MenuItem>
          <MenuItem icon={<FaGem />}>Cross Modal</MenuItem>
        </Menu>
        </div>
        <div className="footer">
          <a href="https://github.com/dleunji/jina"><FaGithub size={25}/></a>
          <div>
            <a href="#"><img src="/images/Group.svg" className="ainize-icon"></img></a>
          </div>
        </div>
      </SidebarContent>
    </ProSidebar>
  );
}

export default Sidebar;