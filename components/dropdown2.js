import { Dropdown } from "@nextui-org/react"
import styles from "../styles/nft_detail.module.css"
import { TiArrowSortedDown } from "react-icons/ti"
import { TbListDetails } from "react-icons/tb"
import { RiHistoryLine } from "react-icons/ri"
import nft_detail from "../data/nft_detail"

export default function History() {
    const showdiv3 = () => {
        var x = document.getElementById("show_div3")
        if (x.style.display === "none") {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    }
    return (
        <>
            <button onClick={showdiv3} className={styles.div_button}>
                <RiHistoryLine />
                <p style={{ marginLeft: `-83%` }}>History</p>
                <TiArrowSortedDown />
            </button>

            <div id="show_div3">
                <div className={styles.col1}>
                    {nft_detail.slice(0, 8).map((item) => (
                        <div className={styles.listrow} key={item.id}>
                            <div
                                style={{
                                    backgroundColor: `#33E7C8`,
                                    width: `7%`,
                                    borderRadius: `50px`,
                                    height: `40px`,
                                    marginTop: `2.5%`,
                                }}
                            ></div>
                            <div className={styles.listcol}>
                                <div style={{ display: `flex`, flexDirection: `row` }}>
                                    <p
                                        style={{
                                            textDecoration: `underline`,
                                            fontWeight: `600`,
                                            color: `black`,
                                        }}
                                    >
                                        {item.address}
                                    </p>
                                    <p>listed for</p>
                                </div>
                                <p>{item.duration}</p>
                                <p>{item.time}</p>
                            </div>
                            <div className={styles.listcol2}>
                                <p>{item.price}</p>
                                <p>{item.dollars}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
