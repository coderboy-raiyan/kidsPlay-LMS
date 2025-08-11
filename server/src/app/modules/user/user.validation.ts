import z from "zod";

const userSignUpValidation = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
  }),
});

const userValidations = {
  userSignUpValidation,
};

export default userValidations;
