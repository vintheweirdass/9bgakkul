import ri from "@iconify-json/ri/icons.json";
export interface Option {
    name: keyof typeof ri["icons"];
    class?: string;
    color?: string;
};
export const width: number = ri.width
export const height: number = ri.height
export function getIcon(name: keyof typeof ri["icons"]): string {
    return ri.icons[name].body
}