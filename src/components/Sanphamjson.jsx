import axios from "axios";
import { useEffect, useState } from "react";

export default function ConnectAP() {
  const [products, setProducts] = useState([]); // Tên biến là products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lưu ý: Nếu bà chạy json-server cổng 3001 thì đổi số 3000 thành 3001 nhé
    // Và đường dẫn phải là /data vì trong file JSON bà đặt tên mảng là "data"
    axios
      .get("http://localhost:3000/data") 
      .then((res) => {
        setProducts(res.data || []); // Đổ dữ liệu vào products
      })
      .catch((err) => {
        console.error("Lỗi:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center w-100">Đang tải...</p>;
  if (error) return <p className="text-center w-100 text-danger">Lỗi khi tải dữ liệu.</p>;

  return (
    <div className="container">
      <h2 className="my-3 text-center">Sản phẩm bán chạy</h2>
      <div className="row">
        {/* SỬA CHỖ NÀY: Thay bc.map thành products.map */}
        {products.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card mb-4">
              <img
                className="card-img-top"
                // Kiểm tra xem ảnh để trong public/images hay src/assets nhé
                src={`/images/${sp.hinh}`} 
                alt={sp.tensp}
              />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text text-truncate">{sp.mota}</p>
                <p className="card-text text-danger fw-bold">{sp.gia.toLocaleString()}đ</p>
                <a href="#" className="btn btn-primary btn-sm px-4">
                  Xem Chi Tiết
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}