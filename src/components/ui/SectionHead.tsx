import { Headline } from "./Headline";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

/** Cabeçalho de seção: selo em pílula + título com palavra destacada + subtítulo. */
export function SectionHead({ id, eyebrow, title, lead, tone = "light", align = "center" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className={`pill ${dark ? "border-sky/50 text-white" : "border-blue/30 bg-blue/5 text-blue"}`}>{eyebrow}</p>
      <Headline id={id} text={title} className={`section-title mt-5 ${dark ? "text-white" : "text-ink"}`} />
      {lead && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${dark ? "text-white/80" : "text-ink/65"} ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {lead}
        </p>
      )}
    </div>
  );
}
