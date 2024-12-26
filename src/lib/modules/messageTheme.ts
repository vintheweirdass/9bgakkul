// import type * as CSS from 'csstype';
// type PartialOrFull<T> = T | Partial<T>
// export type Style = CSS.PropertiesFallback
// export interface ElementSection {
//     title?: PartialOrFull<Style>,
//     input?: PartialOrFull<Style>
// }
// export interface Element {
//     name?: PartialOrFull<ElementSection>,
//     description?: PartialOrFull<ElementSection>,
//     background: PartialOrFull<Style>
// }
// abstract class Theme {
//     public readonly name: string
//     public readonly element: PartialOrFull<Element>;
// }
// export class NormalTheme extends Theme {
//     name=""
// }
// const ok = new NormalTheme()
// ok.name
// export const style = {
//     styleParser: (s: Style): string => {
//         const res = ""
//         s.borderInline
//     }
// }
// const tuple = <T extends readonly Theme[]>(...args: T): T => args;
// export const themeList = tuple("normal", "christmas")
// export type ThemeList = (typeof themeList)[number];
// export const defaultTheme: Theme = "christmas"
