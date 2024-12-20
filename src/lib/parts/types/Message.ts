export interface Option { name: string, description: string, spotifySong?: string }
const tuple = <T extends readonly string[]>(...args: T): T => args;
export const theme = tuple("normal","christmas")
export type Theme = (typeof theme)[number];
export const defaultTheme:Theme = "christmas"