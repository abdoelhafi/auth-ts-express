import { User } from "../models/User";

const dbConfig = {
    type: "mongodb",
    url: process.env.MONGO_URI,
    useNewUrlParser: true,
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}
export default dbConfig;
