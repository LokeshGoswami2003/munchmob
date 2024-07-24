import logo from "../../assets/logo1.png";

const LogoImage = () => {
    return (
        <div className="flex items-center">
            <img src={logo} alt="logo image" className="h-24 w-auto" />
        </div>
    );
};

export default LogoImage;
