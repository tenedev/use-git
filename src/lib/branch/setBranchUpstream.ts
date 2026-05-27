import type { Git } from "../../Git"

/**
 * Set upstream for a branch.
 *
 * @example
 * ```ts
 * await setBranchUpstream("feature/login", "origin/feature/login")
 * ```
 *
 * @since 1.0.0
 */
export function setBranchUpstream(
  this: Git,
  branchName: string,
  upstream: string,
): Promise<string> {
  return this.branch(branchName, {
    "--set-upstream-to": upstream,
  })
}
