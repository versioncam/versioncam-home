// Every copy button on the front page: the hero's setup prompt, and in Set up
// the prompt again and the commands. An icon button swaps to a tick and a
// labelled one to its "Copied" label, for 1.6 seconds; the live region beside
// it says so either way, for a screen reader, and says what to do instead
// where the browser blocks the clipboard.
//
// The hero and Set up each call this from their own script, so a page with
// only one of them still works; a button is wired once, whoever calls first.
export function wireCopyButtons(): void {
	for (const button of document.querySelectorAll<HTMLButtonElement>('.vc-copy, .vc-copy-prompt')) {
		if (button.dataset.wired !== undefined) continue;
		button.dataset.wired = '';
		const label = button.querySelector('.vc-copy-label');
		const resting = label?.textContent ?? '';
		button.addEventListener('click', async () => {
			const status = button.closest('.vc-install, .vc-hero-copy')?.querySelector('.vc-copied');
			try {
				await navigator.clipboard.writeText(button.dataset.copy ?? '');
				button.dataset.done = '';
				if (label && button.dataset.doneLabel) label.textContent = button.dataset.doneLabel;
				if (status) status.textContent = 'Copied.';
				setTimeout(() => {
					delete button.dataset.done;
					if (label) label.textContent = resting;
					if (status) status.textContent = '';
				}, 1600);
			} catch {
				if (status) status.textContent = 'Copying is blocked here; select the text instead.';
			}
		});
	}
}
