// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// const handler = NextAuth({
//     pages: {
//         signIn: "/login",
//         signOut: "/",
//         newUser: "/register" 
//     },
//     session: {
//         strategy:"jwt"
//     },
//     callbacks:{
//         async jwt({token,user}) {
//             return {...token,...user}
//         },
//     },
//     providers: [Credentials({
//         async authorize(credentials, req) {
//             return null
//         }
//     })]
// })

// export { handler as GET, handler as POST }