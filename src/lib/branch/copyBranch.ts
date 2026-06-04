import type { Git } from "../../git"
import utils from "../../internal"

/**
 * Copy a branch.
 *
 * @example
 * ```ts
 * await copyBranch("main", "backup-main")
 *
 * // Force copy a branch
 * await copyBranch("main", "backup-main", { force: true })
 * ```
 *
 * @since 1.0.0
 */
export function copyBranch(
  this: Git,
  source: string,
  target: string,
  opts: {
    /**
     * Force copy a branch.
     *
     * @default false
     */
    force?: boolean
  } = {},
): Promise<string> {
  opts = utils.mergeOpts({ force: false }, opts)

  return this.branch([source, target], {
    flags: [opts.force ? "-C" : "--copy"],
  })
}
