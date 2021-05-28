import Header from "./Header"
import SearchBox from "./SearchBox"
import Example from "./Example"
import styled from "styled-components"

const CrossModal = () => {
    return (
        <Inner>
                <Header 
                    title={"Jina - Cross Modal Search System"} 
                    description={"This example allows the user to search for images given a caption description."}
                    githubLink={"https://github.com/jina-ai/examples/tree/master/cross-modal-search"}
                    ainizeLink={"https://ainize.ai/dleunji/crossmodal"}    
                ></Header>
            <Wrapper>
                <Example input={"a dog running in the meadow"} output={"CrossModelExample.png"}></Example>
                <Line></Line>
                <SearchBox server ="https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search"></SearchBox>
            </Wrapper>
        </Inner>
    )
}

const Inner = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
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

export default CrossModal;
