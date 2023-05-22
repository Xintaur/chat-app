import type { PageServerLoad } from './$types';
import db from '$lib/server/database';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const contact = await db.contact.findUnique({
		where: {
			id: params.contact_id
		}
	});

	if (!contact) {
		throw error(404, 'Contact not found');
	}

	return { contact };
};
