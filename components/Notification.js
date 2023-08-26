import { useState, useEffect } from "react"

const Notification = ({ message }) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000) // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timer)
    }, [])

    return visible ? (
        <div
            className="notification"
            style={{
                padding: `2%`,
                border: `1px solid green`,
                backgroundColor: `lightgreen`,
                borderRadius: `20px`,
                position:`absolute`,
                bottom:`5%`,
                left:`27%`,
                width:`20%`,
            }}
        >
            <p style={{fontWeight:`600`}}>{message}</p>
        </div>
    ) : null
}

export default Notification
