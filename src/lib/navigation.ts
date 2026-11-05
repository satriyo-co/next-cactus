export function getLinkClassName(pathname: string, href: string) {
  return pathname === href ? 'text-brand font-bold' : 'text-foreground/70';
}
