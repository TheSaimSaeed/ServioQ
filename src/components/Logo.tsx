import Image from "next/image";

export function Logo({
  size = 28,
  textClassName = "text-[19px] font-extrabold tracking-tight text-ink",
  className = "",
}: {
  size?: number;
  textClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt=""
        width={size}
        height={size}
        className="shrink-0"
        priority
      />
      <span className={textClassName}>ServioQ</span>
    </span>
  );
}
