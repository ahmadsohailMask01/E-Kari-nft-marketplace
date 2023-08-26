import { ConnectButton } from "web3uikit"
import Link from "next/link"
import styles from "../styles/header.module.css"
import loding from "../loding.gif"
import Image from "next/image"

export default function Header() {
    return (
        <nav
            class="p-0 bg-gradient-to-r from-slate-900 to-dark_blue flex flex-row justify-between items-center"
            style={{
                position: `-webkit-sticky`,
                position: `sticky`,
                top: `0`,
                zIndex: `100`,
                width: `100%`,
                background: `linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.95))`,
            }}
        >
            <div className={styles.row}>
                <Image className={styles.abc} src={loding} width={40} height={40} />
                <h1
                    className={styles.txt}
                    class=" col-sm-6 py-4 px-4 col-sm-4 font-bold text-white hover:text-dark_blue"
                >
                    NFT Meta Market
                </h1>
            </div>
            <div className="flex flex-row items-center" style={{}}>
                <Link href="/">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Sell NFT</a>
                </Link>
                <Link href="/Mint_NFT">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Mint NFT</a>
                </Link>
                <Link href="/blog">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Blogs</a>
                </Link>
                <Link href="/login">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Login</a>
                </Link>
                <Link href="/signup">
                    <a className="mr-4 p-5 text-white hover:text-yellow-500">Register</a>
                </Link>
                <div className={styles.connected}>
                    <ConnectButton moralisAuth={false} style={{ backgroundColor: `black` }} />
                </div>
            </div>
        </nav>
    )
}
