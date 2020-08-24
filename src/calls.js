import { Octokit } from "@octokit/core";

const REPOSITORIES_ENDPOINT = "GET /user/repos";
const ISSUES_ENDPOINT = "GET /repos/{owner}/{repo}/issues";

export const fetchRepositories = async (token) => {
  const octokit = new Octokit({
    auth: token,
  });
  return octokit.request(REPOSITORIES_ENDPOINT);
};

export const fetchIssues = async (token, owner, repo) => {
  const octokit = new Octokit({
    auth: token,
  });
  return octokit.request(ISSUES_ENDPOINT, {
    owner: owner,
    repo: repo,
  });
};
