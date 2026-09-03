import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="logo">
      <Image
        src="/brand/logo-compact.png"
        alt="California Medical Pharmacy"
        width={130}
        height={30}
        style={{ height: "30px", width: "auto" }}
        className="logo-mark"
        priority
      />
    </a>
  );
}
