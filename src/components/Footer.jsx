const Footer = () => {
    return (
        <>
            <div className="bg-dark text-light">
                <div className="container-fluid bg-dark">
                    <h2 className="text-center pt-3">about us</h2>
                    <div className="row">
                        <div className="col-6 text-center p-2 ">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque perferendis magnam ad exercitationem fugiat numquam cum aut optio, nobis quo incidunt, ratione, doloremque accusantium! Fugiat hic veritatis perferendis sint reprehenderit assumenda culpa ea quod enim ipsa. Laborum facere, libero commodi id, voluptates officiis illum consequatur tempore, iure ducimus omnis vero.</p>
                        </div>
                        <div className="col-6 text-center p-2">
                            <h3>contact us</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit officia deserunt assumenda illum blanditiis, architecto nisi aperiam impedit unde quam!</p>
                            <div className="social">
                                <i className=" fs-4 me-3 bi bi-instagram"></i>
                                <i className=" fs-4 me-3 bi bi-twitter-x"></i>
                                <i className=" fs-4 me-3 bi bi-telegram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;