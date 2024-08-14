import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  //   firstname: z.string().max(5, { message: "max length is 5 characters" }),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(2),
});
