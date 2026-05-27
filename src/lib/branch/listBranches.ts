import type { Git } from "../../Git"

/**
 * List local branches.
 *
 * @example
 * ```ts
 * await git.listBranches()
 * // [ 'main' ]
 * ```
 *
 * @since 1.0.0
 */
export async function listBranches(this: Git): Promise<string[]> {
  const res = await this.listAllBranches("json")

  return res.local
}
