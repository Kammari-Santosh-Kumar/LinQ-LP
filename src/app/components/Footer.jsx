import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-center py-12 bg-[#0F2027] text-gray-400 text-sm border-t border-gray-700 mt-16">
      © {new Date().getFullYear()} LinQ. Driven by community. Powered by purpose.
    </footer>
  );
}
