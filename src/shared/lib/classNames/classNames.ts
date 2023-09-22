export type ClassnamesMods = Record<string, string | boolean | undefined>;

type ClassNames =
  (cls: string, mods?: ClassnamesMods, additional?: Array<string | undefined>) => string

export const classNames: ClassNames = (cls, mods = {}, additional = []) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
