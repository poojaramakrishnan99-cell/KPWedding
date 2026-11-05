"""Package the static invitation for hosting or opening from an extracted folder."""
from pathlib import Path
import zipfile

repo = Path(__file__).resolve().parents[1]
public = repo / "public"
target = repo / "downloads" / "Kamesh-Preetha-Website.zip"
target.parent.mkdir(exist_ok=True)
with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for file in sorted(public.rglob("*")):
        if not file.is_file():
            continue
        # Keep the original image/font sources in Git, but ship only web assets.
        if file.suffix in {".png", ".ttf"}:
            continue
        contents = file.read_bytes()
        if file.suffix in {".html", ".css", ".js"}:
            text = contents.decode("utf-8")
            if file.name == "index.html":
                text = text.replace('href="/', 'href="./').replace('src="/', 'src="./')
                text = text.replace('<script type="module" src=', '<script defer src=')
            elif file.name == "style.css":
                text = text.replace("url('/cormorant.woff2')", "url('./cormorant.woff2')")
                text = text.replace("url('/manrope.woff2')", "url('./manrope.woff2')")
            elif file.name == "app.js":
                text = text.replace('src="/images/', 'src="./images/')
            if file.suffix in {".html", ".js"}:
                text = text.replace('"/images/', '"./images/').replace(', /images/', ', ./images/')
            contents = text.encode("utf-8")
        archive.writestr(str(Path("Kamesh-Preetha-Website") / file.relative_to(public)), contents)
    archive.writestr("Kamesh-Preetha-Website/READ-ME.txt", """Kamesh & Preetha wedding website

Extract the entire ZIP first, then open index.html in Chrome, Safari or Edge.
Keep all files and the images folder together.

The countdown, event schedules, illustrations and calendar downloads work locally.
Google Maps and Google Calendar links need Internet access.
The full original invitation is included as invitation.pdf.
Sharing requires a public website address.

For a public website link, sign in at https://app.netlify.com/drop and drag
the extracted Kamesh-Preetha-Website folder (containing index.html) onto the page.
""")
with zipfile.ZipFile(target) as archive:
    assert archive.testzip() is None
print(f"Verified {target}: {target.stat().st_size:,} bytes")
