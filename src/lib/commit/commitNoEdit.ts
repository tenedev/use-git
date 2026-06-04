import type { Git } from "../../git"

/**
 * Amend last commit without editing the message.
 *
 * @example
 * ```ts
 * await git.commitNoEdit()
 * ```
 *
 * @since 0.3.0
 */
export function commitNoEdit(this: Git): Promise<string> {
  return this.commit(undefined, {
    flags: ["--amend", "--no-edit"],
  })
}
