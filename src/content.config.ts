import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// The front page's setup, copied from the README by the importer: the
			// shell commands, and the one sentence to say to Claude Code after.
			extend: z.object({
				install: z.array(z.string()).optional(),
				ask: z.string().nullish(),
				// Where CI publishes the example's takes, for the hero's film.
				clips: z.string().optional(),
				// One line under the hero's actions, in HTML: what is true of the
				// service today (a beta, an offer) and where to sign in, so a reader
				// who came for that need not scroll to the sign-in button.
				note: z.string().optional(),
			}),
		}),
	}),
};
