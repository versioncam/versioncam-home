// The setup prompt on the front page, built from the install lines the
// importer reads from the package's README: the same lines the terminal
// block beside it prints, so the prompt and the terminal can never name
// different commands.

/** "`a`, `b` and `c`": commands as a sentence names them. */
function listed(commands: string[]): string {
	const quoted = commands.map((command) => `\`${command}\``);
	if (quoted.length < 2) return quoted.join('');
	return `${quoted.slice(0, -1).join(', ')} and ${quoted.at(-1)}`;
}

/** Where the reader writes what the first clip should show. */
export const PLACEHOLDER = '<what the clip should show>';

export function setupPrompt(install: string[]): string {
	return [
		'Set up versioncam in this repository and record a first demo clip.',
		`Run ${listed(install)}.`,
		'`init` installs a skill at `.claude/skills/versioncam/`; read its `SKILL.md` and follow it to write, record and review a first clip of:',
		`${PLACEHOLDER}.`,
		'When the clip passes, ask me whether to put it on version.cam, and if I say yes, run `npx versioncam ci` and follow what it prints.',
	].join(' ');
}
