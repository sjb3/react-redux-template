import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import palaceImg from "../palace.jpeg";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount() {

  // }

  // REDUX way

  render() {
    // console.log(">>>", this.props);

    // const { posts } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={palaceImg} alt="palaceImg" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Data Available</div>
    );
    return <div className="container home">{postList}</div>;
  }
}

const mapStateProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateProps)(Home);
