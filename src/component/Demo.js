import Header from "./Header"
import SearchBox from "./SearchBox"
import Example from "./Example"
import styled from "styled-components"

const Demo = ({title, description, server,githubLink, ainizeLink}) => {
    return (
        <Inner>
                <Header 
                    title={title} 
                    description={description}
                    githubLink={githubLink}
                    ainizeLink={ainizeLink}    
                ></Header>
            <Wrapper>
                <Example input={"a dog running in the meadow"} output={"CrossModelExample.png"}></Example>
                <Line></Line>
                <SearchBox server ={server}></SearchBox>
            </Wrapper>
        </Inner>
    )
}

const Inner = styled.div`
    margin-left: 5vw;
    height: 100vh;
    width: 100vw;
`

const Wrapper = styled.div`
    display: flex;
`

const Line = styled.div`
  border: 0.02px solid black; 
  width: 0.1px; 
  height: 600px;
  opacity: 0.08;
  margin-left: 30px;
  margin-right: 20px;
`;

export default Demo;
