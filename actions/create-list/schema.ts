import { z } from "zod";

export const CreateList = z.object({
  title: z.string({
    required_error: "Se requiere título",
    invalid_type_error: "Title is required",
  }).min(3, {
    message: "El título es demasiado corto.",
  }),
  boardId: z.string(),
});
