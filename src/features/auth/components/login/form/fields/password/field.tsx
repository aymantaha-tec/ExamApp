import { Button } from "@/components/ui/button/button.tsx";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field.tsx";
import PasswordInput from "@/components/ui/input/password-input.tsx";
import type { ILoginFormValues } from "@/features/auth/types/login.js";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router";

export default function PasswordField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ILoginFormValues>();

  return (
    <>
      {/* password */}
      <Field>
        {/* label */}
        <FieldLabel htmlFor="password">password</FieldLabel>
        {/* Field */}
        <PasswordInput
          id="password"
          placeholder="********"
          {...register("password")}
        />

        {/* Error */}
        {errors.password?.message && (
          <FieldError>{errors.password.message}</FieldError>
        )}
        <FieldDescription className="flex justify-end">
          <Button
            nativeButton={false}
            variant="link"
            className="p-0"
            render={
              <Link className="no-underline!" to="/forgot-password">
                Forgot your password?
              </Link>
            }
          />
        </FieldDescription>
      </Field>
    </>
  );
}
