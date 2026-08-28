import { loginSchema } from "@/features/auth/schemas/login.schema.ts";
import type { ILoginFormValues } from "@/features/auth/types/login.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import UsernameField from "./fields/username/field.tsx";
import PasswordField from "./fields/password/field.tsx";
import LoginFormFooter from "../footer/login-form-footer.tsx";
import { useLogin } from "@/features/auth/apis/use-login.ts";
import FormFeedback from "@/shared/components/form-feedback.tsx";

export default function LoginForm() {
  // Mutations
  const { mutate: login, error, isPending } = useLogin();

  // Form
  const form = useForm<ILoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // Function
  const onSubmit: SubmitHandler<ILoginFormValues> = (values) => {
    login(values);
  };

  const { isSubmitted, isValid } = form.formState;
  const isSubmitDisabled = (isSubmitted && !isValid) || isPending;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <UsernameField />
        <PasswordField />
        <FormFeedback>{error?.message}</FormFeedback>
        <LoginFormFooter isLoading={isPending} isDisabled={isSubmitDisabled} />
      </form>
    </FormProvider>
  );
}
