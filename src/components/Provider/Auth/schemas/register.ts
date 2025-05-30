import { z } from 'zod';

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	displayName: z.string().min(3)
});

export type RegisterValues = typeof registerSchema;
