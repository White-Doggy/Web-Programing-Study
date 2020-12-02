import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "api";

export default class extends React.Component {
  // state를 만들고 아래에 api를 통한 데이터 처리를 진행
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const {
        data: { results: topRated },
      } = await TVApi.topRated();
      const {
        data: { results: popular },
      } = await TVApi.popular();
      const {
        data: { results: airingToday },
      } = await TVApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Cant find TV information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // 렌더 처리는 아래 presenter에서 처리하도록 함
  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
