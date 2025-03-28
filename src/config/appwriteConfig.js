import { Client, Account, Databases, ID, Query } from 'appwrite';
import { APPWRITE_DATABASE_ID, APPWRITE_PROJECT_ID } from './env';

const client = new Client()
    .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

const databaseId = APPWRITE_DATABASE_ID;
const usersCollectionId = "users";

export { client, account, databases, databaseId, usersCollectionId, ID, Query };