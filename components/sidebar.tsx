import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;

}

export const Sidebar = ({className}:Props) => {
    return (
<div className={cn(" h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col", className)}>
    <Link href="/learn ">
 <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
<Image src="/assets/logo.svg" alt="next" width={40} height={40}/>
<h1 className='text-2xl font-extrabold text-gray-600 tracking-wide'>Lingo</h1>
 </div>
</Link>
<div className="flex flex-col gap-y-2 flex-1">
 <SidebarItem label="Learn" href="/learn" iconSrc="/assets/home.svg"/>
 <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/assets/medal.svg"/>
 <SidebarItem label="Quests" href="/quests" iconSrc="/assets/dart.svg"/>
 <SidebarItem label="shop" href="/shop" iconSrc="/assets/shop.svg"/>
</div>
<div className="p-4">
<ClerkLoading>
    <Loader className="w-5 h-5 text-muted-foreground animate-spin"/>
</ClerkLoading>
<ClerkLoaded>
    <UserButton afterSignOutUrl="/"/>
</ClerkLoaded>
</div>
</div>
    )
}