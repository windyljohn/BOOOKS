import classes from "./layout.module.css";

import Sidebar from "./_components/sidebar";

export default function RootLayout({ children }) {
  return (
    <main>
      <div className={classes.wrapper}>
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
