import { useState } from "react";
// Nhớ thêm font hoặc icon nếu bà cần, ở đây tui dùng class Bootstrap 5 chuẩn
export default function GioiThieu() {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-5">
                {/* CỘT TRÁI: HÌNH ẢNH SO LE (Nghệ thuật hơn) */}
                <div className="col-md-6 order-last order-md-first">
                    <div className="row g-3">
                        <div className="col-7">
                            <img
                                alt="Bakery Space"
                                className="img-fluid rounded-4 shadow-sm"
                                src="images/BMC3.jpg"
                                style={{ transform: 'translateY(20px)', objectFit: 'cover', height: '400px', width: '100%' }}
                            />
                        </div>
                        <div className="col-5">
                            <img
                                alt="Handmade Cake"
                                className="img-fluid rounded-4 shadow-sm mb-3"
                                src="images/BM2.jpg"
                                style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                            />
                            <div className="bg-warning rounded-4 p-4 text-center text-white shadow-sm d-none d-md-block" style={{ backgroundColor: '#d1a373 !important' }}>
                                <h2 className="fw-bold mb-0">10+</h2>
                                <small>Năm kinh nghiệm</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CỘT PHẢI: NỘI DUNG */}
                <div className="col-md-6 ps-md-5">
                    <h6 className="text-uppercase fw-bold" style={{ color: '#76ea59', letterSpacing: '2px' }}>Về chúng tôi</h6>
                    <h1 className="display-5 fw-bold mb-4" style={{ color: '#a1d591' }}>
                        Trải Nghiệm Bánh Ngọt Ấm Áp Với 
                    </h1>
                    <p className="lead text-muted mb-4">
                        Tiệm bánh mang tông nâu trầm ấm, không gian cổ điển với ánh đèn vàng dịu
                        nhẹ, tạo cảm giác thư giãn và gần gũi. Bánh được làm thủ công mỗi ngày, vị
                        ngọt nhẹ, mềm mịn.
                    </p>
                    
                    <div className="row g-4 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-light p-3 me-3">
                                    <i className="fa-solid fa-mug-hot" ></i>
                                </div>
                                <span className="fw-bold">Không gian cổ điển</span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-light p-3 me-3">
                                    <i className="fa-solid fa-stroopwafel" ></i>
                                </div>
                                <span className="fw-bold">Bánh tươi mỗi ngày</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted border-start border-4 ps-3 italic">
                        "Chúng tôi không chỉ bán bánh, chúng tôi bán sự tận tâm và những khoảnh khắc ngọt ngào nhất bên tách trà chiều."
                    </p>
                    
                    <button className="btn btn-lg mt-3 px-5 py-3 shadow-sm" 
                            style={{ backgroundColor: '#4a362d', color: '#fff', borderRadius: '30px' }}>
                        Khám Phá Menu
                    </button>
                </div>
            </div>
        </div>
    );
}