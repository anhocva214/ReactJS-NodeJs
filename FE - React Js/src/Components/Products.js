import React, { Component } from 'react';
import axios from 'axios';

const dataProducts = () =>
    axios.get('/getdata')
        .then((res) => res.data);

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    // UNSAFE_componentWillMount() {
    //     dataProducts().then((res) => {
    //         this.setState({
    //             data: res
    //         })
    //     });
    // }

    printProducts = () => {
        dataProducts().then((res) => {
            this.setState({
                data: res
            })
        });
        // console.log("data at print", this.state.data);
        if (this.state.data !== null) {
            return this.state.data.map((value, key) => {
                return (
                    <div key={key} className="col-4" style={{ marginTop: '20px' }}>
                        <div className="card text-left">
                            <img style={{ width: '100%', height: '200px', marginTop: '20px' }} className="card-img-top" src={value.product_img} alt="" />
                            <div className="card-body">
                                <h4 className="card-name">{value.product_name}</h4>
                                <p className="card-price">{value.product_price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="col">
                <div className="row">
                    {this.printProducts()}
                </div>
            </div>
        )
    }
}