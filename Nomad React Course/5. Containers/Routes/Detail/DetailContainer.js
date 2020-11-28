import { movieApi, TVApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const {
            location: { pathname }
        } = props;
        this.state = {
            result: null,
            error: null,
            loading : true,
            isMovie : pathname.includes("/movie/")
        }
    }    

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: {push}            
        } = this.props;      

        const {isMovie} = this.state;
        const parsedId = parseInt(id);
        
        // 확인후 숫자가 아니라면 초기화
        if(isNaN(parsedId)) {
            push("/");
        }
        let result = null;
        try{
            if(isMovie){
                ({data:result} = await movieApi.movieDetail(parsedId));                
            }
            else {
                ({data:result} = await TVApi.showDetail(parsedId));                
            }
        } catch{
            this.setState({error: "cant find anything."});
        } finally{
            this.setState({loading: false, result});
        }
    }

    // 렌더 처리는 아래 presenter에서 처리하도록 함
    render() {        
        const { result, error, loading } = this.state;
        console.log(this.state);
        return ( 
            <DetailPresenter 
                result={result}
                error= {error}
                loading={loading}
            />
        );
    }   
}