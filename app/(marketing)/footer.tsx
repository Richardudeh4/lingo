import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
                <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full  ">
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/german.svg" alt="german" height={32} width={40} className="mr-4 rounded-md"/>
                                German
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/spain.svg" alt="spanish" height={32} width={40} className="mr-4 rounded-md"/>
                               Spanish
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/italy.svg" alt="italian" height={32} width={40} className="mr-4 rounded-md"/>
                                Italian
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/france.svg" alt="france" height={32} width={40} className="mr-4 rounded-md"/>
                               French
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/japan.svg" alt="japan" height={32} width={40} className="mr-4 rounded-md"/>
                             Japanese
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/russia.svg" alt="russia" height={32} width={40} className="mr-4 rounded-md"/>
                                Russian
                        </Button>
                        <Button className="w-full" size="lg" variant="ghost">
                            <Image src="/assets/portugal.svg" alt="portugal" height={32} width={40} className="mr-4 rounded-md"/>
                                Portugese
                        </Button>
                </div>
        </footer>
    )
}