import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "dtj-studio",
  title: "DTJ Studio",

  projectId: "e3k5b6l7",
  dataset: "production",

  plugins: [
    structureTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
