import type { Git } from "../../git"

/**
 * @since 0.1.0
 */
export async function isCleanWorkingTree(this: Git): Promise<boolean> {
  const res = await this.runCmd("status", ["--porcelain"])
  return !res.length
}
