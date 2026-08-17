"use client";

import PageLoader from "@/components/PageLoader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import NavBar from "@/components/navbar";
import HomeHeader from "./_components/home-header";

const HomePage = () => {
  const { data: user, isLoading, isError } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <PageLoader/>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p>Something went wrong. Please try logging in again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[95%] mx-auto">
      <NavBar/>
      <div className="pt-5">
        <HomeHeader/>
      </div>
    </div>
  );
};

export default HomePage;