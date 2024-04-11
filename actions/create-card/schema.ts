import { z } from "zod";

export const CreateCard = z.object({
  title: z.string({
    required_error: "Se requiere título",
    invalid_type_error: "Se requiere título",
  }).min(3, {
    message: "El título es demasiado corto.",
  }),
  boardId: z.string(),
  listId: z.string(),
});
