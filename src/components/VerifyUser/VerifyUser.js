import React, { Component } from 'react';
import { POST } from '../../services/httpService';
import { API_AJAX_URL } from '../../constants/appConstant';
import Loader from '../../components/Loader/Loader'

class VerifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      loading:true
    };
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = async () => {
    try {
      const token = this.props.match.params.token;
      const res = await POST({
        url: API_AJAX_URL + '/register',
        payload: { token: token },
      });
      if (res && res.data && res.data.status) {
        
        this.setState({
          status: true,
          loading:false
        });
      } else {
        this.setState({
          status: false,
          loading:false
        });
      }
    } catch (e) {
      this.setState({
        status: false,
        loading:false
      });
    }
  };

  render() {
    return (
      <>
      {
        this.state.loading ? <Loader />:
      
      <div style={{marginTop:'100px',padding:'50px'}}>
        <section className="banner-container-verify" style={{ position: 'relative' }}>
          {this.state.status
            ? 'Your account has been verified successfully.'
            : 'Sorry, We are unable to find the details to verify the account.'}
        </section>
      </div>
  }
  </>

    );
  }
}

export default VerifyUser;
