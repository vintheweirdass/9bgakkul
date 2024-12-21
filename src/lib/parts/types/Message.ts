export interface Option_All { name: string, description: string, spotifySong?:string }
export type Option = Option_All|undefined
const tuple = <T extends readonly string[]>(...args: T): T => args;
export const theme = tuple("normal","christmas")
export type Theme = (typeof theme)[number];
export const defaultTheme:Theme = "christmas"