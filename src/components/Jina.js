import React from 'react';
import ScriptTag from 'react-script-tag'
const Jina = ({server}) =>{
  console.log(server);
  const onLoad = () => {
    const jb = window.JinaBox;
    jb.init(server,{ timeout:25000, top_k:16});
  }
  return(
    <div>
      <jina-searchbar></jina-searchbar>
      <jina-floater></jina-floater>
      <ScriptTag src ='https://unpkg.com/jinabox' onLoad = {onLoad}/>
      {/* <ScriptTag>JinaBox.init(server,{ timeout:25000, top_k:16})</ScriptTag> */}
    </div>
  );
}
export default Jina;