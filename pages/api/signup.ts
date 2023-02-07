import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { username, email, password } = req.body

    try {
        const client = await clientPromise;
        const db = client.db("cardApp");

        const findEmail = await db.collection("cardUsers").findOne({ email })
        const findUsername = await db.collection("cardUsers").findOne({ username })

        if (findEmail) {
            res.status(409).json({ success: false, message: "Email already registered.", error: 'email' })
        }

        else if (findUsername) {
            res.status(409).json({ success: false, message: "Username already taken.", error: 'username' })
        }

        else {
            const add = db.collection("cardUsers").insertOne(
                {
                    username,
                    email,
                    password
                }
            )

            console.log(add)
            res.status(200).json({ success: true })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ Error: error })
    }
}