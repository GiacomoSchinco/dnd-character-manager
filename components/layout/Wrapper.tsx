export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-20 py-4 mx-0 sm:mx-30 bg-base-200">
      {children}
    </div>
  );
}