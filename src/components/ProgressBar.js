import React from 'react';
import { Progress } from "antd";
import { withRouter } from 'react-router-dom';
class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0
        };
        this.timer = 0;
    }

    componentDidMount() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1);
        }
    }
    countDown = () => {
        let percent = this.state.percent + 1;
        this.setState({ percent });
        if (percent >=100) {
            clearInterval(this.timer);
            setTimeout(()=>{
                this.setState({ percent:0 });
            },100)
          
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.location.pathname !=prevProps.location.pathname){
            this.timer = setInterval(this.countDown, 1);
        }
      }
    render() {

        const { percent } = this.state;
        return (
              
                <Progress
                strokeColor={{
                    from: "#108ee9",
                    to: "#87d068"
                }}
                style={{
                    padding:0,
                    margin:0,
                    lineHeight:1,
                    zIndex:999999999999999,
                    fontSize:'2px',
                    //opacity: percent >0 && percent <100 ? 1:0,
                    display:'block',
                    position:'fixed'
                   // backgroundColor:percent >0 && percent <100 ? 'transparent':'black',
                }}
                percent={percent}
                status="active"
                showInfo={false}
                strokeWidth={4}
            />
           
          
        )
    }
}

export default withRouter(ProgressBar);