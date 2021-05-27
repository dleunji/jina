import React from 'react';
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
const Sidebar = () => {
  return(
    <ProSidebar>
      <SidebarHeader
      style={{
        padding:'24px',
        letterSpacing: '1px',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        Jina Demo
      </SidebarHeader>
      <SidebarContent>
        <div className="description">
          AI search engine<br/>
          Large-scal indexing and querying of any kind of unstructured<br/>
          : video, image, long/short text, music, source code, PDF, etc.<br/>
        </div>
        <Menu
        style={{
          padding:'24px',
          letterSpacing: '1px',
          fontFamily: 'Verdana',
        }}>
          <MenuItem>Poké</MenuItem>
          <MenuItem>Cross Modal</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>

  );
}
export default Sidebar;