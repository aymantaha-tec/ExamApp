import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input/input.tsx";
import type { ILoginFormValues } from "@/features/auth/types/login.js";

import { useFormContext } from "react-hook-form";

export default function UsernameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ILoginFormValues>();
  return (
    <>
      {/* username */}
      <Field className="my-5.5">
        {/* label */}
        <FieldLabel htmlFor="username">Username</FieldLabel>

        {/* Field */}
        <Input
          id="username"
          autoComplete="off"
          placeholder="Ex: Ayman Taha"
          type="text"
          {...register("username")}
        />

        {/* Error */}

        {errors.username?.message && (
          <FieldError>{errors.username.message}</FieldError>
        )}
      </Field>
    </>
  );
}
