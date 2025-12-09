import { Link, useNavigate } from "react-router"
import { useLoginMutation } from "@/api"
import { validateRulesPswd, validateRulesUsername, type FormInputs } from "./SignIn.types"
import Text from "@douyinfe/semi-ui/lib/es/typography/text"
import styles from "./styles/SignIn.module.css"
import { Button, Form } from "@douyinfe/semi-ui"

export const SignInForm = () => {
    const [login] = useLoginMutation()
    const navigate = useNavigate();

    const { Input } = Form;

    const handleSubmit = async (data: FormInputs) => {
        try {
            const response = await login(data).unwrap();
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('username', data.username);
            navigate('/tickets');

        } catch (error) {
            console.error("Ошибка при логине:", error);
        }
    };

    return (
        <div className={styles.wrapperForm}>
            <Text className={styles.formWelcome} >
                С возвращением!
            </Text>

            <Text className={styles.formPlease}>
                Пожалуйста, войдите в свою учетную запись:
            </Text>

            <Form onSubmit={(values, e) => { e?.preventDefault(); handleSubmit(values); }} className={styles.wrapInputsAndButton}>
                <div className={styles.wrapInputs}>
                    <Input
                        field="username"
                        trigger='blur'
                        rules={validateRulesUsername}
                        type="Email"
                        label="Email"
                    />
                    <Input
                        field="password"
                        trigger='blur'
                        rules={validateRulesPswd}
                        type="password"
                        label="Пароль"
                    />
                    <Button className={styles.loginButton} type="primary" theme="solid" htmlType="submit">Войти</Button>
                </div>
            </Form>

            <Text className={styles.formNewbie}>
                Нет учетной записи?
                <Link to="/signup"> Зарегистрируйтесь.</Link>
            </Text>

        </div>
    )
}

