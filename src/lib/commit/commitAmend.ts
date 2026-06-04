import type { Git } from "../../git"

/**
 * Amend the last commit.
 *
 * @example
 * ```ts
 * await git.commitAmend("fix: typo")
 * ```
 *
 * @since 0.3.0
 */
export function commitAmend(
  this: Git,
  message?: string,
  description?: string,
): Promise<string> {
  return this.commit(message, description, {
    flags: ["--amend"],
  })
}
