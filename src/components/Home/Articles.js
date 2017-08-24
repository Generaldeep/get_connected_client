import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../actions';
import { Card, Grid, Image, Feed } from 'semantic-ui-react';


const renderArticles = articles => articles.map((article, i) => (
  <Feed.Event key={i}>
    <Feed.Label href={article.url} target="_blank">{article.title}</Feed.Label>
    <br /><Image href={article.url} src={article.urlToImage} target="_blank" />
    <Feed.Content>
      <Feed.Summary>
        <Feed.Date>{article.publishedAt}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{article.description}</Feed.Extra>
      <br /><Feed.Meta />
      <br /><br /></Feed.Content>
  </Feed.Event>
    ));

class Articles extends Component {

  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    const { articles, jobs } = this.props;
    if (jobs) {
      return (
        <div>{articles.length && renderArticles(articles)}</div>
      );
    }
  }
}

export default connect(({ articles, jobs }) => ({ articles, jobs }), { getArticles })(Articles);
