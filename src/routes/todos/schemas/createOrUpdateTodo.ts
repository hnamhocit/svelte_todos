import { z } from 'zod';

export const createOrUpdateTodoSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty()
});

export type CreateOrUpdateTodoValues = z.infer<typeof createOrUpdateTodoSchema>;
