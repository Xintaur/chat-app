import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';
import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import { sveltekit } from 'lucia-auth/middleware';

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			username: userData.username
		};
	}
});

export type Auth = typeof auth;
