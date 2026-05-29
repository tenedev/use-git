import { Git } from "./git"
import type { CreateGit } from "./types"

export * from "./lib/types"
export * from "./types"

/**
 * Creates a new Git instance.
 *
 * @example
 * ```ts
 * const repo = createGit({ cwd: './repo' })
 * ```
 */
export function createGit(opts: CreateGit = {}): Git {
  if (opts.debug) process.env.DEBUG = "true"
  return new Git({ cwd: opts.cwd })
}

/**
 * Default Git instance pointing to the current working directory.
 */
export const git = new Git()
export default git
