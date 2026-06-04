import type { Git } from "../../git"

/**
 * Get a list of files changed in the working tree.
 *
 * @returns Array of changed file paths
 *
 * @example
 * ```ts
 * const files = await git.getChangedFiles()
 * // ["src/index.ts", "README.md"]
 * ```
 *
 * @see {@link diffWorkingTree}
 * @see {@link changedFileCount}
 * @see {@link getStagedFiles}
 *
 * @since 0.2.0
 */
export async function getChangedFiles(this: Git): Promise<string[]> {
  const res = await this.diff(undefined, undefined, {
    flags: ["--name-only"],
  })

  return res
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
}
