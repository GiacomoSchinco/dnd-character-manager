export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen justify-center px-10 py-4 mx-10 sm:mx-30 bg-base-200">
      {children}
    </div>
  );
}