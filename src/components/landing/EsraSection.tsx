import React from "react";
import Image from "next/image";

export default function EsraSection() {
    return (
        <section className="mxd-section padding-default">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <h2 className="display-4 fw-bold mb-4" style={{ color: "#333", marginTop: "100px" }}>
                            Esra harika bir kız
                        </h2>
                        <div className="d-flex justify-content-center">
                            <div
                                style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                    border: "5px solid #d4af37"
                                }}
                            >
                                <Image
                                    src="/img/haughty_queen.png"
                                    alt="Kibirli Kraliçe"
                                    width={512}
                                    height={512}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
