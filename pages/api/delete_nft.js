import { ObjectId } from "mongodb"
import { connectMongoDB } from "../../lib/mongodb"
import minted_nft from "../../model/mint_schema"

export default async function handler(req, res) {
    //   res.status(200).json({ name: "John Doe" });

    if (req.method !== "DELETE") {
        res.status(405).send({ msg: "Only DELETE request are allowed!" })
        return
    }

    try {
        console.log(req.body)
        await connectMongoDB()
        await minted_nft.findByIdAndDelete({ ObjectId })
        res.json("NFT Deleted Successfully")
    } catch (err) {
        console.log(err)
        res.status(400).send({ err, msg: "Something went wrong!" })
    }
}
