import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mainMenu } from '@/config/menu';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';

export function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
            <div className="container flex h-14 items-center px-4 md:px-8">
                <NavLink to="/" className="mr-6 flex items-center space-x-2">
                    <Logo />
                </NavLink>
                <div className="mr-4 hidden md:flex">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {mainMenu.map((menu, index) =>
                            menu.items !== undefined ? (
                                <DropdownMenu key={index}>
                                    <DropdownMenuTrigger
                                        className={cn(
                                            'flex items-center py-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
                                            menu.items
                                                .filter((subitem) => subitem.to !== undefined)
                                                .map((subitem) => subitem.to)
                                                .includes(location.pathname)
                                                ? 'text-foreground'
                                                : 'text-foreground/60',
                                        )}
                                    >
                                        {menu.title}
                                        <ChevronDownIcon className="-mr-1 ml-1 h-3 w-3 text-muted-foreground" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48" align="start" forceMount>
                                        {menu.items.map((subitem, subindex) =>
                                            subitem.to !== undefined ? (
                                                <NavLink key={subindex} to={subitem.to}>
                                                    <DropdownMenuItem
                                                        className={cn('hover:cursor-pointer', {
                                                            'bg-muted': subitem.to === location.pathname,
                                                        })}
                                                    >
                                                        {subitem.title}
                                                    </DropdownMenuItem>
                                                </NavLink>
                                            ) : subitem.label ? (
                                                <DropdownMenuLabel key={subindex}>{subitem.title}</DropdownMenuLabel>
                                            ) : (
                                                <DropdownMenuSeparator key={subindex} />
                                            ),
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <NavLink
                                    key={index}
                                    to={menu.to ?? ''}
                                    className={({ isActive }) =>
                                        cn(
                                            'text-sm font-medium transition-colors hover:text-primary',
                                            isActive ? 'text-foreground' : 'text-foreground/60',
                                        )
                                    }
                                >
                                    {menu.title}
                                </NavLink>
                            ),
                        )}
                    </nav>
                </div>

                {/* right */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">{/* <CommandMenu /> */}</div>
                    <nav className="flex items-center space-x-2">
                        <ModeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>YON</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">Dion Firmansyah</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            dioonfirmansyah@gmmail.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>
            </div>
        </header>
    );
}
