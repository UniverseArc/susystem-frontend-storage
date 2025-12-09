import { TicketChat } from "@/components"
import { AppLayout, NotFound, SignIn, SignUp, Tickets, WorkspacesPage } from "@/pages"
import { Profile } from "@/pages/Profile"
import { SingleWorkspacePage } from "@/pages/Workspaces/Workspace"
import { Route, Routes } from "react-router"

export const Path = {
  SignIn: '/',
  SignUp: '/signup',
  Tickets: '/tickets',
  TicketById: "/tickets/:ticketId",
  Workspaces: "/workspaces",
  WorkspacePage: "workspaces/:workspaceId",
  Profile: "/profile",
  NotFound: '*'
} as const

export const Routing = () => (
  <Routes>
    <Route path={Path.SignUp} element={<SignUp />} />
    <Route path={Path.SignIn} element={<SignIn />} />

    <Route element={<AppLayout />}>
      <Route path={Path.Tickets} element={<Tickets />} />
      <Route path={Path.TicketById} element={<TicketChat />} />
      <Route path={Path.Workspaces} element={<WorkspacesPage />} />
      <Route path={Path.WorkspacePage} element={<SingleWorkspacePage />} />      
      <Route path={Path.Profile} element={<Profile />} />
    </Route>

    <Route path={Path.NotFound} element={<NotFound />} />
  </Routes>
)
