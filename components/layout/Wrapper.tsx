export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen justify-center px-10 my-4 mx-15 sm:mx-30">
      {children}
    </div>
  );
}