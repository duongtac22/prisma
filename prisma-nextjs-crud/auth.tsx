import NextAuth from "next-auth";

export const authOptions = {
  providers: [],
  pages: {
    signIn: "/login",
  },
};

export const { handlers } = NextAuth(authOptions);
export { handlers as GET, handlers as POST };
