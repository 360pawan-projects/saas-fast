"use client";

import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { InfoIcon } from "lucide-react";
import { sendSupportEmail } from "@/app/dashboard/(pages)/emails/action";
import { EmailType } from "@/app/dashboard/(pages)/emails/action/type";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contains at least 2-3 letters.")
    .max(50, "Name cannot be more than 50 words."),
  email: z.string().email(),
  message: z.string().min(2, "Message requires 2-3 words."),
});

export const SupportForm = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const { email, name, message } = values;

      const response = await sendSupportEmail({
        from: email,
        name,
        message,
        type: EmailType.SUPPORT,
      });

      if (response.success) {
        toast({
          title: "Sent",
          description: response.message,
        });
        form.reset();
        setIsMessageSent(true);
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

  return isMessageSent ? (
    <div
      className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 gap-1 mt-5"
      role="alert"
    >
      <InfoIcon className="w-4 h-4" />
      <span className="sr-only">Info</span>
      <span className="font-medium">Success alert!</span> Your Message has been
      sent successfully.
      <Button
        className="text-green-800"
        variant="link"
        onClick={() => setIsMessageSent(false)}
      >
        Send again
      </Button>
    </div>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Enter your name so we can remember you better.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@email.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email to avoid spam.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Hola!" {...field} />
              </FormControl>
              <FormDescription>
                Enter your message you want to share.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Send Message
        </Button>
      </form>
    </Form>
  );
};
