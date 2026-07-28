import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="logo">
      <Image
        src="/brand/logo-compact.png"
        alt="California Medical Pharmacy"
        width={216}
        height={50}
        className="logo-mark"
        priority
      />
    </a>
  );
}
