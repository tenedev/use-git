export type GitArgs = ReadonlyArray<string | boolean | undefined>

export type Category =
  | "add"
  | "branch"
  | "checkout"
  | "clone"
  | "config"
  | "commit"
  | "describe"
  | "diff"
  | "fetch"
  | "init"
  | "log"
  | "merge"
  | "pull"
  | "push"
  | "rebase"
  | "remote"
  | "reset"
  | "rev-parse"
  | "restore"
  | "revert"
  | "status"
  | "switch"
  | "tag"

export interface CreateGit {
  cwd?: string
  debug?: boolean
}
