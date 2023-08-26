import footer from "../assets/images/footer.png"
import styles from "../styles/Home.module.css"
import nft_logo from "../assets/images/nft_logo.png"
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
    <div className={styles.footer}>
                <hr style={{backgroundColor:`white`, border:`3px solid white`, borderRadius:`5px`, width:`60%`}}></hr>
                    <div className={styles.foot_layout}>
                        <div className={styles.foot1}>
                            <div className={styles.foot1_inside}>
                                <Image className={styles.foot_image} src={nft_logo} width={70} height={40}></Image>
                                <h1 style={{color:`white`,  fontFamily:`Times New Roman`, fontWeight:`700`, marginTop:`3%`, marginLeft:`-2%`, fontSize:`22px`}}>NFT Meta Market</h1>
                            </div>
                            <p style={{color:`white`, fontSize:`15px`, textAlign:`justify`}}>Marketplace for crypto collectiles and non-fungible tokens(NFTs). Buy, sell and discover exclusive digital items.</p>
                        </div>
                        <div className={styles.foot2}>
                            <Link href="">Marketplace</Link>
                            <Link href="">All NFT's</Link>
                            <Link href="">Collectables</Link>
                            <Link href="">Virtual World</Link>
                        </div>
                        <div className={styles.foot3}>
                            <Link href="">Company</Link>
                            <Link href="">About</Link>
                        </div>
                        <div className={styles.foot4}>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
            </div>
    )
}