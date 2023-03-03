import * as dotenv from "dotenv";
dotenv.config();

interface Config {
  openAIApiKey: string;
}

const config: Config = {
  openAIApiKey: process.env["OPENAI_API_KEY"] || "",
};

export default config;
