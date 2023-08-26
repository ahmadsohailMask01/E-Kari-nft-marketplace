import React from "react"
import ReactPlayer from "react-player"
import styles from "../styles/blogs.module.css"

const Reactplayer = (props) => {
    return (
        <>
            <ReactPlayer
                controls={true}
                width="90%"
                height="250px"
                url={props.link}
            />
        </>
    )
}

export default Reactplayer
