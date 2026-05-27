import type { Git } from "../../Git"

/**
 * Restore files in the working tree from the index.
 *
 * @example
 * ```ts
 * await git.restoreWorktree("file.txt")
 * ```
 *
 * @since 0.3.0
 */
export function restoreWorktree(
  this: Git,
  paths: string | string[],
): Promise<string> {
  return this.restore(paths, { flags: ["--worktree"] })
}
