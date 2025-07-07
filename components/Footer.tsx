export default function Footer() {
  return (
    <footer className="relative mt-12 w-full">
      {/* Footer Image */}
      <img
        src="/footer.png"
        alt="footer background"
        className="w-full h-auto object-cover"
      />

      {/* Text Overlay directly on image */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-1 z-20">
  <h2 className="text-black text-sm md:text-2xl   font-bold">
    Thank you for visiting my portfolio
  </h2>
  <p className="text-black text-sm md:text-base mt-2">
    Designed and developed by <span className="font-semibold">Eyuel Endale</span>
  </p>
</div>
    </footer>
  );
}
