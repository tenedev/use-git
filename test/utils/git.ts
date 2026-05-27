import { execSync } from "node:child_process"
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { setCwd } from "../../src/state"

export function createTempRepo() {
  const repoPath = join(
    tmpdir(),
    `use-git-test-${Math.random().toString(36).slice(2)}`,
  )

  if (existsSync(repoPath)) {
    rmSync(repoPath, { recursive: true, force: true })
  }

  mkdirSync(repoPath, { recursive: true })

  // Initialize git repo
  execSync("git init", { cwd: repoPath })

  // Set user config for commits
  execSync('git config user.email "test@example.com"', { cwd: repoPath })
  execSync('git config user.name "Test User"', { cwd: repoPath })

  setCwd(repoPath)

  return {
    repoPath,
    cleanup: () => {
      rmSync(repoPath, { recursive: true, force: true })
    },
  }
}
