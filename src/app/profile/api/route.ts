import { cookies, headers } from "next/headers"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));


    // const themeCookie = request.cookies.get("theme")
    // console.log(themeCookie);

    const cookieStore = await cookies();
    console.log(cookieStore.get("theme"));
    
    cookieStore.set("Hello", "123");
    console.log(cookieStore.get("Hello"));
    
    return new Response("<h1>Api Response</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}