import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
    return await bcrypt.compare(password, storedHash);
}