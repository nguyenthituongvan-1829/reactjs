import React from "react";
import { Link } from "react-router-dom";
import newsList from "../data/tintuc";

export default function Tintuc() {
  const styles = {
    headerBg: { 
      backgroundColor: "#96cf96", // Màu nâu trầm
      padding: "60px 0",
      marginBottom: "40px"
    },
    card: {
      border: "none",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      boxShadow: "0 10px 20px rgba(109, 76, 65, 0.1)"
    },
    tag: {
      backgroundColor: "#57e087", // Màu vàng đất
      color: "white",
      padding: "5px 15px",
      borderRadius: "50px",
      fontSize: "0.8rem"
    },
    btnDetail: {
      backgroundColor: "#9cf98e", // Màu cam đất
      border: "none",
      borderRadius: "10px",
      padding: "10px 25px"
    }
  };

  return (
    <div style={styles.pageBg}>
      {/* HEADER */}
    

      {/* MAIN CONTENT */}
      <div className="container pb-5">
        <div className="row">
          {/* DANH SÁCH TIN */}
          <div className="col-lg-8">
            {newsList.map((item) => (
              <div key={item.id} className="card mb-5" style={styles.card}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img 
                      src={item.image} 
                      className="img-fluid h-100" 
                      style={{ objectFit: "cover", minHeight: "250px" }} 
                      alt={item.title} 
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-4 d-flex flex-column h-100">
                      <div className="mb-2">
                        <span style={styles.tag}>{item.tag}</span>
                        <small className="text-muted ms-3">{item.date}</small>
                      </div>
                      <h3 className="fw-bold mb-3" style={{ color: "#a4e4a5" }}>{item.title}</h3>
                      <p className="text-secondary flex-grow-1">{item.content}</p>
                      <button className="btn btn-primary mt-3 w-fit" style={styles.btnDetail}>
                        Đọc thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4" style={{ backgroundColor: "#e9edc9" }}> {/* Màu xanh lá nhạt ấm */}
              <h5 className="fw-bold mb-4" style={{ color: "#96cf96" }}>
                <i className="bi bi-bookmark-heart me-2"></i>Chuyên mục
              </h5>
              <ul className="list-unstyled">
                {["Bánh ngọt Pháp", "Mochi Nhật Bản", "Mẹo trang trí", "Khuyến mãi"].map((cat, i) => (
                  <li key={i} className="mb-3 pb-2 border-bottom border-white d-flex justify-content-between align-items-center">
                    <span className="text-dark">{cat}</span>
                    <i className="bi bi-chevron-right small text-muted"></i>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <h5 className="fw-bold mb-4" style={{ color: "#96cf96" }}>Ảnh từ tiệm</h5>
                <div className="row g-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="col-6">
                      <img 
                        src={`/images/BD1${i}.jpg`} 
                        className="img-fluid rounded-3 shadow-sm" 
                        alt="gallery" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}