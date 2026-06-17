import React from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { Button } from "@/components/ui/button";

async function DashboardPage() {
  const accounts = await getUserAccounts();

  return (
    <div className="space-y-8">
      {/* Budget Progress */}

      {/* Overview */}

      {/* Account Grid */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Accounts</h1>

        <CreateAccountDrawer>
          <Button>Add Account</Button>
        </CreateAccountDrawer>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {accounts?.map((account) => (
          <div
            key={account.id}
            className="rounded-lg border p-4 shadow-sm"
          >
            <h3 className="font-semibold">{account.name}</h3>

            <p className="text-sm text-muted-foreground">
              {account.type}
            </p>

            <p className="mt-2 text-xl font-bold">
              ₹{account.balance}
            </p>

            <p className="text-sm text-muted-foreground">
              {account._count.transactions} Transactions
            </p>

            {account.isDefault && (
              <span className="mt-2 inline-block rounded bg-green-100 px-2 py-1 text-xs">
                Default
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;