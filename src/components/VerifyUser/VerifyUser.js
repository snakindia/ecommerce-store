import React, { Component } from 'react';
import { POST } from '../../services/httpService';
import { API_AJAX_URL } from '../../constants/appConstant';

class VerifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
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
        });
      }
    } catch (e) {}
  };

  render() {
    return (
      <div style={{marginTop:'100px',padding:'50px'}}>
        <section className="banner-container-verify" style={{ position: 'relative' }}>
          {this.state.status
            ? 'Your account has been verified successfully.'
            : 'Sorry, We are unable to find the details to verify the account.'}
        </section>
      </div>
    );
  }
}

export default VerifyUser;
