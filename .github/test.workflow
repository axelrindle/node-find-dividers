workflow "Run Tests" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  needs = ["Install dependencies"]
  args = "test"
}
