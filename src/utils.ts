export const classNames = (
  arr: Array<string | null | boolean | undefined>
): string | undefined => arr?.filter(Boolean).join(" ");
