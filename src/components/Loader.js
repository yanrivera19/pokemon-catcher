const Loader = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
        >
            <div className="spinner-grow" role="status"></div>
            <div className="spinner-grow" role="status"></div>
            <div className="spinner-grow" role="status"></div>
        </div>
    );
};

export default Loader;
