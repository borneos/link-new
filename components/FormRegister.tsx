'use client'

import React, { ReactNode, useState } from 'react';
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
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import API from '@/constant/api';
import RESPONSE_CODE from '@/constant/response';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

interface FormRegisterProps {
  children: ReactNode
}

const FormRegister: React.FC<FormRegisterProps> = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  // const FormSchema = z.object({
  //   fullname: z.string().min(3, 'Nama tidak valid'),
  //   email: z.string().min(1, 'Email tidak valid').email('Email tidak valid, format wajib (@mail.com)'),
  //   password: z
  //     .string()
  //     .min(1, 'Password wajib diisi')
  //     .min(8, 'Password minimal 8 karakter'),
  //   rePassword: z.string()
  //     .min(8, 'Password must be at least 8 characters')
  //     .refine((rePassword: string, data: { password: string; }) => rePassword === data.password, {
  //       message: 'Passwords do not match',
  //       path: ['rePassword'],
  //     }),
  // })

  function makePasswordWithConfirm () {
    const schema = z.object( {
        password: z.string().min(8, 'Password minimal 8 karakter'),
        rePassword: z.string(),
    } )
    const refineTuple: [ check: ( data: z.infer<typeof schema> ) => boolean, message: z.CustomErrorParams ] = [
        data => data.password === data.rePassword,
        { message: 'Re-password belum sama dengan password', path: [ 'rePassword' ] },
    ]
    return { schema, refineTuple }
}

const passwordWithConfirm = makePasswordWithConfirm()

  const FormSchema = z.object({
    fullname: z.string().min(3, 'Nama tidak valid'),
    email: z.string().email('Email tidak valid').min(1, 'Email wajib diisi'),
  })
  .merge(passwordWithConfirm.schema)
  .refine( ...passwordWithConfirm.refineTuple )

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      rePassword: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    const data = {
      name: values.fullname,
      email: values.email,
      password: values.password
    }
    
    const result = await fetch(API.USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(result.status === RESPONSE_CODE.SUCCESS_201) {
      toast.success('Berhasil membuat akun', {
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
      router.push('/login')
    }

    if(result.status ===  RESPONSE_CODE.ERROR_500){
      toast.error(`Error: Terjadi kegagalan`, {
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
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem className='mt-2'>
                <FormLabel className='text-default font-semibold'>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder='Nama Anda' 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mt-2'>
                <FormLabel className='text-default font-semibold'>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder='mail@example.com' 
                    {...field} 
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
                      disabled={isLoading}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      {...field}
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
          <FormField
            control={form.control}
            name='rePassword'
            render={({ field }) => (
              <FormItem className='mt-2'>
                <FormLabel className='text-default font-semibold'>Re-Password</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      disabled={isLoading}
                      type={showRePassword ? 'text' : 'password'}
                      placeholder='Enter your re-password'
                      {...field}
                    />
                    <Button 
                      variant='ghost'
                      type='button' 
                      className='absolute translate-y-[-100%] right-0'
                      onClick={toggleRePasswordVisibility}
                    >
                      {showRePassword ?
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
          <div className="grid mt-2">
            <Button variant='secondary' className='mt-3' type='submit' disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Masuk
            </Button>
          </div>
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
        Sudah memiliki akun? {" "}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Masuk
        </Link>{" "}
      </p>
    </div>
  );
};

export default FormRegister;