import Dashboard from "@/components/dashboard/DashboardPage";
import MainLayout from "@/components/layout/MainLayout";

export default function page() {
  return (
    <div>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  )
}