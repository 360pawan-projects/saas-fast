"use client";

import Link from "next/link";
import { useState } from "react";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { signInAction } from "@/server/actions/auth";
import { SignInSchema, SignInType } from "@/lib/schemas/auth";

export const SignInForm = () => {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });

  const { executeAsync, isExecuting } = useAction(signInAction, {
    onSuccess: ({ data }) => {
      toast({
        variant: "default",
        title: "Success! 🎉",
        description: data?.message,
      });

      form.reset();
      router.refresh();
      router.push("/dashboard");
      setIsSignedIn(true);
    },
    onError: ({ error }) => {
      const {
        fetchError,
        bindArgsValidationErrors,
        serverError,
        validationErrors,
      } = error;

      toast({
        variant: "destructive",
        title: "Error",
        description:
          fetchError ||
          bindArgsValidationErrors ||
          serverError ||
          validationErrors,
      });
    },
  });

  const onSubmit = async (values: SignInType) => {
    await executeAsync(values);
  };

  return isSignedIn ? (
    <div
      className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 gap-1 mt-5"
      role="alert"
    >
      <InfoIcon className="w-4 h-4" />
      <span className="sr-only">Info</span>
      <span className="font-medium">Success alert!</span> You have been signed
      in successfully.
      <Link href="/dashboard" className="underline">
        Visit dashboard
      </Link>
    </div>
  ) : (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@email.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email to sign in.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Enter your super secret password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isExecuting}>
          {isExecuting ? "Signing..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
};
