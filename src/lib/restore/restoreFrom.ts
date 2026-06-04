import type { Git } from "../../git"

/**
 * Restore a file from a specific commit.
 *
 * @example
 * ```ts
 * await git.restoreFrom("HEAD~1", "src/index.ts")
 * ```
 *
 * @since 0.3.0
 */
export function restoreFrom(
  this: Git,
  source: string,
  paths: string | string[],
): Promise<string> {
  return this.restore(paths, { "--source": source })
}
