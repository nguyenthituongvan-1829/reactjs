import "../App.css";
import newsList from "../data/tintuc";

export default function Tintuc() {
    return (
        <div>

            {/* HEADER */}
            <div className="container">
                <section className="tintuc_header">
                    <div className="header-content text-white">
                        <h1>Tin tức</h1>
                        <p>
                            <a href="/" className="text-white">Trang chủ</a> / Tin tức
                        </p>
                    </div>
                </section>
            </div>

            {/* CONTENT */}
            <section className="tintuc container my-5">
                <div className="row">

                    <div className="col-md-8">
                        <div className="row">

                            {newsList.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`col-md-12 ${index === 0 ? "my-4" : "mb-4"}`}
                                >
                                    <div className="card">
                                        <img
                                            src={item.image}
                                            className="card-img-top"
                                            alt=""
                                        />
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p>{item.content}</p>
                                            <a className="btn btn-primary">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* SIDEBAR GIỮ NGUYÊN */}
                    <div className="col-md-4 mt-5">

                        <h5>Danh mục</h5>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">Bánh sinh nhật</li>
                            <li className="list-group-item">Bánh cưới</li>
                            <li className="list-group-item">Bánh ngọt</li>
                            <li className="list-group-item">Mẹo làm bánh</li>
                        </ul>

                        <h5>Tin mới nhất</h5>

                        <div className="d-flex mb-3">
                            <img src="/images/tintuc2.jpg" width="80" height="60" style={{ objectFit: "cover" }} />
                            <div className="ms-3">
                                <small>31/07/2023</small>
                                <p className="mb-0">Bánh ngọt</p>
                            </div>
                        </div>

                        <div className="d-flex mb-3">
                            <img src="/images/tintuc1.jpg" width="80" height="60" style={{ objectFit: "cover" }} />
                            <div className="ms-3">
                                <small>31/07/2023</small>
                                <p className="mb-0">Bánh ngọt</p>
                            </div>
                        </div>

                        <div className="d-flex mb-3">
                            <img src="/images/tintuc3.jpg" width="80" height="60" style={{ objectFit: "cover" }} />
                            <div className="ms-3">
                                <small>31/07/2023</small>
                                <p className="mb-0">Bánh ngọt</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <img src="/images/tintuc4.jpg" width="80" height="60" style={{ objectFit: "cover" }} />
                            <div className="ms-3">
                                <small>31/07/2023</small>
                                <p className="mb-0">Bánh ngọt</p>
                            </div>
                        </div>

                        <h5>Bánh nổi bật</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Bánh Red Velvet</li>
                            <li className="list-group-item">Cupcake socola</li>
                            <li className="list-group-item">Tart trái cây mùa hè</li>
                        </ul>

                    </div>

                </div>
            </section>
        </div>
    );
}