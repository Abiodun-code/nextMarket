"use client";

import { useLogin } from "@/hooks/useAuth";
import { LoginForm } from "./_components/login-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFormData,
  loginSchema,
} from "@/schema/loginSchema";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";

import { AxiosError } from "axios";

export default function Login() {
  const router = useRouter();
  const login = useLogin();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data, {
      onSuccess: () => {
        toast.add({
          description: "Something went wrong. Please try again.",
          type: "success",
          timeout: 1
        });
        router.push("/home");
      },
      onError: () => {
        toast.add({
          description: "Something went wrong. Please try again.",
          type: "error",
          timeout: 10
        });
      },
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center font-poppins justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          form={form}
          onSubmit={onSubmit}
          isLoading={login.isPending}
        />
      </div>
    </div>
  );
}