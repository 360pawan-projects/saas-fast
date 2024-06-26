"use client";

import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { signIn } from "@/auth/helpers";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(4, "Password is minimum 4 characters."),
});

export const SigninForm = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await signIn(values);

      if (response?.success) {
        router.push("/dashboard");
        toast({
          title: "Sent",
          description: response.message,
        });
        form.reset();
        setIsLoggedIn(true);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response?.message,
        });
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoggedIn ? (
    <div
      className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 gap-1 mt-5"
      role="alert"
    >
      <InfoIcon className="w-4 h-4" />
      <span className="sr-only">Info</span>
      <span className="font-medium">Success alert!</span> You have been logged
      in successfully.
      <Link href="/dashboard" className="underline">
        Visit dashboard
      </Link>
    </div>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@email.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email to login.</FormDescription>
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
        <Button type="submit" disabled={isLoading}>
          Signin
        </Button>
      </form>
    </Form>
  );
};
