export class State {
    public loading;
    public movies;

    constructor(loading: boolean = false, movies: Array<any> = []) {
        this.loading = loading;
        this.movies = movies;
    }
}
