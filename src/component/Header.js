import styled from "styled-components"

const Header = (props) => {

    const {title, description, githubLink, ainizeLink} = props
    return (
        <div>
            <Title>
                <img src="/images/jina_search.svg" />
                <h1>{title}</h1>
            </Title>
            <Description>{description}</Description>
            <Link>Open API : <a href={ainizeLink} target="_blank">On Ainize</a></Link>
            <Line/>
        </div>
    )
}

const Title = styled.div`
    margin-bottom: 30px;
    display: flex;
`

const Description = styled.p`
    margin-bottom: 30px;
`

const Link = styled.div`
    margin-top: 5px;
`
const Line = styled.hr`
  margin: 20px 40px;
  opacity: 0.2;
`;

export default Header;
