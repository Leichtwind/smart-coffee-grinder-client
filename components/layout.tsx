import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './layout.module.css';

export const siteTitle = 'Smart Coffee Grinder';

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children }: Props = props;

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
            </Head>
            <div className="sidenav">
                <Link href="/grinding">Grinding</Link>
                <Link href="/network">Network</Link>
                <Link href="/calibration">Calibration</Link>
            </div>
            <main>{children}</main>
        </div>
    );
}
