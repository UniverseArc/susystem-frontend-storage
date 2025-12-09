import { SignInLogo } from "@/common"
import styles from "./SignUp.module.css"
import Text from "@douyinfe/semi-ui/lib/es/typography/text"
import { SignUpForm } from "@/components/Auth/SignUp"

export const SignUp = () => {
    return (
        <div className={styles.wrapperSignIn}>
            <header className={styles.containerSignInForm}> 

                <div className={styles.logoBoxSx}>
                    <SignInLogo width={24} height={21} />
                </div>

                <div className={styles.logoTextSx}>
                    <Text className={styles.logoH1}>
                        SuSupport
                    </Text>

                    <Text className={styles.logoH2}>
                        Helpdesk Platform
                    </Text>
                </div>
            
            </header>

            <main>
                <SignUpForm />
            </main>

            <footer className={styles.footer_logoH3}>
                <Text className={styles.logoH3}>
                    © 2025 SuSupport. All rights reserved.
                </Text>
            </footer>
        </div>
    )
}