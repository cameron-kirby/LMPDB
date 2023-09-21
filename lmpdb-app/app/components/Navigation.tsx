'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

export default function Navigation() {
    const pathname = usePathname()

    return (
        <Navbar isBordered>
            <NavbarBrand>
                <p className="font-bold text-inherit">LMPDB</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem isActive={(pathname === '/') ? true : false}>
                    <Link color={(pathname === '/') ? 'primary' : 'foreground'} href="/" as={NextLink}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={(pathname === '/about') ? true : false}>
                    <Link color={(pathname === '/about') ? 'primary' : 'foreground'} href="/about" as={NextLink}>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={(pathname === '/listings') ? true : false}>
                    <Link color={(pathname === '/listings') ? 'primary' : 'foreground'} href="/listings" as={NextLink}>
                        Listings
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={(pathname === '/contact') ? true : false}>
                    <Link color={(pathname === '/contact') ? 'primary' : 'foreground'} href="/contact" as={NextLink}>
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
