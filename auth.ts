import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import characters from "@/characters.json";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        name: {},
      },
      authorize: async (credentials) => {
        if (!credentials.name || typeof credentials.name !== "string") {
          throw new Error("Invalid credentials");
        }

        const character =
          characters[credentials.name as keyof typeof characters];
        if (!character) {
          throw new Error("Invalid credentials");
        }

        return {
          id: credentials.name as string,
          name: credentials.name as string,
        };
      },
    }),
  ],
});
