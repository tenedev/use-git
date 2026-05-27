import type { Git } from "../../Git"

/**
 * Show changes between `HEAD` and the working tree.
 *
 * @example
 * ```ts
 * await git.diffHead()
 * await git.diffHead(["README.md"])
 * ```
 *
 * @see {@link diffCommits}
 *
 * @since 0.2.0
 */
export function diffHead(
  this: Git,
  /**
   * Optional paths to limit the diff output.
   */
  paths?: readonly string[],
): Promise<string> {
  return this.diff(["HEAD"], paths)
}
