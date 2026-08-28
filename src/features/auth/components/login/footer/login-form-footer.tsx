import { Button } from "@/components/ui/button/button.tsx";
import { FieldDescription } from "@/components/ui/field.tsx";

import { Link } from "react-router";

interface LoginFormFooterProps {
  isSubmitting?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default function LoginFormFooter({
  isSubmitting,
  isDisabled,
  isLoading,
}: LoginFormFooterProps) {
  return (
    <>
      {/* submit */}
      <Button
        type="submit"
        variant="default"
        className="my-7 w-full"
        disabled={isDisabled || isSubmitting}
        isLoading={isLoading}
      >
        {isSubmitting ? "Logging in..." : "Login"}
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
