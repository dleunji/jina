import React from 'react';
import {useSelector} from 'react-redux';
import {Demo} from '../component';

const DemoContainer = () =>{
  const {title, description, server, githubLink, ainizeLink, inputType, input, output} = useSelector(({jina})=>({
    title : jina.info.title,
    description: jina.info.description,
    server: jina.info.server,
    githubLink: jina.info.githubLink,
    ainizeLink: jina.info.ainizeLink,
    inputType: jina.info.inputType,
    input: jina.info.input,
    output: jina.info.output
  }));

  return (
    <Demo
    title={title} 
    description={description} 
    server={server}
    githubLink={githubLink}
    ainizeLink={ainizeLink}
    inputType={inputType}
    input={input}
    output={output}
    />
  );
}

export default DemoContainer;
