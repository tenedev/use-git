import type { Git } from "../../git"

/**
 * Commit all tracked changes.
 *
 * @example
 * ```ts
 * await git.commitAll("chore: update deps")
 * ```
 *
 * @since 0.3.0
 */
export function commitAll(
  this: Git,
  message: string,
  description?: string,
): Promise<string> {
  return this.commit(message, description, {
    flags: ["--all"],
  })
}
