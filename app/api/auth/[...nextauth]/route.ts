import { api } from "@/utils/api"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { toast } from "react-toastify"
const handler = NextAuth({
    pages: {
        signIn: "/login",
        signOut: "/",
        newUser: "/register" 
    },
    session: {
        strategy:"jwt"
    },
    callbacks:{
        async jwt({token,user}) {
            return {...token,...user}
        },
        async session({token,session}) {
            return {...session,...token}
        },
    },
    providers: [Credentials({
        async authorize(credentials, req) {
            try {
                const { data } = await api.post('/signin', credentials)
                toast.success('success login')
                return data

            } catch (error: any) {
                console.log(error)
                toast.error(error?.response?.data?.message || 'Something went wrong')
                return null
            }
        },
        credentials: {
            email: {
              label: "User Name",
              placeholder: "Please enter your user Name",
              type: "text",
            },
            password: {
              label: "Password",
              placeholder: "Please enter your password",
              type: "password",
            },
        }
    }
)]
})

export { handler as GET, handler as POST }