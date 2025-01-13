import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from 'next/navigation'

const page = async () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()
  
    if (!user || !(await user).id ) redirect('/auth-callback?origin=dashboard')
}

export default page