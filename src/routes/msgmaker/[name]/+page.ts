export async function load({ params, url }) {
    let lang = url.searchParams.get('lang');
    let q = url.searchParams.get('q');
    return { lang, q };
}