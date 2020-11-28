import { movieApi, TVApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
    // state를 만들고 아래에 api를 통한 데이터 처리를 진행
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        loading : true,
        error: null,        
    }

    handleSubmit = () => {
        const {searchTerm } = this.state;
        if(searchTerm !=="") {
            this.searchByTerm(searchTerm);
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({loading: true});
        try {
            const {data:{results:movieResults}} = await movieApi.search(searchTerm);
            const {data:{results:tvResults}} = await TVApi.search(searchTerm);                        
            this.setState({movieResults, tvResults});            
        } catch {
            this.setState({error: "cant find results."});
        }
        finally {            
            this.setState({loading:false});
        }
    };

    // 렌더 처리는 아래 presenter에서 처리하도록 함
    render() {
        console.log(this.props);
        const { movieResult, tvResults, SearchTerm, loading, error } = this.state;
        console.log(this.state);
        return ( 
            <SearchPresenter 
                movieResult={movieResult}
                tvResults={tvResults}
                SearchTerm={SearchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
            />
        );
    }   
}