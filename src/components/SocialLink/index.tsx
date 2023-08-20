import Image from "next/image";
import Link from "next/link";

type SocialLinkProps = {
  icon: string;
  link: string;
};

export function SocialLink({ icon, link }: SocialLinkProps) {
  return (
    <Link href={link}>
      <Image src={icon} alt={icon} />
    </Link>
  );
}
