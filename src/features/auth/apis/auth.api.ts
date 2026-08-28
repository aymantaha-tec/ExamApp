import { api } from "@/shared/lib/axios.ts";
import type { ILoginResponse, ILoginFormValues } from "../types/login";
import { AUTH_ENDPOINT } from "./auth.endpoint.ts";
import type { IApiResponse } from "@/shared/types/api.js";

export async function LoginApi(values: ILoginFormValues) {
  const response = await api.post<IApiResponse<ILoginResponse>>(
    `${AUTH_ENDPOINT}/login`,
    values,
  );
  return response.data;
}
