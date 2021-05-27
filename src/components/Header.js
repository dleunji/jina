import styled from "styled-components"


const Header = (props) => {
    const {title, description, githubLink, ainizeLink} = props
    return (
        <Inner>
            <Title>
                <img src="/images/jina_search.svg" />
                {title}
            </Title>
            <Description>{description}</Description>
            <Link>Github : <a href={githubLink} target="_blank">{title} <br /></a> </Link>
            <Link>Open API : <a href={ainizeLink} target="_blank">On Ainize</a></Link>
            <Line/>
        </Inner>
    )
}

const Inner = styled.div`
    align-items: center;
    display: block;
`

const Title = styled.h1`
    margin-bottom: 30px;
    align-items: center;
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