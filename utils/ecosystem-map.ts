import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";

export const ecosystemMap: Record<string, Ecosystem> = {
  npm: Ecosystem.NPM,
  pypi: Ecosystem.PYPI,
  maven: Ecosystem.MAVEN,
  rubygems: Ecosystem.RUBYGEMS,
  cargo: Ecosystem.CARGO,
  go: Ecosystem.GO,
  github_actions: Ecosystem.GITHUB_ACTIONS,
  vscode: Ecosystem.VSCODE,
  github_repository: Ecosystem.GITHUB_REPOSITORY,
  homebrew: Ecosystem.HOMEBREW,
  nuget: Ecosystem.NUGET,
  openvsx: Ecosystem.OPENVSX,
  packagist: Ecosystem.PACKAGIST,
  terraform: Ecosystem.TERRAFORM,
  terraform_module: Ecosystem.TERRAFORM_MODULE,
  terraform_provider: Ecosystem.TERRAFORM_PROVIDER,
};
