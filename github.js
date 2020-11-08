class Github{
    constructor() {
        this.client_id = "351e55b6986b000f47af";
        this.client_secret = "08f6a48f8664f4d3c1a9f37c95e92248689341c9";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const responseProfile = await fetch(`https://api.github.com/users/${user}
        ?client_id = ${this.client_id}&client_secret = ${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret = ${this.client_secret}`);
        const profileData = await responseProfile.json();
        const repoData = await repoResponse.json();
        return {
            profileData,
            repoData
        }
    }
}