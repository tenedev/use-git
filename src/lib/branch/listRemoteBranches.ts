import type { Git } from "../../git"

/**
 * List remote branches.
 *
 * @example
 * ```ts
 * await listRemoteBranches()
 * ```
 *
 * @since 1.0.0
 */
export async function listRemoteBranches(this: Git): Promise<string[]> {
  const res = await this.listAllBranches("json")

  return res.remote
}
