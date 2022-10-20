export type linksType = {
  label: string;
  href: string;
  id: number;
}

export const HEADER_LINKS: linksType[] = [{
  label: "home",
  href: "/",
  id: 0
},
{
  label: "about",
  href: "/about",
  id: 1
},
{
  label: "gallery",
  href: "/gallery",
  id: 2
},
{
  label: "plans",
  href: "/plans",
  id: 3
}]