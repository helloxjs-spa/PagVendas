import { Headline } from "./Headline";

type Props = {
  id: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

/** Cabeçalho de seção: título com palavra destacada + subtítulo. */
export function SectionHead({ id, title, lead, tone = "light", align = "center" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Headline id={id} text={title} className={`section-title ${dark ? "text-white" : "text-ink"}`} />
      {lead && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${dark ? "text-white/80" : "text-ink/65"} ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {lead}
        </p>
      )}
    </div>
  );
}
