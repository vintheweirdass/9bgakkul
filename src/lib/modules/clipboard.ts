/**
 * Ultra-polyfill for clipboard (i hate javascript)
 * Note: this file only modified if it needs to
 * @author {vintheweirdass}
 */
import { browser } from "$app/environment";
import * as clipboard from "clipboard-polyfill";
const hasNewClipboard: boolean = navigator.clipboard && import.meta.env.PROD
export function writeText(value: string): Promise<void> {
    if (hasNewClipboard) {
        const clip = navigator.clipboard
        return clip.writeText(value)
    } else {
        return clipboard.writeText(value)
    }
}
export async function granted(): Promise<boolean> {
    if (browser) {
        try {
            // bro it should be exist
            //@ts-ignore
            const v = await navigator.permissions.query({ name: 'clipboard-read', allowWithoutGesture: false });
            
            return v.state === "granted"
        } catch (_) {
            if (hasNewClipboard) {
                await navigator.clipboard.readText()
            } else {
                return false
            }
        }
    }
    return true
}