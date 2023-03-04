import { useNavigate } from "react-router-dom";

export default function NewsLetter() {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate("/about");
    }

    return (
        <section>
            <h3>Sign Up For Our Newsletter</h3>
            <button onClick={goToAboutPage}>Sign me up for hourly updates!</button>
        </section>
    );
};