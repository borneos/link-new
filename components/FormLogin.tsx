'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icons } from './Icons';
import { Label } from '@radix-ui/react-label';
import { cn } from '@/libs/utils';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

interface FormLoginProps {
  children: React.ReactNode
}

const FormLogin: React.FC<FormLoginProps> = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const FormSchema = z.object({
    email: z.string().min(1, 'Email tidak valid').email('Email tidak valid, format wajib (@mail.com)'),
    password: z
      .string()
      .min(1, 'Password wajib diisi')
      .min(8, 'Password minimal 8 karakter')
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true)
    const signInData =  await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if(signInData?.error){
      toast.error(`Error: ${signInData.error}, Terjadi kegagalan`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);
    }else{
      toast.success('Berhasil masuk', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);
      router.push('/dashboard')
    }
    
  };

  return (
    <div className={cn("grid gap-6", className)} >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-default font-semibold'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='mail@example.com' 
                    {...field} 
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='mt-2'>
                <FormLabel className='text-default font-semibold'>Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      {...field}
                      disabled={isLoading}
                    />
                    <Button 
                      variant='ghost'
                      type='button' 
                      className='absolute translate-y-[-100%] right-0'
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ?
                      <Icons.eyeOff className="h-4 w-4" />
                      : <Icons.eye className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant='secondary' className='mt-6 w-full' type='submit' disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Masuk
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            atau masuk menggunakan
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Belum memiliki akun? {" "}
        <Link
          href="/register"
          className="underline underline-offset-4 hover:text-primary"
        >
          Daftar sekarang
        </Link>{" "}
      </p>
    </div>
  );
};

export default FormLogin;