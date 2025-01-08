// "use client";

import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
//   const router = useRouter();
//   const [pending, startTransition] = useTransition();

//   const shouldShow = useSyncExternalStore(
//     emptySubscribe,
//     () => window.top === window,
//     () => false,
//   );

//   if (!shouldShow) return null;

  return (
    <div
      className=
      " fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex justify-center gap-3"
    >
 <div className="py-2 text-center text-lg">Blogs</div>
 <nav><Link href="/" className=" hover:bg-blue-500 text-green-600">Home</Link>
 <Link href="/about" className=" hover:bg-blue-500 text-green-600">About</Link>
 <Link href="/contact" className=" hover:bg-blue-500 text-green-600">Contact</Link></nav>
    </div>
  );
}
