import type { Git } from "../../git"

/**
 * Create an empty commit.
 *
 * @example
 * ```ts
 * await git.commitEmpty("chore: trigger CI")
 * ```
 *
 * @since 0.3.0
 */
export function commitEmpty(this: Git, message: string): Promise<string> {
  return this.commit(message, {
    flags: ["--allow-empty"],
  })
}
