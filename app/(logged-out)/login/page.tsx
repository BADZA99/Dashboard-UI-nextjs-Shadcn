"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChartBar } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

// form schema
const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export default function LoginPage() {

    const form  =useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            email:"",
            password:""
        }
    });

    const handleSubmit =()=>{
        console.log("successss");
    };
  return (
    <>
      <ChartBar size={50} className="text-pink-500" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardHeader>
            <h1>login</h1>
          </CardHeader>
          <CardDescription>
            
              login to access the best dashboard visualisation soccer player
              stats
            
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form} >
                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField control={form.control} name="email" render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                placeholder="john@gmail.com" 
                                // type="email" 
                                {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Enter your email address
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>

                    )
                       
                    }/>
                    <FormField control={form.control} name="password" render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                password
                            </FormLabel>
                            <FormControl>
                                <Input
                                placeholder="john@gmail.com" 
                                type="password" 
                                {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Enter your password address
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>

                    )
                       
                    }/>
                    <Button type="submit">
                        login
                    </Button>
                </form>
            </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>dont have an account ?</small>
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href={"/signup"}>sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
