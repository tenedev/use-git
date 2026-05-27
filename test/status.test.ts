import git, { createGit } from "../src"
import { setCwd } from "../src/state"
import { createTempRepo } from "./utils/git"

const repo = createTempRepo()

setCwd(repo.repoPath)

const git2 = createGit()

console.log(await git.cwd())
console.log(await git2.cwd())

repo.cleanup()
