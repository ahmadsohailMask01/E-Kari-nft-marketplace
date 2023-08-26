// Importing core libraries used in index.js
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMoralisQuery, useMoralis } from "react-moralis"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import RecentlyUpload from "../components/recently_upload"
import card from "../data/nft_static"
import Timer2 from "../components/Timer2"

// Importing modules from other pages within the Project
import nft00 from "../assets/images/nft00.webp"
import styles from "../styles/Home.module.css"
import NFTBox from "../components/NFTBox"
import nft1 from "../assets/images/mitanga.png"
import nft_logo from "../assets/images/nft_logo.png"
import forground from "../foreground1.gif"
import small from "../assets/images/smal1.png"
import lostpoet from "../assets/images/lostpoet.jpg"
import nft2 from "../assets/images/nft05.jpeg"
import rare from "../assets/images/rare.jpg"
import king3 from "../assets/images/king3.jpg"
import king4 from "../assets/images/king4.jpg"
import nft3 from "../assets/images/nft03.jpeg"
import orachi from "../assets/images/orachi.png"
import cart1 from "../assets/images/cart1.jpg"
import mitanga2 from "../assets/images/mitanga2.png"
import nft01 from "../assets/images/nft01.webp"
import cs_2 from "../assets/images/Beige Simple Picture Collage Christmas Card.gif"
import cs_3 from "../assets/images/cs-3.jpg"
import cs_4 from "../assets/images/cs4.webp"
import cs_5 from "../assets/images/cs5.jpg"

export default function Home() {
    const handleCardClick = (cardId) => {}
    const { isWeb3Enabled } = useMoralis()
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // TableName
        // Function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )
    console.log(listedNfts)

    return (
        <div className="container">
            <center>
                <div className={styles.container_whole}>
                    <div className={styles.content}>
                        <div className={styles.container1}>
                            <Image
                                className={styles.nft_logo}
                                width={400}
                                height={340}
                                src={nft_logo}
                            ></Image>
                            <p className={styles.para}>
                                Uncover the most unique and Exclusive nft Collection
                            </p>
                            <Popup
                                trigger={
                                    <button className={styles.exp}>
                                        <Link href="#">Explore NFT</Link>
                                    </button>
                                }
                                position="right center"
                                style={{ alignItems: `justify` }}
                            >
                                You are encouraged to explore the amazing NFTs
                            </Popup>
                        </div>
                        <div className={styles.container2}>
                            <Carousel
                                showArrows={false}
                                showStatus={false}
                                autoPlay={true}
                                infiniteLoop={true}
                            >
                                <Image
                                    className={styles.img2}
                                    style={{ borderRadius: `20px` }}
                                    src={forground}
                                    width={700}
                                    height={400}
                                ></Image>
                                <Image
                                    className={styles.img2}
                                    style={{ borderRadius: `20px` }}
                                    src={cs_2}
                                    width={700}
                                    height={400}
                                ></Image>
                                <Image
                                    className={styles.img2}
                                    style={{ borderRadius: `20px` }}
                                    src={cs_3}
                                    width={700}
                                    height={400}
                                ></Image>
                                <Image
                                    className={styles.img2}
                                    style={{ borderRadius: `20px` }}
                                    src={cs_4}
                                    width={700}
                                    height={400}
                                ></Image>
                                <Image
                                    className={styles.img2}
                                    style={{ borderRadius: `20px` }}
                                    src={cs_5}
                                    width={700}
                                    height={400}
                                ></Image>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </center>
            <h1
                className="py-4 px-4 font-bold text-2xl"
                style={{ marginBottom: `2%`, marginLeft: `-80%` }}
            >
                Top Collections
            </h1>
            <div className={styles.card1}>
                <div className={styles.card_image_1}>
                    <Image className={styles.img1} width={300} height={200} src={lostpoet} />
                    <div className={styles.position}>
                        <Image className={styles.img2} width={50} height={60} src={small} />
                        <p className={styles.des} style={{ fontWeight: `700` }}>
                            Lost Poets
                        </p>
                    </div>
                </div>
                <div className={styles.card_image_1}>
                    <Image className={styles.img1} width={300} height={200} src={nft3} />
                    <div className={styles.position}>
                        <Image className={styles.img2} width={50} height={60} src={orachi} />
                        <p className={styles.des} style={{ fontWeight: `700` }}>
                            Lost Poets
                        </p>
                    </div>
                </div>
                <div className={styles.card_image_1}>
                    <Image className={styles.img1} width={300} height={200} src={nft2} />
                    <div className={styles.position}>
                        <Image className={styles.img2} width={50} height={60} src={king4} />
                        <p className={styles.des} style={{ fontWeight: `700` }}>
                            Lost Poets
                        </p>
                    </div>
                </div>
                <div className={styles.card_image_1}>
                    <Image className={styles.img1} width={300} height={200} src={rare} />
                    <div className={styles.position}>
                        <Image className={styles.img2} width={50} height={60} src={king3} />
                        <p className={styles.des} style={{ fontWeight: `700` }}>
                            Lost Poets
                        </p>
                    </div>
                </div>
            </div>
            <h1
                className="py-4 px-4 font-bold text-2xl"
                style={{ marginLeft: `-83.5%`, marginTop: `2%`, marginBottom: `-0.5%` }}
            >
                Trending
            </h1>
            {/* <div className={styles.cards_container}> */}
            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    maxWidth: `100%`,
                    margin: `2% 0% 2% 4%`,
                }}
            >
                {card.slice(0, 4).map((item) => (
                    <div className={styles.card1} onClick={() => handleCardClick(item.id)}>
                        <div className={styles.card1_1} style={{ alignItems: `center` }}>
                            <center>
                                <Link href={`/nft_detail/${item.id}`}>
                                    <Image
                                        className={styles.card1_1img}
                                        width={310}
                                        height={250}
                                        src={item.pic}
                                    ></Image>
                                </Link>
                            </center>
                            <div className={styles.cardheading}>
                                <h5 className={styles.inside}>
                                    {item.heading} {item.heading_number}
                                </h5>
                                <h6 className={styles.inside}>{item.price}</h6>
                                <p className={styles.inside}>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    maxWidth: `100%`,
                    margin: `2% 0% 2% 4%`,
                }}
            >
                {card.slice(4, 8).map((item) => (
                    <div className={styles.card1}>
                        <div className={styles.card1_1} style={{ alignItems: `center` }}>
                            <center>
                                <Link href={`/nft_detail/${item.id}`}>
                                    <Image
                                        className={styles.card1_1img}
                                        width={310}
                                        height={250}
                                        src={item.pic}
                                    ></Image>
                                </Link>
                            </center>
                            <div className={styles.cardheading}>
                                <h5 className={styles.inside}>
                                    {item.heading} {item.heading_number}
                                </h5>
                                <h6 className={styles.inside}>{item.price}</h6>
                                <p className={styles.inside}>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* </div> */}
            <h1 className="py-4 px-4 font-bold text-2xl" style={{ marginLeft: `-80%` }}>
                Recently Listed
            </h1>
            <RecentlyUpload />
            <div className={styles.back}>
                {isWeb3Enabled ? (
                    fetchingListedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.map((nft) => {
                            console.log(nft.attributes)
                            const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                                nft.attributes
                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
