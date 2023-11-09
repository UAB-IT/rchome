'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'
import Head from 'next/head';

export function DocsHeader({ title }: { title?: string }) {
  let pathname = usePathname();
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  );

  if (!title && !section) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <header className="mb-9 space-y-1">
        {section && (
          <p className="font-display text-sm font-medium text-sky-500">
            {section.title}
          </p>
        )}
        {title && (
          <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
        )}
      </header>
    </>
  );
}