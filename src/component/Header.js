import styled from "styled-components"

const Header = (props) => {
    const {title, description, githubLink, ainizeLink} = props
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <Title>
                    <img src="/images/jina_search.svg" />
                    <h1>{title}</h1>
                </Title>
                <Description>{description}</Description>
                <Link>Github : <a href={githubLink} target="_blank">{title} <br /></a> </Link>
                <Link>Open API : <a href={ainizeLink} target="_blank">On Ainize</a></Link>
            </div>
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
    justify-content: center;
`

const Link = styled.div`
    margin-top: 5px;
`
const Line = styled.hr`
  opacity: 0.2;
`;

export default Header;
