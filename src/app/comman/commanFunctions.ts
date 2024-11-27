"use client";

import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const generateBreadcrumbs = (): BreadcrumbItem[] => {
  const pathname = usePathname(); // Correct way to get the current path
  const paths = pathname.split('/').filter(Boolean);

  return paths.map((path, index) => {
    let label = path.replace(/-/g, ' ').toUpperCase();
    let fullPath = `/${paths.slice(0, index + 1).join('/')}`;

    // Treat 'en' as 'Home' and adjust the path
    if (index === 0 && path === 'en') {
      label = 'Home';
      fullPath = '/';
    }

    return { label, path: fullPath };
  });
};
