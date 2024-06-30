"use client";

import { z } from "zod";
import Link from "next/link";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState, useFormStatus } from "react-dom";

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
import { signIn } from "./actions";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { SignInSchema } from "@/schemas/auth";

type InitialStateType = {
  status: "pending" | "error" | "success";
  message: string;
};

const initialState: InitialStateType = {
  status: "pending",
  message: "",
};

export const SignInForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState<InitialStateType, FormData>(
    signIn,
    initialState
  );
  const { pending } = useFormStatus();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state || state.status === "pending") return;

    toast({
      description: state.message,
      variant: state.status === "success" ? "default" : "destructive",
    });

    if (state.status === "success") {
      router.push("/dashboard");
      setIsSignedIn(true);
      form.reset();
    }
  }, [state, form, router]);

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
      <form
        className="space-y-4"
        ref={formRef}
        action={formAction}
        onSubmit={(event) => {
          event.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(event);
        }}
      >
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
        <Button type="submit" disabled={pending}>
          {pending ? "Signing..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
};
