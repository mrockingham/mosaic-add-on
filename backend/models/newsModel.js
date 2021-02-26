import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const newsSchema = mongoose.Schema(
    {
        content: {
            type:String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, { timestamps: true })
  




const News = mongoose.model('News', newsSchema)

export default News