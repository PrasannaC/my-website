import Anime from 'react-anime'

const FadeIn = (props) => {
    return <Anime duration={400} scale={[0.95, 1]} opacity={[0, 1]} >
        {props.children}
    </Anime >
}




export default FadeIn