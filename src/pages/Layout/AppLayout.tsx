import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import { useLocation, useNavigate } from "react-router";
import { LayoutHeader, NavLayout } from "@/components";


export const AppLayout = () => {
  const { Header, Content, Sider } = Layout;

  const navigate = useNavigate();
  const location = useLocation();

  const username = localStorage.getItem("username") || "Guest";

  return (
    <Layout className={styles.appLayout}>
      <Sider>
        <NavLayout navigate={navigate} location={location} />
      </Sider>

      <Layout className={styles.appInnerLayout}>
        <Header>
          <LayoutHeader username={username} />
        </Header>

        <Content className={styles.appContent}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
