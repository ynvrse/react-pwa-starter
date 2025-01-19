import { Icons } from '@/components/icons';

interface NavItem {
    title: string;
    to?: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Dashboard',
        to: '',
    },
    {
        title: 'Example',
        items: [
            {
                title: 'Explore',
                to: '/explore',
            },
            {
                title: 'Favorites',
                to: '/favorites',
            },
        ],
    },
    {
        title: 'Profile',
        to: '/profile',
    },
];

export const sideMenu: NavItemWithChildren[] = [];
