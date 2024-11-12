import {NextResponse} from 'next/server'
import {cookies} from 'next/headers'
import {verify} from 'jsonwebtoken'

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("OurSiteJWT")
    if(!token){
        return NextResponse.json({error: 'unauthorized'},{status: 401})
    }
    try{
        const secret = process.env.JWT_SECRET || ""
        verify(token.value,secret)

        return NextResponse.json({message: 'authorized'},{status: 200})
    }catch(err){
        return NextResponse.json({error: 'unauthorized'},{status: 401})
    }
}