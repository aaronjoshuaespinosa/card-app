import clientPromise from '@/lib/mongodb';
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from 'next';

const secret = String(process.env.NEXT_PUBLIC_SECRET)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const bcrypt = require('bcrypt');

    const { username, password } = req.body

    console.log(process.env.SECRET);

    try {
        const client = await clientPromise;
        const db = client.db("cardApp");

        const user = await db.collection("cardUsers").findOne({ username })
        console.log(user)

        if (user) {
            const resultHash = await bcrypt.compare(password, user.password)
            console.log(resultHash)

            if (resultHash === true) {
                const token = sign(
                    {
                        exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30,
                        username: username
                    },
                    secret
                )

                const serialized = serialize("userToken", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: "strict",
                    maxAge: 60 * 60 * 1,
                    path: '/'
                })

                res.setHeader('Set-Cookie', serialized)
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