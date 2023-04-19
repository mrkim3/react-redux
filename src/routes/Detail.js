import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailPage() {
    const navigate = useNavigate();
    const param = useParams();
    const currentState = useSelector((state) => state);

    const onClickBackBtn = () => navigate(-1);
    const onClickHomeBtn = () => navigate("/");
    const todo = currentState.find((item) => item.id === parseInt(param.id));
    const others = currentState.filter((todo) => todo.id !== parseInt(param.id));

    return (
        <>
            <h1>{todo.text}</h1>
            <h5>Create at: {todo.id}</h5>

            <ul>

                {others.map((r) => (
                    <Link key={r.id} to={`/${r.id}`}>
                        <li>{r.text}</li>
                    </Link>
                ))}
            </ul>
            <button onClick={onClickBackBtn}> Go Back</button>
            <button onClick={onClickHomeBtn}> Go Home</button>
        </>
    );
};

export default DetailPage;