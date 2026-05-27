import type { Git } from "../../Git"
import type { DiffStats } from "../types"
import { parseNumStat } from "../utils"

/**
 * Get diff statistics for the working tree.
 *
 * @returns Aggregated diff statistics
 *
 * @example
 * ```ts
 * const stats = await git.diffStats()
 * // { files: 3, additions: 24, deletions: 6, binaryFiles: 0 }
 * ```
 *
 * @see {@link diffStatsStaged}
 * @see {@link diffStatsCommits}
 * @see {@link parseNumStat}
 *
 * @since 0.2.0
 */
export async function diffStats(this: Git): Promise<DiffStats> {
  const res = await this.diff(undefined, undefined, {
    flags: ["--numstat"],
  })

  return parseNumStat(res)
}
