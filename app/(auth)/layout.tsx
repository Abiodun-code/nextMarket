import Image from "next/image";
import logo from "@/public/next.svg"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-[95%] mx-auto py-2">
        <Image src={logo} alt="logo image" className="w-20 cursor-pointer"/>
      </div>
      {children}
    </div>
  );
}