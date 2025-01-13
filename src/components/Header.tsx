import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-24 py-4 mb-10">
      <div className="flex items-center">
        <Image
          src="/images/logos/logo_md.svg"
          width={200}
          height={280}
          alt="Global Nomad Logo"
        />
      </div>
      <nav className="flex space-x-4">
        <a href="/login" className="hover:underline">
          로그인
        </a>
        <a href="/signup" className="hover:underline">
          회원가입
        </a>
      </nav>
    </header>
  );
}
