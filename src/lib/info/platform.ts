import type { Git } from "../../Git"
import { versionCache } from "../cache"

/**
 * @example "windows"
 *
 * @since 0.1.0
 */
export async function platform(this: Git): Promise<string | undefined> {
  if (versionCache.version?.platform) return versionCache.version?.platform

  await this.version()

  return versionCache.version?.platform
}
