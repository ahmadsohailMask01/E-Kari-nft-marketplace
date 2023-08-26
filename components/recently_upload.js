import { React, useState, useEffect } from "react"
import axios from "axios"
import styles from "../styles/nft_detail.module.css"
import picture from "../assets/images/exp.jpg"
import { SiAzuredataexplorer } from "react-icons/si"
import { FcApproval } from "react-icons/fc"
import Image from "next/image"
import Notification from "../components/Notification"

const RecentlyUpload = () => {
    const [notification, setNotification] = useState("")

    const handleDelete = async (id) => {
        setNotification(false)
        axios
            .delete(`/api/delete_nft`, {
                id,
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const [nftlist, setnft] = useState([])

    useEffect(() => {
        axios.get(`/api/mint_get`).then((res) => {
            setnft(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <div
                className={styles.parent_divrow}
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    overflowX: `scroll`,
                    margin: `2%`,
                    marginLeft: `3%`,
                    marginTop: `0%`,
                    overflow: `auto`,
                    padding: `2%`,
                }}
            >
                {nftlist.map((t) => (
                    <div className={styles.card} key={t._id}>
                        <Image
                            key={t._id}
                            className={styles.picture_card}
                            src={t.picture}
                            alt="card picture"
                            width={290}
                            height={250}
                        />
                        <SiAzuredataexplorer
                            style={{
                                position: `absolute`,
                                top: `3%`,
                                left: `91%`,
                                cursor: `pointer`,
                                color: `black`,
                            }}
                        />
                        <hr
                            style={{
                                width: `100%`,
                                border: `0.1px solid black`,
                                marginTop: `-2%`,
                            }}
                        />
                        <div className={styles.card_coloumn}>
                            <div className={styles.card_row}>
                                <div
                                    style={{
                                        display: `flex`,
                                        flexDirection: `row`,
                                        marginTop: `1.5%`,
                                    }}
                                >
                                    <p key={t._id}>{t.collection_name}</p>
                                    <FcApproval style={{ alignSelf: `baseline` }} />
                                </div>
                                <button
                                    key={t._id}
                                    onClick={() => handleDelete(t._id)}
                                    style={{
                                        borderRadius: `5px`,
                                        backgroundColor: `red`,
                                        color: `white`,
                                        padding: `1%`,
                                        marginTop: `1%`,
                                        width: `30%`,
                                        marginRight: `1%`,
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                            <div
                                className={styles.card_row}
                                style={{ justifyContent: `space-between`, marginRight: `2%` }}
                            >
                                <p style={{ fontWeight: `500` }} key={t._id}>
                                    {t.art_name}
                                </p>
                                <p key={t._id}>
                                    by <b>{t.created_by}</b>
                                </p>
                            </div>
                            <div
                                className={styles.card_row}
                                style={{ justifyContent: `space-between`, marginRight: `3%` }}
                            >
                                <p>Price</p>
                                <p key={t._id} style={{ fontWeight: `500` }}>
                                    {t.price_in_eth} ETH
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {notification && <Notification message="NFT Deleted Successfully!" />}
        </>
    )
}

export default RecentlyUpload
