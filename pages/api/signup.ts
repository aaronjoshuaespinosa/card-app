import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { username, email, password } = req.body

    console.log(username)
    console.log(email)
    console.log(password)

    const client = await clientPromise;
    const db = client.db("cardApp");

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