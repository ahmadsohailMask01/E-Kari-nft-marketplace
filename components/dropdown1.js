import { Dropdown } from "@nextui-org/react"
import styles from "../styles/nft_detail.module.css"
import { TiArrowSortedDown } from "react-icons/ti"
import { TbListDetails } from "react-icons/tb"
import { MdDescription } from "react-icons/md"

export default function Dropdownn(props) {
    const showdiv = () => {
        var x = document.getElementById("show_div")
        if (x.style.display === "none") {
            x.style.display = "flex"
        } else {
            x.style.display = "none"
        }
    }
    const showdiv2 = () => {
        var x = document.getElementById("show_div2")
        if (x.style.display === "none") {
            x.style.display = "flex"
        } else {
            x.style.display = "none"
        }
    }
    return (
        <>
            <button onClick={showdiv} className={styles.div_button}>
                <TbListDetails />
                <p style={{ marginLeft: `-83%` }}>Details</p>
                <TiArrowSortedDown />
            </button>
            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `space-between`,
                    width: `70%`,
                    marginLeft: `2%`,
                    marginTop: `0%`,
                    minHeight: `200px`,
                }}
                id="show_div"
            >
                <div className={styles.col1}>
                    <p>Category</p>
                    <p>Creater</p>
                    <p>Owner</p>
                    <p>Network</p>
                    <p>Contract Address</p>
                    <p>Token Id</p>
                </div>
                <div className={styles.col2}>
                    <p>Collectibles</p>
                    <p>{props.Collection}</p>
                    <p>{props.Owner}</p>
                    <p>ETH</p>
                    <p>{props.Contract_Address}</p>
                    <p>{props.Token_id}</p>
                </div>
            </div>
            <button onClick={showdiv2} className={styles.div_button} style={{ marginTop: `2%` }}>
                <MdDescription />
                <p style={{ marginLeft: `-77%` }}>Description</p>
                <TiArrowSortedDown />
            </button>
            <div
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `space-between`,
                    width: `70%`,
                    marginLeft: `2%`,
                    marginTop: `0%`,
                    minHeight: `200px`,
                }}
                id="show_div2"
            >
                <div className={styles.col1}>
                    <p>Category</p>
                    <p>Creater</p>
                    <p>Owner</p>
                    <p>Network</p>
                    <p>Contract Address</p>
                    <p>Token Id</p>
                </div>
                <div className={styles.col2}>
                    <p>Collectibles</p>
                    <p>{props.Collection}</p>
                    <p>{props.Owner}</p>
                    <p>ETH</p>
                    <p>{props.Contract_Address}</p>
                    <p>{props.Token_id}</p>
                </div>
            </div>
        </>
    )
}
