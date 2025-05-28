import React from 'react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator,  } from './dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { SignedIn,SignInButton,UserButton,SignedOut } from '@clerk/nextjs'
import { ChevronDown, FileTextIcon, GraduationCapIcon, LayoutDashboard, PenBoxIcon, StarsIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed-top-0 w-full border-b bg-background/80 backdrop-blut-md z-50
    supports-[backdrop-filter]: bg-background/60 ">
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href='/'>
                <Image
                    src="/logo.png"
                    alt='logo'
                    width={200}
                    height={60}
                    className="h-25 py-1 w-auto object-contain"
                />
                
            </Link>

            <div className='flex items-center space-x-2 md:space-x-4'>
                <SignedIn>
                    <Link href={'/dashboard'}>

                    <Button variant="outline">
                        <LayoutDashboard className="h-4 w-4" />
                        <span className='hidden md:block'>
                            Industry Insights
                        </span>
                    </Button>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button>
                            <StarsIcon className="h-4 w-4" />
                            <span className='hidden md:block'>
                                Growth Tools
                            </span>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={"/resume"} className="flex items-center gap-2">
                                <FileTextIcon className="h-4 w-4" />
                                    <span >
                                        Build Resume
                                    </span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                <PenBoxIcon className="h-4 w-4" />
                                    <span >
                                        Cover Letter
                                    </span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/interview"} className="flex items-center gap-2">
                                <GraduationCapIcon className="h-4 w-4" />
                                    <span >
                                        Interview Prep
                                    </span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </SignedIn>


            <SignedOut>
                <SignInButton>
                    <Button variant="outline">
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>


            <SignedIn>
                <UserButton 
                    appearance={{
                        elements: {
                            avatrarBox:'w-12 h-12',
                            userButtonPopoverCard: "shadow-xl",
                            userPreviewMainIdentifier: "font-semibold"

                        }
                    }
                    }
                    afterSignOutUrl='/'
                />
            </SignedIn>
            </div>

        </nav>

    </header>
  )
}

export default Header