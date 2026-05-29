import type { Git } from "../../git"
import type { BranchOptions } from "../types"
/**
 * Create a new branch.
 *
 * @example
 * ```ts
 * await createBranch("feature/login")
 * ```
 *
 * @since 1.0.0
 */
export async function createBranch(
  this: Git,
  name: string,
  opts: BranchOptions = {},
): Promise<string> {
  if (await this.branchExists(name)) {
    throw new Error(
      `Cannot create branch "${name}": branch already exists. Use a different name or delete the existing branch first.`,
    )
  }

  return this.branch(name, opts)
}
