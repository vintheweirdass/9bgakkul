
import { decompress } from "$lib/modules/compressString";
import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
    throw redirect(301, `/msg?${decompress(atob(params.id))
        }`);
};