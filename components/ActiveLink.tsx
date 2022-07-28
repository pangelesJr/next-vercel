import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties } from 'react'
import { FC } from 'react';

type Props = {
    children?: React.ReactNode;
    text: string;
    href: string;
};

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}


export const ActiveLink: React.FC<Props> = ({text, href}) => {

    const {asPath} = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined} >{text}</a>
        </Link>
    )
};
