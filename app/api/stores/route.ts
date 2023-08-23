import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"

export async function POST(
    req: Request ,
){
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name } = body

        if(!userId) 
        {return new NextResponse("Unauthorized", { status: 403 })}
        if (!name) 
        {return new NextResponse("Missing name", { status: 400 })}

        const store = await prismadb.store.create({
            data: {
              name,
              userId,
            }
          });

          return NextResponse.json(store)
    }
    catch (err) {
        console.log('[STORES_POST]', err)
        return new NextResponse ("Internal Error",{ status: 500 })
    }
}