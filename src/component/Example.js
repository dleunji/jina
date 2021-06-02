import styled from "styled-components"


const Example = (props) => {
    const {inputType, input, output} = props
    return (
        <div>
            <h2>Example</h2>
            <h3>Input</h3>
            {inputType === "text" ? (<div>{input}</div>) : <InputImg src={input}/>}
            <h3>Output</h3>
            <OutputImg src={output} />
        </div>
    )
}

const InputImg = styled.img`
    height: 100px;
`;

const OutputImg = styled.img`
    height: 350px;
`;

export default Example;