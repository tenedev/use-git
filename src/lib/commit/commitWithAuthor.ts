import type { Git } from "../../Git"

/**
 * Commit with explicit author.
 *
 * @example
 * ```ts
 * await git.commitWithAuthor(
 *   "feat: initial import",
 *   "Alice <alice@example.com>",
 * )
 * ```
 *
 * @since 0.3.0
 */
export function commitWithAuthor(
  this: Git,
  message: string,
  author: string,
  description?: string,
): Promise<string> {
  return this.commit(message, description, {
    "--author": author,
  })
}
