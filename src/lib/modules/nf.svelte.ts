/**
 * Reviving & adding Svelte features since they're becoming more React'y
 * made by {@link https://github.com/vintheweirdass}
 *
 * @author vintheweirdass
 */

import { untrack } from "svelte";

/** Remove dups from array */
export function rmDups<T>(array: T[]): T[] {
    return [...new Set(array)];
}
export type EvFeat =
    | "prevent"
    | "trusted"
    | "self"
    | "once"
    | "noPropagate"
    | "noImPropagate";
/** Use event with ease */
export function ev<T extends Event>(
    feat: EvFeat | [EvFeat, ...EvFeat[]],
    fn: ((e:T) => unknown) | ((...args: unknown[]) => unknown)
): ((e: T) => void) | undefined {
    let n: ((e: T) => void) | undefined = (e: T) => {
        let once = false;
        let trusted = false;
        let onlySelf = false;
        function comp(feat: EvFeat) {
            switch (feat) {
                case ("once"): {
                    once = true;
                    break;
                }
                case ("trusted"): {
                    trusted = true;
                    break;
                }
                case ("self"): {
                    onlySelf = true;
                    break;
                }
                case ("prevent"): {
                    e.preventDefault();
                    break;
                }
                case ("noPropagate"): {
                    e.stopPropagation();
                    break;
                }
                case ("noImPropagate"): {
                    e.stopImmediatePropagation();
                    break;
                }
                default: {
                    break;
                }
            }
        }
        if (typeof feat === "string") {
            comp(feat);
        } else {
            const _dups = rmDups(feat);
            // we need speed, so no need for iterators
            for (let i = 0; i++; i < _dups.length) {
                comp(_dups[i]);
            }
        }
        if (trusted && !e.isTrusted) {
            return;
        }
        if (onlySelf) {
            if (!e.currentTarget || !e.target || e.currentTarget !== e.target) {
                return;
            }
        }
        fn(e);
        if (once) {
            n = undefined;
        }
    };
    return n;
}
export function effect(
    fn: () => void,
    deps?: ((() => void) | (any[])) | null | undefined,
) {
    if (deps) {
        const depsFn = typeof deps === "function" ? deps : () => deps;
        $effect(() => {
            depsFn();
            untrack(fn);
        });
    } else {
        $effect(fn);
    }
}
