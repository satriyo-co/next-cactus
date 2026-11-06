'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

// Import komponen primitif shadcn/ui (Base UI)
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export function AppBreadcrumb() {
  const pathname = usePathname();

  // Pecah jalur URL menjadi segmen-segmen
  // Contoh: "/products/kaktus-mini" -> ["products", "kaktus-mini"]
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  // Jika user sedang di Home (`/`), langsung return null
  if (pathname === '/') {
    return null;
  }

  return (
    <Breadcrumb className="py-3">
      <BreadcrumbList>
        {/* Item Pertama: Link ke Home */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
        </BreadcrumbItem>

        {/* Render setiap segmen URL secara dinamis */}
        {pathSegments.map((segment, index) => {
          const linkParent = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          // Format teks segmen jadi huruf kapital dan tanpa dash (misal: "kaktus-mini" -> "Kaktus Mini")
          const formattedTitle = decodeURIComponent(segment)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <Fragment key={linkParent}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  // Halaman aktif (posisi terakhir): Teks biasa & bercetak tebal
                  <BreadcrumbPage>{formattedTitle}</BreadcrumbPage>
                ) : (
                  // Halaman perantara: Tautan navigasi aktif ke folder induk
                  <BreadcrumbLink href={linkParent}>{formattedTitle}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
