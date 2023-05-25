import type { RequestHandler } from './$types';
import { auth } from '$lib/server/lucia';
import { json } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();

	if (!session) {
		return new Response(
			JSON.stringify({
				message: 'User is not currently logged in',
				success: false
			}),
			{
				status: 401
			}
		);
	}

	await auth.invalidateSession(session.sessionId);

	locals.auth.setSession(null);

	return json({
		success: true
	});
};
