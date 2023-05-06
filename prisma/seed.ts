import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Contact = {
	username: string;
	email: string;
};

async function getContacts() {
	const response = await fetch('https://dummyjson.com/users');
	const { users } = await response.json();

	return users as Contact[];
}

async function main() {
	const contacts = await getContacts();

	for (const contact of contacts) {
		await db.contact.create({
			data: {
				username: contact.username,
				email: contact.email
			}
		});
	}
}

main();
