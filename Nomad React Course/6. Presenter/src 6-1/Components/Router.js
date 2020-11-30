import React from "react";
//import {HashRouter as Router, Route } from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"; //browser 라우터 활용
import Home from "Routes/Home"
import TV from "Routes/TV"
import Search from "Routes/Search"
import Detail from "Routes/Detail"
import Header from "Components/Header"


export default () => (
    // 경로와 해당 컴포넌트 할당
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />        
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/"/>
        </Switch>
        </>
    </Router>
    // exact == 해당 경로와 완전히 동일한 경우만 router를 처리함  
    // 위 poupular 의 경우 경로가 같음으로 둘다 출력됨

    //Redirect == from의 페이지 상황인 경우 to로 이동

    //Switch == exact 관계 없이 한번의 router 렌더링에서 하나만 렌더되도록 바꿔버림
);