import { useMutation } from "@tanstack/react-query";
import type { ILoginFormValues } from "../types/login";
import { LoginApi } from "./auth.api.ts";
import { useNavigate } from "react-router";

export function useLogin() {
  // navigation
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values: ILoginFormValues) => await LoginApi(values),
    onSuccess: () => {
      navigate("/diploma");
    },
  });
}
