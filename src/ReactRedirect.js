import React, { Component, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import Routes from './routes';
import Loader from './components/Loader/Loader'
class ReactRedirect extends Component {
  constructor(props){
    super(props);
    this.state={loading:true}
  }
    componentDidMount() {
      const {location:{pathname}}=this.props;
      const url = `${process.env.REACT_APP_API_URL}/redirects`;
      axios.get(url).then((res) => {
          //console.log(res.data);
          const items = res.data;
          if (items && items.length > 0) {
            for(const item of items){
              if(item.from.replace(/\/+$/, "") === pathname.replace(/\/+$/, "")){
                this.props.history.push(item.to);
                break;
              }
            }
          }
        }).catch(e=>{
          //console.log(e);
          this.setState({loading:false})
        }).finally((f)=>{
          //console.log('finally');
          this.setState({loading:false})
        })
    }
    
    
    
  
    
  render() {
    const {loading} =this.state;
    return (
     <>
     {loading ? <Loader /> : <Routes/>}
     </>
    );
  }
}

export default withRouter(ReactRedirect);
