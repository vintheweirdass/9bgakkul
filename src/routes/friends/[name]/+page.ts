import { friendsList, friendsListInfer } from "$lib/modules/friendsList";
import { error } from "@sveltejs/kit";
import type { PageData } from './$types';

// it so that it gets served as a static asset in production
export const prerender = true;

export const load = ({ params }) => {
	if (typeof (friendsListInfer)[params.name] !== "undefined") {
		return {
			name: params.name as keyof typeof friendsList
		};
	}

	error(404, 'Not found');
};