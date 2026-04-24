import type {Metadata} from 'next';
import './globals.css';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppNavbar } from "@/components/layout/app-navbar";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase";

export const metadata: Metadata = {
  title: 'Corefinity Dashboard',
  description: 'Clean DevOps Dashboard for Infrastructure Management',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        <FirebaseClientProvider>
          <SidebarProvider>
            <div className="flex w-full">
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1 min-w-0">
                <AppNavbar />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                  {children}
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
