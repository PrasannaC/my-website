import Anime from 'react-anime'

const FadeIn = (props) => {
    return < Anime delay={100} duration={4000} opacity={[0, 1]} >
        {props.children}
    </Anime >
}




export default FadeIn