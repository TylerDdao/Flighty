import { openSans } from "../ui/font";
import SideNav from "../ui/sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${openSans.className} antialiased`}
        >
            <div className="flex h-screen flex-col md:flex-row md:overflow-hiddens">
                <div className="w-full flex-none md:w-64"><SideNav/></div>
                <div className="flex-grow overflow-y-auto p-12">{children}</div>
            </div>
        </body>
      </html>
    );
  }
  