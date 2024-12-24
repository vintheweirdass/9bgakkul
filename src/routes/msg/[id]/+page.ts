
import { redirect } from "@sveltejs/kit";

export const load = ({ params }) => {
    throw redirect(301, `/msg?${atob(params.id)})
        }`);
};