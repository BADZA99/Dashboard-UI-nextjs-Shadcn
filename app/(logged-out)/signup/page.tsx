"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

// import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { CalendarIcon, ChartBar } from "lucide-react";
import {Calendar} from '@/components/ui/calendar'
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

// form schema
const formSchema = z
  .object({
    email: z.string().email(),
    //   password: z.string(),
    AccountType: z.enum(["personal", "company"]),
    CompanyName: z.string().optional(),
    // tous les champs sont des srting par defaut on use coerce ici pour convertir employees en number
    nbemployees: z.coerce.number().optional(),
    //   refine permet de valider un champs en particulier sans utiliser les autres forme il prend 2 params une fonction call (si true on affiche le msg d'eereur sinon c valide) et l'autre arg est le msg erreur  a afficher
    dob: z.date().refine((date) => {
      const today = new Date();
      const EightyearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      return date <= EightyearsAgo;
    }, "you must have 18years old "),
  })
  .superRefine((data, ctx) => {
    //ctx pour ajouter une validation sur un champ specifique
    if (data.AccountType === "company" && !data.CompanyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["CompanyName"],
        message: "company name is required",
      });
    }
    if (data.AccountType === "company" && (!data.nbemployees || data.nbemployees < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["nbemployees"],
        message: "number of employees is required",
      });
    }
  });

export default function SignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      AccountType: "personal",
      CompanyName: "",
      nbemployees: 0,
      dob: new Date(),
    },
  });

  const accountType = form.watch("AccountType");
  const dobFromDate= new Date();
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 18);

  const handleSubmit = () => {
    console.log("successss");
  };

  return (
    <>
      <ChartBar size={50} className="text-pink-500" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardHeader>
            <h1>Signup</h1>
          </CardHeader>
          <CardDescription>sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* accounttype */}
              <FormField
                control={form.control}
                name="AccountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AccountType</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select an football club" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">personal</SelectItem>
                        <SelectItem value="company">company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountType === "company" && (
                <>
                  <FormField
                    control={form.control}
                    name="CompanyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>company name</FormLabel>
                        <FormControl>
                          <Input placeholder="company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nbemployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>number of employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            placeholder="number of employees"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {/* date of birth */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-2">
                    <FormLabel>date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className="normal-case flex justify-between pr-1"
                          >
                            <span>Pick a date</span>
                            <CalendarIcon className="w-5 h-5" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                     ...
<PopoverContent align="start" className='w-auto p-0'>
  <Calendar
    mode="single"
    defaultMonth={field.value}
    selected={field.value}
    onSelect={field.onChange}
    fixedWeeks // Affiche toujours 6 semaines dans le calendrier, même si le mois n'en a pas autant
    weekStartsOn={1} // Définit le premier jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
    fromDate={dobFromDate} // La date minimale sélectionnable dans le calendrier
    toDate={new Date()} // La date maximale sélectionnable dans le calendrier
    //disabled={}
    captionLayout='dropdown-buttons'
  />
</PopoverContent>
...
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">signup</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Already have an account ?</small>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/login"}>login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
