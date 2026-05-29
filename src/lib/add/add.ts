import type { Git } from "../../git"
import utils from "../../internal"
import type { AddOptions } from "../types/AddOptions"

/**
 * Add file contents to the index.
 *
 * @since 0.1.0
 */
export function add(
  this: Git,
  args: "." | readonly string[] = ".",
  opts: AddOptions = {},
): Promise<string> {
  return this.runCmd("add", [
    ...utils.buildArgs(opts),
    ...(Array.isArray(args) ? args : [args]),
  ])
}
