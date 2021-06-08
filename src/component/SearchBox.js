import React from 'react';
// import ScriptTag from 'react-script-tag'
import CustomScriptTag from './CustomScriptTag';

const SearchBox = ({server}) =>{
  const onLoad = () => {
    console.log(server);
    const jb = window.JinaBox;
    jb.init(server,{ timeout:25000, top_k:16});
  }
  return(
    <div className="searchbox-wrapper">
      <h2>Try it!</h2>
      <jina-searchbar></jina-searchbar>
      <CustomScriptTag src ="https://unpkg.com/jinabox" onLoad = {onLoad}/>
    </div>
  );
}
 
export default SearchBox;