// resources/js/Layouts/AppLayout.tsx
import React, { useState } from 'react';
import Header from '@/Layouts/Header';
import Sidebar from '@/Layouts/Sidebar';
import Footer from '@/Layouts/Footer';
import Main from '@/Layouts/Main';
interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Main>{children}</Main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
