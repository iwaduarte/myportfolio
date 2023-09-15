import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default


// <https://astro.build/config>
export default defineConfig({
  integrations: [mdx(
    {
      remarkPlugins:  [[remarkEmbedder, {transformers: [oembedTransformer]}]],
    }
  ), react()]
});