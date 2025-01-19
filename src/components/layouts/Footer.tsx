import { appConfig } from '@/config/app';
import { mobileMenu } from '@/config/mobile-menu';
import { NavLink, useLocation } from 'react-router-dom';
export function Footer() {
    const location = useLocation();
    return (
        <footer>
            <div className="flex hidden min-h-[3rem] flex-col items-center gap-4 py-2 md:block md:h-10 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{' '}
                    <a
                        href={appConfig.author.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        {appConfig.author.name}
                    </a>
                    . The source code is available on{' '}
                    <a
                        href={appConfig.github.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <div className="fixed bottom-2 left-10 right-10 shadow-md sm:hidden">
                <div className="w-full">
                    <nav className="flex items-center justify-between gap-x-4 rounded-full bg-slate-100 px-4 py-3 dark:bg-slate-800">
                        {mobileMenu.map((item, index) => (
                            <NavLink to={item.to} key={index} className="text-slate-600">
                                {item.icon && (
                                    <item.icon fill={item.to === location.pathname ? 'currentColor' : 'none'} />
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
