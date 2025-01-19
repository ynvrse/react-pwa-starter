import { Heart, Home, LucideIcon, Search, User } from 'lucide-react';

interface NavItem {
    title: string;
    to: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: LucideIcon;
    label?: string;
}

export const mobileMenu: NavItem[] = [
    {
        title: 'Dashboard',
        to: '/',
        icon: Home,
    },
    {
        title: 'Explore',
        to: '/explore',
        icon: Search,
    },
    {
        title: 'Favorites',
        to: '/favorites',
        icon: Heart,
    },
    {
        title: 'Profile',
        to: '/profile',
        icon: User,
    },
];
