import React, {Component} from 'react';

class ListFavMovie extends Component{

render(){
  
  //const likedByUsers = this.props.likedByUser;
  const users = this.props.users;
  const movies = this.props.movies;
  console.log(this.props.movies);
  let i;
  for(i=1; i<=5; i++){
  console.log("movie", movies[i])
  if(! this.props.likedByUser[movies[i].id]){
    this.props.likedByUser[movies[i].id] = ["This movie has no favs"]
  }}
  console.log(this.props.likedByUser)
  return (
    <div>
    {Object.keys(this.props.likedByUser).map(key=>(
    <div>
    <h3>{movies[key].name}</h3>
<	p>Liked By:</p>
	<ul className="movie-list ">
{this.props.likedByUser[key].map(user  => {
  if(users[user]){
    return <li key={users[user].name}>{users[user].name}</li>
	}
	else{
     return <p>None of the current users liked this movie</p>
    }
})}
	</ul>
	</div>
  ))}
</div>
)

}}
export default ListFavMovie;