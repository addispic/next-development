import {NextRequest,NextResponse} from 'next/server'
import {sign} from 'jsonwebtoken'
import {serialize} from 'cookie'

export async function POST(req: NextRequest, res: NextResponse) {
    const {username,password} = await req.json()
    console.log({username,password})
    if(username !== "Haddis" || password !== "haddis"){
        return NextResponse.json({error: 'incorrect credentials'},{status: 401})
    }
    // secret
    const secret = process.env.JWT_SECRET || ""
    // token
    const token = sign({username},secret,{expiresIn: 60 * 60 * 24 })
    // cookie
    const serialized = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });

    return NextResponse.json({message: 'authorized'},{status: 201, headers: {"Set-Cookie": serialized}})
}