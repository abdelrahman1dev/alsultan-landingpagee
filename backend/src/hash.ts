import argon2 from 'argon2';

export async function hashPassword(password: string): Promise<string>
{
    return await argon2.hash(password, {
        type: argon2.argon2id
    });
}

export async function verifyPassword(hash: string, password: string) : Promise<boolean>
{
    if (typeof hash !== 'string' || typeof password !== 'string') {
        return false;
    }

    if (hash.length === 0 || password.length === 0) {
        return false;
    }

    return await argon2.verify(hash, password);
}