import Anime from 'react-anime'
const Bounce = (props) => {
    const { direction, value } = props
    const animeProps = {
        loop: 1,
        easing: 'easeInOutQuint',
        duration: 500
    }
    if (direction === "Y")
        animeProps.translateY = value
    else
        animeProps.translateX = value
    return <Anime  {...animeProps}>{props.children}</Anime>

}

export default Bounce