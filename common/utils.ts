import bcrypt from 'bcrypt';

export function generateHash(plainText: string): string {
    return bcrypt.hashSync(plainText, 10);
}

export function validateHash(plainText: string, hash: string): Promise<boolean> {
    if (!plainText || !hash) {
        return Promise.resolve(false);
    }

    return bcrypt.compare(plainText, hash);
}