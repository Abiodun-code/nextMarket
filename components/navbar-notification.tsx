import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import { Bell, LogOut } from 'lucide-react';

interface NavbarNotificationProps {
  hasUnread?: boolean;
}

const NavbarNotification = ({ hasUnread = true }: NavbarNotificationProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        <Button size={"icon-lg"} variant={"ghost"} className={"rounded-full cursor-pointer border-2 relative"}>
          <Bell className="size-5" />
          {hasUnread && (
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-black ring-2 ring-background" />
          )}
        </Button>
      }/>       
      <DropdownMenuContent align="center" className="w-64">
        <DropdownMenuGroup className={"space-y-3"}>      
          <DropdownMenuItem className="cursor-pointer text-red-600 font-poppins">
            <LogOut className="mr-2 h-4 w-4" />
              Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavbarNotification