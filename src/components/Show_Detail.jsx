import { useParams } from "react-router-dom";
import products from "../data/product";
import { useLayoutEffect } from "react";

export default function Show_Detail() {
    const { id } = useParams();
    const product = products.find(sp => sp.id === parseInt(id));

    useLayoutEffect (()=>{
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container my-5"><h2>Sản phẩm không tồn tại</h2></div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`/images/${product.hinh}`}
                        alt={product.tensp}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>{product.tensp}</h2>
                    <p className="text-muted">{product.mota}</p>
                    <h4 className="text-primary">{product.gia}đ</h4>
                    <p><strong>Loại sản phẩm:</strong> {product.loaijsp}</p>
                    <button className="btn btn-success">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    );
}
