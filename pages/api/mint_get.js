import { connectMongoDB } from "../../lib/mongodb"
import minted_nft from "../../model/mint_schema"

export default async function handler(req, res) {
    //   res.status(200).json({ name: "John Doe" });

    if (req.method !== "GET") {
        res.status(405).send({ msg: "Only GET request are allowed!" })
        return
    }

    try {
        await connectMongoDB()
        const tasks = await minted_nft.find()
        res.status(200).send(tasks)
    } catch (err) {
        console.log(err)
        res.status(400).send({ err, msg: "Something went wrong!" })
    }
}
