import type { Git } from "../../git"

/**
 * Show changes staged in the index.
 *
 * @example
 * ```ts
 * await git.diffStaged()
 * await git.diffStaged(["src/index.ts"])
 * ```
 *
 * @see {@link diff}
 * @see {@link diffWorkingTree}
 *
 * @since 0.2.0
 */
export function diffStaged(
  this: Git,
  /**
   * Optional paths to limit the diff output.
   */
  paths?: readonly string[],
): Promise<string> {
  return this.diff(undefined, paths, {
    flags: ["--cached"],
  })
}
