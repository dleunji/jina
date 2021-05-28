import React from 'react';
import ScriptTag from 'react-script-tag'
import styled from 'styled-components';

const SearchBox = ({server}) =>{
  const onLoad = () => {
    const jb = window.JinaBox;
    jb.init(server,{ timeout:25000, top_k:16});
  }
  return(
    <div>
      <h2>Try it!</h2>
      <jina-searchbar></jina-searchbar>
      <ScriptTag src ='https://unpkg.com/jinabox' onLoad = {onLoad}/>
    </div>
  );
}

export default SearchBox;