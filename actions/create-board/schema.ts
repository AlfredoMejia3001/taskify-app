import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Titulo requerido",
    invalid_type_error: "Titulo requerido",
  }).min(3, {
    message: "Titulo demasiado corto."
  }),
  image: z.string({
    required_error: "Imagen requerida",
    invalid_type_error: "Imagen requerida",
  }),
});
