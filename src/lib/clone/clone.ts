import type { Git } from "../../Git"
import utils from "../../internal"
import type { CloneOptions } from "../types"

/**
 * Clone a repository into a new directory
 *
 * @since 0.1.0
 */
export function clone(
  this: Git,
  repo: string,
  opts: CloneOptions = {},
): Promise<string> {
  return this.runCmd("clone", [...utils.buildArgs(opts), repo, opts.dir])
}
