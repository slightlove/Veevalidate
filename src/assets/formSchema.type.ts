// import * as yup from "yup";
import z from "zod";

export const userSchema = z.object({
  addrCity: z.string().min(1, "Addr City is Required!"),
  addrArea: z.string().min(1, "Addr Area is Required!"),
  addrName: z.string().min(1, 'Addr Name is required!'),
});

export type userSchema = z.infer<typeof userSchema>
