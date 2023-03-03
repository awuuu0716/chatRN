import { OPENAI_API_KEY } from "@env";

interface Config {
  openAIApiKey: string;
}

const config: Config = {
  openAIApiKey: OPENAI_API_KEY || "",
};

export default config;
