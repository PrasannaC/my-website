import Anime from 'react-anime'
const Bounce = (props) => {
    const { direction, value } = props
    const animeProps = {

        // easing: 'easeInBack',
        duration: 400
    }
    if (direction === "Y")
        animeProps.translateY = value
    else
        animeProps.translateX = value
    return <Anime easing="easeInCubic"  {...animeProps}>{props.children}</Anime>

}

export default Bounce