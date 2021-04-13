import Anime from 'react-anime'

let colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500'];

const FadeIn = (props) => {
    return < Anime delay={100} duration={4000} opacity={[0, 1]} >
        {props.children}
    </Anime >
}




export default FadeIn