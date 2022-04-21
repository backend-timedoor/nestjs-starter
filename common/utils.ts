import * as bcrypt from 'bcrypt';

export async function hash(plainText: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    return bcrypt.hash(plainText, salt);
}

export async function compare(plainText: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashed);
}