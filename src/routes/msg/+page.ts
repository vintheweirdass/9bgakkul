
import { redirect } from "@sveltejs/kit";

export const load = ({url}) => {
    if ([...url.searchParams].length<1) {
        throw redirect(301, "/msgmaker")
    }
};