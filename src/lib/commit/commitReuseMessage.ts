import type { Git } from "../../git"

/**
 * Reuse the commit message and authorship from an existing commit.
 *
 * @example
 * ```ts
 * await git.commitReuseMessage("abc123")
 * ```
 *
 * @since 0.3.0
 */
export function commitReuseMessage(
  this: Git,
  commitId: string,
): Promise<string> {
  return this.commit(undefined, {
    "--reuse-message": commitId,
  })
}
