import type { Git } from "../../Git"

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
