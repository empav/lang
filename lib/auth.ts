import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as authSchema from "@/drizzle/auth-schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({
  client: sql,
  schema: {
    ...authSchema,
  },
});

export const auth = betterAuth({
  experimental: { joins: true },
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    github: {
      // biome-ignore lint/style/noNonNullAssertion: <always defined>
      clientId: process.env.GITHUB_CLIENT_ID!,
      // biome-ignore lint/style/noNonNullAssertion: <always defined>
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser(profile) {
        return {
          ...profile,
          image: profile.picture,
        };
      },
    },
  },
});
