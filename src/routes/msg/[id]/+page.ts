
import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
    let res: string;
    try { res = atob(params.id) } catch (_) {
        throw redirect(301, '/')
    }
    throw redirect(301, `/msg?${res}`);
};