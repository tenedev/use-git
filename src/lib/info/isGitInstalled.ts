import type { Git } from "../../Git"

/**
 * @since 0.1.0
 */
export function isGitInstalled(this: Git): Promise<boolean> {
  return this.runCmdSafe("", ["--version"])
}
