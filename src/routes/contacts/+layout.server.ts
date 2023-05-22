import type { LayoutServerLoad } from './$types';
import db from '$lib/server/database';

export const load: LayoutServerLoad = async (event) => {
	const contacts = await db.contact.findMany({
		select: {
			id: true,
			username: true
		},
		orderBy: {
			username: 'asc'
		}
	});

	return { contacts };
};
