import type { Git } from "../../git"

/**
 * Commit with Signed-off-by trailer.
 *
 * @example
 * ```ts
 * await git.commitSignoff("feat: add API")
 * ```
 *
 * @since 0.3.0
 */
export function commitSignoff(
  this: Git,
  message: string,
  description?: string,
): Promise<string> {
  return this.commit(message, description, {
    flags: ["--signoff"],
  })
}
