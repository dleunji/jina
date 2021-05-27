import Header from "./Header"
import SearchBox from "./SearchBox"
import styled from "styled-components"
import Example from "./Example"

const CrossModal = () => {
    return (
        <div>
                <Header 
                    title={"Jina - Cross Modal Search System"} 
                    description={"This example allows the user to search for images given a caption description."}
                    githubLink={"https://github.com/jina-ai/examples/tree/master/cross-modal-search"}
                    ainizeLink={"https://ainize.ai/dleunji/crossmodal"}    
                ></Header>
            <Inner>
                <Example input={"a dog running in the meadow"} output={"CrossModelExample.png"}></Example>
                <Line></Line>
                <SearchBox server ="https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search"></SearchBox>
            </Inner>
        </div>
    )
}

const Inner = styled.div`
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