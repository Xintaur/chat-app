import type { RequestHandler } from './$types';
import db from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const contacts = await db.contact.findUnique({
		where: {
			id: params.contact_id
		}
	});

	return json(contacts);
};

export const DELETE: RequestHandler = async ({ params }) => {
	await db.contact.delete({
		where: {
			id: params.contact_id
		}
	});

	return new Response(
		JSON.stringify({
			success: true
		}),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
