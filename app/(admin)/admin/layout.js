import "./globals.css";

import Navigation from "./add-book/_component/navigation";

export default function AdminLayout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
