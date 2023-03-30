import { z } from 'zod'

export const PageAggregationShape = z.object({
    title: z.string(),
    mdx: z.string(),
    slug: z.string(),
})

export type PageAggregation = z.infer<typeof PageAggregationShape>

export const PageShape = z.object({
    title: z.string(),
    mdx: z.string(),
    slug: z.string(),
    serializedMdx: z.any(),
})

export type Page = z.infer<typeof PageShape>
