"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InfoIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(1, "Your github username is required."),
});

export const GithubConfirmationForm = ({
  token,
  _id,
}: {
  token: string;
  _id: string;
}) => {
  const [isUsernameAdded, setIsUsernameAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const data = await fetch("/api/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ _id, token, ...values }),
      });

      const response = await data.json();

      if (response.success) {
        toast({
          title: "Hooray!",
          description: response.message,
        });
        form.reset();
        setIsUsernameAdded(true);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response.message,
        });
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isUsernameAdded ? (
    <div
      className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 mt-5 gap-1"
      role="alert"
    >
      <InfoIcon className="w-4 h-4" />
      <span className="sr-only">Info</span>
      <span className="font-medium">Success alert! </span>
      <p>You are successfully invited to our github repo.</p>
    </div>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="lucifer" {...field} />
              </FormControl>
              <FormDescription>
                Enter your github username so we can add you to repo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Add me to github
        </Button>
      </form>
    </Form>
  );
};
