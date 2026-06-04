import type { Git } from "../../git"
import { versionCache } from "../cache"

/**
 * Get the current platform Git is running on.
 *
 * @example "windows"
 *
 * @since 0.1.0
 */
export async function platform(this: Git): Promise<string | undefined> {
  if (versionCache.version?.platform) return versionCache.version?.platform

  await this.version()

  return versionCache.version?.platform
}
