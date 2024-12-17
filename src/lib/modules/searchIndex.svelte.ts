// stores.js
import { writable, derived, type Writable, type Readable } from 'svelte/store';
export interface Option {
    term?: string,
    items: string[]
}
export interface SearchIndex {
    term: Writable<string>,
    items: Writable<string[]>,
    filtered: Readable<string[]>
}
export function createSearchIndex(opt: Option) {
    const term = writable(opt.term??'');
    const items = writable(opt.items);
    const filtered = derived(
        [term, items],
        ([$term, $items]) => $items.filter(x => x.includes($term))
    );
    return { term, items, filtered }
}