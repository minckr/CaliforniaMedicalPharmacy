import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="logo">
      <Image
        src="/brand/logo-compact.png"
        alt="California Medical Pharmacy"
        width={156}
        height={36}
        style={{ height: "36px", width: "auto" }}
        className="logo-mark"
        priority
      />
    </a>
  );
}
