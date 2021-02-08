import React, { Component } from 'react';
import { connect } from 'react-redux';
class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: 1,
            oldcounts: 1,
        };
    }
    componentDidMount() {
        const { cart, id, dependent } = this.props;
        let qty = 1;
        if (dependent && cart && cart.items && cart.items.length > 0) {
            const item = cart.items.filter(i => i.product_id === id);
            if (item && item[0]) {
                qty = item[0].quantity;
                this.setState({ counts: qty, oldcounts: qty })
            }

        }

    }
    
    // componentDidUpdate(prevProps) {
    //     const { cart, id, dependent } = this.props;
    //     if (prevProps.cart != cart) {
    //         let qty = 0;
    //         if (!dependent && cart && cart.items && cart.items.length > 0) {
    //             const item = cart.items.filter(i => i.product_id === id);
    //             if (item && item[0]) {
    //                 qty = item[0].quantity;
    //                 this.setState({ counts: qty, oldcounts: qty })
    //             }
    //         }

    //     }

    // }

    changeCounter = (payload) => {
        let { counts } = this.state;
        counts = parseInt(counts) ?parseInt(counts):0;
        if (counts == 1 && payload == -1) {
            return;
        }
        if (counts > 0 || counts === 0 && payload == 1) {
            counts = counts + (payload);
            this.setState({ counts }, () => this.callback())
        }

    }

    handleInput = (e) => {
        const { value } = e.target;
        if (!isNaN(value)) {
            if (value == 0 || value > 0) {
                this.setState({ counts: value }, () => this.callback())
            }
        }
    }
    callback = () => {
        if (this.props.callback) {
            const { counts } = this.state;
                this.props.callback(counts);
           
        }


    }

    render() {
        const { counts } = this.state;
        return (
            <>
                <div className="value-button inc_value decrease"
                    onClick={e => this.changeCounter(-1)}
                >-</div>
                <input type="text" id="number_modal" 
                    onChange={this.handleInput}
                    className="number" value={counts} />
                <div className="value-button increase"
                    onClick={e => this.changeCounter(+1)}
                >+</div>
            </>

        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.shop.cart,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quantity);