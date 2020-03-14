import React, { Component } from 'react';
import axios from 'axios';

const addProducts = (product_name, product_price, product_img) => axios.post('/add', { product_name, product_price, product_img }).then((resp) => resp.data);

export default class AddProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            product_img: ''
        }
    }

    isChangeData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    addProducts = () => {
        var { product_name, product_price, product_img } = this.state;
        addProducts(product_name, product_price, product_img).then((resp) => console.log(resp));
    }

    render() {
        return (

            <form className="col-4 mx-auto">
                <div className="form-group">
                    <label htmlFor="product_name">Tên sản phẩm</label>
                    <input onChange={(event) => this.isChangeData(event)} type="text" className="form-control" name="product_name" id="product_name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group">
                    <label htmlFor="product_price">Giá sản phẩm</label>
                    <input onChange={(event) => this.isChangeData(event)} type="text" className="form-control" name="product_price" id="product_price" placeholder="Nhập giá sản phẩm" />
                </div>
                <div className="form-group">
                    <label htmlFor="product_img">Ảnh sản phẩm</label>
                    <input onChange={(event) => this.isChangeData(event)} type="text" className="form-control" name="product_img" id="product_img" placeholder="Nhập ảnh sản phẩm" />
                </div>
                <button onClick={() => this.addProducts()} type="reset" name="btn-submit" id="btn-submit" className="btn btn-primary btn-lg btn-block">Thêm sản phẩm</button>
            </form>


        )
    }
}
