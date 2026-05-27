import { Git } from "./Git"

export * from "./Git"
export * from "./lib/types"

/**
 * Creates a new Git instance.
 * Backward compatible helper for the new class-based API.
 *
 * @example
 * ```ts
 * const repo = createGit({ cwd: './repo' })
 * ```
 */
export function createGit(opts: { cwd?: string; debug?: boolean } = {}): Git {
  if (opts.debug) process.env.DEBUG = "true"
  return new Git({ cwd: opts.cwd })
}

/**
 * Default Git instance pointing to the current working directory.
 */
export const git = new Git()

export default git
