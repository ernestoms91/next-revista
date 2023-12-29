import revistaApi from "@/app/lib/api/intranetApi";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions= {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "string",
          placeholder: "*@icrt.cu",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials?.password)

        const formData = new URLSearchParams();
        formData.append('username', credentials?.username as string);
        formData.append('password', credentials?.password as string);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            body: formData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        );
      
        let user = await res.json();
        let {access_token, role, ...rest} = user
  
        if (!res.ok) {
          // Throw an error if the response status is not in the range 200-299
          throw new Error(`Failed to authenticate. Status: ${res.status}`);
        }
        if (user.detail) throw new Error(user.detail);

        //Devuelve los datos del usario desde el backend
        return {...rest, jwt: access_token, rol: role};
        // return user.content;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.rol = user.rol;
        token.username = user.username;
        token.fullname = user.fullname;
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.jwt = token.jwt;
        session.user.rol = token.rol;
        session.user.username = token.username;
        session.user.fullname = token.fullname;
        session.user.id = token.id;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
