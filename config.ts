import { z } from "zod";

const EnvironmentSchema = z.object({
  DATABASE_URL: z.string().default("file:./local.db"), // TODO: Figure this out
  CONTENTFUL_ACCESS_TOKEN: z.string(),
});

const Environment = EnvironmentSchema.parse(process.env);

export type Environment = z.infer<typeof EnvironmentSchema>;

const config = {
  ...Environment,
  CONTENTFUL_SPACE_ID: "yiyartsr9ayj",
};

export default config;
