import Input from "../../components/Input";
import MainButton from "../../components/MainButton";
import Section from "../../components/Section";

const Login = () => {
    return (
        <Section width="40%">
            <h1>Digite sua API Key: </h1>
            <Input/>
            <MainButton>Entrar</MainButton>
        </Section>
    );
}

export default Login;