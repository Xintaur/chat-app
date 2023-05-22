import type { Actions } from '@sveltejs/kit';
import db from '$lib/server/database';

export const actions: Actions = {
	addContact: async ({ request }) => {
		const formData = await request.formData();
		const email = String(formData.get('email'));
		const username = String(formData.get('username'));

		await db.contact.create({
			data: {
				email,
				username
			}
		});

		return {
			success: true
		};
	}
};
