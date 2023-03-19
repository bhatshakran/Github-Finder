class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const responseProfile = await fetch(`https://api.github.com/users/${user}
        ?client_id = ${GITHUB_CLIENT_ID}&client_secret = ${GITHUB_CLIENT_SECRET}`);

    const repoResponse =
      await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret = ${this.client_secret}`);
    const profileData = await responseProfile.json();
    const repoData = await repoResponse.json();
    return {
      profileData,
      repoData,
    };
  }
}
