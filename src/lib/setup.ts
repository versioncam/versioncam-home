// The setup prompt on the front page. From versioncam 0.7.7 the package's
// README writes it out and the importer copies it, so the page, npm and
// GitHub hand an agent the same words (a test in the package keeps the
// prompt and the README's commands in step).
//
// The page builds the prompt itself in two cases, from the install lines the
// importer reads, which are the lines the terminal block prints: for a README
// older than 0.7.7, which has none, and for 0.7.7's, which had a part to
// replace before sending (`<what the clip should show>`). A pasted prompt
// mostly goes out as it is, so that one handed agents a placeholder as the
// clip to record. The page never copies out a prompt with a fill-in.

/** "`a`, `b` and `c`": commands as a sentence names them. */
function listed(commands: string[]): string {
	const quoted = commands.map((command) => `\`${command}\``);
	if (quoted.length < 2) return quoted.join('');
	return `${quoted.slice(0, -1).join(', ')} and ${quoted.at(-1)}`;
}

/** Anything in angle brackets is a part someone was meant to replace. */
const FILL_IN = /<[^>]*>/;

/** The prompt the page shows and copies: the README's own, or one built here. */
export function promptFor(data: { prompt?: string | null; install?: string[] }): string {
	return data.prompt && !FILL_IN.test(data.prompt) ? data.prompt : setupPrompt(data.install ?? []);
}

/** The README's prompt from 0.7.8, word for word, around these install lines. */
export function setupPrompt(install: string[]): string {
	return [
		'Set up versioncam in this repository.',
		`In the app's directory, the one that holds its \`package.json\` or that the app is started from, run ${listed(install)}, and tell me whether each one worked.`,
		'Then ask me what the first demo clip should show, and suggest two or three ideas from what you find in the app.',
		'When I have answered, use the skill that `init` installed to write, record and review that clip: run the versioncam skill if this session has it, otherwise read `.claude/skills/versioncam/SKILL.md`, which `init` wrote, and follow it from start to finish.',
	].join(' ');
}
