import React, {Component} from 'react';
import Post from "./Post";

class Listado extends Component {

  mostrarPost = () => {
    const posts = this.props.posts;

    if (posts.length === 0) return null;
    return (
      <React.Fragment>
        {Object.keys(posts).map(post => (
          <Post
            key={post}
            info={posts[post]}
            borrarPost={this.props.borrarPost}
          />
        ))}
      </React.Fragment>
    )
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope={"col"}>ID</th>
            <th scope={"col"}>Titulo</th>
            <th scope={"col"}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.mostrarPost()}
        </tbody>
      </table>
    );
  }
}

export default Listado;
