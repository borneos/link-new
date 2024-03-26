import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { Icons } from "./Icons"

const avatar = 'https://res.cloudinary.com/borneos-co/image/upload/v1710511791/borneos-link/logo/user_soqhrh.webp';

export function UserNav() {
  const { data }:any = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {/* <AvatarImage src={avatar} alt="profile-borneos" /> */}
            <AvatarFallback>{data?.user?.fullname ? data?.user?.fullname?.toUpperCase().substring(0, 2) : '-'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.user?.fullname || '-'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {data?.user?.email || '-'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={'/dashboard'}>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </Link>
          <Link href={'/profile'}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}