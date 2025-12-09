import { SignInLogo } from "@/common"
import styles from "./SignIn.module.css"
import Text from "@douyinfe/semi-ui/lib/es/typography/text"
import { SignInForm } from "@/components"

export const SignIn = () => {
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
                <SignInForm />
            </main>

            <footer className={styles.footer_logoH3}>
                <Text className={styles.logoH3}>
                    © 2025 SuSupport. All rights reserved.
                </Text>
            </footer>
        </div>
    )
}