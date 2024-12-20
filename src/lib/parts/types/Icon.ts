import ri from "@iconify-json/ri/icons.json";
export interface Option_Typed {
    name: keyof typeof ri["icons"];
};
export interface Option_Infer {
    name: string
};
export interface OptionGeneral {
    class?: string;
    color?: string;
}
export type Option = (Option_Typed|Option_Infer) & OptionGeneral
export const width: number = ri.width
export const height: number = ri.height
export function getIcon(name: string): string {
    return ri.icons[name as keyof typeof ri["icons"]].body
}