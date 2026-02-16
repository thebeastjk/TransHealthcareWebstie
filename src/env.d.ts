

declare namespace App {
    interface Locals {
        highlight? :{
            id: string,
            name: string,
            role: "admin" | "user",
        },
        tohighlight: string,
    }
}