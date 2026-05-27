import type { Git } from "../../Git"

/**
 * @since 0.1.0
 */
export function isRepo(this: Git): Promise<boolean> {
  return this.runCmdSafe("rev-parse", ["--is-inside-work-tree"])
}
