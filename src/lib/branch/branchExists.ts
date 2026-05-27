import type { Git } from "../../Git"

/**
 * Check if a local branch exists.
 *
 * @example
 * ```ts
 * await branchExists("main")
 * ```
 *
 * @since 1.0.0
 */
export async function branchExists(this: Git, name: string): Promise<boolean> {
  const res = await this.listBranches()

  return res.includes(name)
}
