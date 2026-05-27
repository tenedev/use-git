import type { Git } from "../../Git"

/**
 * Restore files in the index (staging area) to match HEAD.
 *
 * @example
 * ```ts
 * await git.restoreStaged("file.txt")
 * ```
 *
 * @since 0.3.0
 */
export function restoreStaged(
  this: Git,
  paths: string | string[],
): Promise<string> {
  return this.restore(paths, { flags: ["--staged"] })
}
