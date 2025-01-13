import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

const page = () => {
    const router = useRouter()
    
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

}

export default page