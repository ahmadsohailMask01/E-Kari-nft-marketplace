import React from "react"
import { useState, useEffect } from "react"
import styles from "../styles/timer.module.css"

const Timer = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const deadline = "December, 31, 2022"

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.timer} role="timer">
            <div
                className={styles.col}
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `1%`,
                    textIndent: `10px`,
                    lineHeight: `0`,
                }}
            >
                <p id={styles.day}>{days < 10 ? -days : days}</p>
                <span className={styles.text} style={{ color: `grey` }}>
                    Days
                </span>
            </div>
            <div
                className={styles.col}
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `1%`,
                    textIndent: `10px`,
                    lineHeight: `0`,
                }}
            >
                <p id={styles.hour}>{hours < 10 ? -hours : hours}</p>
                <span className={styles.text} style={{ color: `grey` }}>
                    Hours
                </span>
            </div>
            <div
                className={styles.col}
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `1%`,
                    textIndent: `10px`,
                    lineHeight: `0`,
                }}
            >
                <p id={styles.minute}>{minutes < 10 ? -minutes : minutes}</p>
                <span className={styles.text} style={{ color: `grey` }}>
                    Minutes
                </span>
            </div>
            <div
                className={styles.col}
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `1%`,
                    textIndent: `10px`,
                    lineHeight: `0`,
                }}
            >
                <p id={styles.second}>{seconds < 10 ? -seconds : seconds}</p>
                <span className={styles.text} style={{ color: `grey` }}>
                    Seconds
                </span>
            </div>
        </div>
    )
}

export default Timer
