import type { Git } from "../../git"

/**
 * Reset a branch to HEAD.
 *
 * @example
 * ```ts
 * await resetBranchToHead("feature/login")
 * ```
 *
 * @since 1.0.0
 */
export function resetBranchToHead(this: Git, name: string): Promise<string> {
  return this.branch(name, {
    flags: ["--force"],
  })
}
