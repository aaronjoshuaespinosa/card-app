import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const bcrypt = require('bcrypt');

    const { username, password } = req.body

    try {
        const client = await clientPromise;
        const db = client.db("cardApp");

        const user = await db.collection("cardUsers").findOne({ username })
        console.log(user)

        if (user) {
            const resultHash = await bcrypt.compare(password, user.password)
            console.log(resultHash)

            if (resultHash === true) {
                res.status(200).json({ loggedIn: true })
            }
            else {
                res.status(401).json({ loggedIn: false, error: 'password', message: "Wrong password." })
            }
        }
        else {
            res.status(401).json({ loggedIn: false, error: 'username', message: "Username not found." })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ Error: error })
    }


}