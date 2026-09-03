import { NextResponse } from "next/server";
import { getETFMarketData, marketRegime } from "@/lib/engine";
export const dynamic="force-dynamic";export const revalidate=0;
export async function GET(){try{const data=await getETFMarketData();const ranked=[...data].sort((a,b)=>(b.score??-1)-(a.score??-1)||(b.return90dPct??-Infinity)-(a.return90dPct??-Infinity)||a.symbol.localeCompare(b.symbol));const best=ranked.find(x=>x.score!==undefined&&x.signal!=="DATA ERROR");return NextResponse.json({status:"success",asOf:new Date().toISOString(),marketRegime:marketRegime(data),bestOpportunity:best?.symbol??null,data:ranked})}catch(error){return NextResponse.json({status:"error",error:error instanceof Error?error.message:"Market data engine failed",data:[]},{status:200})}}
