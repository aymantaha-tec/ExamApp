import { Button } from "@/components/ui/button/button.tsx";
import { FieldDescription } from "@/components/ui/field.tsx";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router";

interface LoginFormFooterProps {
  isPending: boolean;
}

export default function LoginFormFooter({ isPending }: LoginFormFooterProps) {
  const {
    formState: { isSubmitting, isSubmitted, isValid },
  } = useFormContext();

  const isDisabled = (isSubmitted && !isValid) || isSubmitting || isPending;

  return (
    <>
      {/* Submit */}
      <Button
        type="submit"
        variant="default"
        className="my-7 w-full"
        disabled={isDisabled}
        isLoading={isPending}
      >
        Login
      </Button>

      {/* Description */}
      <FieldDescription className="text-right">
        <span className="text-sm">Don’t have an account?</span>

        <Button
          nativeButton={false}
          variant="link"
          className="inline no-underline"
          render={
            <Link className="text-sm no-underline!" to="/register">
              Create yours
            </Link>
          }
        />
      </FieldDescription>
    </>
  );
}
