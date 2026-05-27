import type { Git } from "../../Git"

/**
 * Create a fixup commit for autosquash.
 *
 * @example
 * ```ts
 * await git.commitFixup("abc123")
 * ```
 *
 * @since 0.3.0
 */
export function commitFixup(this: Git, commitId: string): Promise<string> {
  return this.commit(undefined, {
    "--fixup": commitId,
  })
}
