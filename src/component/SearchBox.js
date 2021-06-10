import React from 'react';
import ScriptTag from 'react-script-tag'
import CustomScriptTag from './CustomScriptTag';

const SearchBox = ({server}) =>{
  const onLoad = () => {
    console.log(server);
    var jb = window.JinaBox;
    jb.init(server);
  }
  return(
    <div>
      <h2>Try it!</h2>
      <jina-searchbar></jina-searchbar>
      <CustomScriptTag src ="https://unpkg.com/jinabox@0.1.49/dist/jinabox.umd.min.js" onLoad = {onLoad}/>
    </div>
  );
}
 
export default SearchBox;