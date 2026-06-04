import type { Git } from "../../git"

/**
 * Restore all staged files back to HEAD, keeping working tree changes.
 *
 * @example
 * ```ts
 * await git.restoreAllStaged()
 * ```
 *
 * @since 0.3.0
 */
export function restoreAllStaged(this: Git): Promise<string> {
  return this.restore(".", { flags: ["--staged"] })
}
