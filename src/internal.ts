function buildArgs<T extends { flags?: string[] }>(opts: T): string[] {
  const args: string[] = []

  if (opts.flags?.length) {
    args.push(...new Set(opts.flags))
  }

  for (const [key, value] of Object.entries(opts)) {
    if (value == null || !key.startsWith("--")) continue

    if (typeof value === "boolean") {
      if (value) args.push(key)
      continue
    }

    args.push(key, String(value))
  }

  return args
}

function mergeOpts<T extends object>(defaults: T, user: T | undefined) {
  return !user
    ? defaults
    : {
        ...defaults,
        ...user,
      }
}

function makeList(
  data: string,
  prefixes: string[] = ["*", "+"],
  to = "",
): string[] {
  const escaped = prefixes
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")

  const PREFIX_REGEX = new RegExp(`^\\s*(?:${escaped})?[\\s]*`)

  return data
    .split(/\r?\n/)
    .map((b) => b.replace(PREFIX_REGEX, to))
    .filter(Boolean)
}

export const utils = {
  buildArgs,
  mergeOpts,
  makeList,
}
export default utils
