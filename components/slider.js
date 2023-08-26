import React from "react"
import Slider from "react-slick"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import styles from "../styles/nft_detail.module.css"
import Image from "next/image"
import { FcApproval } from "react-icons/fc"
import { SiAzuredataexplorer } from "react-icons/si"
import nft_card from "../data/card_details"
import card_details from "../data/card_details"
import Link from "next/link"
import img from "/assets/images/king1.jpg"

const NFTSlider = () => {
    const settings = { slidesToShow: 5, slidesToScroll: 3 }
    return (
        <>
            <button
                style={{
                    padding: `1.5%`,
                    width: `97%`,
                    border: `1px solid lightgray`,
                    margin: `1%`,
                    borderRadius: `20px`,
                    backgroundColor: `lightgray`,
                    display: `flex`,
                    flexDirection: `row`,
                    boxShadow: `0px 0px 2px gray`,
                    alignItems: `baseline`,
                }}
            >
                <AiOutlineAppstoreAdd size={25} />
                <p style={{ marginLeft: `1%`, fontSize: `18px` }}>More From Collection</p>
            </button>
            <div style={{ display: `flex`, flexDirection: `row`, margin: `2%`, marginLeft: `3%` }}>
                {nft_card.slice(0, 5).map((item) => (
                    <div className={styles.card} key={item.id}>
                        <Image
                            className={styles.picture_card}
                            src={item.pic}
                            width={270}
                            height={250}
                        />
                        <SiAzuredataexplorer
                            style={{
                                position: `absolute`,
                                top: `2.5%`,
                                left: `90%`,
                                cursor: `pointer`,
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
                                <p>{item.club_name}</p>
                                <FcApproval />
                            </div>
                            <div className={styles.card_row}>
                                <p style={{ fontWeight: `500` }}>
                                    {item.club_name} {item.club_number}
                                </p>
                            </div>
                            <div
                                className={styles.card_row}
                                style={{ justifyContent: `space-between`, marginRight: `3%` }}
                            >
                                <p>Price</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NFTSlider
