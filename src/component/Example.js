import styled from "styled-components"


const Example = (props) => {
    const {input, output} = props
    const outputPath = "/images/" + output
    return (
        <div>
            <h2>Example</h2>
            <h3>Input</h3>
            <label>{input}</label>
            <h3>Output</h3>
            <ExampleImg src={outputPath} />
        </div>
    )
}

const ExampleImg = styled.img`
    height: 350px;
`;

export default Example;