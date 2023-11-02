export interface Movie {
    id: number
    overview: string
    title: string
    posterPath: string
    backdropPath: string
}

export interface Genres {
    id: number
    name: string
}

export interface MovieDetail extends Movie{
    imdb_id: string
    genres?: Array<Genres>
    releaseDate: string
    popularity: number
}

export interface Avatar {
    gravatar: {
        hash: string
    }
    tmdb: {
        avatarPath: string
    }
}
export interface Profile {
    avatar: Avatar
    id: number
    userName: string
}