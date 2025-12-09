import { useState } from "react";
import { TicketsMain } from "@/components";
import { useGetTicketsQuery } from "@/api";
import { Spin } from "@douyinfe/semi-ui";

export const Tickets = () => {

  const [filters, setFilters] = useState<string[]>([]); 

  const [workspaceId, setWorkspaceId] = useState<number | null>(null); 

  const { data: tickets, isLoading } = useGetTicketsQuery(
    {
      filter: filters.length ? filters : undefined,
      workspaceId: workspaceId ?? undefined,
    },
    {
      pollingInterval: 2000
    }
  );

  if (isLoading || !tickets) return <Spin/>;

  return (
    <TicketsMain
      tickets={tickets}
      filters={filters}
      setFilters={setFilters}
      workspaceId={workspaceId}
      setWorkspaceId={setWorkspaceId}
    />
  );
};