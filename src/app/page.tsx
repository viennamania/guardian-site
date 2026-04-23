import { readFile } from "node:fs/promises";
import path from "node:path";
import Script from "next/script";

async function loadGuardianHomepage() {
  const templatePath = path.join(process.cwd(), "public", "guardian-home.html");
  const html = await readFile(templatePath, "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch?.[1] ?? "";
  const scriptMatches = [...body.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  const script = scriptMatches.map((match) => match[1].trim()).join("\n");
  const markup = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").trim();

  return {
    markup,
    script,
  };
}

export default async function Home() {
  const { markup, script } = await loadGuardianHomepage();

  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />
      {script ? (
        <Script id="guardian-home-interactions" strategy="afterInteractive">
          {script}
        </Script>
      ) : null}
    </>
  );
}
