import type { Git } from "../../Git"

/**
 * Get the repository default branch.
 *
 * @since 1.0.0
 */
export async function getDefaultBranch(this: Git): Promise<string | undefined> {
  const res = await this.listAllBranches("json")
  if (!res.head) return undefined

  const parts = res.head.split("/")

  return parts.length > 1 ? parts.slice(1).join("/") : undefined
}
