import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div
                  className="flex flex-col space-y-4 items-start
                w-full text-lg text-indigo-950 mt-8"
                >
                  <Link href="/"> Get Started</Link>
                  <Link href="/"> Sign-In</Link>
                  <Link href="/"> Services</Link>
                  <Link href="/"> Contact</Link>
                  <Link href="/"> Careers</Link>
                  <Link href="/"> Pricing</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:gap-x-4">
        <Button className="text-md" variant="ghost">
          Sign In
        </Button>

        <Button className="text-md mb-1 bg-indigo-600 hover:bg-indigo-800">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
