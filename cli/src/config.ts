import type { AIConfig } from "./types";
import { join } from "path";

export const AI_CONFIG: AIConfig = {
  provider: "openai",
  model: "gpt-5.2",
  temperature: 0.7,
  maxTokens: 32000,
};

// No timeout - API calls can take as long as needed

// Maximum retries per pass
export const MAX_RETRIES = 1;

// Parallel processing configuration
export const PARALLEL_CONFIG = {
  maxConcurrent: 5, // Maximum files to process simultaneously
  enabled: true, // Toggle parallelism on/off
};

export const CONTENT_ROOT = join(
  import.meta.dir,
  "../../app/src/content/subjects"
);

export const TEMP_ROOT = join(import.meta.dir, "../temp");
