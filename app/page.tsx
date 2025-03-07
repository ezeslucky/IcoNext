import React, { Suspense } from 'react';
import Link from 'next/link';
import { LINK } from '@/constants';
import { getIcons } from '@/actions/get-icons';
import { IconsList } from '@/components/list';
import { CliBlock } from '@/components/cli-block';


export default async function Home() {
  const icons = await getIcons();

  return (
    <div className="font-mono flex items-center justify-center sm:mt-16 mt-8">
      <div className="container">
        
        <h1 className="sm:text-3xl text-2xl text-balance">
        Exquisitely crafted animated icons with seamless motion.
        </h1>
        <p className="sm:text-sm text-xs leading-relaxed sm:mt-4 mt-2 text-muted-foreground max-w-lg text-pretty">
        An open-source collection of sleek, smooth animated icons for your projects. Feel free to use them, share your feedback, and help us make this library even better together!
        </p>
        <p className="text-muted-foreground sm:text-sm text-xs mt-4">
          built with{' '}
          <Link
            href={LINK.MOTION}
            className="inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] font-mono text-xs font-medium text-muted-foreground opacity-100"
          >
            <kbd>motion</kbd>
          </Link>{' '}
          and{' '}
          <Link
            href={LINK.LUCIDE}
            className="inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] font-mono text-xs font-medium text-muted-foreground opacity-100"
          >
            <kbd>lucide</kbd>
          </Link>
        </p>
        <CliBlock icons={icons} />
        <Suspense>
          <IconsList icons={icons} />
        </Suspense>
      </div>
    </div>
  );
}
