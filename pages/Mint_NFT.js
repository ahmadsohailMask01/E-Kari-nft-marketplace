import { React, useState } from "react"
import Head from "next/head"
import DropZone from "../components/DropZone"
import styles from "../styles/Mint_NFT.module.css"
import { Button } from "web3uikit"
import nftlogo from "../assets/images/nft_logo.png"
import Image from "next/image"
import axios from "axios"
import Notification from "../components/Notification"

export default function Mint_NFT() {
    const [notificationVisible, setNotificationVisible] = useState("")
    const [image, setImage] = useState("")
    const convert_to_base64 = (e) => {
        console.log(e)
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImage(reader.result)
        }
        reader.onerror = (error) => {
            console.log("Error: ", error)
        }
    }
    const [input_collectionname, set_collectionname] = useState("")
    const [input_artname, setInput_artname] = useState("")
    const [input_createdby, setInput_createdby] = useState("")
    const [input_price, setInput_price] = useState("`")
    const [input_description, setInput_description] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`/api/mint_nft`, {
                picture: image,
                collection_name: input_collectionname,
                art_name: input_artname,
                created_by: input_createdby,
                price_in_eth: input_price,
                description: input_description,
            })
            .then((res) => {
                console.log(res)
                setImage(null)
                set_collectionname("")
                setInput_artname("")
                setInput_createdby("")
                setInput_price("")
                setInput_description("")
                setNotificationVisible(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        //     <div className={styles.container}>
        //       <Head>
        //         <title>Drag And Drop File Upload</title>
        //         <meta name="description" content="Nextjs drag and drop file upload" />
        //         <link rel="icon" href="/favicon.ico" />
        //       </Head>

        //       <main className={styles.main}>
        //         <h1 className={styles.title}>Drag And Drop File Upload</h1>
        //         <DropZone />
        //       </main>

        //       <footer className={styles.footer}>
        //         <div>{new Date().getFullYear()}</div>
        //       </footer>
        //     </div>
        <div className={styles.container}>
            <div className={styles.flex_row}>
                <div className={styles.flexing}>
                    <label
                        style={{
                            fontSize: `50px`,
                            color: `white`,
                            fontWeight: `700`,
                            marginBottom: `10%`,
                            marginLeft: `-10%`,
                        }}
                    >
                        Mint Your NFT!
                    </label>
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        style={{
                            marginTop: `-10%`,
                            display: `flex`,
                            flexDirection: `column`,
                            width: `100%`,
                            marginLeft: `-10%`,
                            alignItems: `center`,
                            marginBottom: `-3%`,
                        }}
                    >
                        <div
                            style={{
                                display: `flex`,
                                flexDirection: `row`,
                                alignItems: `center`,
                                borderRadius: `10px`,
                                backgroundColor: `#303134`,
                                width: `100%`,
                                minHeight: `25%`,
                            }}
                        >
                            <input
                                style={{
                                    marginLeft: `1%`,
                                    color: `white`,
                                    borderRadius: `5px`,
                                }}
                                required={true}
                                type="file"
                                accept="image/*"
                                onChange={convert_to_base64}
                            />
                            {image == "" || image == null ? (
                                ""
                            ) : (
                                <img
                                    src={image}
                                    width={100}
                                    height={100}
                                    style={{ borderRadius: `10px`, margin: `1%` }}
                                />
                            )}
                        </div>
                        <input
                            className={styles.input}
                            type="text"
                            value={input_collectionname}
                            onChange={(e) => set_collectionname(e.target.value)}
                            autoFocus={true}
                            autoSave={true}
                            placeholder="Collection Name"
                            title="Please enter the name of your collection"
                            required={true}
                        ></input>
                        <input
                            className={styles.input}
                            type="text"
                            value={input_artname}
                            onChange={(e) => setInput_artname(e.target.value)}
                            autoFocus={true}
                            autoSave={true}
                            placeholder="Art Name"
                            required={true}
                            title="Please enter the name of your Art"
                        ></input>
                        <input
                            className={styles.input}
                            type="text"
                            value={input_createdby}
                            onChange={(e) => setInput_createdby(e.target.value)}
                            autoFocus={true}
                            autoSave={true}
                            required={true}
                            placeholder="Creater or Owned by"
                            title="Please enter the name of Creater (May be you)"
                        ></input>
                        <input
                            className={styles.input}
                            type="text"
                            value={input_price}
                            onChange={(e) => setInput_price(e.target.value)}
                            autoFocus={true}
                            autoSave={true}
                            required={true}
                            placeholder="Price in ETH"
                            title="Enter price in ETH or any other Crypto"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            value={input_description}
                            onChange={(e) => setInput_description(e.target.value)}
                            autoFocus={true}
                            required={true}
                            maxLength={30}
                            autoSave={true}
                            placeholder="Description of Art"
                            title="Enter description"
                        ></input>
                        <input
                            className={styles.btn}
                            autoFocus={true}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            type="submit"
                            value="Mint it!"
                            title="Let's mint it"
                        ></input>
                        {notificationVisible && (
                            <Notification message="NFT Minted Successfully!" />
                        )}
                    </form>
                </div>
                <div className={styles.vertical} />
                <Image
                    alt="nft_logo"
                    src={nftlogo}
                    width={400}
                    height={250}
                    style={{ marginLeft: `5%` }}
                />
            </div>
        </div>
    )
}
