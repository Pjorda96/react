import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from "./Header";
import Navegacion from "./Navegacion";
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import Formulario from "./Formulario";
import Editar from "./Editar";

class Router extends Component{
  state = {
    posts: [],
  };

  componentDidMount() {
    this.obtenerPost();
  }

  obtenerPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        this.setState({
          posts: res.data,
        })
      })
  };

  borrarPost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if (res.status === 200) {
          const copy = [...this.state.posts];
          let posts = copy.filter((post) => post.id !== id);

          this.setState({
            posts
          })
        }
      })
  };

  crearPost = post => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
      .then(res => {
        if (res.status === 201) {
          Swal.fire(
            'Creado!',
            'Creado correctamente!',
            'success'
          );

          let postId = {id: res.data.id};
          const nuevoPost = Object.assign({}, res.data.post, postId);

          this.setState(prevState => ({
            posts: [...prevState.posts, nuevoPost]
          }))
        }
      })
  };

  editarPost = postActualizado => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postActualizado.id}`, {postActualizado})
      .then(res => {
        if (res.status === 200) {
          Swal.fire(
            'Actualizado!',
            'Actualizado correctamente!',
            'success'
          );

          // this.obtenerPost();     metodo real

          // metodo mock
          let postId = res.data.id;
          const posts = [...this.state.posts];
          // averiguar el indice que tiene el elemento en el state comparando el id del elemento con el id del post
          const postEditar = posts.findIndex(post => postId === post.id);

          posts[postEditar] = postActualizado;

          this.setState({
            posts
          });
        }
      })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header/>
            <Navegacion />
            <Switch>
              <Route exact path="/" render={() => {
                return (
                  <Posts
                    posts={this.state.posts}
                    borrarPost={this.borrarPost}
                  />
                )
              }}/>
              <Route exact path="/post/:postId" render={(props) => {
                let idPost = props.location.pathname.replace('/post/', '');
                const posts =this.state.posts;
                let filtro;
                filtro = posts.filter(post => (
                  post.id === Number(idPost)
                ));

                return (
                  <SinglePost
                    info={filtro[0]}
                  />
                )
              }}/>
              <Route exact path="/crear" render={() => {
                return (
                  <Formulario
                    crearPost={this.crearPost}
                  />
                )
              }}/>
              <Route exact path="/editar/:postId" render={(props) => {
                let idPost = props.location.pathname.replace('/editar/', '');
                const posts =this.state.posts;
                let filtro;
                filtro = posts.filter(post => (
                  post.id === Number(idPost)
                ));

                return (
                  <Editar
                    info={filtro[0]}
                    editarPost={this.editarPost}
                  />
                )
              }}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;