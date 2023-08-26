import React from "react"
import Image from "next/image"
import styles from "../../styles/nft_detail.module.css"
import { FaEye, FaShareAlt } from "react-icons/fa"
import { FcLike, FcApproval } from "react-icons/fc"
import { HiFire } from "react-icons/hi"
import picture from "../../assets/images/king3.jpg"
import Timer2 from "../../components/Timer2"
import Dropdownn from "../../components/dropdown1"
import History from "../../components/dropdown2"
import NFTSlider from "../../components/slider"
import { useRouter } from "next/router"
import cards from "../../data/nft_static"

const Nft_detail = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            {cards.map((item) => {
                if (item.id == id) {
                    return (
                        <>
                            <div className={styles.cont1} key={item.id}>
                                <div className={styles.inside1}>
                                    <p style={{ fontWeight: `500`, color: `grey` }}>
                                        {item.collection_name}
                                        <FcApproval
                                            style={{ float: `left`, display: `inline-block` }}
                                        />
                                    </p>
                                    <h1
                                        style={{
                                            fontSize: `30px`,
                                            marginTop: `3%`,
                                            fontWeight: `700`,
                                        }}
                                    >
                                        {item.collection_name} {item.collection_id}
                                    </h1>
                                    <div className={styles.create}>
                                        <div className={styles.c1}>
                                            <div className={styles.c11} />
                                            <div className={styles.c111}>
                                                <p style={{ fontWeight: `600` }}>{item.creater}</p>
                                                <p
                                                    style={{
                                                        fontWeight: `700`,
                                                        textDecoration: `underline`,
                                                        fontSize: `13px`,
                                                    }}
                                                >
                                                    {item.creater_add}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.c2}>
                                            <div className={styles.c22}></div>
                                            <div className={styles.c222}>
                                                <p style={{ fontWeight: `600` }}>{item.owner}</p>
                                                <p
                                                    style={{
                                                        fontWeight: `700`,
                                                        textDecoration: `underline`,
                                                        fontSize: `13px`,
                                                    }}
                                                >
                                                    {item.owner_add}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.icons}>
                                        <FaEye
                                            className={styles.eye1}
                                            onChange={{ color: `blue` }}
                                            style={{ cursor: `pointer` }}
                                        />
                                        <FcLike
                                            className={styles.like1}
                                            style={{ cursor: `pointer` }}
                                        />
                                        <FaShareAlt
                                            className={styles.share1}
                                            style={{ cursor: `pointer` }}
                                        />
                                    </div>
                                    <div className={styles.box}>
                                        <div className={styles.dis}>
                                            <div className={styles.bx1}>
                                                <p>Price</p>
                                                <p style={{ color: `black` }}>{item.price}</p>
                                                <p>{item.amount}</p>
                                            </div>
                                            <div className={styles.bx2}>
                                                <p style={{ color: `#ffc501` }}>Highest Offer</p>
                                                <p style={{ color: `black` }}>
                                                    {item.highest_offer} wETH
                                                </p>
                                                <p>
                                                    by{" "}
                                                    <font
                                                        style={{
                                                            color: `black`,
                                                            textDecoration: `underline`,
                                                        }}
                                                    >
                                                        {item.address}
                                                    </font>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.dis1}>
                                            <button className={styles.inside_btn} type="button">
                                                Buy Now for {item.price}
                                            </button>
                                            <button className={styles.inside_btn1} type="button">
                                                Add to Cart
                                            </button>
                                            <button className={styles.inside_btn2} type="button">
                                                Make Offer <HiFire style={{ color: `black` }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.inside2}>
                                    <Image
                                        className={styles.picture}
                                        style={{ borderRadius:`20px` }}
                                        alt="Image Icon"
                                        src={item.pic}
                                        width={450}
                                        height={500}
                                    ></Image>
                                    <label
                                        style={{
                                            color: `grey`,
                                            fontWeight: `500`,
                                            marginTop: `1%`,
                                            textAlign: `end`,
                                            marginRight: `1%`,
                                        }}
                                    >
                                        Sale Ends in
                                    </label>
                                    <Timer2 />
                                </div>
                            </div>
                            <div className={styles.div_row} style={{ marginBottom: `27%` }}>
                                <div className={styles.div_coloumn}>
                                    <Dropdownn
                                        Collection={item.collection_name}
                                        Owner={item.owner}
                                        Contract_Address={item.contract_add}
                                        Token_id={item.collection_id}
                                    />
                                </div>
                                <div className={styles.div_coloumn1}>
                                    <History />
                                </div>
                            </div>
                            <NFTSlider />
                        </>
                    )
                }
            })}
        </>
    )
}

export default Nft_detail
