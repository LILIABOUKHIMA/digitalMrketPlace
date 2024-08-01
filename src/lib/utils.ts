import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function FormatPrice (price:number | string,

  options :{
    
    currency ?:"USD" | "EUR" | "GBP" | "BDT",

  }={}
){

  const {currency="USD"}=options
  const priceNum=typeof price === "string" ? parseFloat(price) : price
  const numberFormat = new Intl.NumberFormat('en-US',{
    style:"currency",
    currency}
  ).format(priceNum);
  return numberFormat;
}