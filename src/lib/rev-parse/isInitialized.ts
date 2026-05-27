import type { Git } from "../../Git"

/**
 * @since 0.1.0
 */
export function isInitialized(this: Git): Promise<boolean> {
  return this.runCmdSafe("rev-parse", ["--git-dir"])
}
