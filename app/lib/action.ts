'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const  revalidateBooking = (url:string) => {
    revalidateTag('bookings')
    revalidatePath("/dashbaord")
    revalidatePath("/rooms")
    redirect(url)
} 