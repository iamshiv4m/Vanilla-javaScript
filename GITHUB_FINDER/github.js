class Github {
    constructor() {
        this.client_id = 'b6451a5873ba5f3e9370';
        this.client_secret = '5e978fa4c7cf79bfcd3eb45f100f804147fdf8e5';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos 
        }
    }
}