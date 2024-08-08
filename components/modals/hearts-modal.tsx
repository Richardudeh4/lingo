"use client";

import { useHeartsModal } from "@/store/use-heart-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export const HeartsModal = () =>{
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useHeartsModal();

    useEffect(() => setIsClient(true), []);

    if(!isClient){
        return null;
    }
    const onClick =() => {
        close();
        router.push("/store")
    }
    return (
        <Dialog open={isOpen} onOpenChange={close }>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="items-center flex w-full justify-center mb-5">
                        <Image 
                        src="/assets/logo.svg"
                        alt="mascot"
                        height={80}
                        width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                     You ran out of hearts
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                      get pro for unlimited Heart or purchase them from the store
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full ">
                        <Button 
                        variant="primary" 
                        className="w-full" 
                        size="lg" onClick={onClick}>
                           Get unlimited hearts
                        </Button>
                        <Button 
                        variant="primaryOutline" 
                        className="w-full" 
                        size="lg" onClick={close}>
                        No thanks 👍🏾
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}