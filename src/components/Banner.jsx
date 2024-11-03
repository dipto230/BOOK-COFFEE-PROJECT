import '/src/assets/banner.jpg';

const Banner = () => {
    return (
        <div
            className="hero bg-base-200 min-h-[600px]"
            style={{
                backgroundImage: `url('/src/assets/banner.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Optional content inside the banner */}
        </div>
    );
};

export default Banner;
