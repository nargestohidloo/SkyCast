import MainLayout from "@/components/layout/MainLayout";
import MapsPage from "@/components/maps/MapsPage";

export default function page() {
  return (
    <div>
      <MainLayout>
        <MapsPage />
      </MainLayout>
    </div>
  )
}