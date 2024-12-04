'use client';

import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from './Header.module.css'

const links = [
    { name: 'Главная', href: '/' },
    {
        name: 'Услуги',
        href: '/services',
    },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Контакты', href: '/contacts' },
];



const Header = () => {
    const pathname = usePathname();

    return <nav className={styles.nav}>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        styles.link,

                        {
                            [styles.link_active]: pathname === link.href,
                        },
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            );
        })}
    </nav>
}

export default Header