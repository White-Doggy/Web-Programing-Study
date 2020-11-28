import axios from "axios"
// 그냥 fetch 하는 것 보다 훨씬 보기 쉽게 실행가능

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key:"6b7fc201ee97ccc25f3725d4ecc2a592",
        language: "en-US"
    }
})
// api 호출 공통 내용 부분

//api.get("tv/popular");
// api 중 병동되는 내용에 대한 부분 호출

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),    
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
        // api 예시에 추가적 파라미터를 요구하는 경우 위와 같이 생성해 준다.
    }),
    search: term => api.get("search/movie",{
        params: {
            query : encodeURIComponent(term)
            // 공백과 특수문자 같은 경우도 검색되도록 하기 위하여 변형해줘야함
        }
    })
}

export const TVApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`,{
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/tv",{
        params: {
            query : encodeURIComponent(term)
            // 공백과 특수문자 같은 경우도 검색되도록 하기 위하여 변형해줘야함
        }
    })
}
