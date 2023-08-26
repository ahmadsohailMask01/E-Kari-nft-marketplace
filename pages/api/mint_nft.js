import { connectMongoDB } from "../../lib/mongodb"
import minted_nft from "../../model/mint_schema"

export default async function handler(req, res) {
    //   res.status(200).json({ name: "John Doe" });

    if (req.method !== "POST") {
        res.status(405).send({ msg: "Only POST request are allowed!" })
        return
    }

    const { picture, collection_name, art_name, created_by, price_in_eth, description } = req.body

    try {
        await connectMongoDB()
        minted_nft
            .create({ picture, collection_name, art_name, created_by, price_in_eth, description })
            .then((data) => {
                console.log(data)
                res.status(201).send(data)
            })
    } catch (err) {
        console.log(err)
        res.status(400).send({ err, msg: "Something went wrong!" })
    }
}
export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10mb", // Set desired value here
        },
    },
}
