import {NextResponse, nextResponse} from "next/server";

export function middleware (req){
    // console.log("middleware", req)
    if(true){
        return NextResponse.rewrite(new URL("/login", req.nextUrl))
    }
    return NextResponse.rewrite(new URL("/dashboard", req.nextUrl))
}

export const config = {
        matcher:["/about", "/dashboard", "/login", "/"]
}

