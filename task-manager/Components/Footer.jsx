export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500 mt-10">
      © {new Date().getFullYear()} Task Manager App. All rights reserved.
    </footer>
  );
}
