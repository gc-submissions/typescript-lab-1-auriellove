import { privateDecrypt } from "crypto";
import { argv } from "process";

export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: "toothpaste", price: 3.00},
    {name: "toothbrush", price: 1.50},
    {name: "mouthwash", price: 5.99},
]

export function calcAverageProductPrice(products: Product[]): number {
    //returns a number, the avg price of all

    let sum = 0; //think of this as a counter
   if (products.length === 0) {
    return 0;
   }
    

    
   
    
//of is going to b a value
    for (let i of products) {
        
        sum += i.price;
        
        
       
    }
    return sum / products.length
} 