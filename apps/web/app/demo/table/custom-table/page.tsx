// app/demo/table/table-custom/page.tsx
"use client";
import React from "react";
import { useUsers } from "./useUsers";
import TableCustom from "./TableCustom";

const Page: React.FC = () => {
  const { users, isLoading, error } = useUsers();

  return (
    <main style={{ padding: 24 }}>
      <h1>Users Table</h1>
      <TableCustom users={users} isLoading={isLoading} error={error} />
    </main>
  );
};

export default Page;
