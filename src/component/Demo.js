import Header from "./Header"
import SearchBox from "./SearchBox"
import Example from "./Example"
import styled from "styled-components"

const Demo = ({title, description, server,githubLink, ainizeLink, inputType, input, output}) => {
    return (
        <Inner>
            <Header 
                title={title} 
                description={description}
                githubLink={githubLink}
                ainizeLink={ainizeLink}    
            ></Header>
            <Wrapper>
                <Example inputType={inputType} input={input} output={output}></Example>
                <Line></Line>
                <SearchBox server ={server}></SearchBox>
            </Wrapper>
        </Inner>
    )
}
const Inner = styled.div`
    padding-left: 300px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    width:100%;
    justify-content: space-evenly;
`

const Line = styled.div`
  border: 0.02px solid black; 
  width: 0.1px; 
  height: 600px;
  opacity: 0.08;
`;

export default Demo;
