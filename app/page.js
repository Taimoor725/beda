"use client"
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    return (
        router.push('/home')
    )
}
export default page;
