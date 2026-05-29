import type { Git } from "../../git"
import utils from "../../internal"

/**
 * Rename an existing branch.
 *
 * @example
 * ```ts
 * await renameBranch("old-name", "new-name")
 *
 * // Force rename a branch
 * await renameBranch("old-name", "new-name", { force: true })
 * ```
 *
 * @since 1.0.0
 */
export async function renameBranch(
  this: Git,
  from: string,
  to: string,
  opts: {
    /**
     * Force rename a branch.
     *
     * @default false
     */
    force?: boolean
  } = {},
): Promise<string> {
  opts = utils.mergeOpts({ force: false }, opts)

  if (!opts.force && (await this.branchExists(to))) {
    throw new Error(
      `Cannot rename branch "${from}" to "${to}": a branch named "${to}" already exists. Use { force: true } to overwrite it.`,
    )
  }

  return this.branch([from, to], {
    flags: [opts.force ? "-M" : "--move"],
  })
}
