import type { Git } from "../../Git"

/**
 * Restore files from `HEAD`, discarding both staged and unstaged changes.
 *
 * @example
 * ```ts
 * await git.restoreFromHead("file.txt")
 * ```
 *
 * @since 0.3.0
 */
export function restoreFromHead(
  this: Git,
  paths: string | string[],
): Promise<string> {
  return this.restore(paths, {
    flags: ["--staged", "--worktree"],
    "--source": "HEAD",
  })
}
