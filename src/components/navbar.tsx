import { Button } from "@nextui-org/button";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "./theme-switch";
import { Input, Kbd } from "@nextui-org/react";
import { siteConfig } from "../config/site";
import {
    SearchIcon,
    Logo,
    TwitterIcon,
    DiscordIcon,
    GithubIcon,
    HeartFilledIcon,
} from "./icons";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Docs",
        href: "/docs",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const NavbarHeader = () => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    );
    return (
        <Navbar shouldHideOnScroll>
            <Link to={"/"} className="flex gap-2 items-center">
                <Logo />
                <p className="font-bold text-inherit">ACME</p>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <div className="hidden lg:flex gap-4 justify-start ml-2">
                    {navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                className="data-[active=true]:text-primary data-[active=true]:font-medium"
                                color="foreground"
                                to={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link to={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link to={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link to={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    {searchInput}
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        as={Link}
                        className="text-sm font-normal text-default-600 bg-default-100"
                        href={siteConfig.links.sponsor}
                        startContent={
                            <HeartFilledIcon className="text-danger" />
                        }
                        variant="flat"
                    >
                        Sponsor
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
