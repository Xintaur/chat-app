import type { RequestHandler } from './$types';
import db from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const contacts = await db.contact.findMany({
		orderBy: {
			username: 'asc'
		}
	});

	return json(contacts);
};

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = String(data.get('email'));
	const username = String(data.get('username'));

	await db.contact.create({
		data: {
			email,
			username
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
