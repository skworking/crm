"use client";

import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const GenerateBreadcrumbs = (): BreadcrumbItem[] => {
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

interface SliderItem {
  id: number;
  name: string;
  price: string;
  offer?: string;
  imageUrl: string;
  isElectric?: boolean;
}
interface CompareData {
  trucks: SliderItem[];
  comparison: string;
}
export const generateCompareData = (trucks: SliderItem[]): CompareData[] => {
  const compareData: CompareData[] = [];
  for (let i = 0; i < trucks.length - 1; i += 2) {
    compareData.push({
      trucks: [trucks[i], trucks[i + 1]],
      comparison: `${trucks[i].name} vs ${trucks[i + 1].name}`,
    });
  }
  return compareData;
};