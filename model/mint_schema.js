import { Schema, model, models } from "mongoose"

const mint_schema = new Schema({
    picture: {
        type: String,
    },
    collection_name: {
        type: String,
        required: true,
    },
    art_name: {
        type: String,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
    },
    price_in_eth: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const minted_nft = models.minted_nft || model("minted_nft", mint_schema)

export default minted_nft
