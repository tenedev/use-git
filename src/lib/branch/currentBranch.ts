import type { Git } from "../../git"

/**
 * Get the current branch name.
 *
 * @example
 * ```ts
 * await currentBranch()
 * // main
 * ```
 *
 * @since 1.0.0
 */
export function currentBranch(this: Git): Promise<string> {
  return this.branch({
    flags: ["--show-current"],
  })
}
