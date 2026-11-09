// The setup prompt on the front page. From versioncam 0.7.7 the package's
// README writes it out and the importer copies it, so the page, npm and
// GitHub hand an agent the same words (a test in the package keeps the
// prompt and the README's commands in step). For an older README the page
// builds it here from the install lines the importer reads: the same lines
// the terminal block prints, so the two can never name different commands.

/** "`a`, `b` and `c`": commands as a sentence names them. */
function listed(commands: string[]): string {
	const quoted = commands.map((command) => `\`${command}\``);
	if (quoted.length < 2) return quoted.join('');
	return `${quoted.slice(0, -1).join(', ')} and ${quoted.at(-1)}`;
}

/** Where the reader writes what the first clip should show. */
export const PLACEHOLDER = '<what the clip should show>';

/** The prompt the page shows and copies: the README's own, or one built here. */
export function promptFor(data: { prompt?: string | null; install?: string[] }): string {
	return data.prompt ?? setupPrompt(data.install ?? []);
}

export function setupPrompt(install: string[]): string {
	return [
		'Set up versioncam in this repository and record a first demo clip.',
		`Run ${listed(install)}.`,
		'`init` installs a skill at `.claude/skills/versioncam/`; read its `SKILL.md` and follow it to write, record and review a first clip of:',
		`${PLACEHOLDER}.`,
		'When the clip passes, ask me whether to put it on version.cam, and if I say yes, run `npx versioncam ci` and follow what it prints.',
	].join(' ');
}
