import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import connecToDB from "./lib/utils.js"


const login = async (credentials) => {
  try {
    connecToDB()
    const user = await User.findOne({ matricule: credentials.matricule });
    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.nom = user.nom;
        token.prenom = user.prenom;
        token.matricule = user.matricule;
        token.isAdmin = user.isAdmin;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.nom = token.nom;
        session.user.prenom = token.prenom;
        session.user.matricule = token.matricule;
        session.user.isAdmin = token.isAdmin;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
