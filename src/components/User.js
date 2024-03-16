import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  componentDidMount() {
    this.getUserApi();
  }
  async getUserApi() {
    let data = await axios.get(
      "https://api.github.com/users/MunisifSusmithaReddy"
    );
    this.setState({
      userInfo: data?.data,
    });
  }
  render() {
    const { userInfo } = this.state;
    const { avatar_url, login, public_repos, html_url} = userInfo;
    console.log("userInfouserInfo", userInfo);
    return (
      <div className='user-info'>
       <img src={avatar_url} />
       <h3>{login}</h3>
       <h3>Repositories: {public_repos}</h3>
       <h3>Click to view Repositories: <Link to={html_url}>Click here</Link></h3>
      </div>
    );
  }
}
export default User;
