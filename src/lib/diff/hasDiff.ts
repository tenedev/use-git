import type { Git } from "../../git"

/**
 * Check whether the working tree contains unstaged changes.
 *
 * @returns `true` if unstaged changes exist, otherwise `false`
 *
 * @example
 * ```ts
 * if (await git.hasDiff()) {
 *   console.log("Working tree has changes")
 * }
 * ```
 *
 * @see {@link diffWorkingTree}
 * @see {@link hasStagedDiff}
 *
 * @since 0.2.0
 */
export async function hasDiff(this: Git): Promise<boolean> {
  return !(await this.runCmdSafe("diff", ["--quiet"]))
}
