"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/next.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { getInitials } from "@/lib/getInitials";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import NavbarCart from "./navbar-cart";

const NavBar = () => {
  const { data: user } = useCurrentUser();

  const handleLogout = () => {
    // wire up your logout logic / mutation here
  };

  return (
    <div className="py-5 border-b">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="logo image" className="w-20" />
        <div className="flex items-center gap-2">
          {/* <DropdownMenu>
            <DropdownMenuTrigger render={
              <Avatar size="lg" className="cursor-pointer">
                <AvatarImage src={user?.image} />
                <AvatarFallback>
                  {getInitials(user?.username ?? "")}
                </AvatarFallback>
              </Avatar>
            }/>       
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup className={""}>
                <DropdownMenuItem className={"hover:bg-gray-100 cursor-pointer py-3"}>
                  <Link href="/profile" className="cursor-pointer flex items-center font-poppins ">
                    <User className="mr-2 size-5" strokeWidth={1.5} />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className={"hover:bg-gray-100 cursor-pointer py-3"}>
                  <Link href="/settings" className="cursor-pointer flex items-center font-poppins ">
                    <Settings className="mr-2 size-5" strokeWidth={1.5} />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="hover:bg-red-50 cursor-pointer py-3 text-red-600 font-poppins">
                  <LogOut className="mr-2 size-5" strokeWidth={1.5} />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <NavbarCart/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;