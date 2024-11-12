import {NextRequest, NextResponse} from 'next/server'
import {sign} from 'jsonwebtoken'
import {serialize} from 'cookie'

export async function POST(req: NextRequest,res: NextResponse){
    const {username,password} = await req.json()

    if(username !== "Haddis"){
        console.log({username,password})
        return NextResponse.json({error: 'incorrect credentials'},{status: 400})
    }
    
    if(password !== "seble"){
        return NextResponse.json({error: 'incorrect credentials'},{status: 400})
    }

    // token
    const secret = process.env.JWT_SECRET || ""
    const token = sign({username},secret,{
        expiresIn: 60 * 60 * 24 * 30
    })

    // serialized
    const serialized = serialize("OurSiteJWT",token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30
    })

    // response
    const response = {
        message: 'authorized',
    }

    return NextResponse.json(response,{status: 200,headers: {
        "Set-Cookie": serialized
    }})

}