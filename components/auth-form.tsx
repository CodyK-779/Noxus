import OauthButtons from "@/actions/oauth-btns";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export function AuthForm() {
  return (
    <div className="relative max-container w-full md:h-screen md:overflow-hidden">
      <Particles
        className="absolute inset-0"
        color="#666666"
        ease={40}
        quantity={120}
      />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center">
        <Button className="absolute top-4" variant="ghost" asChild>
          <Link href="/">
            <ChevronLeftIcon />
            <p className="font-medium">Go Back</p>
          </Link>
        </Button>

        <div className="mx-auto space-y-4 sm:w-sm">
          <div className="flex items-center gap-2.5 -mb-2">
            <div className="relative size-8">
              <Image
                src="/logo-red.png"
                alt="logo"
                fill
                sizes="(min-width: 400px) 36px, 32px"
                className="object-cover"
              />
            </div>
            {/* <p className="text-[22px] font-bold">Noxus</p> */}
            <p className="text-[22px] font-orbitron tracking-wide font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Noxus
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="font-bold text-2xl tracking-wide">
              Sign In or Join Now!
            </h1>
            <p className="text-base text-muted-foreground">
              login or create your Noxus account.
            </p>
          </div>
          <div className="space-y-2">
            <OauthButtons provider="google" />
            <OauthButtons provider="github" />
          </div>
          <p className="mt-8 text-muted-foreground text-sm">
            By clicking continue, you agree to our{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
